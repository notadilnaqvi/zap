import { gql } from '@apollo/client';

export const CREATE_MY_CART = gql`
	mutation createMyCart($draft: MyCartDraft!) {
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
				name(locale: "en")
				quantity
				totalPrice {
					centAmount
					currencyCode
				}
			}
			totalPrice {
				centAmount
				currencyCode
			}
		}
	}
`;

export const UPDATE_MY_CART = gql`
	mutation updateMyCart(
		$actions: [MyCartUpdateAction!]!
		$version: Long!
		$id: String!
	) {
		updateMyCart(actions: $actions, version: $version, id: $id) {
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
					currencyCode
				}
			}
			totalPrice {
				centAmount
				currencyCode
			}
		}
	}
`;
