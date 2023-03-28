'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import React, { useId } from 'react';

import { Label } from '~/components/ui';
import { cx } from '~/utils';

export const Radio = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>((props, ref) => {
	const { className, ...rest } = props;
	return (
		<RadioGroupPrimitive.Root
			className={cx('grid gap-2', className)}
			{...rest}
			ref={ref}
		/>
	);
});

Radio.displayName = RadioGroupPrimitive.Root.displayName;

export const RadioItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, ref) => {
	const { className, children, id, ...rest } = props;
	const randomId = useId();
	return (
		<div className='flex w-min flex-row items-center space-x-2'>
			<RadioGroupPrimitive.Item
				ref={ref}
				className={cx(
					'group peer h-4 w-4 rounded-full border border-gray-400 bg-white disabled:cursor-not-allowed disabled:bg-gray-100 data-[state=checked]:border-primary disabled:data-[state=checked]:border-gray-400 disabled:data-[state=checked]:bg-gray-100',
					className,
				)}
				id={id || randomId}
				{...rest}
			>
				<RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
					<div className='h-2 w-2 rounded-full bg-primary group-disabled:bg-gray-400' />
				</RadioGroupPrimitive.Indicator>
			</RadioGroupPrimitive.Item>
			<Label htmlFor={id || randomId}>{children}</Label>
		</div>
	);
});

RadioItem.displayName = RadioGroupPrimitive.Item.displayName;
