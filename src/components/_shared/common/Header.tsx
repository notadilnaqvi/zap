import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import {
	forwardRef,
	Fragment,
	HTMLProps,
	useEffect,
	useRef,
	useState,
} from 'react';

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
import { useUi } from '~/hooks/ui';

export function Header() {
	const { openMiniCart, showToast } = useUi();
	const scrollDeterctorDivRef = useRef(null);
	const [hasPageScrolled, setHasPageScrolled] = useState(false);

	useEffect(() => {
		const isIntersectionObserverSupported =
			'IntersectionObserver' in window &&
			'IntersectionObserverEntry' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry.prototype;

		if (isIntersectionObserverSupported) {
			const observer = new IntersectionObserver(entries => {
				if (entries[0].boundingClientRect.y < 0) {
					setHasPageScrolled(true);
				} else {
					setHasPageScrolled(false);
				}
			});

			if (scrollDeterctorDivRef.current) {
				observer.observe(scrollDeterctorDivRef.current);
			}

			return () => {
				if (scrollDeterctorDivRef.current) observer.disconnect();
			};
		} else {
			console.warn(
				'[Header]: IntersectionObserver is not supported. Some UI features may not work as expected.',
			);
		}
	}, []);

	return (
		<>
			<div
				className='absolute top-0 h-0 left-0 w-screen'
				ref={scrollDeterctorDivRef}
			/>

			<div
				className={cn(
					'sticky top-0 flex items-center justify-center w-full h-16 px-4 z-[2] border-b duration-300 backdrop-blur-md sm:bg-white sm:border-slate-200 bg-opacity-70 transition',
					hasPageScrolled
						? 'bg-white border-slate-200'
						: 'bg-transparent border-transparent',
				)}
			>
				<nav className='relative flex items-center justify-between w-full max-w-[1200px]'>
					{/* Skip-to-content link */}
					<a
						href='#content'
						className='absolute px-2 py-1 text-sm text-blue-500 underline bg-white rounded-sm opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto'
					>
						Skip to content
					</a>

					{/* Hamburger menu button */}
					<div className='items-center hidden sm:flex'>
						<Menu>
							{({ open }) => (
								<>
									<Menu.Button
										className='p-1 mr-2'
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
										<div className='p-4 w-screen -ml-4 bg-white shadow-[0px_16px_16px_1px_rgba(0,0,0,0.1)] absolute top-[46.5px]'>
											<Menu.Items className='flex flex-col outline-none'>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<HomeIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Home
																</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/browse'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<FilterIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Browse
																</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<div className='my-2 border-t'></div>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<AwardIcon />
																</div>
																<p className='font-light text-slate-900'>New</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/browse'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<UserIcon />
																</div>
																<p className='font-light text-slate-900'>Men</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/browse'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<UserIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Women
																</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/browse'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<TagIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Sale
																</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<div className='my-2 border-t'></div>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/browse'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<MailIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Contact
																</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/browse'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<HelpCircleIcon />
																</div>
																<p className='font-light text-slate-900'>FAQ</p>
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
										aria-label={
											open ? 'Close account menu' : 'Open account menu'
										}
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
										<div className='py-8 w-screen -ml-4 bg-white shadow-[0_16px_16px_rgba(0,0,0,0.08)] absolute top-[47px]'>
											<Menu.Items className='flex flex-col outline-none'>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'px-4 py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<HomeIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Home
																</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'px-4 py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/browse'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<SearchIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Browse
																</p>
															</div>
														</HeadlessUiLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<HeadlessUiLink
															className={cn(
																'px-4 py-3 transition-colors duration-200 rounded-sm hover:bg-slate-100',
																active && 'bg-slate-100',
															)}
															href='/search'
														>
															<div className='flex flex-row items-center space-x-3'>
																<div className='p-1'>
																	<SearchIcon />
																</div>
																<p className='font-light text-slate-900'>
																	Search
																</p>
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
						className='p-1 rounded-sm'
						title='ZAP'
						aria-label='ZAP homepage'
					>
						<ZapIcon />
					</Link>

					{/* Nav links */}
					<ul className='flex flex-row space-x-8 sm:hidden md:space-x-4'>
						<li className='flex items-center'>
							<button
								className='p-1 text-sm font-light rounded-sm text-slate-700 hover:text-slate-900'
								onClick={() => {}}
							>
								New
							</button>
						</li>
						<li className='flex items-center'>
							<button
								className='p-1 text-sm font-light rounded-sm text-slate-700 hover:text-slate-900'
								onClick={() => {}}
							>
								Men
							</button>
						</li>
						<li className='flex items-center'>
							<button
								className='p-1 text-sm font-light rounded-sm text-slate-700 hover:text-slate-900'
								onClick={() => {}}
							>
								Women
							</button>
						</li>
						<li className='flex items-center'>
							<button
								className='p-1 text-sm font-light rounded-sm text-slate-700 hover:text-slate-900'
								onClick={() => {}}
							>
								Sale
							</button>
						</li>
					</ul>

					{/* Desktop nav links */}
					<ul className='flex flex-row space-x-4 md:space-x-2'>
						<li className='flex items-center sm:hidden'>
							<Link
								href='/account'
								aria-label='Login'
								className='p-1 rounded-sm hover:text-slate-900 text-slate-700'
								title='Login'
							>
								<UserIcon />
							</Link>
						</li>
						<li className='flex items-center'>
							<Link
								href='/search'
								className='p-1 rounded-sm hover:text-slate-900 text-slate-700'
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
								className='relative p-1 rounded-sm hover:text-slate-900 text-slate-700'
								onClick={openMiniCart}
							>
								<span className='absolute px-1 min-w-[16px] h-4 bg-blue-500 left-3.5 -top-0.5 rounded-full text-[10px] font-semibold text-white flex items-center justify-center'>
									6
								</span>
								<ShoppingCartIcon />
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
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
