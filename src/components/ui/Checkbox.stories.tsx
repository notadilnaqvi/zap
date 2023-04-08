import type { Meta, StoryFn } from '@storybook/react';

import { Checkbox } from '~/components/ui/Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'UI/Checkbox',
	argTypes: {
		disabled: {
			table: { defaultValue: { summary: 'false' } },
			control: { type: 'boolean' },
		},
		label: {
			table: { defaultValue: { summary: 'undefined' } },
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

export const DefaultCheckbox: StoryFn<typeof Checkbox> = args => {
	return <Checkbox {...args}>Button Link</Checkbox>;
};

export const CheckboxWithLabel: StoryFn<typeof Checkbox> = args => {
	return (
		<Checkbox
			label='Label'
			{...args}
		>
			Button Link
		</Checkbox>
	);
};

export const DisabledCheckbox: StoryFn<typeof Checkbox> = args => {
	return (
		<Checkbox
			disabled
			{...args}
		>
			Button Link
		</Checkbox>
	);
};

export const DisabledCheckboxWithLabel: StoryFn<typeof Checkbox> = args => {
	return (
		<Checkbox
			label='Label'
			disabled
			{...args}
		>
			Button Link
		</Checkbox>
	);
};

export const DisabledCheckedCheckboxWithLabel: StoryFn<
	typeof Checkbox
> = args => {
	return (
		<Checkbox
			label='Label'
			disabled
			defaultChecked
			{...args}
		>
			Button Link
		</Checkbox>
	);
};

export const CheckboxWithVeryLongLabel: StoryFn<typeof Checkbox> = args => {
	return (
		<Checkbox
			label='This is a very long label that should wrap to the next line. The maximum width of a label is 65ch by default.'
			{...args}
		>
			Button Link
		</Checkbox>
	);
};

const disabledVariations: boolean[] = [false, true];

const checkedVariations: boolean[] = [false, true];

const labelVariations: (string | undefined)[] = [undefined, 'Label'];

const allVariations = disabledVariations
	.map(disabled => {
		return checkedVariations.map(defaultChecked => {
			return labelVariations.map(label => {
				return {
					disabled,
					defaultChecked,
					label,
				};
			});
		});
	})
	.flat(2);

export const Showcase: StoryFn<typeof Checkbox> = args => {
	return (
		<div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
			{allVariations.map(variation => {
				const { defaultChecked, disabled, label } = variation;
				return (
					<Checkbox
						key={JSON.stringify(variation)}
						disabled={disabled}
						defaultChecked={defaultChecked}
						label={label}
						{...args}
					/>
				);
			})}
		</div>
	);
};
