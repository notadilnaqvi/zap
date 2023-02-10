import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';

import { apolloClient } from '~/lib/commercetools/graphql/client';
import {
	GET_PRODUCTS,
	GET_PRODUCT_SLUGS,
} from '~/lib/commercetools/graphql/queries';
import { normaliseProduct } from '~/lib/commercetools/normalisation';
import { Constants } from '~/utils';

import type {
	CtTokenInfo,
	CustomerSignMeInDraft,
	GetProductSlugsQuery,
	GetProductSlugsQueryVariables,
	GetProductsQuery,
	GetProductsQueryVariables,
	NormalisedProduct,
} from '~/lib/commercetools/types';

const PRODUCTS_LIMIT = 20;

const sdkAuth = new SdkAuth({
	host: process.env.NEXT_PUBLIC_CTP_AUTH_URL,
	projectKey: process.env.NEXT_PUBLIC_CTP_PROJECT_KEY,
	credentials: {
		clientId: process.env.NEXT_PUBLIC_CTP_CLIENT_ID,
		clientSecret: process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET,
	},
	scopes: process.env.NEXT_PUBLIC_CTP_SCOPES.split(' '),
});

async function generateAnonymousTokenInfo(): Promise<CtTokenInfo> {
	const tokenFlow = await sdkAuth.anonymousFlow();
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const tokenInfo = await tokenProvider.getTokenInfo();
	return tokenInfo;
}

async function generateCustomerTokenInfo(
	props: Pick<CustomerSignMeInDraft, 'email' | 'password'>,
): Promise<CtTokenInfo> {
	const { email, password } = props;
	const tokenFlow = await sdkAuth.customerPasswordFlow({
		username: email,
		password,
	});
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

async function getProducts() {
	const { data, loading, error } = await apolloClient.query<
		GetProductsQuery,
		GetProductsQueryVariables
	>({
		query: GET_PRODUCTS,
		variables: {
			sorts: null,
			filters: [
				{
					model: {
						range: {
							path: 'variants.scopedPrice.value.centAmount',
							ranges: [
								{
									from: '0',
									to: '1000000000000',
								},
							],
						},
					},
				},
			],
			text: '',
			locale: Constants.LOCALE,
			// +20 just so have some products that are not staticaly generated and we can test ISR
			limit: PRODUCTS_LIMIT + 20,
			offset: 0,
			priceSelector: {
				currency: Constants.CURRENCY_CODE,
				country: Constants.COUNTRY,
				channel: null,
				customerGroup: null,
			},
		},
	});
	const products = data.productProjectionSearch.results
		.map(result => normaliseProduct({ product: result }))
		.filter((product): product is NormalisedProduct => !!product);

	return { data: { products }, loading, error };
}

async function getProductBySlug({ slug }: { slug: string }) {
	const { data, loading, error } = await apolloClient.query<
		GetProductsQuery,
		GetProductsQueryVariables
	>({
		query: GET_PRODUCTS,
		variables: {
			sorts: null,
			filters: [
				{
					model: {
						value: {
							path: 'slug.' + Constants.LOCALE,
							values: [slug],
						},
					},
				},
			],
			locale: Constants.LOCALE,
			limit: 1,
			offset: 0,
			priceSelector: {
				currency: Constants.CURRENCY_CODE,
				country: Constants.COUNTRY,
				channel: null,
				customerGroup: null,
			},
		},
	});

	const normalisedProduct = normaliseProduct({
		product: data.productProjectionSearch?.results?.at?.(0),
	});
	return { data: normalisedProduct, loading, error };
}

async function getProductSlugs() {
	const { data, loading, error } = await apolloClient.query<
		GetProductSlugsQuery,
		GetProductSlugsQueryVariables
	>({
		query: GET_PRODUCT_SLUGS,
		variables: {
			sorts: null,
			filters: [
				{
					model: {
						range: {
							path: 'variants.scopedPrice.value.centAmount',
							ranges: [
								{
									from: '0',
									to: '1000000000000',
								},
							],
						},
					},
				},
			],
			text: '',
			locale: Constants.LOCALE,
			limit: PRODUCTS_LIMIT,
			offset: 0,
			priceSelector: {
				currency: Constants.CURRENCY_CODE,
				country: Constants.COUNTRY,
				channel: null,
				customerGroup: null,
			},
		},
	});

	const slugs = data.productProjectionSearch.results
		.map(result => result.slug)
		.filter((slug): slug is string => !!slug);

	return { data: { slugs }, loading, error };
}

export const Commercetools = {
	generateAnonymousTokenInfo,
	generateCustomerTokenInfo,
	refreshTokenInfo,
	getProductSlugs,
	getProducts,
	getProductBySlug,
};
