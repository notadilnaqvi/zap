import { getPlaiceholder as generateBase64EncodedDataUrl } from 'plaiceholder';

import { PageGenerationTimeBanner, ProductCard } from '~/components/common';
import { Commercetools } from '~/lib/commercetools';
import {
	FALLBACK_IMAGE,
	FALLBACK_IMAGE_BLUR_DATA_URL,
} from '~/utils/constants';

export default async function HomePage() {
	const { data } = await Commercetools.getProducts({ limit: 16 });

	// NOTE: `getBlurDataUrl` won't ever reject so we can safely use `Promise.all`
	const blurDataUrls = await Promise.all(
		data.products.map(async product => {
			const blurDataUrl = await getBlurDataUrl(product.mainImage?.src);
			return {
				id: product.id,
				blurDataUrl,
			};
		}),
	);

	const products = data.products.map(product => {
		const blurDataUrl =
			blurDataUrls.find(url => url.id === product.id)?.blurDataUrl ||
			FALLBACK_IMAGE;

		// Add the blurDataUrl to the normalised product
		return { ...product, mainImage: { ...product.mainImage, blurDataUrl } };
	});

	const now = new Date().toISOString();

	return (
		<div className='w-full py-16'>
			<div className='mb-4'>
				<PageGenerationTimeBanner generatedAt={now} />
			</div>
			<div className='grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				{products?.map((product, index) => {
					return (
						<ProductCard
							product={product}
							key={product.id}
							// Prioritise images for the first 10 products which will be above the fold
							prioritiseImage={index < 10}
						/>
					);
				})}
			</div>
		</div>
	);
}

async function getBlurDataUrl(src: string) {
	try {
		// Don't need to generate a data URL for the fallback image
		if (src === FALLBACK_IMAGE) return FALLBACK_IMAGE_BLUR_DATA_URL;

		// The current project has 2 sizes of images: large and small. But only
		// the large images are used in CT products for obvious reasons. Since
		// we want the data URL to be very light and small, we use the small
		// version of the image to generate the data URL by replacing `_large`
		// with `_small` in the image source.
		const { base64 } = await generateBase64EncodedDataUrl(
			src.replace('_large', '_small'),
		);
		return base64;
	} catch (error: unknown) {
		console.warn('[getBlurDataUrl]:', error);
		// If there's an error, return the fallback image's blur data URL. Note
		// that we MUST return a data URL here (and not `null` or `undefined`)
		// else the `Image` component will throw an error. This is not ideal
		// since the blurred version of the image will not match the actual
		// image but it's better than an error.
		return FALLBACK_IMAGE_BLUR_DATA_URL;
	}
}
