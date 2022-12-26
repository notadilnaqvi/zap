import {
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { ProductCard } from '~/components/common';
import { Commercetools } from '~/lib/commercetools';
import { Prismic } from '~/lib/prismic';

export async function getStaticProps(props: GetStaticPropsContext) {
	const { previewData } = props;

	const client = Prismic.createClient({ previewData });

	const announcementBanner = await client.getSingle('announcement_banner');

	return {
		props: {
			prismicData: {
				announcementBanner,
			},
		},
	};
}

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const [products, setProducts] = useState<any>([]);

	useEffect(() => {
		async function runAsync() {
			const { data } = await Commercetools.getAllProducts({ locale: 'en' });
			setProducts(data.products.results);
		}
		runAsync();
	}, []);

	return (
		<>
			<Head>
				<title>ZAP | Home</title>
			</Head>
			<div className='w-full py-16'>
				<div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-4'>
					{products.map((product: any) => {
						return (
							<ProductCard
								product={product}
								key={product.id}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Home;
