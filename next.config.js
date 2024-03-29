/* eslint-disable @typescript-eslint/no-var-requires */
/* @ts-check */

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		unoptimized: false,
		domains: ['s3-eu-west-1.amazonaws.com'],
		// Should ideally match `screens` in `tailwind.config.js`
		deviceSizes: [480, 768, 1024, 1440],
	},
};

// Any environment variables that are listed in .env.example are considered
// required. We read all environment variables from .env.example and check if
// they are set. If any are missing from process.env, we fail the build. Else
// we print the config to the console and continue as normal.
if (process.env.NODE_ENV === 'production') {
	const fs = require('fs');
	const path = require('path');

	let missingEnvVars = '';

	const exampleEnvFilePath = path.resolve(process.cwd(), '.env.example');
	if (fs.existsSync(exampleEnvFilePath)) {
		const content = fs.readFileSync(exampleEnvFilePath, 'utf8');
		const lines = content.split(/\r?\n/);
		for (const line of lines) {
			if (line.startsWith('#') || !line) continue; // Skip comments and empty lines
			const [key, _value] = line.split('=');
			if (!key) continue;
			if (typeof process.env[key] === 'undefined') {
				missingEnvVars += '   - ' + key + '\n';
			}
		}
	}

	if (missingEnvVars) {
		console.error(
			'The following environment variables were not set. Please set them and try again.\n' +
			missingEnvVars,
		);
		process.exit(1);
	} else {
		console.info(
			'\u2705 next.config.js',
			JSON.stringify(module.exports, null, 2),
		);
	}
}
