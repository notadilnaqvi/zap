/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xl: { max: '1440px' },
			lg: { max: '1024px' },
			md: { max: '768px' },
			sm: { max: '480px' },
		},
		extend: {
			fontFamily: {
				sans: ['Inter'],
				serif: ['Lora'],
			},
		},
	},
	plugins: [],
};
