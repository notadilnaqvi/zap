'use client';

import React, { useId } from 'react';

import { InfoIcon } from '~/components/icons';
import { Label } from '~/components/ui';
import { cx } from '~/utils';

export type InputSize = 'small' | 'medium' | 'large';

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	label?: string;
	error?: string;
	disabled?: boolean;
	size?: InputSize;
}

const baseClassNames =
	'peer w-full bg-white text-gray-900 border border-gray-400 disabled:border-gray-300 rounded px-3 disabled:cursor-not-allowed disabled:bg-gray-100 font-normal focus-visible:ring-2 ring-offset-2 focus-visible:ring-primary outline-none transition-colors disabled:text-gray-600 placeholder-gray-400';

const errorClassNames =
	'border-error focus-visible:border-error focus-visible:ring-error placeholder-error/40 text-error disabled:border-error disabled:text-error/40';

const sizeClassNames: Record<InputSize, string> = {
	small: 'py-1.5 text-sm',
	medium: 'py-2 text-base',
	large: 'py-3 text-base',
};

const errorsTextSizeClassNames: Record<InputSize, string> = {
	small: 'text-sm',
	medium: 'text-sm',
	large: 'text-base',
};

const iconSizes: Record<InputSize, number> = {
	small: 20,
	medium: 20,
	large: 24,
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const randomId = useId();
		const {
			id,
			size = 'medium',
			label,
			error = undefined,
			className,
			...rest
		} = props;
		return (
			<div className='flex flex-col-reverse items-start justify-end'>
				<div
					role='alert'
					className='text-sm text-error'
				>
					{error ? (
						<div className='inline-flex items-start pt-2.5'>
							<span>
								<InfoIcon
									height={iconSizes[size]}
									width={iconSizes[size]}
									strokeWidth={2}
								/>
							</span>
							<p
								className={cx(
									'ml-2 font-normal',
									errorsTextSizeClassNames[size],
								)}
							>
								{error}
							</p>
						</div>
					) : null}
				</div>
				<input
					className={cx(
						baseClassNames,
						sizeClassNames[size],
						!!error && errorClassNames,
						className,
					)}
					ref={ref}
					id={id || randomId}
					{...rest}
				/>
				{!!label && (
					<Label
						error={!!error}
						htmlFor={id || randomId}
						size={size}
						className='mb-1.5'
					>
						{label}
					</Label>
				)}
			</div>
		);
	},
);
