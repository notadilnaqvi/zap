import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import {
	generateAnonymousAuthToken,
	refreshAuthToken,
} from '~/lib/commercetools';
import { LocalStorage } from '~/utils';

const authLink = setContext(async (_request, _previousContext) => {
	// 1. Try to get the token from local-storage
	//   a. If a token is found, check if it's expired and has a
	//			refresh token or not
	//     i. If it's expired and has a refresh token, refresh it
	//    ii. If it can't be refreshed, get an anonynous token
	//   b. If the token is not found, get an anonymous token
	// 2. Save the token in local-storage

	let authToken = LocalStorage.get('ct/auth-token');

	if (authToken) {
		const now = new Date();

		const shouldRefresh =
			authToken?.expires_at < now.getTime() && !!authToken?.refresh_token;

		if (shouldRefresh) {
			try {
				authToken = await refreshAuthToken(authToken);
			} catch (err) {
				console.warn('[authLink]: Failed to refresh the expired token', err);
				authToken = await generateAnonymousAuthToken();
			}
		}
	} else {
		authToken = await generateAnonymousAuthToken();
	}

	LocalStorage.set('ct/auth-token', authToken);

	return {
		headers: {
			authorization: authToken.token_type + ' ' + authToken.access_token,
		},
	};
});

const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(graphQLError => {
			console.error('[errorLink]:', graphQLError);
			// If we ever get a 401 or a 403 response, remove the auth token from the
			// browser and refresh the page
			// @ts-ignore (GraphQLError type doesn't match the actual error object)
			if (graphQLError?.code === 'invalid_token') {
				LocalStorage.remove('ct/auth-token');
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

/**
 * This Apollo client is meant to be used on the browser (instead of the server).
 *
 * This client is used by `ApolloProvider` in `DefaultLayout.tsx`. Hooks like
 * `useCart`, `useCustomer`, `useLogin` etc. use this client.
 *
 * If you're doing server-side operations, please use `serverSideApolloClient`
 * instead.
 *
 * USAGE: If you want to interact with Commercetools on the browser, simply
 * create an appropriate hook and use it. For example, if you want to fetch
 * a product on the browser, create a hook `useGetProductBySlug` and use it
 * in your component. See `useCart` and `useCreateCart` for reference.
 *
 * It is generally discouraged to use non-hook techniques to interact with
 * Commercetools from the browser so prevent doing things like, `apolloClient
 * .query` or `apolloClient.mutate` and instead create hooks using `useQuery`
 * and `useMutation` instead.
 */
const apolloClient = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache({}),
	connectToDevTools: process.env.NODE_ENV === 'development',
});

export { apolloClient };
