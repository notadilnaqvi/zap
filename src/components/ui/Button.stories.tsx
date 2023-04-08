import type { Meta, StoryFn } from '@storybook/react';

import {
	Button,
	ButtonColor,
	ButtonSize,
	ButtonVariant,
} from '~/components/ui/Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			table: { defaultValue: { summary: 'false' } },
		},
		size: {
			table: { defaultValue: { summary: 'medium' } },
		},
		color: {
			table: { defaultValue: { summary: 'primary' } },
		},
		variant: {
			table: { defaultValue: { summary: 'filled' } },
		},
		onClick: {
			action: 'Button clicked',
		},
	},
};

export default meta;

export const DefaultButton: StoryFn<typeof Button> = args => {
	return <Button {...args}>Button</Button>;
};

export const FullWidthButton: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-full'
			{...args}
		>
			Button
		</Button>
	);
};

export const OutlinedButton: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			variant='outlined'
			{...args}
		>
			Button
		</Button>
	);
};

export const GhostButton: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			variant='ghost'
			{...args}
		>
			Button
		</Button>
	);
};

export const SmallButtonWithWarningColor: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			color='warning'
			size='small'
			{...args}
		>
			Button
		</Button>
	);
};

export const OutlinedButtonWithErrorColor: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			color='error'
			variant='outlined'
			{...args}
		>
			Button
		</Button>
	);
};

export const LargeGhostButtonWithErrorColor: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			color='error'
			variant='ghost'
			size='large'
			{...args}
		>
			Button
		</Button>
	);
};

export const DisabledButton: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			disabled
			{...args}
		>
			Button
		</Button>
	);
};

export const SmallDisabledButton: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			size='small'
			disabled
			{...args}
		>
			Button
		</Button>
	);
};

export const LargeOutlinedDisabledButtonWithErrorColor: StoryFn<
	typeof Button
> = args => {
	return (
		<Button
			className='w-min'
			size='large'
			color='error'
			variant='outlined'
			disabled
			{...args}
		>
			Button
		</Button>
	);
};

const disabledVariations: boolean[] = [false, true];

const sizeVariations: ButtonSize[] = ['small', 'medium', 'large'];

const colorVariations: ButtonColor[] = ['primary', 'error', 'warning'];

const variantVariations: ButtonVariant[] = ['filled', 'outlined', 'ghost'];

const allVariations = disabledVariations
	.map(disabled => {
		return sizeVariations.map(size => {
			return colorVariations.map(color => {
				return variantVariations.map(variant => {
					return {
						variant,
						color,
						size,
						disabled,
					};
				});
			});
		});
	})
	.flat(3);

export const Showcase: StoryFn<typeof Button> = args => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			{allVariations.map(variation => {
				const { color, disabled, size, variant } = variation;
				return (
					<Button
						key={JSON.stringify(variation)}
						size={size}
						color={color}
						variant={variant}
						disabled={disabled}
						{...args}
					>
						Button
					</Button>
				);
			})}
		</div>
	);
};
