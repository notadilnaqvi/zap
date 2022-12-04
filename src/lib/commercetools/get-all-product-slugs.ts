import { gql } from '@apollo/client';
import type { Product } from 'src/types/commercetools';

import { Apollo } from '~/lib/apollo';

const GET_ALL_PRODUCT_SLUGS = gql`
	query getAllProductSlugs {
		products(limit: 50) {
			results {
				masterData {
					current {
						slug(locale: "en")
					}
				}
			}
		}
	}
`;

export async function getAllProductSlugs() {
	const { data, loading, error } = await Apollo.client.query<{
		products: { results: Product[] };
	}>({
		query: GET_ALL_PRODUCT_SLUGS,
	});

	const slugs = data.products.results
		?.map?.(product => product?.masterData?.current?.slug)
		.filter(slug => slug);

	return { data: { slugs }, loading, error };
}
