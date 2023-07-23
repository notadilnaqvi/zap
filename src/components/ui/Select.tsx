'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import React, { useId } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '~/components/icons';
import { Label } from '~/components/ui';
import { cx } from '~/utils';

export const Select = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
		error?: string;
		label?: string;
		className?: string;
		placeholder?: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onChange?: (...args: any) => any;
	}
>((props, ref) => {
	const { children, placeholder, error, label, onChange, className, ...rest } =
		props;
	const id = useId();

	return (
		<div className='flex flex-col-reverse items-start justify-end'>
			<div
				role='alert'
				className='mt-1.5'
			>
				{error ? <p className='text-sm text-error'>{error}</p> : null}
			</div>
			<SelectPrimitive.Root
				{...rest}
				onValueChange={onChange}
			>
				<SelectPrimitive.Trigger
					id={id}
					ref={ref}
					className={cx(
						'group peer flex w-full items-center justify-between rounded border border-gray-400 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 data-[placeholder]:text-gray-400',
						error &&
							'border-error text-error focus:border-error focus:ring-error disabled:border-error disabled:text-error/40',
						className,
					)}
				>
					<div
						className={cx(
							'my-auto	h-6 truncate whitespace-nowrap text-inherit',
							error && 'text-error',
						)}
					>
						<SelectPrimitive.Value placeholder={placeholder} />
					</div>
					<SelectPrimitive.Icon
						asChild
						className={cx(
							'text-gray-600 transition-transform group-data-[disabled]:text-gray-400 motion-safe:group-data-[state=open]:rotate-180',
							error && 'text-error',
						)}
					>
						<div>
							<ChevronDownIcon className='h-4.5 w-4.5' />
						</div>
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						className={cx(
							'relative z-50 max-h-64 overflow-hidden rounded border border-gray-200 bg-white text-gray-900 data-[side=bottom]:translate-y-2 data-[side=top]:-translate-y-2 data-[side=bottom]:shadow-[0px_8px_30px_rgba(0,0,0,0.12)] data-[side=top]:shadow-[0px_-8px_30px_rgba(0,0,0,0.12)] motion-safe:data-[side=bottom]:animate-fade-down motion-safe:data-[side=top]:animate-fade-up motion-reduce:animate-fade',
							className,
						)}
						position='popper'
					>
						<SelectPrimitive.ScrollUpButton className='absolute inset-x-0 top-0 z-10 flex h-8 items-start justify-center bg-gradient-to-b from-white via-white/95 to-transparent pt-1'>
							<div>
								<ChevronUpIcon className='h-4.5 w-4.5 text-gray-600' />
							</div>
						</SelectPrimitive.ScrollUpButton>

						<SelectPrimitive.Viewport className='h-full max-h-full w-full min-w-[calc(var(--radix-select-trigger-width)-2px)] max-w-[calc(var(--radix-select-trigger-width)-2px)] p-3'>
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
			{label ? (
				<Label
					error={!!error}
					htmlFor={id}
					className='mb-1.5'
				>
					{label}
				</Label>
			) : null}
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
			'flex w-full cursor-pointer select-none items-center break-all rounded px-3 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[disabled]:text-gray-400 sm:py-3',
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
