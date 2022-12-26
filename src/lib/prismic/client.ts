import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import sm from 'sm.json';

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

const routes: prismic.ClientConfig['routes'] = [
	{
		type: 'page',
		path: '/',
	},
	{
		type: 'page',
		path: '/:uid',
	},
];

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
	const client = prismic.createClient(sm.apiEndpoint, {
		routes,
		...config,
	});

	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req,
	});

	return client;
};
