import type { Meta, StoryFn } from '@storybook/react';

import { ButtonColor, ButtonSize, ButtonVariant } from '~/components/ui/Button';
import { ButtonLink } from '~/components/ui/ButtonLink';

const meta: Meta<typeof ButtonLink> = {
	title: 'UI/ButtonLink',
	component: ButtonLink,
	tags: ['autodocs'],
	args: {
		children: 'Button Link',
		href: '#',
	},
	argTypes: {
		size: {
			table: { defaultValue: { summary: 'medium' } },
		},
		color: {
			table: { defaultValue: { summary: 'primary' } },
		},
		variant: {
			table: { defaultValue: { summary: 'filled' } },
		},
		// Following are extraneous props. Don't need to show these in Storybook
		// controls
		as: {
			table: {
				disable: true,
			},
		},
		replace: {
			table: {
				disable: true,
			},
		},
		scroll: {
			table: {
				disable: true,
			},
		},
		passHref: {
			table: {
				disable: true,
			},
		},
		prefetch: {
			table: {
				disable: true,
			},
		},
		locale: {
			table: {
				disable: true,
			},
		},
		shallow: {
			table: {
				disable: true,
			},
		},
		legacyBehavior: {
			table: {
				disable: true,
			},
		},
		onMouseEnter: {
			table: {
				disable: true,
			},
		},
		onTouchStart: {
			table: {
				disable: true,
			},
		},
		onClick: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

export const DefaultButtonLink: StoryFn<typeof ButtonLink> = args => {
	return <ButtonLink {...args}>Button Link</ButtonLink>;
};

export const ButtonLinkOpenInNewTab: StoryFn<typeof ButtonLink> = args => {
	return (
		<ButtonLink
			target='_blank'
			rel='noopener noreferrer'
			{...args}
		>
			Button Link
		</ButtonLink>
	);
};

export const ButtonLinkWithExternalLink: StoryFn<typeof ButtonLink> = args => {
	return (
		<ButtonLink
			{...args}
			href='https://example.com'
		>
			Button Link
		</ButtonLink>
	);
};

export const FullWidthButtonLink: StoryFn<typeof ButtonLink> = args => {
	return (
		<ButtonLink
			className='w-full'
			{...args}
		>
			ButtonLink
		</ButtonLink>
	);
};

export const OutlinedButtonLink: StoryFn<typeof ButtonLink> = args => {
	return (
		<ButtonLink
			className='w-min'
			variant='outlined'
			{...args}
		>
			Button Link
		</ButtonLink>
	);
};

export const GhostButtonLink: StoryFn<typeof ButtonLink> = args => {
	return (
		<ButtonLink
			className='w-min'
			variant='ghost'
			{...args}
		>
			Button Link
		</ButtonLink>
	);
};

export const SmallButtonLinkWithWarningColor: StoryFn<
	typeof ButtonLink
> = args => {
	return (
		<ButtonLink
			className='w-min'
			color='warning'
			size='small'
			{...args}
		>
			Button Link
		</ButtonLink>
	);
};

export const OutlinedButtonLinkWithErrorColor: StoryFn<
	typeof ButtonLink
> = args => {
	return (
		<ButtonLink
			className='w-min'
			color='error'
			variant='outlined'
			{...args}
		>
			Button Link
		</ButtonLink>
	);
};

export const LargeGhostButtonLinkWithErrorColor: StoryFn<
	typeof ButtonLink
> = args => {
	return (
		<ButtonLink
			className='w-min'
			color='error'
			variant='ghost'
			size='large'
			{...args}
		>
			Button Link
		</ButtonLink>
	);
};

const sizeVariations: ButtonSize[] = ['small', 'medium', 'large'];

const colorVariations: ButtonColor[] = ['primary', 'error', 'warning'];

const variantVariations: ButtonVariant[] = ['filled', 'outlined', 'ghost'];

const allVariations = sizeVariations
	.map(size => {
		return colorVariations.map(color => {
			return variantVariations.map(variant => {
				return {
					variant,
					color,
					size,
				};
			});
		});
	})
	.flat(2);

export const Showcase: StoryFn<typeof ButtonLink> = args => {
	return (
		<div className='grid grid-cols-3 gap-4 sm:grid-cols-1'>
			{allVariations.map(variation => {
				const { color, size, variant } = variation;
				return (
					<ButtonLink
						key={JSON.stringify(variation)}
						size={size}
						color={color}
						variant={variant}
						{...args}
					>
						Button Link
					</ButtonLink>
				);
			})}
		</div>
	);
};
