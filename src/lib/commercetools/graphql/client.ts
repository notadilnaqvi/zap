import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { Commercetools } from '~/lib/commercetools';
import { LocalStorage } from '~/utils';

const authLink = setContext(async (_request, _previousContext) => {
	// 1. Try to get the token from local-storage
	//   a. If a token is found, check if it's expired and has a
	//			refresh token or not
	//     i. If it's expired and has a refresh token, refresh it
	//    ii. If it can't be refreshed, get an anonynous token
	//   b. If the token is not found, get an anonymous token
	// 2. Save the token in local-storage

	let tokenInfo = LocalStorage.get('ct/token-info');

	if (tokenInfo) {
		const now = new Date();

		const shouldRefresh =
			tokenInfo?.expires_at < now.getTime() && !!tokenInfo?.refresh_token;

		if (shouldRefresh) {
			try {
				tokenInfo = await Commercetools.refreshTokenInfo(tokenInfo);
			} catch (err) {
				console.warn('[authLink]: Failed to refresh the expired token', err);
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
				window?.location?.reload?.();
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

const apolloClient = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache({}),
	connectToDevTools: process.env.NODE_ENV === 'development',
	ssrMode: typeof window === 'undefined',
});

export { apolloClient };
