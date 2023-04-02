import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '~/components/ui';

const meta: Meta<typeof Toggle> = {
	title: 'UI/Toggle',
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
	component: Toggle,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	decorators: [
		Story => (
			<div className='w-full'>
				<Story />
			</div>
		),
	],
};

export const Showcase: Story = {
	decorators: [
		Story => (
			<div className='grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1'>
				<Story args={{ defaultChecked: false, disabled: false }} />
				<Story args={{ defaultChecked: true, disabled: false }} />
				<Story args={{ defaultChecked: false, disabled: true }} />
				<Story args={{ defaultChecked: true, disabled: true }} />
				<Story
					args={{ defaultChecked: false, disabled: false, size: 'large' }}
				/>
				<Story
					args={{ defaultChecked: true, disabled: false, size: 'large' }}
				/>
				<Story
					args={{ defaultChecked: false, disabled: true, size: 'large' }}
				/>
				<Story args={{ defaultChecked: true, disabled: true, size: 'large' }} />
			</div>
		),
	],
};
