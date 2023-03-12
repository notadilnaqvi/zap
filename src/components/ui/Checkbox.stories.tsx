import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'UI/Checkbox',
	argTypes: {
		disabled: {
			defaultValue: false,
			type: { name: 'boolean' },
		},
		// Extraneous prop. Don't need to show it in Storybook controls.
		asChild: {
			table: {
				disable: true,
			},
		},
	},
	component: Checkbox,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Showcase: Story = {
	decorators: [
		Story => (
			<div className='flex space-x-4 items-center'>
				<Story args={{ defaultChecked: false, disabled: false }} />
				<Story args={{ defaultChecked: true, disabled: false }} />
				<Story args={{ defaultChecked: false, disabled: true }} />
				<Story args={{ defaultChecked: true, disabled: true }} />
			</div>
		),
	],
};
