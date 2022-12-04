import { gql } from '@apollo/client';

import { Apollo } from '~/lib/apollo';

interface Props {
	locale: Scalars['Locale'];
}

const GET_ALL_PRODUCTS = gql`
	query products($locale: Locale!, $limit: Int! = 20) {
		products(limit: $limit) {
			__typename
			total
			results {
				__typename
				id
				masterData {
					__typename
					current {
						name(locale: $locale)
						slug(locale: $locale)
						variants {
							id
							sku
							images {
								url
							}
							attributesRaw {
								name
								value
							}
						}
						masterVariant {
							__typename
							prices {
								value {
									centAmount
								}
							}
							sku
							images {
								url
							}
							attributesRaw {
								name
								value
							}
						}
					}
				}
			}
		}
	}
`;

export async function getAllProducts({ locale }: Props) {
	const { data, loading, error } = await Apollo.client.query({
		query: GET_ALL_PRODUCTS,
		variables: {
			locale,
			limit: 12,
		},
	});
	return { data, loading, error };
}
