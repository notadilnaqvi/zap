import React from 'react';

import 'src/styles/globals.css';
import './fonts.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [
	// There's no TS support for global decorators yet. Using `any` for now.
	// eslint-disable-next-line
	(Story: any) => (
		// These classes should match the ones in the root layout component to
		// ensure that the components look the same in Storybook as they do in
		// the app.
		<div className='font-sans text-gray-900 antialiased'>
			<Story />
		</div>
	),
];

export default preview;
