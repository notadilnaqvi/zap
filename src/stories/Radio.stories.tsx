import type { Meta, StoryFn } from '@storybook/react';

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

export const DefaultRadio: StoryFn<typeof Radio> = _args => {
	return (
		<Radio>
			<RadioItem value='value-1'>Value 1</RadioItem>
			<RadioItem value='value-2'>Value 2</RadioItem>
			<RadioItem value='value-3'>Value 3</RadioItem>
			<RadioItem value='value-4'>Value 4</RadioItem>
		</Radio>
	);
};

export const RadioWithDisabledItems: StoryFn<typeof Radio> = _args => {
	return (
		<Radio>
			<RadioItem value='value-1'>Value 1</RadioItem>
			<RadioItem
				value='value-2'
				disabled
			>
				Value 2
			</RadioItem>
			<RadioItem value='value-3'>Value 3</RadioItem>
			<RadioItem
				value='value-4'
				disabled
				checked
			>
				Value 4
			</RadioItem>
		</Radio>
	);
};

export const RadioWithDefaultItemChecked: StoryFn<typeof Radio> = _args => {
	return (
		<Radio defaultValue='value-3'>
			<RadioItem value='value-1'>Value 1</RadioItem>
			<RadioItem value='value-2'>Value 2</RadioItem>
			<RadioItem value='value-3'>Value 3</RadioItem>
			<RadioItem value='value-4'>Value 4</RadioItem>
		</Radio>
	);
};

export const RadioWithCustomSpacing: StoryFn<typeof Radio> = _args => {
	return (
		<Radio className='space-y-6'>
			<RadioItem value='value-1'>Value 1</RadioItem>
			<RadioItem value='value-2'>Value 2</RadioItem>
			<RadioItem value='value-3'>Value 3</RadioItem>
			<RadioItem value='value-4'>Value 4</RadioItem>
		</Radio>
	);
};

export const RadioWithItemsInARow: StoryFn<typeof Radio> = _args => {
	return (
		<Radio className='flex-row space-x-4 space-y-0'>
			<RadioItem value='value-1'>Value 1</RadioItem>
			<RadioItem value='value-2'>Value 2</RadioItem>
			<RadioItem value='value-3'>Value 3</RadioItem>
			<RadioItem value='value-4'>Value 4</RadioItem>
		</Radio>
	);
};

export const DisabledRadio: StoryFn<typeof Radio> = _args => {
	return (
		<Radio disabled>
			<RadioItem value='value-1'>Value 1</RadioItem>
			<RadioItem value='value-2'>Value 2</RadioItem>
			<RadioItem value='value-3'>Value 3</RadioItem>
			<RadioItem value='value-4'>Value 4</RadioItem>
		</Radio>
	);
};

export const Showcase: StoryFn<typeof Radio> = _args => {
	return (
		<Radio defaultValue='value-3'>
			<RadioItem value='value-1'>Value 1</RadioItem>
			<RadioItem
				value='value-2'
				disabled
			>
				Value 2
			</RadioItem>
			<RadioItem value='value-3'>Value 3</RadioItem>
			<RadioItem
				value='value-4'
				disabled
			>
				Value 4
			</RadioItem>
			<RadioItem
				value='value-5'
				disabled
				checked
			>
				Value 5
			</RadioItem>
			<RadioItem value='value-6'>
				Value 6 with very long text that should wrap to the next line. The
				maximum width of such text is 65ch by default.
			</RadioItem>
			<RadioItem value='value-7'>Value 7</RadioItem>
		</Radio>
	);
};
