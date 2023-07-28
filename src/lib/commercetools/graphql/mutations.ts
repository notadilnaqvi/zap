import { getTypedDocumentNode } from '~/lib/commercetools/graphql/__generated__';

export const CREATE_CART = getTypedDocumentNode(/* GraphQL */ `
	mutation createCart($draft: MyCartDraft!, $locale: Locale!) {
		cart: createMyCart(draft: $draft) {
			...CartFragment
		}
	}
`);

export const UPDATE_CART = getTypedDocumentNode(/* GraphQL */ `
	mutation updateCart(
		$actions: [MyCartUpdateAction!]!
		$version: Long!
		$id: String!
		$locale: Locale!
	) {
		cart: updateMyCart(actions: $actions, version: $version, id: $id) {
			...CartFragment
		}
	}
`);

export const CUSTOMER_SIGN_UP = getTypedDocumentNode(/* GraphQL */ `
	mutation customerSignUp($draft: CustomerSignMeUpDraft!) {
		customerSignMeUp(draft: $draft) {
			customer {
				...CustomerFragment
			}
		}
	}
`);

export const CUSTOMER_LOGIN = getTypedDocumentNode(/* GraphQL */ `
	mutation customerLogin($draft: CustomerSignMeInDraft!) {
		customerSignMeIn(draft: $draft) {
			customer {
				...CustomerFragment
			}
		}
	}
`);
