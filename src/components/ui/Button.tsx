'use client';

import React from 'react';
import { cx } from '~/utils';

export type ButtonColor = 'primary' | 'error' | 'warning';

export type ButtonVariant = 'filled' | 'outlined' | 'ghost';

export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	size?: ButtonSize;
	color?: ButtonColor;
	variant?: ButtonVariant;
}

// TODO: Use CVA here maybe? (https://cva.style/docs)

export const baseClassNames =
	'w-min h-min rounded border px-3 disabled:cursor-not-allowed font-medium transition-colors disabled:bg-neutral-50 disabled:border-gray-200 disabled:text-neutral-400 whitespace-nowrap justify-center items-center flex';

export const sizeClassNames: Record<ButtonSize, string> = {
	small: 'text-sm py-1.5',
	medium: 'text-sm py-2.5',
	large: 'text-base py-3.5',
};

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
			size = 'medium',
			color = 'primary',
			variant = 'filled',
			type = 'button',
			children,
			className,
			...rest
		} = props;
		return (
			<button
				className={cx(
					baseClassNames,
					sizeClassNames[size],
					variantAndColorClassNames[variant][color],
					className,
				)}
				type={type}
				ref={ref}
				{...rest}
			>
				<div className='w-full'>{children}</div>
			</button>
		);
	},
);
