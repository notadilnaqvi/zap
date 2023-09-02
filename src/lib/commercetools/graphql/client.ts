import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import {
	generateAnonymousAuthToken,
	refreshAuthToken,
} from '~/lib/commercetools/auth';
import { Cookie } from '~/utils';
import { AUTH_TOKEN_EXPIRY_DAYS } from '~/utils/constants';

const authLink = setContext(async (_request, _previousContext) => {
	// 1. Try to get the token from cookies
	//   a. If a token is found, check if it's expired and has a
	//			refresh token or not
	//     i. If it's expired and has a refresh token, refresh it
	//    ii. If it can't be refreshed, get an anonynous token
	//   b. If the token is not found, get an anonymous token
	// 2. Save the token in cookies

	let authToken = Cookie.get('zap_auth_token');

	if (authToken) {
		const now = new Date();

		const shouldRefresh = authToken?.expires_at < now.getTime();

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

	Cookie.set('zap_auth_token', authToken, { expires: AUTH_TOKEN_EXPIRY_DAYS });

	return {
		headers: {
			authorization: authToken.token_type + ' ' + authToken.access_token,
		},
	};
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
	// We get an array of errors from the API. We only consider the first error
	// for now because handling multiple errors in the same API call can cause
	// unwanted side-effects
	const graphQLError = graphQLErrors?.[0];

	if (!graphQLError) return;

	const errorCode = graphQLError.extensions['code'];

	if (errorCode === 'invalid_token') {
		// If we ever get a 401 or a 403 response, remove the auth token from the
		// browser and refresh the page
		console.warn(
			'[errorLink]: Got an invalid token error. Removing the token and refreshing the page',
			{ error: graphQLError },
		);
		Cookie.remove('zap_auth_token');
		window.location.reload();
	} else if (errorCode === 'ConcurrentModification') {
		// If we get a version mismatch error, update the API request with the
		// correct version retry
		const correctVersion = graphQLError.extensions?.['currentVersion'];
		operation.variables['version'] = correctVersion;
		console.warn(
			'[errorLink]: Found a version mismatch. Retrying the request',
			{ error: graphQLError },
		);
		return forward(operation).map(response => {
			return response;
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
 * Commercetools from the browser so avoid doing things like, `apolloClient
 * .query` or `apolloClient.mutate` and instead create hooks using `useQuery`
 * and `useMutation`.
 */
const apolloClient = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache({
		typePolicies: {
			// This makes it so `activeCart` and `customer` don't cause conflicts
			// and replace the entire `me` object in cache when they're fetched
			// DOCS: https://www.apollographql.com/docs/react/caching/cache-field-behavior/#merging-non-normalized-objects
			Me: {
				merge(existing, incoming, { mergeObjects }) {
					return mergeObjects(existing, incoming);
				},
			},
		},
	}),
	connectToDevTools: true,
});

export { apolloClient };
