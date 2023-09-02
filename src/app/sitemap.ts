import { type MetadataRoute } from 'next';

import { getProductSlugs } from '~/lib/commercetools';
import { getAbsoluteUrl } from '~/utils';

// Don't add the following routes to the sitemap:
// - /verify
// - /api/*

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
			url: getAbsoluteUrl(route),
			lastModified: now,
		};
	});

	const slugs = await getProductSlugs({ limit: 16 });

	const productRoutes: MetadataRoute.Sitemap = slugs.map(slug => {
		return {
			url: getAbsoluteUrl('/products/' + slug),
			lastModified: now,
		};
	});

	return [...miscRoutes, ...productRoutes];
}
