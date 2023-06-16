'use client';

import React from 'react';
import { LoadingSpinner } from '~/components/common';
import { LoadingSpinnerProps } from '~/components/common/LoadingSpinner';
import { cx } from '~/utils';

export type ButtonColor = 'primary' | 'error' | 'warning';

export type ButtonVariant = 'filled' | 'outlined' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	loading?: boolean;
	color?: ButtonColor;
	variant?: ButtonVariant;
}

// TODO: Use CVA here maybe? (https://cva.style/docs)

export const baseClassNames =
	'w-min text-sm py-2.5 h-min rounded border px-3 disabled:cursor-not-allowed font-medium transition-colors disabled:bg-neutral-50 disabled:border-gray-200 disabled:text-neutral-400 whitespace-nowrap justify-center items-center flex';

export const variantAndColorClassNames: Record<
	ButtonVariant,
	Record<ButtonColor, string>
> = {
	filled: {
		primary:
			'text-white bg-primary border-primary hover:bg-primary-light hover:border-primary-light focus-visible:outline-primary',
		error:
			'text-white bg-error border-error hover:bg-error-light hover:border-error-light focus-visible:outline-error',
		warning:
			'text-white bg-warning border-warning hover:bg-warning-light hover:border-warning-light focus-visible:outline-warning',
	},
	outlined: {
		primary:
			'text-primary-light hover:text-primary bg-transparent border-primary-lighter hover:border-primary focus-visible:outline-primary',
		error:
			'text-error-light hover:text-error bg-transparent border-error-lighter hover:border-error focus-visible:outline-error',
		warning:
			'text-warning-light hover:text-warning bg-transparent border-warning-lighter hover:border-warning focus-visible:outline-warning',
	},
	ghost: {
		primary:
			'text-primary bg-transparent border-transparent hover:bg-primary-lighter hover:border-primary-lighter focus-visible:outline-primary',
		error:
			'text-error bg-transparent border-transparent hover:bg-error-lighter hover:border-error-lighter focus-visible:outline-error',
		warning:
			'text-warning bg-transparent border-transparent hover:bg-warning-lighter hover:border-warning-lighter focus-visible:outline-warning',
	},
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			color = 'primary',
			variant = 'filled',
			type = 'button',
			loading,
			disabled,
			children,
			className,
			...rest
		} = props;
		return (
			<button
				className={cx(
					baseClassNames,
					variantAndColorClassNames[variant][color],
					{ 'cursor-wait': loading },
					className,
				)}
				type={type}
				ref={ref}
				disabled={disabled}
				{...rest}
			>
				<div className='flex w-full flex-row items-center justify-center'>
					{loading && (
						<div className='mr-2'>
							<LoadingSpinner
								size='small'
								color={getLoadingSpinnerColor({ variant, disabled, color })}
							/>
						</div>
					)}
					{children}
				</div>
			</button>
		);
	},
);

function getLoadingSpinnerColor(
	props: Pick<ButtonProps, 'variant' | 'disabled' | 'color'>,
): LoadingSpinnerProps['color'] {
	const { variant, disabled, color } = props;
	if (disabled) return 'muted';
	if (variant === 'filled') return 'light';
	if (variant === 'outlined' || variant === 'ghost') return color;
	return 'light';
}
