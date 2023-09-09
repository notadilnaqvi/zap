'use client';

import React, { useId } from 'react';

import { Label } from '~/components/ui';
import { baseClassNames, errorClassNames } from '~/components/ui/Input';
import { cx } from '~/utils';

interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	disabled?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(props, ref) => {
		const randomId = useId();

		const {
			id,
			label,
			// Using '' as default value to avoid uncontrolled input warning
			defaultValue = '',
			error = undefined,
			disabled = false,
			className,
			...rest
		} = props;

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
					<textarea
						className={cx(baseClassNames, !!error && errorClassNames)}
						ref={ref}
						id={id || randomId}
						defaultValue={defaultValue}
						disabled={disabled}
						{...rest}
					/>
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
