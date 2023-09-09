import { ProductCard } from '~/components/common';
import { HeroImageCarousel } from '~/components/homepage/HeroImageCarousel';
import { getProducts } from '~/lib/commercetools';

export const metadata = {
	title: 'Home',
	description:
		'ZAP is a fake e-commerce website built with Next.js and Commercetools',
};

export default async function HomePage() {
	const products = await getProducts({ limit: 16 });

	return (
		<div className='mb-24 flex w-full justify-center'>
			<div className='w-full max-w-page'>
				<section className='my-12 px-4 sm:mt-0 sm:px-0'>
					<HeroImageCarousel />
				</section>
				<section className='grid grid-flow-row grid-cols-4 gap-4 px-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
					{products?.map(product => {
						return (
							<ProductCard
								product={product}
								key={product.id}
							/>
						);
					})}
				</section>
			</div>
		</div>
	);
}
