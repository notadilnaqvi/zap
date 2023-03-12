import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonColor, ButtonSize, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
	},
};

const disabledVariations: boolean[] = [false, true];

const sizeVariations: ButtonSize[] = ['small', 'default', 'large'];

const colorVariations: ButtonColor[] = ['primary', 'error', 'warning'];

const variantVariations: ButtonVariant[] = ['filled', 'outlined', 'ghost'];

const allVariations = disabledVariations
	.map(disabled => {
		return sizeVariations.map(size => {
			return colorVariations.map(color => {
				return variantVariations.map(variant => {
					return {
						children: (
							<span className='capitalize'>
								{variant} {color} {size} {disabled ? '(disabled)' : ''}
							</span>
						),
						variant,
						color,
						size,
						disabled,
					};
				});
			});
		});
	})
	.flat(3); // Update this when the number of "levels" of variations changes.

export const Showcase: Story = {
	decorators: [
		Story => (
			<div className='grid grid-cols-3 gap-4'>
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
