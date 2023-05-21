/* eslint-disable @typescript-eslint/no-var-requires */
/* @ts-check */

/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/stories/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		// If screens are added or removed, make sure to update the `deviceSizes`
		// in `next.config.js` as well
		screens: {
			xl: { max: '1440px' },
			lg: { max: '1024px' },
			md: { max: '768px' },
			sm: { max: '480px' },
		},
		extend: {
			// https://vercel.com/design/color
			colors: {
				primary: {
					lighter: '#D3E5FF',
					light: '#3291FF',
					DEFAULT: '#0070F3',
					dark: '#0761D1',
				},
				error: {
					lighter: '#F7D4D6',
					light: '#FF1A1A',
					DEFAULT: '#EE0000',
					dark: '#C50000',
				},
				warning: {
					lighter: '#FFEFCF',
					light: '#F7B955',
					DEFAULT: '#F5A623',
					dark: '#AB570A',
				},
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				DEFAULT: '5px',
			},
			animation: {
				blink: 'blink 1.4s infinite both',
				shimmer: 'shimmer 1.4s infinite',
				'fade-down': 'fade-down 0.2s ease-in-out',
				'fade-up': 'fade-up 0.2s ease-in-out',
			},
			keyframes: {
				shimmer: {
					'100%': { transform: 'translateX(100%)' },
				},
				'fade-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(0px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(8px)',
					},
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(0px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(-8px)',
					},
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
			spacing: {
				4.5: '18px',
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
