import type { Meta, StoryFn } from '@storybook/react';

import { Input } from '~/components/ui/Input';

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

export const DisabledInput: StoryFn<typeof Input> = args => {
	return (
		<Input
			disabled
			{...args}
		/>
	);
};

export const DisabledInputWithPlaceholder: StoryFn<typeof Input> = args => {
	return (
		<Input
			disabled
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

export const DisabledInputWithLabel: StoryFn<typeof Input> = args => {
	return (
		<Input
			disabled
			label='Label'
			{...args}
		/>
	);
};

export const InputWithErrorAndLabel: StoryFn<typeof Input> = args => {
	return (
		<Input
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

const errorVariations: (string | undefined)[] = [undefined, 'Error message'];

const typeVariations: ('text' | 'password')[] = ['text', 'password'];

const defaultValueVariations: (string | undefined)[] = [
	undefined,
	'Default value',
];

const allVariations = disabledVariations
	.map(disabled => {
		return labelVariations.map(label => {
			return defaultValueVariations.map(defaultValue => {
				return errorVariations.map(error => {
					return typeVariations.map(type => {
						return {
							type,
							label: type === 'password' && label ? 'Password' : label,
							error,
							disabled,
							defaultValue,
							placeholder: type === 'password' ? 'Password' : 'Placeholder',
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
				const { defaultValue, disabled, error, label, placeholder, type } =
					variation;
				return (
					<Input
						key={JSON.stringify(variation)}
						label={label}
						error={error}
						disabled={disabled}
						defaultValue={defaultValue}
						placeholder={placeholder}
						type={type}
						{...args}
					/>
				);
			})}
		</div>
	);
};
