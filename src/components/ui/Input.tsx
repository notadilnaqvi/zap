import React, { useId } from 'react';
import { InfoIcon } from '~/components/icons';
import { Label } from '~/components/ui';

import { cx } from '~/utils';

export type InputSize = 'small' | 'default' | 'large';

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	label?: string;
	error?: Maybe<string>;
	disabled?: boolean;
	size?: InputSize;
}

const baseClassNames =
	'peer w-full bg-white text-gray-900 border border-gray-400 rounded px-3 disabled:cursor-not-allowed disabled:bg-gray-100 font-normal focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary outline-none transition-colors disabled:text-gray-600';

const errorClassNames =
	'border-error focus-visible:border-error focus-visible:ring-error placeholder-[#fba8a3] text-error disabled:text-[#fba8a3]';

const sizeClassNames: Record<InputSize, string> = {
	small: 'py-1.5 text-sm',
	default: 'py-2 text-base',
	large: 'py-3 text-base',
};

const errorsTextSizeClassNames: Record<InputSize, string> = {
	small: 'text-sm',
	default: 'text-sm',
	large: 'text-base',
};

const iconSizes: Record<InputSize, number> = {
	small: 20,
	default: 20,
	large: 24,
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const randomId = useId();
		const {
			id,
			size = 'default',
			label,
			error = null,
			className,
			...rest
		} = props;
		return (
			<div className='flex flex-col-reverse items-start justify-end'>
				<p
					role='alert'
					className='text-sm text-error'
				>
					{error ? (
						<div className='inline-flex items-start py-2.5'>
							<span>
								<InfoIcon
									height={iconSizes[size]}
									width={iconSizes[size]}
									strokeWidth={2}
								/>
							</span>
							<span
								className={cx('ml-2 font-bold', errorsTextSizeClassNames[size])}
							>
								Error: <span className='font-normal'>{error}</span>
							</span>
						</div>
					) : null}
				</p>
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
						className='mb-1.5'
					>
						{label}
					</Label>
				)}
			</div>
		);
	},
);
