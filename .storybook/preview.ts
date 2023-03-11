import 'src/styles/globals.css';
import './fonts.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		// Default background is slightly gray, make it completely white
		backgrounds: {
			default: 'light',
			values: [{ name: 'light', value: '#ffffff' }],
		},
		nextjs: {
			appDirectory: true,
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
