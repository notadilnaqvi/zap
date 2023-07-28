import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';

import {
	GET_PRODUCTS,
	GET_PRODUCT_SLUGS,
} from '~/lib/commercetools/graphql/queries';
import { apolloServerSideClient } from '~/lib/commercetools/graphql/server-side-client';
import { normaliseProduct } from '~/lib/commercetools/normalisation';

import type {
	AuthToken,
	CustomerSignMeInDraft,
	GetProductSlugsQuery,
	GetProductSlugsQueryVariables,
	GetProductsQuery,
	GetProductsQueryVariables,
	NormalisedProduct,
} from '~/lib/commercetools/types';
import {
	COMMERCETOOLS_MAX_LIMIT,
	COMMERCETOOLS_MIN_LIMIT,
	COUNTRY,
	CURRENCY_CODE,
	LOCALE,
} from '~/utils/constants';

type GerProductsProps = {
	/**
	 * Number of products to be returned. Should be within 1-500
	 * Defaults to 1 or 500 if value provided goes beyond allowed range
	 */
	limit: number;
};

type GerProductSlugsProps = {
	/**
	 * Number of products to be returned. Should be within 1-500
	 * Defaults to 1 or 500 if value provided goes beyond allowed range
	 */
	limit: number;
};

const sdkAuth = new SdkAuth({
	host: process.env.NEXT_PUBLIC_CTP_AUTH_URL,
	projectKey: process.env.NEXT_PUBLIC_CTP_PROJECT_KEY,
	credentials: {
		clientId: process.env.NEXT_PUBLIC_CTP_CLIENT_ID,
		clientSecret: process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET,
	},
	scopes: process.env.NEXT_PUBLIC_CTP_SCOPES.split(' '),
});

export async function generateAnonymousAuthToken(): Promise<AuthToken> {
	const tokenFlow = await sdkAuth.anonymousFlow();
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const authToken = await tokenProvider.getTokenInfo();
	return authToken;
}

export async function generateCustomerAuthToken(
	props: Pick<CustomerSignMeInDraft, 'email' | 'password'>,
): Promise<AuthToken> {
	const { email, password } = props;
	const tokenFlow = await sdkAuth.customerPasswordFlow({
		username: email,
		password,
	});
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const authToken = await tokenProvider.getTokenInfo();
	// `is_logged_in` is a custom field not returned by `getTokenInfo()`. We
	// add it manually to track the login status of the user
	authToken.is_logged_in = true;
	return authToken;
}

export async function refreshAuthToken(
	expiredAuthToken: AuthToken,
): Promise<AuthToken> {
	const tokenProvider = new TokenProvider({ sdkAuth }, expiredAuthToken);
	const authToken = await tokenProvider.getTokenInfo();
	// `is_logged_in` is a custom field not returned by `getTokenInfo()`. We
	// add it back manually and make sure that the login status of the user
	// is prevserved
	authToken.is_logged_in = expiredAuthToken.is_logged_in;
	return authToken;
}

export async function generateClientAuthToken(): Promise<AuthToken> {
	const tokenFlow = await sdkAuth.clientCredentialsFlow();
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const authToken = await tokenProvider.getTokenInfo();
	return authToken;
}

export async function getProducts(props: GerProductsProps) {
	let { limit } = props;

	// Restrict limit to be within 1-500
	limit = Math.min(
		Math.max(limit, COMMERCETOOLS_MIN_LIMIT),
		COMMERCETOOLS_MAX_LIMIT,
	);

	const { data, loading, error } = await apolloServerSideClient.query<
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
			locale: LOCALE,
			limit: limit,
			offset: 0,
			priceSelector: {
				currency: CURRENCY_CODE,
				country: COUNTRY,
				channel: null,
				customerGroup: null,
			},
		},
	});
	const products = data.productProjectionSearch.results
		.map(result => normaliseProduct(result))
		.filter(
			(normalisedProduct): normalisedProduct is NormalisedProduct =>
				!!normalisedProduct,
		);

	return { data: { products }, loading, error };
}

export async function getProductBySlug({ slug }: { slug: string }) {
	const { data, loading, error } = await apolloServerSideClient.query<
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
							path: 'slug.' + LOCALE,
							values: [slug],
						},
					},
				},
			],
			locale: LOCALE,
			limit: 1,
			offset: 0,
			priceSelector: {
				currency: CURRENCY_CODE,
				country: COUNTRY,
				channel: null,
				customerGroup: null,
			},
		},
	});

	const normalisedProduct = normaliseProduct(
		data.productProjectionSearch?.results?.[0],
	);
	return { data: normalisedProduct, loading, error };
}

export async function getProductSlugs(props: GerProductSlugsProps) {
	let { limit } = props;

	// Restrict limit to be within 1-500
	limit = Math.min(Math.max(limit, 1), COMMERCETOOLS_MAX_LIMIT);

	const { data, loading, error } = await apolloServerSideClient.query<
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
			locale: LOCALE,
			limit: limit,
			offset: 0,
			priceSelector: {
				currency: CURRENCY_CODE,
				country: COUNTRY,
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
