import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'src/lib/commercetools/graphql/schema.json',
	documents: [
		'src/lib/commercetools/graphql/queries.ts',
		'src/lib/commercetools/graphql/mutations.ts',
	],
	generates: {
		'src/lib/commercetools/graphql/__generated__/': {
			preset: 'client',
			plugins: [],
		},
	},
};
export default config;
