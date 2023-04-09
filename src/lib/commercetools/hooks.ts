import { useMutation, useQuery } from '@apollo/client';

import {
	CREATE_CART,
	UPDATE_CART,
} from '~/lib/commercetools/graphql/mutations';
import { GET_CART } from '~/lib/commercetools/graphql/queries';
import {
	CreateCartMutation,
	CreateCartMutationVariables,
	GetCartQuery,
	GetCartQueryVariables,
	UpdateCartMutation,
	UpdateCartMutationVariables,
} from '~/lib/commercetools/types';
import { COUNTRY, CURRENCY_CODE, LOCALE } from '~/utils/constants';

export function useAddToCart() {
	const [updateCart, { data, loading, error }] = useUpdateCart();

	async function addToCart(props: { sku: string }) {
		const { sku } = props;

		await updateCart({
			actions: [{ addLineItem: { sku, quantity: 1 } }],
		});
	}

	return [addToCart, { data, loading, error }] as const;
}

export function useCreateCart() {
	const [mutate, { data, loading, error }] = useMutation<
		CreateCartMutation,
		CreateCartMutationVariables
	>(CREATE_CART, {
		variables: {
			locale: LOCALE,
			draft: {
				currency: CURRENCY_CODE,
				country: COUNTRY,
				locale: LOCALE,
			},
		},
	});

	async function createCart() {
		const result = await mutate({
			update: (cache, { data }) => {
				cache.writeQuery({
					query: GET_CART,
					data: {
						me: {
							activeCart: {
								...data?.createMyCart,
							},
						},
					},
				});
			},
		});
		return result;
	}

	return [createCart, { data, loading, error }] as const;
}

export function useCart() {
	const { data, loading, error, refetch } = useQuery<
		GetCartQuery,
		GetCartQueryVariables
	>(GET_CART, {
		variables: { locale: LOCALE },
		fetchPolicy: 'network-only',
		nextFetchPolicy: 'cache-first',
	});

	return { data, loading, error, refetch };
}

export function useUpdateCart() {
	const { data: cart, loading: cartLoading } = useCart();
	const [createCart, { loading: createCartLoading }] = useCreateCart();
	const [mutate, { data, loading: updateCartLoading, error }] = useMutation<
		UpdateCartMutation,
		UpdateCartMutationVariables
	>(UPDATE_CART);

	async function updateCart(
		props: Pick<UpdateCartMutationVariables, 'actions'>,
	) {
		const { actions } = props;

		let id = cart?.me.activeCart?.id;
		let version = cart?.me.activeCart?.version;

		if (!id || !version) {
			const { data: createCartData } = await createCart();
			id = createCartData?.createMyCart?.id;
			version = createCartData?.createMyCart?.version;
		}

		if (!id || !version) {
			throw new Error('[updateCart]: No cart found to update');
		}

		await mutate({
			variables: { id, version, actions, locale: LOCALE },
		});
	}

	return [
		updateCart,
		{
			data,
			// Using the `loading` property from the `useMutation` hook is not enough
			// because it not be `true` until we call the `mutate` function. Meaning
			// that we can't use it to show a loading state while we're waiting for
			// the cart to be fetched or `createCart` mutation to finish. Instead,
			// we say that `updateCart` is loading if any of the three operations
			// (useCart, useCreateCart, useMutation) are loading.
			loading: cartLoading || createCartLoading || updateCartLoading,
			error,
		},
	] as const;
}
