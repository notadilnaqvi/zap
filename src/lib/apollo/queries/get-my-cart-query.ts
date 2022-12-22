import { gql } from '@apollo/client';

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
