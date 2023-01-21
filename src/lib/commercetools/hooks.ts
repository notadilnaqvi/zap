import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MY_CART, UPDATE_MY_CART } from './graphql/mutations';
import { GET_MY_CART } from './graphql/queries';
import {
	AddMyCartLineItem,
	CreateMyCartMutation,
	CreateMyCartMutationVariables,
	GetMyCartQuery,
	GetMyCartQueryVariables,
	InputMaybe,
	MyCartUpdateAction,
	UpdateMyCartMutation,
	UpdateMyCartMutationVariables,
} from './types';

export function useAddToCart() {
	const [updateMyCart, { data, loading, error }] = useUpdateMyCart();

	async function addToCart(props: {
		// TODO: Replace the type with just `string`. This is technically the
		// "correctest" way to define this type but is also overkill.
		productId: Extract<
			Extract<
				Pick<
					Extract<
						Pick<UpdateMyCartMutationVariables, 'actions'>['actions'],
						MyCartUpdateAction
					>,
					'addLineItem'
				>['addLineItem'],
				InputMaybe<AddMyCartLineItem>
			>,
			AddMyCartLineItem
		>['productId'];
	}) {
		const { productId } = props;

		await updateMyCart({
			actions: [{ addLineItem: { productId, quantity: 1 } }],
		});
	}

	return [addToCart, { data, loading, error }] as const;
}

export function useCreateMyCart() {
	const [mutate, { data, loading, error }] = useMutation<
		CreateMyCartMutation,
		CreateMyCartMutationVariables
	>(CREATE_MY_CART);

	async function createMyCart(
		props: Pick<CreateMyCartMutationVariables, 'draft'>,
	) {
		const { draft } = props;
		const result = await mutate({
			variables: { draft },
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
