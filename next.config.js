/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['s3-eu-west-1.amazonaws.com'],
	},
};

// Fail build if any required environment variables are missing
if (process.env.NODE_ENV === 'production') {
	const requiredEnvVars = [
		'NEXT_PUBLIC_CTP_PROJECT_KEY',
		'NEXT_PUBLIC_CTP_CLIENT_SECRET',
		'NEXT_PUBLIC_CTP_CLIENT_ID',
		'NEXT_PUBLIC_CTP_AUTH_URL',
		'NEXT_PUBLIC_CTP_API_URL',
		'NEXT_PUBLIC_CTP_SCOPES',
	];
	let missingEnvVarsStr = '';
	for (const envVar of requiredEnvVars) {
		if (typeof process.env[envVar] === 'undefined') {
			missingEnvVarsStr += `- ${envVar}\n`;
		}
	}
	if (missingEnvVarsStr) {
		console.log(
			`\u274c The following environment variables were not set. Please set them and try again.\n${missingEnvVarsStr}`,
		);
		process.exit(1);
	} else {
		console.log(
			'\u2705 next.config.js',
			JSON.stringify(module.exports, null, 2),
		);
	}
}
