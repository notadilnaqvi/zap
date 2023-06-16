import type { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonColor, ButtonVariant } from '~/components/ui/Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			table: { defaultValue: { summary: 'false' } },
		},
		loading: {
			table: { defaultValue: { summary: 'false' } },
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

export const ButtonLoading: StoryFn<typeof Button> = args => {
	return (
		<Button
			loading={true}
			{...args}
		>
			Button
		</Button>
	);
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

export const FullWidthButtonLoading: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-full'
			loading={true}
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

export const ButtonWithWarningColor: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			color='warning'
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

export const GhostButtonWithErrorColor: StoryFn<typeof Button> = args => {
	return (
		<Button
			className='w-min'
			color='error'
			variant='ghost'
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

export const OutlinedDisabledButtonWithErrorColor: StoryFn<
	typeof Button
> = args => {
	return (
		<Button
			className='w-min'
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

const colorVariations: ButtonColor[] = ['primary', 'error', 'warning'];

const loadingVariations: boolean[] = [false, true];

const variantVariations: ButtonVariant[] = ['filled', 'outlined', 'ghost'];

const allVariations = disabledVariations
	.map(disabled => {
		return loadingVariations.map(loading => {
			return colorVariations.map(color => {
				return variantVariations.map(variant => {
					return {
						variant,
						color,
						disabled,
						loading,
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
				const { color, disabled, variant, loading } = variation;
				return (
					<Button
						key={JSON.stringify(variation)}
						color={color}
						variant={variant}
						disabled={disabled}
						loading={loading}
						{...args}
					>
						Button
					</Button>
				);
			})}
		</div>
	);
};
