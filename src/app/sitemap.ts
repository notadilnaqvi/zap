import type { MetadataRoute } from 'next';

import { getProductSlugs } from '~/lib/commercetools';
import { BASE_URL } from '~/utils/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date();

	const miscRoutes: MetadataRoute.Sitemap = [
		'/',
		'/login',
		'/sign-up',
		'/account',
		'/checkout',
	].map(route => {
		return {
			url: BASE_URL + route,
			lastModified: now,
		};
	});

	const { data: productSlugData } = await getProductSlugs({ limit: 16 });

	const productRoutes: MetadataRoute.Sitemap = productSlugData.slugs.map(
		slug => {
			return {
				url: BASE_URL + '/products/' + slug,
				lastModified: now,
			};
		},
	);

	return [...miscRoutes, ...productRoutes];
}
