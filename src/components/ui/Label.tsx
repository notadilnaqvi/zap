'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';

import { cx } from '~/utils';

export type LabelSize = 'small' | 'medium' | 'large';

export const sizeClassNames: Record<LabelSize, string> = {
	small: 'text-sm leading-4',
	medium: 'text-sm leading-4',
	large: 'text-base',
};

export const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
		error?: boolean;
		size?: LabelSize;
	}
>(({ className, error, size = 'small', ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cx(
			'w-fit max-w-prose cursor-pointer text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400',
			error && 'text-error peer-disabled:text-error',
			sizeClassNames[size],
			className,
		)}
		{...props}
	/>
));

Label.displayName = LabelPrimitive.Root.displayName;
