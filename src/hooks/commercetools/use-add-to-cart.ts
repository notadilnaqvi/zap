import { useUpdateMyCart } from '~/hooks/commercetools';

import type { Product } from '~/types/commercetools';

type AddToCartProps = {
	productId: Product['id'];
};

export function useAddToCart() {
	const [updateMyCart, { data, loading, error }] = useUpdateMyCart();

	async function addToCart(props: AddToCartProps) {
		const { productId } = props;

		await updateMyCart({
			actions: [{ addLineItem: { productId, quantity: 1 } }],
		});
	}

	return [addToCart, { data, loading, error }] as const;
}
