import { gql } from '@apollo/client';

export const CREATE_CART = gql`
	mutation createCart($draft: MyCartDraft!, $locale: Locale!) {
		cart: createMyCart(draft: $draft) {
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
	}
`;

export const UPDATE_CART = gql`
	mutation updateCart(
		$actions: [MyCartUpdateAction!]!
		$version: Long!
		$id: String!
		$locale: Locale!
	) {
		cart: updateMyCart(actions: $actions, version: $version, id: $id) {
			id
			version
			totalLineItemQuantity
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
	}
`;

export const CUSTOMER_SIGN_UP = gql`
	mutation customerSignUp($draft: CustomerSignMeUpDraft!) {
		customerSignMeUp(draft: $draft) {
			customer {
				id
				version
				firstName
				lastName
				email
				createdAt
			}
		}
	}
`;

export const CUSTOMER_LOGIN = gql`
	mutation customerLogin($draft: CustomerSignMeInDraft!) {
		customerSignMeIn(draft: $draft) {
			customer {
				id
				version
				firstName
				lastName
				email
				createdAt
			}
		}
	}
`;
