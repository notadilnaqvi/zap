import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { LoadingSpinner } from '~/components/common';
import { Commercetools } from '~/lib/commercetools';

import Image from 'next/image';
import type { ParsedUrlQuery } from 'querystring';

interface PageParams extends ParsedUrlQuery {
	slug: Scalars['String'];
}

function ProductPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	const { data } = props;

	if (router.isFallback) {
		return (
			<div className='flex items-center justify-center w-full'>
				<LoadingSpinner />
			</div>
		);
	}

	const slug = data?.productProjectionSearch?.results?.[0]?.slug;
	const image =
		data?.productProjectionSearch?.results?.[0]?.masterVariant?.images?.[0];

	return (
		<div>
			<p>{slug}</p>
			<Image
				src={image?.url}
				height={256}
				width={256}
				alt=''
			/>
		</div>
	);
}

export async function getStaticPaths() {
	try {
		const { data, error } = await Commercetools.getAllProductSlugs();

		if (error) {
			throw new Error(error?.message);
		}

		return {
			paths: data?.slugs?.map(slug => ({ params: { slug } })),
			fallback: true,
		};
	} catch (error) {
		console.error('[getStaticPaths]: Failed to fetch product slugs.', error);

		return { paths: [], fallback: true };
	}
}

export async function getStaticProps(
	context: GetStaticPropsContext<PageParams>,
) {
	const { params } = context;
	const slug = params?.slug;

	if (!slug) {
		return {
			notFound: true,
			props: {},
		};
	}

	const { data } = await Commercetools.getProductBySlug({ slug });

	if (!data?.productProjectionSearch?.total) {
		console.error('[getStaticProps]: Failed to product.', slug);
		return {
			notFound: true,
			props: {},
		};
	}

	return { props: { data } };
}

export default ProductPage;
