import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';

import { apolloClient } from '~/lib/commercetools/graphql/client';
import {
	GET_ALL_PRODUCTS,
	GET_ALL_PRODUCT_SLUGS,
	GET_PRODUCT_BY_SLUG,
} from '~/lib/commercetools/graphql/queries';

import type {
	CtTokenInfo,
	GetAllProductSlugsQuery,
	GetAllProductSlugsQueryVariables,
	GetAllProductsQuery,
	GetAllProductsQueryVariables,
	GetProductBySlugQuery,
	GetProductBySlugQueryVariables,
} from '~/lib/commercetools/types';

interface CustomerCredentials {
	username: Maybe<Scalars['String']>;
	password: Scalars['String'];
}

const sdkAuth = new SdkAuth({
	host: process.env.NEXT_PUBLIC_CTP_AUTH_URL,
	projectKey: process.env.NEXT_PUBLIC_CTP_PROJECT_KEY,
	credentials: {
		clientId: process.env.NEXT_PUBLIC_CTP_CLIENT_ID,
		clientSecret: process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET,
	},
	scopes: process.env.NEXT_PUBLIC_CTP_SCOPES?.split(' '),
});

async function generateAnonymousTokenInfo(): Promise<CtTokenInfo> {
	const tokenFlow = await sdkAuth.anonymousFlow();
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const tokenInfo = await tokenProvider.getTokenInfo();
	return tokenInfo;
}

async function generateCustomerTokenInfo({
	username,
	password,
}: CustomerCredentials): Promise<CtTokenInfo> {
	const tokenFlow = await sdkAuth.customerPasswordFlow({ username, password });
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const tokenInfo = await tokenProvider.getTokenInfo();
	return tokenInfo;
}

async function refreshTokenInfo(
	expiredTokenInfo: CtTokenInfo,
): Promise<CtTokenInfo> {
	const tokenProvider = new TokenProvider({ sdkAuth }, expiredTokenInfo);
	const tokenInfo = await tokenProvider.getTokenInfo();
	return tokenInfo;
}

async function getAllProducts({ locale }: { locale: string }) {
	const { data, loading, error } = await apolloClient.query<
		GetAllProductsQuery,
		GetAllProductsQueryVariables
	>({
		query: GET_ALL_PRODUCTS,
		variables: {
			locale,
			limit: 500,
		},
	});
	return { data, loading, error };
}

async function getProductBySlug({ slug }: { slug: string }) {
	const { data, loading, error } = await apolloClient.query<
		GetProductBySlugQuery,
		GetProductBySlugQueryVariables
	>({
		query: GET_PRODUCT_BY_SLUG,
		variables: {
			sorts: null,
			filters: [
				{
					model: {
						value: {
							path: 'slug.en',
							values: [slug],
						},
					},
				},
			],
			locale: 'en',
			limit: 5,
			offset: 0,
			priceSelector: {
				currency: 'EUR',
				country: 'DE',
				channel: null,
				customerGroup: null,
			},
		},
	});
	return { data, loading, error };
}

async function getAllProductSlugs() {
	const { data, loading, error } = await apolloClient.query<
		GetAllProductSlugsQuery,
		GetAllProductSlugsQueryVariables
	>({
		query: GET_ALL_PRODUCT_SLUGS,
	});

	const slugs = data.products.results
		?.map?.(product => product?.masterData?.current?.slug)
		.filter(slug => slug);

	return { data: { slugs }, loading, error };
}

export const Commercetools = {
	generateAnonymousTokenInfo,
	generateCustomerTokenInfo,
	refreshTokenInfo,
	getAllProductSlugs,
	getAllProducts,
	getProductBySlug,
};
