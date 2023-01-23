import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
	query getAllProducts($locale: Locale!, $limit: Int! = 20) {
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
								label
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
								label
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

export const GET_ALL_PRODUCT_SLUGS = gql`
	query getAllProductSlugs {
		products(limit: 500) {
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

export const GET_PRODUCT_BY_SLUG = gql`
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
				description(locale: $locale)
				variants {
					id
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
				masterVariant {
					id
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

export const GET_MY_CART = gql`
	query getMyCart {
		me {
			activeCart {
				id
				version
				totalLineItemQuantity
				lineItems {
					productId
					id
					name(locale: "en")
					quantity
					totalPrice {
						centAmount
					}
				}
				totalPrice {
					centAmount
				}
			}
		}
	}
`;
