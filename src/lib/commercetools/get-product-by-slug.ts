import { gql } from '@apollo/client';

import { Apollo } from '~/lib/apollo';

interface Props {
	slug: Scalars['String'];
}

const GET_PRODUCT_BY_SLUG = gql`
	query getProductBySlug(
		$locale: Locale!
		$limit: Int! = 5
		$offset: Int! = 0
		$priceSelector: PriceSelectorInput!
		$sorts: [String!] = []
		$filters: [SearchFilterInput!] = []
		$text: String = ""
	) {
		productProjectionSearch(
			locale: $locale
			text: $text
			limit: $limit
			offset: $offset
			sorts: $sorts
			priceSelector: $priceSelector
			filters: $filters
		) {
			total
			results {
				id
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
					scopedPrice {
						value {
							currencyCode
							centAmount
							fractionDigits
						}
						discounted {
							discount {
								name(locale: $locale)
							}
							value {
								currencyCode
								centAmount
								fractionDigits
							}
						}
						country
					}
				}
				masterVariant {
					id
					sku
					images {
						url
					}
					attributesRaw {
						name
						value
					}
					scopedPrice {
						value {
							currencyCode
							centAmount
							fractionDigits
						}
						discounted {
							discount {
								name(locale: $locale)
							}
							value {
								currencyCode
								centAmount
								fractionDigits
							}
						}
						country
					}
				}
			}
		}
	}
`;

export async function getProductBySlug({ slug }: Props) {
	const { data, loading, error } = await Apollo.client.query({
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
