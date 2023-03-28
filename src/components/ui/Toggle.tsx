'use client';

import * as TogglePrimitives from '@radix-ui/react-switch';
import React from 'react';

import { cx } from '~/utils';

export const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitives.Root> & {
		size?: 'default' | 'large';
	}
>((props, ref) => {
	const { className, size = 'default', ...rest } = props;
	return (
		<TogglePrimitives.Root
			className={cx(
				'group peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-gray-200 bg-gray-200 transition-colors disabled:cursor-not-allowed disabled:bg-gray-100 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:disabled:border-gray-200 data-[state=checked]:disabled:bg-gray-100',
				size === 'large' ? 'h-6 w-10' : 'h-3.5 w-7',
				className,
			)}
			{...rest}
			ref={ref}
		>
			<TogglePrimitives.Thumb
				className={cx(
					'pointer-events-none block rounded-full bg-white shadow-[0_1px_2px_0_rgba(0,0,0,.2),_0_1px_3px_0_rgba(0,0,0,.1)] transition-transform group-disabled:bg-gray-200 data-[state=unchecked]:translate-x-[0px]',
					size === 'large'
						? 'h-[22px] w-[22px] data-[state=checked]:translate-x-4'
						: 'h-3 w-3 data-[state=checked]:translate-x-3.5 ',
				)}
			/>
		</TogglePrimitives.Root>
	);
});

Toggle.displayName = TogglePrimitives.Root.displayName;
