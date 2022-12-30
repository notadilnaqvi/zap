import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: './ctp.json',
	documents: ['src/**/*.ts*'],
	generates: {
		'./src/gql/': {
			preset: 'client',
			plugins: [],
		},
	},
};
export default config;
