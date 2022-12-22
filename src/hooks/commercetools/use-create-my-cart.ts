import { useMutation } from '@apollo/client';

import { CREATE_MY_CART } from '~/lib/apollo/mutations';
import { GET_MY_CART } from '~/lib/apollo/queries';
import { Cart, MutationCreateMyCartArgs } from '~/types/commercetools';

type CreateMyCartData = {
	createMyCart: Pick<Cart, 'id' | 'version'>;
};

export function useCreateMyCart() {
	const [mutate, { data, loading, error }] = useMutation<
		CreateMyCartData,
		MutationCreateMyCartArgs
	>(CREATE_MY_CART);

	async function createMyCart(props: MutationCreateMyCartArgs) {
		const { draft, storeKey } = props;
		const result = await mutate({
			variables: { draft, storeKey },
			refetchQueries: [{ query: GET_MY_CART }],
		});
		return result;
	}

	return [createMyCart, { data, loading, error }] as const;
}
