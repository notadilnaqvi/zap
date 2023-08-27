/* eslint-disable @typescript-eslint/no-unused-vars */

import { getTypedDocumentNode } from '~/lib/commercetools/graphql/__generated__';

// Usually we'd include the fragment in the query or mutation as a literal
// before actually using it in the query or mutation. However, we do not
// need to do this when using `graphql-codegen`, as it will automatically
// include the fragment in the query or mutation. In fact, there no need
// to even export the fragments from this file as long as we've provided
// this file as a document in `graphql-codegen.config.ts`

const CART_FRAGMENT = getTypedDocumentNode(/* GraphQL */ `
	fragment CartFragment on Cart {
		id
		version
		totalLineItemQuantity
		shippingAddress {
			country
		}
		lineItems {
			productId
			id
			name(locale: $locale)
			quantity
			totalPrice {
				centAmount
				currencyCode
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
			centAmount
			currencyCode
			fractionDigits
		}
	}
`);

const CUSTOMER_FRAGMENT = getTypedDocumentNode(/* GraphQL */ `
	fragment CustomerFragment on Customer {
		id
		version
		firstName
		lastName
		email
		createdAt
		isEmailVerified
		custom {
			customFieldsRaw {
				name
				value
			}
		}
	}
`);

const PRODUCT_PROJECTION_FRAGMENT = getTypedDocumentNode(/* GraphQL */ `
	fragment ProductProjectionFragment on ProductProjection {
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
`);
