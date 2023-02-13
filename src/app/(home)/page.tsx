import { getPlaiceholder as generateBase64EncodedDataUrl } from 'plaiceholder';

import { PageGenerationTimeBanner, ProductCard } from '~/components/common';
import { Commercetools } from '~/lib/commercetools';
import { FALLBACK_IMAGE } from '~/utils/constants';

export const revalidate = 0; // Never static, always generated on request

export default async function HomePage() {
	const { data } = await Commercetools.getProducts({ limit: 100 });

	// TODO: Use Promise.allSettled here
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

		// Add the blurDataURL to the normalised product
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
		const { base64 } = await generateBase64EncodedDataUrl(
			// The current project has 2 sizes of images: large and small. But only
			// the large images are used in the product for obvious reasons. Since
			// we want the data URL to be very light and small, we use the small
			// version of the image to generate the data URL.
			src.replace('_large', '_small'),
		);
		return base64;
	} catch (error: unknown) {
		console.error('[getBlurDataUrl]:', error);
		return null;
	}
}
