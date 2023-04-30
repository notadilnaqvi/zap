'use client';

import React, { useId } from 'react';

import { InfoIcon } from '~/components/icons';
import { Label } from '~/components/ui';
import { cx } from '~/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	disabled?: boolean;
}

const baseClassNames =
	'peer w-full py-2 text-base bg-white text-gray-900 border border-gray-400 disabled:border-gray-300 rounded px-3 disabled:cursor-not-allowed disabled:bg-gray-100 font-normal focus-visible:ring-2 ring-offset-2 focus-visible:ring-primary outline-none transition-colors disabled:text-gray-600 placeholder-gray-400';

const errorClassNames =
	'border-error focus-visible:border-error focus-visible:ring-error placeholder-error/40 text-error disabled:border-error disabled:text-error/40';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const randomId = useId();
		const { id, label, error = undefined, className, ...rest } = props;
		return (
			<div className='flex flex-col-reverse items-start justify-end'>
				<div
					role='alert'
					className='text-sm text-error'
				>
					{error ? (
						<div className='inline-flex items-start pt-2.5'>
							<span>
								<InfoIcon className='h-4 w-4 stroke-2' />
							</span>
							<p className='ml-2 text-sm font-normal'>{error}</p>
						</div>
					) : null}
				</div>
				<input
					className={cx(baseClassNames, !!error && errorClassNames, className)}
					ref={ref}
					id={id || randomId}
					{...rest}
				/>
				{!!label && (
					<Label
						error={!!error}
						htmlFor={id || randomId}
						className='mb-1.5'
					>
						{label}
					</Label>
				)}
			</div>
		);
	},
);
