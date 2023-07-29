'use client';

import React, { useId } from 'react';

import { EyeIcon, EyeOffIcon } from '~/components/icons';
import { Label } from '~/components/ui';
import { useToggle } from '~/hooks';
import { cx } from '~/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'password';
	label?: string;
	error?: string;
	disabled?: boolean;
}

const baseClassNames =
	'peer w-full py-2 text-base bg-white text-gray-900 border border-gray-400 disabled:border-gray-300 rounded px-3 disabled:cursor-not-allowed disabled:bg-gray-100 font-normal focus-visible:ring-2 ring-offset-2 focus-visible:ring-primary outline-none disabled:text-gray-400 placeholder-gray-400';

const errorClassNames =
	'border-error focus-visible:ring-error placeholder-error/40 text-error disabled:border-error disabled:text-error/40 disabled:border-error/40';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const randomId = useId();
		const [showPassword, toggleShowPassword] = useToggle(false);

		const {
			id,
			label,
			// Using '' as default value to avoid uncontrolled input warning
			defaultValue = '',
			error = undefined,
			disabled = false,
			type: originalType = 'text',
			className,
			...rest
		} = props;

		const currentType =
			originalType === 'password' && showPassword ? 'text' : originalType;

		const iconClassNames = cx('h-6 w-6 stroke-1', {
			'stroke-gray-500': !disabled && !error,
			'stroke-gray-400': disabled && !error,
			'stroke-error': !disabled && error,
			'stroke-error/60': disabled && error,
		});

		return (
			<div
				className={cx(
					'flex flex-col-reverse items-start justify-end',
					className,
				)}
			>
				<div
					role='alert'
					className='mt-1.5'
				>
					{error ? <p className='text-sm text-error'>{error}</p> : null}
				</div>
				<div className='relative w-full'>
					<input
						className={cx(
							baseClassNames,
							!!error && errorClassNames,
							originalType === 'password' && 'pr-12',
						)}
						ref={ref}
						id={id || randomId}
						defaultValue={defaultValue}
						disabled={disabled}
						type={currentType}
						{...rest}
					/>
					{originalType === 'password' ? (
						<button
							type='button'
							aria-label='Show password'
							aria-controls={id || randomId}
							onClick={toggleShowPassword}
							className={cx(
								'absolute right-3 top-[9px] disabled:cursor-not-allowed',
								!!error && 'focus-visible:outline-error',
							)}
							disabled={disabled}
						>
							{showPassword ? (
								<EyeOffIcon className={iconClassNames} />
							) : (
								<EyeIcon className={iconClassNames} />
							)}
						</button>
					) : null}
				</div>
				{label ? (
					<Label
						error={!!error}
						htmlFor={id || randomId}
						className='mb-1.5'
					>
						{label}
					</Label>
				) : null}
			</div>
		);
	},
);
