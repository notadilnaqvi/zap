import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputSize } from './Input';

const meta: Meta<typeof Input> = {
	title: 'UI/Input',
	argTypes: {
		disabled: {
			defaultValue: false,
			type: { name: 'boolean' },
		},
		error: {
			defaultValue: 'null',
			type: { name: 'string' },
		},
		placeholder: {
			defaultValue: 'Placeholder',
			type: { name: 'string' },
		},
	},
	component: Input,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	decorators: [
		Story => (
			<div className='flex w-full justify-center'>
				<Story />
			</div>
		),
	],
};

const disabledVariations: boolean[] = [false, true];

const labelVariations: (string | undefined)[] = [undefined, 'With Label'];

const sizeVariations: InputSize[] = ['small', 'default', 'large'];

const errorVariations: (string | null | undefined)[] = [
	null,
	'An error message',
];

const defaultValueVariations: (string | undefined)[] = [
	undefined,
	'default value',
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
							defaultValue:
								defaultValue &&
								`${defaultValue} + ${size}${disabled ? ' + Disabled' : ''}${
									error ? ' + error' : ''
								}`,
							placeholder: `${size}${disabled ? ' + disabled' : ''}${
								error ? ' + error' : ''
							}`,
						};
					});
				});
			});
		});
	})
	.flat(4); // Update this when the number of "levels" of variations changes.

export const Showcase: Story = {
	decorators: [
		Story => (
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>
				{allVariations.map(variation => {
					return (
						<Story
							args={{ ...variation }}
							key={JSON.stringify(variation)}
						/>
					);
				})}
			</div>
		),
	],
};
