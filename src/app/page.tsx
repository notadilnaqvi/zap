import { ProductCard } from '~/components/_shared/common';
import { Commercetools } from '~/lib/commercetools';

export default async function HomePage() {
	const { data } = await Commercetools.getAllProducts({
		locale: 'en',
	});
	return (
		<div className='w-full py-16'>
			<div className='grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				{data.products.results?.map((product: any) => {
					return (
						<ProductCard
							product={product}
							key={product.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
