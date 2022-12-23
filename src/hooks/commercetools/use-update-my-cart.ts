import { useMutation } from '@apollo/client';

import { useGetMyCart } from '~/hooks/commercetools';
import { UPDATE_MY_CART } from '~/lib/apollo/mutations';
import { GET_MY_CART } from '~/lib/apollo/queries';

import type { Cart, MutationUpdateCartArgs } from '~/types/commercetools';
import { useCreateMyCart } from './use-create-my-cart';

export function useUpdateMyCart() {
	const { data: myCart, loading: myCartLoading } = useGetMyCart();
	const [createMyCart, { loading: createMyCartLoading }] = useCreateMyCart();
	const [mutate, { data, loading: updateMyCartLoading, error }] = useMutation<
		{ updateMyCart: Cart },
		MutationUpdateCartArgs
	>(UPDATE_MY_CART);

	async function updateMyCart(props: Pick<MutationUpdateCartArgs, 'actions'>) {
		const { actions } = props;

		let id = myCart?.me.activeCart?.id;
		let version = myCart?.me.activeCart?.version;

		if (!id || !version) {
			const { data: createMyCartData } = await createMyCart({
				draft: { currency: 'EUR', shippingAddress: { country: 'DE' } },
			});
			id = createMyCartData?.createMyCart?.id;
			version = createMyCartData?.createMyCart?.version;
		}

		if (!id || !version) {
			throw new Error('[updateMyCart]: No cart found to update');
		}

		await mutate({
			variables: { id, version, actions },
			refetchQueries: [{ query: GET_MY_CART }],
		});
	}

	return [
		updateMyCart,
		{
			data,
			// Using the `loading` property from the `useMutation` hook is not enough
			// because it not be `true` until we call the `mutate` function. Meaning
			// that we can't use it to show a loading state while we're waiting for
			// the cart to be fetched or `createMyCart` mutation to finish. Instead,
			// we say that `updateMyCart` is loading if any of the three operations
			// (useGetMyCart, useCreateMyCart, useMutation) are loading.
			loading: myCartLoading || createMyCartLoading || updateMyCartLoading,
			error,
		},
	] as const;
}
