import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { Commercetools } from '~/lib/commercetools';
import { LocalStorage } from '~/utils';

const authLink = setContext(async (_request, _previousContext) => {
	// 1. Try to get the token from local-storage
	//   a. If a token is found, check if it's expired or not
	//     i. If it's expired, refresh it
	//    ii. If it can't be refreshed, get an anonynous token
	//   b. If the token is not found, get an anonymous token
	// 2. Save the token in local-storage

	let tokenInfo = LocalStorage.get('ct/token-info');
	if (tokenInfo) {
		const now = new Date();
		// Consider the token expired if the expires_at is anything but a number
		const isExpired =
			typeof tokenInfo?.expires_at !== 'number' ||
			tokenInfo?.expires_at < now.getTime();

		if (isExpired) {
			try {
				tokenInfo = await Commercetools.refreshTokenInfo(tokenInfo);
			} catch (_err) {
				console.warn(
					'[authLink]: Failed to refresh the expired token. Getting a new one...',
				);
				tokenInfo = await Commercetools.generateAnonymousTokenInfo();
			}
		}
	} else {
		tokenInfo = await Commercetools.generateAnonymousTokenInfo();
	}

	LocalStorage.set('ct/token-info', tokenInfo);

	return {
		headers: {
			authorization: tokenInfo.token_type + ' ' + tokenInfo.access_token,
		},
	};
});

const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(graphQLError => {
			console.error('[errorLink]:', graphQLError);
			// If we ever get a 401 or a 403 response, remove the token info from the
			// browser and refresh the page
			// @ts-ignore (GraphQLError type doesn't match the actual error object)
			if (graphQLError?.code === 'invalid_token') {
				LocalStorage.remove('ct/token-info');
				window.location.reload();
			}
		});
	}
});

const httpLink = new HttpLink({
	uri:
		process.env.NEXT_PUBLIC_CTP_API_URL +
		'/' +
		process.env.NEXT_PUBLIC_CTP_PROJECT_KEY +
		'/graphql',
});

const client = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache({}),
	connectToDevTools: process.env.NODE_ENV === 'development',
});

export { client };
