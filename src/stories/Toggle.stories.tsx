import type { Meta, StoryFn } from '@storybook/react';

import { Label, Toggle } from '~/components/ui';

const meta: Meta<typeof Toggle> = {
	title: 'UI/Toggle',
	argTypes: {
		disabled: {
			table: { defaultValue: { summary: 'false' } },
			control: { type: 'boolean' },
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

export const DefaultToggle: StoryFn<typeof Toggle> = args => {
	return <Toggle {...args} />;
};

export const CheckedToggle: StoryFn<typeof Toggle> = args => {
	return (
		<Toggle
			defaultChecked
			{...args}
		/>
	);
};

export const DisabledToggle: StoryFn<typeof Toggle> = args => {
	return (
		<Toggle
			disabled
			{...args}
		/>
	);
};

export const DisabledCheckedToggle: StoryFn<typeof Toggle> = args => {
	return (
		<Toggle
			defaultChecked
			disabled
			{...args}
		/>
	);
};

export const TogglesWithLabel: StoryFn<typeof Toggle> = args => {
	return (
		<div className='flex w-72 flex-col space-y-2'>
			<div className='flex flex-row-reverse items-center justify-between'>
				<Toggle
					{...args}
					id='id-1'
				/>
				<Label htmlFor='id-1'>Show notifications</Label>
			</div>
			<div className='flex flex-row-reverse items-center justify-between'>
				<Toggle
					{...args}
					id='id-2'
				/>
				<Label htmlFor='id-2'>Send emails</Label>
			</div>
			<div className='flex flex-row-reverse items-center justify-between'>
				<Toggle
					disabled
					checked
					{...args}
					id='id-3'
				/>
				<Label htmlFor='id-3'>Send me new offers</Label>
			</div>
			<div className='flex flex-row-reverse items-center justify-between'>
				<Toggle
					{...args}
					id='id-4'
				/>
				<Label htmlFor='id-4'>Send SMS texts</Label>
			</div>
			<div className='flex flex-row-reverse items-center justify-between'>
				<Toggle
					disabled
					{...args}
					id='id-5'
				/>
				<Label htmlFor='id-5'>Send me latest updates</Label>
			</div>
		</div>
	);
};

export const Showcase: StoryFn<typeof Toggle> = args => {
	return (
		<div className='flex flex-col space-y-3'>
			<Toggle {...args} />
			<Toggle
				defaultChecked
				{...args}
			/>
			<Toggle
				disabled
				{...args}
			/>
			<Toggle
				disabled
				defaultChecked
				{...args}
			/>
		</div>
	);
};
