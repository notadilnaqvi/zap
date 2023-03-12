'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React from 'react';

import { cx } from '~/utils';

export const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cx(
			'group flex bg-white items-center justify-center peer h-4 w-4 shrink-0 rounded-[3px] border border-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:disabled:bg-gray-400 data-[state=checked]:disabled:border-gray-400',
			className,
		)}
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
));
