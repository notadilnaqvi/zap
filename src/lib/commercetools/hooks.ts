import { useApolloClient, useMutation, useQuery } from '@apollo/client';

import { generateCustomerAuthToken } from '~/lib/commercetools';
import {
	CREATE_CART,
	CUSTOMER_LOGIN,
	CUSTOMER_SIGN_UP,
	UPDATE_CART,
} from '~/lib/commercetools/graphql/mutations';
import { GET_CART, GET_CUSTOMER } from '~/lib/commercetools/graphql/queries';
import {
	normaliseCart,
	normaliseCustomer,
} from '~/lib/commercetools/normalisation';
import {
	AnonymousCartSignInMode,
	CreateCartMutation,
	CreateCartMutationVariables,
	CustomerLoginMutation,
	CustomerLoginMutationVariables,
	CustomerSignUpMutation,
	CustomerSignUpMutationVariables,
	GetCartQuery,
	GetCartQueryVariables,
	GetCustomerQuery,
	UpdateCartMutation,
	UpdateCartMutationVariables,
} from '~/lib/commercetools/types';
import { Cookie } from '~/utils';
import {
	AUTH_TOKEN_EXPIRY_DAYS,
	COUNTRY,
	CURRENCY_CODE,
	LOCALE,
} from '~/utils/constants';

type UpdateLineItemQuantityProps = {
	lineItemId: string;
	quantity: number;
};

type RemoveLineItemProps = {
	lineItemId: string;
};

type SignUpProps = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

type LoginProps = {
	email: string;
	password: string;
};

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
							cart: {
								...data?.cart,
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
	>(GET_CART, { variables: { locale: LOCALE } });

	return { data: normaliseCart(data?.me?.cart), loading, error, refetch };
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

		let id = cart?.id;
		let version = cart?.version;

		if (!id || !version) {
			const { data: createCartData } = await createCart();
			id = createCartData?.cart?.id;
			version = createCartData?.cart?.version;
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

export function useUpdateLineItemQuantity() {
	const [updateCart, { data, loading }] = useUpdateCart();

	async function updateLineItemQuantity(props: UpdateLineItemQuantityProps) {
		const { lineItemId, quantity } = props;

		await updateCart({
			actions: [{ changeLineItemQuantity: { lineItemId, quantity } }],
		});
	}

	return [updateLineItemQuantity, { data, loading }] as const;
}

export function useRemoveLineItem() {
	const [updateCart, { data, loading }] = useUpdateCart();

	async function removeLineItem(props: RemoveLineItemProps) {
		const { lineItemId } = props;

		await updateCart({
			actions: [{ removeLineItem: { lineItemId } }],
		});
	}

	return [removeLineItem, { data, loading }] as const;
}

export function useCustomer() {
	const authToken = Cookie.get('zap_auth_token');
	const {
		data,
		loading,
		error: apolloError,
	} = useQuery<GetCustomerQuery>(GET_CUSTOMER, {
		skip: !authToken?.is_logged_in, // Don't run this query if the user isn't logged in
	});
	const error = apolloError;
	return {
		data: normaliseCustomer({ customer: data?.me.customer }),
		loading,
		error,
	};
}

export function useLogin() {
	const [mutate, { data, loading, error }] = useMutation<
		CustomerLoginMutation,
		CustomerLoginMutationVariables
	>(CUSTOMER_LOGIN);

	async function login(props: LoginProps) {
		const { email, password } = props;

		await mutate({
			variables: {
				draft: {
					email,
					password,
					activeCartSignInMode:
						AnonymousCartSignInMode.UseAsNewActiveCustomerCart,
				},
			},
		});

		if (error) throw new Error(error.message);

		const authToken = await generateCustomerAuthToken({
			email,
			password,
		});

		Cookie.set('zap_auth_token', authToken, {
			expires: AUTH_TOKEN_EXPIRY_DAYS,
		});
	}

	return [
		login,
		{
			data: normaliseCustomer({ customer: data?.customerSignMeIn.customer }),
			loading,
			error,
		},
	] as const;
}

export function useSignUp() {
	const [mutate, { data, loading, error }] = useMutation<
		CustomerSignUpMutation,
		CustomerSignUpMutationVariables
	>(CUSTOMER_SIGN_UP);

	async function signUp(props: SignUpProps) {
		const { email, firstName, lastName, password } = props;

		await mutate({
			variables: { draft: { email, firstName, lastName, password } },
		});

		if (error) throw new Error(error.message);

		const authToken = await generateCustomerAuthToken({
			email,
			password,
		});

		Cookie.set('zap_auth_token', authToken, {
			expires: AUTH_TOKEN_EXPIRY_DAYS,
		});
	}

	return [
		signUp,
		{
			data: normaliseCustomer({ customer: data?.customerSignMeUp.customer }),
			loading,
			error,
		},
	] as const;
}

export function useLogout() {
	const apolloClient = useApolloClient();
	async function logout() {
		Cookie.remove('zap_auth_token');
		await apolloClient.resetStore();
	}
	return [logout] as const;
}
