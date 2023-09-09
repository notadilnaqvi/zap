'use client';

import { Menu, Transition } from '@headlessui/react';
import Link, { type LinkProps } from 'next/link';
import { Fragment, HTMLProps, forwardRef, useEffect } from 'react';

import {
	AwardIcon,
	FilterIcon,
	HelpCircleIcon,
	HomeIcon,
	MailIcon,
	MenuIcon,
	SearchIcon,
	ShoppingBagIcon,
	TagIcon,
	UserIcon,
	XIcon,
	ZapIcon,
} from '~/components/icons';
import { useUi } from '~/hooks';
import { useCart, useCustomer } from '~/lib/commercetools/hooks';
import { SessionStorage, cx } from '~/utils';
import { NEWSLETTER_SIGN_UP_MODAL_DELAY } from '~/utils/constants';

export function Header() {
	const { data: cart } = useCart();
	const openMiniCart = useUi(state => state.openMiniCart);
	const { data: customer, loading: customerLoading } = useCustomer();
	const openNewsletterSignUpModal = useUi(
		state => state.openNewsletterSignUpModal,
	);

	// Show newsletter sign-up modal if,
	//   - the customer is not already subscribed to the newsletter
	//   - the modal was not closed previously
	useEffect(() => {
		const wasSignUpModalClosed = SessionStorage.get(
			'ui/was-newsletter-sign-up-modal-closed',
		);
		if (
			!customer?.isSubscribedToNewsletter &&
			!customerLoading &&
			!wasSignUpModalClosed
		) {
			// Don't show the modal as soon as the user lands on the page. Wait for a
			// few seconds instead. Makes up for a better user experience.
			setTimeout(() => {
				openNewsletterSignUpModal();
			}, NEWSLETTER_SIGN_UP_MODAL_DELAY);
		}
	}, [
		customer?.isSubscribedToNewsletter,
		customerLoading,
		openNewsletterSignUpModal,
	]);

	const isCartEmpty = !cart?.totalLineItemQuantity;

	return (
		<div className='sticky top-0 z-[2] flex h-16 w-full items-center justify-center border-b border-gray-200 bg-white/70 px-4 backdrop-blur-md transition duration-300'>
			<nav className='relative flex w-full max-w-page items-center justify-between'>
				{/* Hamburger menu button */}
				<div className='hidden items-center sm:flex'>
					<Menu>
						{({ open }) => (
							<>
								<Menu.Button
									className='mr-2 p-1'
									aria-pressed={open}
									aria-label='Open menu'
								>
									{open ? <XIcon /> : <MenuIcon />}
								</Menu.Button>
								<Transition
									appear
									show={open}
									as={Fragment}
									enter='ease duration-100'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease duration-100'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute top-[46.5px] -ml-4 w-screen bg-white p-4 shadow-[0px_16px_16px_1px_rgba(0,0,0,0.1)]'>
										<Menu.Items className='flex flex-col outline-none'>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<HomeIcon />
															</div>
															<p className='text-gray-900'>Home</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/browse'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<FilterIcon />
															</div>
															<p className='text-gray-900'>Browse</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<div className='my-2 border-t'></div>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<AwardIcon />
															</div>
															<p className='text-gray-900'>New</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/browse'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<UserIcon />
															</div>
															<p className='text-gray-900'>Men</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/browse'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<UserIcon />
															</div>
															<p className='text-gray-900'>Women</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/browse'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<TagIcon />
															</div>
															<p className='text-gray-900'>Sale</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<div className='my-2 border-t'></div>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/browse'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<MailIcon />
															</div>
															<p className='text-gray-900'>Contact</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/browse'
													>
														<div className='flex flex-row items-center gap-x-3'>
															<div className='p-1'>
																<HelpCircleIcon />
															</div>
															<p className='text-gray-900'>FAQ</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
										</Menu.Items>
									</div>
								</Transition>
							</>
						)}
					</Menu>
					<Link
						href={customer ? '/account' : '/login'}
						className='rounded p-1 text-gray-700'
						title={customer ? 'Account' : 'Login'}
					>
						<UserIcon />
					</Link>
				</div>

				{/* Home link */}
				<Link
					href='/'
					className='rounded p-1'
					title='ZAP'
				>
					<ZapIcon
						fill='currentColor'
						className='text-gray-900'
					/>
				</Link>

				{/* Nav links */}
				<ul className='flex flex-row gap-x-8 md:gap-x-4 sm:hidden'>
					<li className='flex items-center'>
						<button
							className='rounded p-1 text-sm text-gray-700'
							onClick={() => {}}
						>
							New
						</button>
					</li>
					<li className='flex items-center'>
						<button
							className='rounded p-1 text-sm text-gray-700'
							onClick={() => {}}
						>
							Men
						</button>
					</li>
					<li className='flex items-center'>
						<button
							className='rounded p-1 text-sm text-gray-700'
							onClick={() => {}}
						>
							Women
						</button>
					</li>
					<li className='flex items-center'>
						<button
							className='rounded p-1 text-sm text-gray-700'
							onClick={() => {}}
						>
							Sale
						</button>
					</li>
				</ul>

				{/* Desktop nav links */}
				<ul className='flex flex-row gap-x-4 md:gap-x-2'>
					<li className='flex items-center sm:hidden'>
						<Link
							href={customer ? '/account' : '/login'}
							className='rounded p-1 text-gray-700'
							title={customer ? 'Account' : 'Login'}
						>
							<UserIcon />
						</Link>
					</li>
					<li className='flex items-center'>
						<Link
							href='#'
							className='rounded p-1 text-gray-700'
							title='Search for products'
						>
							<SearchIcon />
						</Link>
					</li>
					<li className='flex items-center'>
						<button
							title='Open bag'
							className='relative rounded p-1 text-gray-700'
							onClick={openMiniCart}
						>
							{!isCartEmpty && (
								<span className='absolute -top-0.5 left-3.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white'>
									{cart?.totalLineItemQuantity}
								</span>
							)}
							<ShoppingBagIcon />
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

const HeadlessUiLink = forwardRef<
	HTMLAnchorElement,
	LinkProps & HTMLProps<HTMLAnchorElement>
>((props, ref) => {
	const { href, children, ...rest } = props;
	return (
		<Link
			href={href}
			{...rest}
			ref={ref}
		>
			{children}
		</Link>
	);
});
