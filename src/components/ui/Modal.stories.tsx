import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import {
	Button,
	Modal,
	ModalActions,
	ModalContent,
	ModalTitle,
} from '~/components/ui';

const meta: Meta<typeof Modal> = {
	title: 'UI/Modal',
	// Deliberately omitting these. Don't want to show them in Storybook
	// controls.
	argTypes: {
		isOpen: {
			table: {
				disable: true,
			},
		},
		onClose: {
			table: {
				disable: true,
			},
		},
		className: {
			table: {
				disable: true,
			},
		},
	},
	component: Modal,
	tags: ['autodocs'],
};

export default meta;

export const Default: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalTitle onClose={onClose}>Modal Title</ModalTitle>
				<ModalContent>
					<p>Modal Content</p>
				</ModalContent>
				<ModalActions className='gap-4'>
					<Button
						variant='outlined'
						onClick={onClose}
					>
						Secondary Action
					</Button>
					<Button onClick={onClose}>Primary Action</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};

export const WithOverflowingContent: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalTitle onClose={onClose}>With Overflowing Content</ModalTitle>
				<ModalContent>
					<ul className='rounded border border-dashed py-10 text-center'>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
						<li className='py-2'>
							This modal has overflowing content. Try scrolling
						</li>
					</ul>
				</ModalContent>
				<ModalActions className='gap-4'>
					<Button
						variant='outlined'
						onClick={onClose}
					>
						Secondary Action
					</Button>
					<Button onClick={onClose}>Primary Action</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};

export const WithoutActions: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalTitle onClose={onClose}>Without Actions</ModalTitle>
				<ModalContent>
					<p>This modal does not have any actions.</p>
				</ModalContent>
			</Modal>
		</div>
	);
};

export const WithoutTitle: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalContent>
					<p>This modal does not have any title.</p>
				</ModalContent>
				<ModalActions className='gap-4'>
					<Button
						variant='outlined'
						onClick={onClose}
					>
						Secondary Action
					</Button>
					<Button onClick={onClose}>Primary Action</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};

export const WithoutTitleAndActions: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalContent>
					<p>This modal does not have any title or actions.</p>
				</ModalContent>
			</Modal>
		</div>
	);
};

export const WithOneAction: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalTitle onClose={onClose}>With One Action</ModalTitle>
				<ModalContent>
					<p>This modal has one (full-width) action</p>
				</ModalContent>
				<ModalActions>
					<Button onClick={onClose}>Some Action</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};

export const WithOneAction2: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalTitle onClose={onClose}>With One Action 2</ModalTitle>
				<ModalContent>
					<p>This modal has one (min-width) action</p>
				</ModalContent>
				<ModalActions>
					<Button
						onClick={onClose}
						className='ml-auto w-min'
					>
						Primary Action
					</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};

export const WithMultipleActions: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalTitle onClose={onClose}>With Multiple Actions</ModalTitle>
				<ModalContent>
					<p>
						This modal has multiple actions. All actions have custom position
						and styling
					</p>
				</ModalContent>
				<ModalActions className='flex justify-between'>
					<Button
						onClick={onClose}
						className='w-min'
						variant='outlined'
					>
						Cancel
					</Button>
					<div className='flex gap-4'>
						<Button
							onClick={onClose}
							className='w-min'
							color='error'
						>
							Delete
						</Button>
						<Button
							onClick={onClose}
							className='w-min'
						>
							Save
						</Button>
					</div>
				</ModalActions>
			</Modal>
		</div>
	);
};

export const WithCustomWidth: StoryFn<typeof Modal> = _args => {
	const [isOpen, setIsOpen] = useState(false);

	function onClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className='w-min'
			>
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				className='max-w-5xl'
			>
				<ModalTitle onClose={onClose}>Modal With Custom Width</ModalTitle>
				<ModalContent>
					<p>
						This modal has a custom max width. Modals have a max width (on
						desktops) by default which you can override with Tailwind classes
					</p>
				</ModalContent>
				<ModalActions className='gap-4'>
					<Button
						variant='outlined'
						onClick={onClose}
					>
						Secondary Action
					</Button>
					<Button onClick={onClose}>Primary Action</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};
