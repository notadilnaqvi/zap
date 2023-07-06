import type { MetadataRoute } from 'next';

import { BASE_URL } from '~/utils/constants';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/', // Allow all routes
		},
		sitemap: BASE_URL + '/sitemap.xml',
	};
}
