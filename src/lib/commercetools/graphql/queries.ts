import { getTypedDocumentNode } from '~/lib/commercetools/graphql/__generated__';

export const GET_PRODUCT_SLUGS = getTypedDocumentNode(/* GraphQL */ `
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
`);

export const GET_PRODUCTS = getTypedDocumentNode(/* GraphQL */ `
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
				...ProductProjectionFragment
			}
		}
	}
`);

export const GET_CART = getTypedDocumentNode(/* GraphQL */ `
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
					productSlug(locale: $locale)
					variant {
						sku
						images {
							url
							label
						}
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
`);

export const GET_CUSTOMER = getTypedDocumentNode(/* GraphQL */ `
	query getCustomer {
		me {
			customer {
				id
				version
				firstName
				lastName
				email
				createdAt
				custom {
					customFieldsRaw {
						name
						value
					}
				}
			}
		}
	}
`);
