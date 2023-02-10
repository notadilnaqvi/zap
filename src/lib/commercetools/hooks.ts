import { useMutation, useQuery } from '@apollo/client';
import { Constants } from '~/utils';
import { CREATE_MY_CART, UPDATE_MY_CART } from './graphql/mutations';
import { GET_MY_CART } from './graphql/queries';
import {
	CreateMyCartMutation,
	CreateMyCartMutationVariables,
	GetMyCartQuery,
	GetMyCartQueryVariables,
	UpdateMyCartMutation,
	UpdateMyCartMutationVariables,
} from './types';

export function useAddToCart() {
	const [updateMyCart, { data, loading, error }] = useUpdateMyCart();

	async function addToCart(props: { sku: string }) {
		const { sku } = props;

		await updateMyCart({
			actions: [{ addLineItem: { sku, quantity: 1 } }],
		});
	}

	return [addToCart, { data, loading, error }] as const;
}

export function useCreateMyCart() {
	const [mutate, { data, loading, error }] = useMutation<
		CreateMyCartMutation,
		CreateMyCartMutationVariables
	>(CREATE_MY_CART, {
		variables: {
			locale: Constants.LOCALE,
			draft: {
				currency: Constants.CURRENCY_CODE,
				country: Constants.COUNTRY,
				locale: Constants.LOCALE,
			},
		},
	});

	async function createMyCart() {
		const result = await mutate({
			update: (cache, { data }) => {
				cache.writeQuery({
					query: GET_MY_CART,
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

	return [createMyCart, { data, loading, error }] as const;
}

export function useGetMyCart() {
	const { data, loading, error, refetch } = useQuery<
		GetMyCartQuery,
		GetMyCartQueryVariables
	>(GET_MY_CART, {
		variables: { locale: Constants.LOCALE },
		fetchPolicy: 'network-only',
		nextFetchPolicy: 'cache-first',
	});

	return { data, loading, error, refetch };
}

export function useUpdateMyCart() {
	const { data: myCart, loading: myCartLoading } = useGetMyCart();
	const [createMyCart, { loading: createMyCartLoading }] = useCreateMyCart();
	const [mutate, { data, loading: updateMyCartLoading, error }] = useMutation<
		UpdateMyCartMutation,
		UpdateMyCartMutationVariables
	>(UPDATE_MY_CART);

	async function updateMyCart(
		props: Pick<UpdateMyCartMutationVariables, 'actions'>,
	) {
		const { actions } = props;

		let id = myCart?.me.activeCart?.id;
		let version = myCart?.me.activeCart?.version;

		if (!id || !version) {
			const { data: createMyCartData } = await createMyCart();
			id = createMyCartData?.createMyCart?.id;
			version = createMyCartData?.createMyCart?.version;
		}

		if (!id || !version) {
			throw new Error('[updateMyCart]: No cart found to update');
		}

		await mutate({
			variables: { id, version, actions, locale: Constants.LOCALE },
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
