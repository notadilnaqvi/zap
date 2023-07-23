'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';

import { cx } from '~/utils';

export const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
		error?: boolean;
	}
>(({ className, error, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cx(
			'w-fit max-w-prose cursor-pointer text-sm leading-4 text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400',
			error && 'text-error peer-disabled:text-error',
			className,
		)}
		{...props}
	/>
));
