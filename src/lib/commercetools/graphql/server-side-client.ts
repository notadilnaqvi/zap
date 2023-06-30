import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { generateClientAuthToken } from '~/lib/commercetools';

import type { AuthToken } from '~/lib/commercetools/types';

let authToken: Maybe<AuthToken> = null;

const authLink = setContext(async (_request, _previousContext) => {
	const now = new Date();
	const isExpired = authToken && authToken.expires_at < now.getTime();

	// If there's no token or it's expired, generate a new one
	if (!authToken || isExpired) {
		authToken = await generateClientAuthToken();
	}

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
 * This Apollo client is meant to be used on the server.
 *
 * If you're doing browser-side operations, please use `apolloClient`
 * instead.
 *
 * See `getProductBySlug` and `getProductSlugs` for reference.
 */
const apolloServerSideClient = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache({}),
	ssrMode: true,
});

export { apolloServerSideClient };
