import type {
	GetProductBySlugQuery,
	NormalisedProduct,
} from '~/lib/commercetools/types';

type NormaliseProductProps = {
	product?: Maybe<
		GetProductBySlugQuery['productProjectionSearch']['results'][number]
	>;
};
export function normaliseProduct(
	props: NormaliseProductProps,
): Maybe<NormalisedProduct> {
	const { product } = props;

	if (!product) return null;

	return {
		id: product.id,
		// We know that there will be atleast on image but TS doesn't know that so
		// it's safe to use "!" here.
		mainImage: normaliseProductImages(product.masterVariant.images).at(0)!,
		images: normaliseProductImages(product.masterVariant.images),
		variants: normaliseProductVariants(product.variants),
		description: product.description,
		name: product.name,
		slug: product.slug,
		price: product.masterVariant.scopedPrice?.value.centAmount,
	};
}

function normaliseProductImages(
	images: GetProductBySlugQuery['productProjectionSearch']['results'][number]['masterVariant']['images'],
) {
	let normalisedImages: NormalisedProduct['images'] = images.map(image => {
		return {
			src: image.url,
			label: image.label ?? '',
		};
	});

	if (!normaliseProduct.length) {
		normalisedImages = [
			{
				src: './product-fallback-image.png',
				label: '',
			},
		];
	}
	return normalisedImages;
}

function normaliseProductVariants(
	variants: GetProductBySlugQuery['productProjectionSearch']['results'][number]['variants'],
) {
	const normalisedVariants: NormalisedProduct['variants'] = variants.map(
		variant => {
			return {
				id: variant.id,
				price: variant.scopedPrice?.value.centAmount,
				sku: variant.sku,
			};
		},
	);

	return normalisedVariants;
}
