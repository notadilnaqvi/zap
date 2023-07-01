import type {
	CreateCartMutation,
	CustomerLoginMutation,
	CustomerSignUpMutation,
	GetCartQuery,
	GetCustomerQuery,
	GetProductsQuery,
	NewsletterSubscriptionStatus,
	NormalisedCart,
	NormalisedCustomer,
	NormalisedProduct,
	PDesigner,
	UpdateCartMutation,
} from '~/lib/commercetools/types';
import { extractCustomAttribute } from '~/utils';
import { FALLBACK_IMAGE } from '~/utils/constants';

type NormaliseProductProps = {
	product?: Maybe<
		GetProductsQuery['productProjectionSearch']['results'][number]
	>;
};

type NormaliseProductImagesProps = {
	images: GetProductsQuery['productProjectionSearch']['results'][number]['masterVariant']['images'];
	fallbackLabel: string;
};

type NormaliseCustomerProps = {
	customer:
		| Maybe<GetCustomerQuery['me']['customer']>
		| Maybe<CustomerLoginMutation['customerSignMeIn']['customer']>
		| Maybe<CustomerSignUpMutation['customerSignMeUp']['customer']>;
};

export function normaliseProduct(
	props: NormaliseProductProps,
): Maybe<NormalisedProduct> {
	const { product } = props;

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

	return {
		id: product.id,
		sku: sku,
		mainImage: normaliseProductImages({
			images: product.masterVariant.images,
			fallbackLabel: name,
		})[0],
		images: normaliseProductImages({
			images: product.masterVariant.images,
			fallbackLabel: name,
		}),
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

function normaliseProductImages(props: NormaliseProductImagesProps) {
	const { images, fallbackLabel } = props;
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
	cart:
		| Maybe<GetCartQuery['me']['cart']>
		| Maybe<CreateCartMutation['cart']>
		| Maybe<UpdateCartMutation['cart']>,
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
	props: NormaliseCustomerProps,
): Maybe<NormalisedCustomer> {
	const { customer } = props;
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
	};
}
