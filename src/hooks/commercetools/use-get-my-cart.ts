import { useQuery } from '@apollo/client';

import { GET_MY_CART } from '~/lib/apollo/queries';
import { Me } from '~/types/commercetools';

type GetMyCartData = {
	me: Pick<Me, 'activeCart'>;
};

export function useGetMyCart() {
	const { data, loading, error, refetch } = useQuery<GetMyCartData>(
		GET_MY_CART,
		{
			fetchPolicy: 'network-only',
			nextFetchPolicy: 'cache-first',
		},
	);

	return { data, loading, error, refetch };
}
