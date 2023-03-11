import React from 'react';
import { cx } from '~/utils';

type ButtonColor = 'primary' | 'error' | 'warning';

type ButtonVariant = 'filled' | 'outlined' | 'ghost';

type ButtonSize = 'small' | 'default' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	size?: ButtonSize;
	color?: ButtonColor;
	variant?: ButtonVariant;
}

// TODO: Use CVA here maybe? (https://cva.style/docs)

const baseClassNames =
	'rounded border px-3 disabled:cursor-not-allowed font-medium transition-colors disabled:bg-neutral-50 disabled:border-gray-200 disabled:text-neutral-400';

const sizeClassNames = {
	small: 'text-sm py-1.5',
	default: 'text-sm py-2.5',
	large: 'text-base py-3.5',
};

const variantAndColorClassNames: Record<
	ButtonVariant,
	Record<ButtonColor, string>
> = {
	filled: {
		primary:
			'text-white bg-primary border-primary hover:bg-primary-light hover:border-primary-light',
		error:
			'text-white bg-error border-error hover:bg-error-light hover:border-error-light',
		warning:
			'text-white bg-warning border-warning hover:bg-warning-light hover:border-warning-light',
	},
	outlined: {
		primary:
			'text-primary-light hover:text-primary bg-transparent border-primary-lighter hover:border-primary',
		error:
			'text-error-light hover:text-error bg-transparent border-error-lighter hover:border-error',
		warning:
			'text-warning-light hover:text-warning bg-transparent border-warning-lighter hover:border-warning',
	},
	ghost: {
		primary:
			'text-primary bg-transparent border-transparent hover:bg-primary-lighter hover:border-primary-lighter',
		error:
			'text-error bg-transparent border-transparent hover:bg-error-lighter hover:border-error-lighter',
		warning:
			'text-warning bg-transparent border-transparent hover:bg-warning-lighter hover:border-warning-lighter',
	},
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			size = 'default',
			color = 'primary',
			variant = 'filled',
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
				ref={ref}
				{...rest}
			>
				<div className='w-full'>{children}</div>
			</button>
		);
	},
);
