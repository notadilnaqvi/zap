import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getProductBySlug, getProductSlugs } from '~/lib/commercetools';

import type { NormalisedProduct } from '~/lib/commercetools/types';

type ProductPageProps = {
	params: {
		slug: string;
	};
};

export default async function ProductPage(props: ProductPageProps) {
	const { params } = props;
	const { slug } = params;

	let product: NormalisedProduct;

	try {
		const { data, error } = await getProductBySlug({ slug });

		if (error) throw new Error(error.message, error);

		if (!data) throw new Error('No product found against slug: ' + slug);

		product = data;
	} catch (err) {
		console.error('[ProductPage]:', err);
		return notFound();
	}

	return (
		<div className='w-full py-16'>
			<h1 className='text-lg font-medium'>{product.name}</h1>
			<div className='mt-8 grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				{product.images.map(image => {
					return (
						<div
							className='relative aspect-[4/5] w-full'
							key={image.src}
						>
							<Image
								src={image.src}
								alt={image.label}
								className='rounded object-cover invert-[0.05]'
								fill
							/>
						</div>
					);
				})}
			</div>
			<div className='mt-4 overflow-x-scroll rounded bg-gray-100 p-4 text-sm'>
				<pre>
					<code>{JSON.stringify(product, null, 2)}</code>
				</pre>
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	const { data, error } = await getProductSlugs({ limit: 256 });

	if (error) {
		throw new Error(
			'Failed to fetch product slugs. Product pages were not statically generated.',
		);
	}

	const params = data.slugs.map(slug => {
		return { slug };
	});

	return params;
}

// TODO: Add error handling?
export async function generateMetadata(props: ProductPageProps) {
	const { params } = props;
	const { slug } = params;

	const { data: product } = await getProductBySlug({
		slug,
	});

	if (!product) {
		return {
			title: 'Product not found',
			description: 'This product was not found',
		};
	}

	return {
		title: product?.name,
		description: product?.description,
	};
}
