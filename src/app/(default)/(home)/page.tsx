import TextBalancer from 'react-wrap-balancer';

import { ProductCard } from '~/components/common';
import { CallToActionButtonLink } from '~/components/ui';
import { getProducts } from '~/lib/commercetools';

export const metadata = {
	title: 'Home',
	description:
		'ZAP is a fake e-commerce website built with Next.js and Commercetools',
};

export default async function HomePage() {
	const products = await getProducts({ limit: 64 });

	return (
		<div className='mb-24 flex w-full justify-center px-4'>
			<div className='w-full max-w-page'>
				<div className='flex min-h-[calc(100vh-92px)] w-full flex-col items-center justify-center space-y-8 md:space-y-6'>
					<h1 className='bg-gradient-to-t from-gray-900 to-gray-700 bg-clip-text text-center text-6xl font-extrabold leading-none tracking-tighter text-transparent md:text-5xl sm:to-gray-800'>
						<TextBalancer>The premier retailer of fake apparel</TextBalancer>
					</h1>
					<p className='text-center text-2xl md:text-xl'>
						<TextBalancer>
							Find the perfect outfit for your next imaginary event
						</TextBalancer>
					</p>

					<CallToActionButtonLink href='#'>
						Start Shopping
					</CallToActionButtonLink>
				</div>
				<div className='grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
					{products?.map(product => {
						return (
							<ProductCard
								product={product}
								key={product.id}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
