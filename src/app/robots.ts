import { type MetadataRoute } from 'next';

import { getAbsoluteUrl } from '~/utils';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/', // Allow all routes
			disallow: ['/verify'],
		},
		sitemap: getAbsoluteUrl('/sitemap.xml'),
	};
}
