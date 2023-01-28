/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
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
			},
			animation: {
				blink: 'blink 1.4s infinite both',
				shimmer: 'shimmer 1.4s infinite',
			},
			keyframes: {
				shimmer: {
					'100%': { transform: 'translateX(100%)' },
				},
				blink: {
					'0%': {
						opacity: '0.2',
					},
					'20%': {
						opacity: '1',
					},
					'100%': {
						opacity: ' 0.2',
					},
				},
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animation-delay': value => {
						return {
							'animation-delay': value,
						};
					},
				},
				{
					values: theme('transitionDelay'),
				},
			);
		}),
	],
};
