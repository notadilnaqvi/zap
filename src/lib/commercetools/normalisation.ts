import type {
	GetProductsQuery,
	NormalisedProduct,
} from '~/lib/commercetools/types';
import { Constants } from '~/utils';

type NormaliseProductProps = {
	product?: Maybe<
		GetProductsQuery['productProjectionSearch']['results'][number]
	>;
};

type NormaliseProductImagesProps = {
	images: GetProductsQuery['productProjectionSearch']['results'][number]['masterVariant']['images'];
	fallbackLabel: string;
};

export function normaliseProduct(
	props: NormaliseProductProps,
): Maybe<NormalisedProduct> {
	const { product } = props;

	if (!product) return null;

	if (!product.masterVariant?.sku) {
		console.warn(
			'[normaliseProduct]: Product with ID ' + product.id + ' has no SKU.',
		);
		return null;
	}

	if (!product.name) {
		console.warn(
			'[normaliseProduct]: Product with ID ' + product.id + ' has no name.',
		);
		return null;
	}

	return {
		id: product.id,
		sku: product.masterVariant?.sku,
		mainImage: normaliseProductImages({
			images: product.masterVariant.images,
			fallbackLabel: product.name,
		})[0],
		images: normaliseProductImages({
			images: product.masterVariant.images,
			fallbackLabel: product.name,
		}),
		description: product.description,
		designer: extractCustomAttribute<{ key: string; label: string }>({
			attributes: product.masterVariant.attributesRaw,
			extract: 'designer',
		}),
		name: product.name,
		slug: product.slug,
		price: product.masterVariant.scopedPrice?.value.centAmount,
	};
}

function normaliseProductImages(props: NormaliseProductImagesProps) {
	const { images, fallbackLabel } = props;
	// TODO: Add comments explaining the following...
	const normalisedImages: NormalisedProduct['images'] = [
		{
			src: Constants.FALLBACK_IMAGE,
			label: fallbackLabel,
		},
		...images.map(image => {
			return {
				src: image.url || Constants.FALLBACK_IMAGE,
				label: image.label || fallbackLabel,
			};
		}),
	];

	if (normalisedImages.length > 1) {
		normalisedImages.shift();
	}

	return normalisedImages;
}

function extractCustomAttribute<T>({
	attributes,
	extract,
}: {
	attributes: GetProductsQuery['productProjectionSearch']['results'][number]['masterVariant']['attributesRaw'];
	extract: string;
}): Maybe<T> {
	return attributes?.find?.(attr => attr?.name === extract)?.value ?? null;
}
