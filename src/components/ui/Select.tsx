'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import React, { useId } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '~/components/icons';
import { Label } from '~/components/ui';
import { cx } from '~/utils';

export const Select = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
		label?: string;
		className?: string;
		placeholder?: string;
	}
>(({ children, placeholder, label, className, ...props }, ref) => {
	const id = useId();

	return (
		<div className='flex flex-col-reverse items-start justify-end'>
			<SelectPrimitive.Root {...props}>
				<SelectPrimitive.Trigger
					id={id}
					ref={ref}
					className={cx(
						'group peer flex w-full items-center justify-between rounded border border-gray-400 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 data-[placeholder]:text-gray-400',
						className,
					)}
					{...props}
				>
					<div className='my-auto	h-6 truncate whitespace-nowrap text-inherit'>
						<SelectPrimitive.Value placeholder={placeholder} />
					</div>
					<SelectPrimitive.Icon
						asChild
						className='text-gray-600 transition-transform group-data-[state=open]:rotate-180 group-data-[disabled]:text-gray-400'
					>
						<div>
							<ChevronDownIcon className='h-4.5 w-4.5' />
						</div>
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						className={cx(
							'relative z-50 max-h-64 overflow-hidden rounded border border-gray-200 bg-white text-gray-900 shadow-[0px_8px_30px_rgba(0,0,0,0.12)] data-[side=bottom]:translate-y-2 data-[side=top]:-translate-y-2 data-[side=bottom]:animate-fade-down data-[side=top]:animate-fade-up',
							className,
						)}
						position='popper'
						{...props}
					>
						<SelectPrimitive.ScrollUpButton className='absolute inset-x-0 top-0 z-10 flex h-8 items-start justify-center bg-gradient-to-b from-white via-white/95 to-transparent pt-1'>
							<div>
								<ChevronUpIcon className='h-4.5 w-4.5 text-gray-600' />
							</div>
						</SelectPrimitive.ScrollUpButton>

						<SelectPrimitive.Viewport className='h-full max-h-full w-full min-w-[calc(var(--radix-select-trigger-width)-1px)] max-w-[calc(var(--radix-select-trigger-width)-1px)] p-3'>
							{children}
						</SelectPrimitive.Viewport>

						<SelectPrimitive.ScrollDownButton className='absolute inset-x-0 bottom-0 z-10 flex h-8 items-end justify-center bg-gradient-to-t from-white via-white/95 to-transparent pb-1'>
							<div>
								<ChevronDownIcon className='h-4.5 w-4.5 text-gray-600' />
							</div>
						</SelectPrimitive.ScrollDownButton>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
			{!!label && (
				<Label
					htmlFor={id}
					className='mb-1.5'
				>
					{label}
				</Label>
			)}
		</div>
	);
});

export const SelectOption = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cx(
			'flex w-full cursor-pointer select-none items-center break-all rounded px-3 py-2 text-sm outline-none focus-visible:bg-gray-200 data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 sm:py-3',
			className,
		)}
		{...props}
	>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));

export const SelectOptionSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cx('mx-1.5 my-1 h-px bg-gray-300', className)}
		{...props}
	/>
));