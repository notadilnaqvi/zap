import { notFound } from 'next/navigation';

import { Commercetools } from '~/lib/commercetools';

import type { NormalisedProduct } from '~/lib/commercetools/types';

type PageProps = {
	params: {
		slug: string;
	};
};

export default async function ProductPage(props: PageProps) {
	const { params } = props;
	const { slug } = params;

	let product: NormalisedProduct;

	try {
		const { data, error } = await Commercetools.getProductBySlug({ slug });

		if (error) throw new Error(error.message, error);

		if (!data) throw new Error('No product found against slug: ' + slug);

		product = data;
	} catch (err) {
		console.error('[ProductPage]:', err);
		return notFound();
	}

	return <div>{JSON.stringify(product, null, '  ')}</div>;
}

export async function generateStaticParams() {
	const { data, error } = await Commercetools.getAllProductSlugs();

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
