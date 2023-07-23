'use client';

import * as TogglePrimitives from '@radix-ui/react-switch';
import React, { useId } from 'react';

import { cx } from '~/utils';

export const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitives.Root>
>((props, ref) => {
	const { className, id, ...rest } = props;
	const randomId = useId();
	return (
		<TogglePrimitives.Root
			className={cx(
				'group peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-gray-200 bg-gray-200 transition-colors disabled:cursor-not-allowed disabled:bg-gray-100 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:disabled:border-gray-200 data-[state=checked]:disabled:bg-gray-100',
				className,
			)}
			id={id || randomId}
			{...rest}
			ref={ref}
		>
			<TogglePrimitives.Thumb className='pointer-events-none block h-4.5 w-4.5 rounded-full bg-white shadow-[0_1px_2px_0_rgba(0,0,0,.2),_0_1px_3px_0_rgba(0,0,0,.1)] transition-transform group-disabled:bg-gray-200 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-[0px]' />
		</TogglePrimitives.Root>
	);
});
