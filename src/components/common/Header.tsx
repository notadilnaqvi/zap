'use client';

import { Menu, Transition } from '@headlessui/react';
import Link, { LinkProps } from 'next/link';
import { forwardRef, Fragment, HTMLProps } from 'react';

import {
	AwardIcon,
	FilterIcon,
	HelpCircleIcon,
	HomeIcon,
	MailIcon,
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
	TagIcon,
	UserIcon,
	XIcon,
	ZapIcon,
} from '~/components/icons';
import { useUi } from '~/hooks';
import { useGetMyCart } from '~/lib/commercetools/hooks';
import { cx } from '~/utils';

export function Header() {
	const openMiniCart = useUi(state => state.openMiniCart);
	const showToast = useUi(state => state.showToast);
	const openFullscreenLoadingOverlay = useUi(
		state => state.openFullscreenLoadingOverlay,
	);
	const closeFullscreenLoadingOverlay = useUi(
		state => state.closeFullscreenLoadingOverlay,
	);
	const { data: myCart } = useGetMyCart();

	const isMyCartEmpty = !myCart?.me?.activeCart?.totalLineItemQuantity;

	function handleLogin() {
		openFullscreenLoadingOverlay({ text: 'Logging in...' });
		setTimeout(() => {
			closeFullscreenLoadingOverlay();
			showToast({ message: 'Welcome back Adil!', type: 'success' });
		}, 2500);
	}

	return (
		<div className='sticky top-0 z-[2] flex h-16 w-full items-center justify-center border-b border-gray-200 bg-white/70 px-4 backdrop-blur-md transition duration-300'>
			<nav className='relative flex w-full max-w-[1200px] items-center justify-between'>
				{/* Hamburger menu button */}
				<div className='hidden items-center sm:flex'>
					<Menu>
						{({ open }) => (
							<>
								<Menu.Button
									className='mr-2 p-1'
									aria-pressed={open}
									aria-label='Open sm menu'
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
														<div className='flex flex-row items-center space-x-3'>
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
														<div className='flex flex-row items-center space-x-3'>
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
														<div className='flex flex-row items-center space-x-3'>
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
														<div className='flex flex-row items-center space-x-3'>
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
														<div className='flex flex-row items-center space-x-3'>
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
														<div className='flex flex-row items-center space-x-3'>
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
														<div className='flex flex-row items-center space-x-3'>
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
														<div className='flex flex-row items-center space-x-3'>
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
					<Menu>
						{({ open }) => (
							<>
								<Menu.Button
									className='p-1'
									aria-label={open ? 'Close account menu' : 'Open account menu'}
								>
									{open ? <XIcon /> : <UserIcon />}
								</Menu.Button>
								<Transition
									appear
									show={open}
									as={Fragment}
									enter='ease duration-150'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease duration-150'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute top-[47px] -ml-4 w-screen bg-white py-8 shadow-[0_16px_16px_rgba(0,0,0,0.08)]'>
										<Menu.Items className='flex flex-col outline-none'>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded px-4 py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/'
													>
														<div className='flex flex-row items-center space-x-3'>
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
															'rounded px-4 py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/browse'
													>
														<div className='flex flex-row items-center space-x-3'>
															<div className='p-1'>
																<SearchIcon />
															</div>
															<p className='text-gray-900'>Browse</p>
														</div>
													</HeadlessUiLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<HeadlessUiLink
														className={cx(
															'rounded px-4 py-3 transition-colors duration-200 hover:bg-gray-100',
															active && 'bg-gray-100',
														)}
														href='/search'
													>
														<div className='flex flex-row items-center space-x-3'>
															<div className='p-1'>
																<SearchIcon />
															</div>
															<p className='text-gray-900'>Search</p>
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
				</div>

				{/* Home link */}
				<Link
					href='/'
					className='rounded p-1'
					title='ZAP'
					aria-label='ZAP homepage'
				>
					<ZapIcon
						fill='currentColor'
						className='text-gray-900'
					/>
				</Link>

				{/* Nav links */}
				<ul className='flex flex-row space-x-8 md:space-x-4 sm:hidden'>
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
				<ul className='flex flex-row space-x-4 md:space-x-2'>
					<li className='flex items-center sm:hidden'>
						<button
							onClick={handleLogin}
							aria-label='Login'
							className='rounded p-1 text-gray-700'
							title='Login'
						>
							<UserIcon />
						</button>
					</li>
					<li className='flex items-center'>
						<Link
							href='/search'
							className='rounded p-1 text-gray-700'
							title='Search for products'
							aria-label='Search for products'
						>
							<SearchIcon />
						</Link>
					</li>
					<li className='flex items-center'>
						<button
							aria-label='Open mini-cart'
							title='Open mini-cart'
							className='relative rounded p-1 text-gray-700'
							onClick={openMiniCart}
						>
							{!isMyCartEmpty && (
								<span className='absolute left-3.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white'>
									{myCart?.me.activeCart?.totalLineItemQuantity}
								</span>
							)}
							<ShoppingCartIcon />
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
