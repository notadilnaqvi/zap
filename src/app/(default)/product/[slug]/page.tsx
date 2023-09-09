import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getProductBySlug, getProductSlugs } from '~/lib/commercetools';
import type { NormalisedProduct } from '~/lib/commercetools/types';

type ProductPageProps = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const slugs = await getProductSlugs({ limit: 64 });

	const params = slugs.map(slug => {
		return { slug };
	});

	return params;
}

// TODO: Add error handling?
export async function generateMetadata(props: ProductPageProps) {
	const { params } = props;
	const { slug } = params;

	const product = await getProductBySlug(slug);

	if (!product) {
		return {
			title: 'Not found',
			description: 'This product could not be found',
		};
	}

	return {
		title: product.name,
		description: product.description,
	};
}

export default async function ProductPage(props: ProductPageProps) {
	const { params } = props;
	const { slug } = params;

	let product: Maybe<NormalisedProduct>;

	try {
		product = await getProductBySlug(slug);

		if (!product) notFound();
	} catch (err) {
		console.error('[ProductPage]:', err);
		notFound();
	}

	return (
		<div className='flex w-full justify-center px-4'>
			<div className='w-full max-w-page py-16'>
				<h1 className='text-lg font-medium'>{product.name}</h1>
				<section className='mt-8 grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
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
				</section>
				<section className='mt-4 overflow-x-scroll rounded bg-gray-100 p-4 text-sm'>
					<pre>
						<code>{JSON.stringify(product, null, 2)}</code>
					</pre>
				</section>
			</div>
		</div>
	);
}
