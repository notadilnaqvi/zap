import type {
	CartFragmentFragment,
	CustomerFragmentFragment,
	NewsletterSubscriptionStatus,
	NormalisedCart,
	NormalisedCustomer,
	NormalisedProduct,
	PDesigner,
	ProductProjectionFragmentFragment,
} from '~/lib/commercetools/types';
import { extractCustomAttribute } from '~/utils';
import { FALLBACK_IMAGE } from '~/utils/constants';

export function normaliseProduct(
	product?: Maybe<ProductProjectionFragmentFragment>,
): Maybe<NormalisedProduct> {
	if (!product) return null;

	const name = product.name;
	const sku = product.masterVariant.sku;
	const centAmount = product.masterVariant?.scopedPrice?.value.centAmount;
	const currencyCode = product.masterVariant?.scopedPrice?.value.currencyCode;
	const fractionDigits =
		product.masterVariant?.scopedPrice?.value.fractionDigits;

	if (!sku) {
		console.warn(
			'[normaliseProduct]: Product with ID ' + product.id + ' has no SKU.',
		);
		return null;
	}

	if (!name) {
		console.warn(
			'[normaliseProduct]: Product with ID ' + product.id + ' has no name.',
		);
		return null;
	}

	if (!centAmount || !currencyCode || !fractionDigits) {
		console.warn(
			'[normaliseProduct]: Product with ID ' +
				product.id +
				' has an invalid price.',
		);
		return null;
	}

	const fallbackLabel = name;

	const images = normaliseProductImages(
		product.masterVariant.images,
		fallbackLabel,
	);

	return {
		id: product.id,
		sku: sku,
		mainImage: images[0],
		images: images,
		description: product.description,
		designer: extractCustomAttribute<PDesigner>({
			attributes: product.masterVariant.attributesRaw,
			extract: 'designer',
		}),
		name: name,
		slug: product.slug,
		price: { centAmount, currencyCode, fractionDigits },
	};
}

function normaliseProductImages(
	images: ProductProjectionFragmentFragment['masterVariant']['images'],
	fallbackLabel: string,
) {
	// TODO: Add comments explaining the following...
	const normalisedImages: NormalisedProduct['images'] = [
		{
			src: FALLBACK_IMAGE,
			label: fallbackLabel,
		},
		...images.map(image => {
			return {
				src: image.url || FALLBACK_IMAGE,
				label: image.label || fallbackLabel,
			};
		}),
	];

	if (normalisedImages.length > 1) {
		normalisedImages.shift();
	}

	return normalisedImages;
}

export function normaliseCart(
	cart?: Maybe<CartFragmentFragment>,
): Maybe<NormalisedCart> {
	if (!cart) return null;

	return {
		id: cart.id,
		version: cart.version,
		currency: cart.totalPrice.currencyCode,
		totalPrice: cart.totalPrice,
		totalLineItemQuantity: cart.totalLineItemQuantity,
		lineItems: cart?.lineItems
			.map(lineItem => {
				if (
					!lineItem?.name ||
					!lineItem?.variant?.sku ||
					!lineItem?.productSlug ||
					!lineItem?.totalPrice
				) {
					return null;
				}
				return {
					productSlug: lineItem.productSlug,
					id: lineItem.id,
					name: lineItem.name ?? 'PRODUCT_NAME',
					sku: lineItem.variant?.sku,
					quantity: lineItem.quantity,
					totalPrice: lineItem.totalPrice,
					image: {
						src: lineItem.variant?.images?.[0]?.url || FALLBACK_IMAGE,
						label: lineItem.variant?.images?.[0]?.label || '',
					},
				};
			})
			.filter(
				(lineItem): lineItem is NormalisedCart['lineItems'][number] =>
					!!lineItem,
			),
	};
}

export function normaliseCustomer(
	customer?: Maybe<CustomerFragmentFragment>,
): Maybe<NormalisedCustomer> {
	if (!customer) return null;

	return {
		id: customer.id,
		version: customer.version,
		firstName: customer?.firstName ?? 'FIRST_NAME',
		lastName: customer?.lastName ?? 'LAST_NAME',
		email: customer.email,
		isSubscribedToNewsletter:
			extractCustomAttribute<NewsletterSubscriptionStatus>({
				attributes: customer.custom?.customFieldsRaw,
				extract: 'news-letter-subscription-status',
			}) === 'subscribed',
		isEmailVerified: customer.isEmailVerified,
	};
}
