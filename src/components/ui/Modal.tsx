'use client';

import { Dialog as ModalPrimitive, Transition } from '@headlessui/react';
import { Fragment, PropsWithChildren } from 'react';
import { XIcon } from '~/components/icons';
import { cx } from '~/utils';

type ModalProps = PropsWithChildren<{
	isOpen: boolean;
	onClose: () => void;
	className?: string;
}>;

export const Modal = (props: ModalProps) => {
	const { isOpen, onClose, children, className } = props;
	return (
		<Transition
			appear
			show={isOpen}
			as={Fragment}
		>
			<ModalPrimitive
				as='div'
				onClose={onClose}
				className='relative z-50'
				static
			>
				<Transition.Child
					as={Fragment}
					enter='ease duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease duration-300'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					{/* Overlay */}
					<div
						className='fixed inset-0 bg-black/30 sm:bg-black/50'
						onClick={onClose}
						aria-hidden='true'
					/>
				</Transition.Child>
				<div className='fixed inset-0 flex min-h-full items-center justify-center p-4 sm:items-end sm:p-0'>
					<Transition.Child
						as={Fragment}
						enter='ease duration-300'
						enterFrom='motion-safe:-translate-y-8 motion-safe:sm:translate-y-64 opacity-0'
						enterTo='motion-safe:translate-y-0 opacity-100'
						leave='ease duration-300'
						leaveFrom='motion-safe:translate-y-0 opacity-100'
						leaveTo='motion-safe:-translate-y-8 motion-safe:sm:translate-y-full opacity-0'
					>
						<ModalPrimitive.Panel
							className={cx(
								'flex max-h-[80vh] w-full max-w-[540px] flex-col overflow-hidden rounded-lg bg-white shadow-[0px_30px_60px_rgba(0,0,0,0.12)] sm:max-h-[90vh] sm:rounded-b-none sm:shadow-none',
								className,
							)}
						>
							{children}
						</ModalPrimitive.Panel>
					</Transition.Child>
				</div>
			</ModalPrimitive>
		</Transition>
	);
};

export const ModalContent = (
	props: PropsWithChildren<{ className?: string }>,
) => {
	const { children, className } = props;
	return (
		<div className={cx('overflow-y-scroll p-6', className)}>{children}</div>
	);
};

// TODO: Remove `onClose` since it's already passed down from `Modal`
// No easy way to do this currently
export const ModalTitle = (
	props: PropsWithChildren<{ onClose: () => void; className?: string }>,
) => {
	const { children, className, onClose } = props;
	return (
		<div
			className={cx(
				'flex items-center justify-between border-b bg-gray-50 px-6 py-4.5 sm:py-3.5',
				className,
			)}
		>
			<ModalPrimitive.Title
				className='text-xl font-semibold sm:text-base'
				as='h3'
			>
				{children}
			</ModalPrimitive.Title>
			<button
				title='Close modal'
				onClick={onClose}
				className='p-1'
			>
				<XIcon />
			</button>
		</div>
	);
};

export const ModalActions = (
	props: PropsWithChildren<{ className?: string }>,
) => {
	const { children, className } = props;
	return (
		<div
			className={cx(
				'flex items-center border-t bg-gray-50 p-4.5 sm:p-3.5',
				className,
			)}
		>
			{children}
		</div>
	);
};
