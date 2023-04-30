import type { Meta, StoryFn } from '@storybook/react';

import {
	Select,
	SelectOption,
	SelectOptionSeparator,
} from '~/components/ui/Select';

const meta: Meta<typeof Select> = {
	title: 'UI/Select',
	component: Select,
	argTypes: {
		onValueChange: {
			action: 'Value changed',
			table: { defaultValue: { summary: 'undefined' } },
		},
		label: {
			table: { defaultValue: { summary: 'undefined' } },
		},
		disabled: {
			table: { defaultValue: { summary: 'false' } },
			control: { type: 'boolean' },
		},
		placeholder: {
			table: { defaultValue: { summary: 'undefined' } },
		},
		defaultValue: {
			table: { defaultValue: { summary: 'undefined' } },
			control: { type: 'text' },
		},
		// Extraneous prop. Don't need to show it in Storybook controls.
		className: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;

export const DefaultSelect: StoryFn<typeof Select> = args => {
	return (
		<Select {...args}>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithFixedWidth: StoryFn<typeof Select> = args => {
	return (
		<Select
			className='w-48'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithPlaceholder: StoryFn<typeof Select> = args => {
	return (
		<Select
			placeholder='Placeholder'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithDisabledOptions: StoryFn<typeof Select> = args => {
	return (
		<Select
			placeholder='Placeholder'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption
				value='value-2'
				disabled
			>
				Value 2
			</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
			<SelectOption
				value='value-5'
				disabled
			>
				Value 5
			</SelectOption>
			<SelectOption value='value-6'>Value 6</SelectOption>
		</Select>
	);
};

export const DisabledSelectWithPlaceholder: StoryFn<typeof Select> = args => {
	return (
		<Select
			placeholder='Placeholder'
			disabled
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithLabel: StoryFn<typeof Select> = args => {
	return (
		<Select
			label='Label'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const DisabledSelectWithLabel: StoryFn<typeof Select> = args => {
	return (
		<Select
			label='Label'
			disabled
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithDefaultValue: StoryFn<typeof Select> = args => {
	return (
		<Select
			placeholder='Placeholder'
			defaultValue='value-2'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithScrollableOptions: StoryFn<typeof Select> = args => {
	return (
		<Select
			placeholder='Placeholder'
			className='w-64'
			{...args}
		>
			<SelectOption value='value-1'>Value 1. Try scrolling</SelectOption>
			<SelectOption value='value-2'>Value 2. Try scrolling</SelectOption>
			<SelectOption value='value-3'>Value 3. Try scrolling</SelectOption>
			<SelectOption value='value-4'>Value 4. Try scrolling</SelectOption>
			<SelectOption value='value-5'>Value 5. Try scrolling</SelectOption>
			<SelectOption value='value-6'>Value 6. Try scrolling</SelectOption>
			<SelectOption value='value-7'>Value 7. Try scrolling</SelectOption>
			<SelectOption value='value-8'>Value 8. Try scrolling</SelectOption>
			<SelectOption value='value-9'>Value 9. Try scrolling</SelectOption>
			<SelectOption value='value-10'>Value 10. Try scrolling</SelectOption>
			<SelectOption value='value-11'>Value 11. Try scrolling</SelectOption>
			<SelectOption value='value-12'>Value 12. Try scrolling</SelectOption>
			<SelectOption value='value-13'>Value 13. Try scrolling</SelectOption>
			<SelectOption value='value-14'>Value 14. Try scrolling</SelectOption>
			<SelectOption value='value-15'>Value 15. Try scrolling</SelectOption>
			<SelectOption value='value-16'>Value 16. Try scrolling</SelectOption>
		</Select>
	);
};

export const SelectWithOverflowingOptions: StoryFn<typeof Select> = args => {
	return (
		<Select
			placeholder='Placeholder'
			className='w-48'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>
				Value 6 with very long text that should wrap to the next line.
			</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithOverflowingPlaceholder: StoryFn<
	typeof Select
> = args => {
	return (
		<Select
			placeholder='Placeholder that is very long'
			className='w-48'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOption value='value-4'>Value 4</SelectOption>
		</Select>
	);
};

export const SelectWithOptionSeperators: StoryFn<typeof Select> = args => {
	return (
		<Select
			placeholder='Placeholder'
			className='w-48'
			{...args}
		>
			<SelectOption value='value-1'>Value 1</SelectOption>
			<SelectOption value='value-2'>Value 2</SelectOption>
			<SelectOption value='value-3'>Value 3</SelectOption>
			<SelectOptionSeparator />
			<SelectOption value='value-4'>Value 4</SelectOption>
			<SelectOption value='value-5'>Value 5</SelectOption>
			<SelectOption value='value-6'>Value 6</SelectOption>
			<SelectOptionSeparator />
			<SelectOption value='value-7'>Value 7</SelectOption>
			<SelectOption value='value-8'>Value 8</SelectOption>
			<SelectOption value='value-9'>Value 9</SelectOption>
		</Select>
	);
};
