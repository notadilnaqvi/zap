import type { Meta, StoryObj } from '@storybook/react';

import { Radio, RadioItem } from '~/components/ui';

const meta: Meta<typeof Radio> = {
	title: 'UI/Radio',
	argTypes: {
		// Extraneous prop. Don't need to show it in Storybook controls.
		asChild: {
			table: {
				disable: true,
			},
		},
	},
	component: Radio,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Showcase: Story = {
	render: _args => (
		<Radio defaultValue='2'>
			<RadioItem value='1'>Option 1</RadioItem>
			<RadioItem value='2'>Option 2</RadioItem>
			<RadioItem
				value='3'
				disabled
			>
				Option 3
			</RadioItem>
			<RadioItem
				value='4'
				checked
				disabled
			>
				Option 4
			</RadioItem>
		</Radio>
	),
};
