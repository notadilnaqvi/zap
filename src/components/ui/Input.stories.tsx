import type { Meta, StoryFn } from '@storybook/react';

import { Input, InputSize } from '~/components/ui/Input';

const meta: Meta<typeof Input> = {
	title: 'UI/Input',
	argTypes: {
		label: {
			table: { defaultValue: { summary: 'undefined' } },
		},
		disabled: {
			table: { defaultValue: { summary: 'false' } },
		},
		error: {
			table: { defaultValue: { summary: 'undefined' } },
		},
		placeholder: {
			table: { defaultValue: { summary: 'undefined' } },
		},
	},
	component: Input,
	tags: ['autodocs'],
};

export default meta;

export const DefaultInput: StoryFn<typeof Input> = args => {
	return <Input {...args} />;
};

export const InputWithFixedWidth: StoryFn<typeof Input> = args => {
	return (
		<div className='w-40'>
			<Input {...args} />
		</div>
	);
};

export const SmallDisabledInput: StoryFn<typeof Input> = args => {
	return (
		<Input
			size='small'
			disabled
			{...args}
		/>
	);
};

export const LargeDisabledInputWithPlaceholder: StoryFn<
	typeof Input
> = args => {
	return (
		<Input
			disabled
			size='large'
			placeholder='Placeholder'
			{...args}
		/>
	);
};

export const InputWithDefaultValue: StoryFn<typeof Input> = args => {
	return (
		<Input
			placeholder='Placeholder'
			defaultValue='Default value'
			{...args}
		/>
	);
};

export const InputWithLabel: StoryFn<typeof Input> = args => {
	return (
		<Input
			label='Label'
			{...args}
		/>
	);
};

export const LargeDisabledInputWithLabel: StoryFn<typeof Input> = args => {
	return (
		<Input
			disabled
			size='large'
			label='Label'
			{...args}
		/>
	);
};

export const SmallInputWithErrorAndLabel: StoryFn<typeof Input> = args => {
	return (
		<Input
			size='small'
			label='Label'
			error='Error message'
			{...args}
		/>
	);
};

export const InputWithAVeryLongError: StoryFn<typeof Input> = args => {
	return (
		<div className='w-64'>
			<Input
				error='This is a very long error that should wrap to the next line.'
				{...args}
			/>
		</div>
	);
};

const disabledVariations: boolean[] = [false, true];

const labelVariations: (string | undefined)[] = [undefined, 'Label'];

const sizeVariations: InputSize[] = ['small', 'medium', 'large'];

const errorVariations: (string | undefined)[] = [undefined, 'Error message'];

const defaultValueVariations: (string | undefined)[] = [
	undefined,
	'Default value',
];

const allVariations = disabledVariations
	.map(disabled => {
		return labelVariations.map(label => {
			return sizeVariations.map(size => {
				return defaultValueVariations.map(defaultValue => {
					return errorVariations.map(error => {
						return {
							label,
							error,
							size,
							disabled,
							defaultValue,
							placeholder: 'Placeholder',
						};
					});
				});
			});
		});
	})
	.flat(4);

export const Showcase: StoryFn<typeof Input> = args => {
	return (
		<div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
			{allVariations.map(variation => {
				const { defaultValue, disabled, error, label, placeholder, size } =
					variation;
				return (
					<Input
						key={JSON.stringify(variation)}
						size={size}
						label={label}
						error={error}
						disabled={disabled}
						defaultValue={defaultValue}
						placeholder={placeholder}
						{...args}
					/>
				);
			})}
		</div>
	);
};
