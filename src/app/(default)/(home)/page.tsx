import { getPlaiceholder as generateBase64EncodedDataUrl } from 'plaiceholder';
import TextBalancer from 'react-wrap-balancer';

import { ProductCard } from '~/components/common';
import { ButtonLink } from '~/components/ui';
import { getProducts } from '~/lib/commercetools';
import {
	FALLBACK_IMAGE,
	FALLBACK_IMAGE_BLUR_DATA_URL,
} from '~/utils/constants';

export const metadata = {
	title: 'Home',
	description:
		'ZAP is a fake e-commerce website built with Next.js and Commercetools',
};

export default async function HomePage() {
	const { data } = await getProducts({ limit: 256 });

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

	return (
		<div className='flex w-full justify-center px-4'>
			<div className='my-16 w-full max-w-page'>
				<div className='mb-64 mt-48 flex w-full flex-col items-center justify-center space-y-8 md:space-y-6 sm:my-32'>
					<h1 className='bg-gradient-to-t from-gray-900 to-gray-700 bg-clip-text text-center text-6xl font-extrabold leading-none tracking-tighter text-transparent md:text-5xl'>
						<TextBalancer>The premier retailer of fake apparel</TextBalancer>
					</h1>
					<p className='text-center text-2xl md:text-xl'>
						<TextBalancer>
							Find the perfect outfit for your next imaginary event
						</TextBalancer>
					</p>
					<ButtonLink href='#'>Shop now</ButtonLink>
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
		</div>
	);
}

async function getBlurDataUrl(src: string) {
	try {
		// Don't need to generate a data URL for the fallback image
		if (src === FALLBACK_IMAGE) return FALLBACK_IMAGE_BLUR_DATA_URL;

		// The current project has 4 sizes of images: zoom, medium, small, and
		// thumbnail. But only the large images are used in CT products for
		// obvious reasons. Since we want the data URL to be very light and small,
		// we use the small version of the image to generate the data URL by
		// replacing `_zoom` with `_thumbnail` in the image source.
		const { base64 } = await generateBase64EncodedDataUrl(
			src.replace('_zoom', '_thumbnail'),
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
