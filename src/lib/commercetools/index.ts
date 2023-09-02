import 'server-only';

import { print as typedDocumentNodeToString } from 'graphql';
import { commercetoolsFetch } from '~/lib/commercetools/commercetools-fetch';

import {
	GET_PRODUCTS,
	GET_PRODUCT_SLUGS,
} from '~/lib/commercetools/graphql/queries';
import { normaliseProduct } from '~/lib/commercetools/normalisation';

import type {
	GetProductSlugsQuery,
	GetProductSlugsQueryVariables,
	GetProductsQuery,
	GetProductsQueryVariables,
	NormalisedProduct,
} from '~/lib/commercetools/types';
import {
	COMMERCETOOLS_MAX_LIMIT,
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

const commercetoolsGraphqlUrl = new URL(
	process.env.CTP_API_URL + '/' + process.env.CTP_PROJECT_KEY + '/graphql',
);

export async function getProducts(props: GerProductsProps) {
	let { limit } = props;

	// Restrict limit to be within 1-500
	limit = Math.min(Math.max(limit, 1), COMMERCETOOLS_MAX_LIMIT);

	const variables: GetProductsQueryVariables = {
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
	};

	const response = await commercetoolsFetch<{
		data: GetProductsQuery;
	}>(commercetoolsGraphqlUrl, {
		method: 'POST',
		body: JSON.stringify({
			query: typedDocumentNodeToString(GET_PRODUCTS),
			variables,
		}),
	});

	const products = response.data.productProjectionSearch.results
		.map(result => normaliseProduct(result))
		.filter(
			(normalisedProduct): normalisedProduct is NormalisedProduct =>
				!!normalisedProduct,
		);

	return products;
}

export async function getProductBySlug(slug: string) {
	const variables: GetProductsQueryVariables = {
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
	};

	const response = await commercetoolsFetch<{
		data: GetProductsQuery;
	}>(commercetoolsGraphqlUrl, {
		method: 'POST',
		body: JSON.stringify({
			query: typedDocumentNodeToString(GET_PRODUCTS),
			variables,
		}),
	});

	const product = normaliseProduct(
		response.data.productProjectionSearch?.results?.[0],
	);
	return product;
}

export async function getProductSlugs(props: GerProductSlugsProps) {
	let { limit } = props;

	// Restrict limit to be within 1-500
	limit = Math.min(Math.max(limit, 1), COMMERCETOOLS_MAX_LIMIT);

	const variables: GetProductSlugsQueryVariables = {
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
	};

	const response = await commercetoolsFetch<{
		data: GetProductSlugsQuery;
	}>(commercetoolsGraphqlUrl, {
		method: 'POST',
		body: JSON.stringify({
			query: typedDocumentNodeToString(GET_PRODUCT_SLUGS),
			variables,
		}),
	});

	const slugs = response.data.productProjectionSearch.results
		.map(result => result.slug)
		.filter((slug): slug is string => !!slug);

	return slugs;
}
