import { gql } from '@apollo/client';

export const CREATE_CART = gql`
	mutation createCart($draft: MyCartDraft!, $locale: Locale!) {
		createMyCart(draft: $draft) {
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
		updateMyCart(actions: $actions, version: $version, id: $id) {
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
			}
			totalPrice {
				centAmount
				currencyCode
				fractionDigits
			}
		}
	}
`;
