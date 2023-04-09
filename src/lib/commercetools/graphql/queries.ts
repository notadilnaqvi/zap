import { gql } from '@apollo/client';

export const GET_PRODUCT_SLUGS = gql`
	query getProductSlugs(
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
			results {
				slug(locale: $locale)
			}
		}
	}
`;

export const GET_PRODUCTS = gql`
	query getProducts(
		$locale: Locale!
		$limit: Int!
		$offset: Int!
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
				description(locale: $locale)
				masterVariant {
					variantId: id
					sku
					images {
						url
						label
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

export const GET_CART = gql`
	query getCart($locale: Locale!) {
		me {
			cart: activeCart {
				id
				version
				totalLineItemQuantity
				lineItems {
					productId
					id
					name(locale: $locale)
					quantity
					totalPrice {
						currencyCode
						centAmount
						fractionDigits
					}
				}
				totalPrice {
					currencyCode
					centAmount
					fractionDigits
				}
			}
		}
	}
`;
