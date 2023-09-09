import type { Meta, StoryFn } from '@storybook/react';

import { TextArea } from '~/components/ui/TextArea';

const meta: Meta<typeof TextArea> = {
	title: 'UI/TextArea',
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
	component: TextArea,
	tags: ['autodocs'],
};

export default meta;

export const DefaultTextArea: StoryFn<typeof TextArea> = args => {
	return <TextArea {...args} />;
};

export const TextAreaWithFixedWidth: StoryFn<typeof TextArea> = args => {
	return (
		<div className='w-40'>
			<TextArea {...args} />
		</div>
	);
};

export const DisabledTextArea: StoryFn<typeof TextArea> = args => {
	return (
		<TextArea
			disabled
			{...args}
		/>
	);
};

export const DisabledTextAreaWithPlaceholder: StoryFn<
	typeof TextArea
> = args => {
	return (
		<TextArea
			disabled
			placeholder='Placeholder'
			{...args}
		/>
	);
};

export const TextAreaWithDefaultValue: StoryFn<typeof TextArea> = args => {
	return (
		<TextArea
			placeholder='Placeholder'
			defaultValue='Default value'
			{...args}
		/>
	);
};

export const TextAreaWithLabel: StoryFn<typeof TextArea> = args => {
	return (
		<TextArea
			label='Label'
			{...args}
		/>
	);
};

export const DisabledTextAreaWithLabel: StoryFn<typeof TextArea> = args => {
	return (
		<TextArea
			disabled
			label='Label'
			{...args}
		/>
	);
};

export const TextAreaWithErrorAndLabel: StoryFn<typeof TextArea> = args => {
	return (
		<TextArea
			label='Label'
			error='Error message'
			{...args}
		/>
	);
};

export const TextAreaWithAVeryLongError: StoryFn<typeof TextArea> = args => {
	return (
		<div className='w-64'>
			<TextArea
				error='This is a very long error that should wrap to the next line.'
				{...args}
			/>
		</div>
	);
};

const disabledVariations: boolean[] = [false, true];

const labelVariations: (string | undefined)[] = [undefined, 'Label'];

const errorVariations: (string | undefined)[] = [undefined, 'Error message'];

const defaultValueVariations: (string | undefined)[] = [
	undefined,
	'Default value',
];

const allVariations = disabledVariations
	.map(disabled => {
		return labelVariations.map(label => {
			return defaultValueVariations.map(defaultValue => {
				return errorVariations.map(error => {
					return {
						label,
						error,
						disabled,
						defaultValue,
						placeholder: 'Placeholder',
					};
				});
			});
		});
	})
	.flat(4);

export const Showcase: StoryFn<typeof TextArea> = args => {
	return (
		<div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
			{allVariations.map(variation => {
				const { defaultValue, disabled, error, label, placeholder } = variation;
				return (
					<TextArea
						key={JSON.stringify(variation)}
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
