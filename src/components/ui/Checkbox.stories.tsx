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
			<div className='grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1'>
				<Story args={{ defaultChecked: false, disabled: false }} />
				<Story args={{ defaultChecked: true, disabled: false }} />
				<Story args={{ defaultChecked: false, disabled: true }} />
				<Story args={{ defaultChecked: true, disabled: true }} />
				<Story
					args={{
						defaultChecked: false,
						disabled: false,
						label: 'unchecked + label',
					}}
				/>
				<Story
					args={{
						defaultChecked: true,
						disabled: false,
						label: 'checked + label',
					}}
				/>
				<Story
					args={{
						defaultChecked: false,
						disabled: true,
						label: 'unchecked + label + disabled',
					}}
				/>
				<Story
					args={{
						defaultChecked: true,
						disabled: true,
						label: 'checked + label + disabled',
					}}
				/>
			</div>
		),
	],
};
