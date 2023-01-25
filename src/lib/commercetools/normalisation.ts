import type {
	GetProductsQuery,
	NormalisedProduct,
} from '~/lib/commercetools/types';

type NormaliseProductProps = {
	product?: Maybe<
		GetProductsQuery['productProjectionSearch']['results'][number]
	>;
};
export function normaliseProduct(
	props: NormaliseProductProps,
): Maybe<NormalisedProduct> {
	const { product } = props;

	if (!product) return null;

	if (!product.masterVariant?.sku) return null;

	return {
		id: product.id,
		sku: product.masterVariant?.sku,
		mainImage: normaliseProductImages(product.masterVariant.images)[0],
		images: normaliseProductImages(product.masterVariant.images),
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

function normaliseProductImages(
	images: GetProductsQuery['productProjectionSearch']['results'][number]['masterVariant']['images'],
) {
	// TODO: Add comments explaining the following...
	const normalisedImages: NormalisedProduct['images'] = [
		{
			src: './product-fallback-image.png',
			label: '',
		},
		...images.map(image => {
			return {
				src: image.url,
				label: image.label ?? '',
			};
		}),
	];

	if (normalisedImages.length > 1) {
		normalisedImages.shift();
	}

	return normalisedImages;
}

// function normaliseProductVariants(
// 	variants: GetProductsQuery['productProjectionSearch']['results'][number]['variants'],
// ) {
// 	const normalisedVariants: NormalisedProduct['variants'] = variants.map(
// 		variant => {
// 			return {
// 				id: variant.variantId,
// 				price: variant.scopedPrice?.value.centAmount,
// 				sku: variant.sku,
// 			};
// 		},
// 	);

// 	return normalisedVariants;
// }

function extractCustomAttribute<T>({
	attributes,
	extract,
}: {
	attributes: GetProductsQuery['productProjectionSearch']['results'][number]['masterVariant']['attributesRaw'];
	extract: string;
}): Maybe<T> {
	return attributes?.find?.(attr => attr?.name === extract)?.value ?? null;
}
