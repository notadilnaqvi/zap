import { gql } from '@apollo/client';

export const CREATE_MY_CART = gql`
	mutation createMyCart($draft: MyCartDraft!) {
		createMyCart(draft: $draft) {
			id
			version
		}
	}
`;
