import type { Meta, StoryObj } from '@storybook/react';

import { ButtonColor, ButtonSize, ButtonVariant } from './Button';
import { ButtonLink } from './ButtonLink';

const meta: Meta<typeof ButtonLink> = {
	title: 'UI/ButtonLink',
	component: ButtonLink,
	tags: ['autodocs'],
	args: {
		children: 'Button Link',
		href: 'https://example.com',
	},
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
	decorators: [
		Story => (
			<div className='flex w-min justify-center'>
				<Story />
			</div>
		),
	],
};

const sizeVariations: ButtonSize[] = ['small', 'default', 'large'];

const colorVariations: ButtonColor[] = ['primary', 'error', 'warning'];

const variantVariations: ButtonVariant[] = ['filled', 'outlined', 'ghost'];

const allVariations = sizeVariations
	.map(size => {
		return colorVariations.map(color => {
			return variantVariations.map(variant => {
				return {
					children: (
						<span>
							{variant} + {color} + {size}
						</span>
					),
					variant,
					color,
					href: 'https://example.com',
					size,
				};
			});
		});
	})
	.flat(2); // Update this when the number of "levels" of variations changes.

export const Showcase: Story = {
	decorators: [
		Story => (
			<div className='grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'>
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
