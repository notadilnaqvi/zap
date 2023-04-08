'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React, { useId } from 'react';

import { Label } from '~/components/ui';
import { cx } from '~/utils';

export const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
		label?: string;
	}
>(({ label, id, className, ...props }, ref) => {
	const randomId = useId();
	return (
		<div className='flex flex-row items-start space-x-2'>
			<CheckboxPrimitive.Root
				ref={ref}
				className={cx(
					'group peer flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border border-gray-400 bg-white transition-colors disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:disabled:border-gray-300 data-[state=checked]:disabled:bg-gray-300',
					className,
				)}
				id={id || randomId}
				{...props}
			>
				<CheckboxPrimitive.Indicator
					className={cx('flex items-center justify-center text-white')}
				>
					<svg
						width='10'
						height='10'
						viewBox='0 0 12 10'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						stroke='currentColor'
					>
						<path
							d='M10.375 1.5L4.25 8.5L1.625 5.875'
							stroke='currentColor'
							strokeWidth='2'
						/>
					</svg>
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>
			{!!label && <Label htmlFor={id || randomId}>{label}</Label>}
		</div>
	);
});
