import { gql } from '@apollo/client';

export const UPDATE_MY_CART = gql`
	mutation updateMyCart(
		$actions: [MyCartUpdateAction!]!
		$version: Long!
		$id: String!
	) {
		updateMyCart(actions: $actions, version: $version, id: $id) {
			id
			version
		}
	}
`;
