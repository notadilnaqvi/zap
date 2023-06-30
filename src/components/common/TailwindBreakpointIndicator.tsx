/**
 * This is a helper component to be used during development. It shows the
 * current screen breakpoint in the bottom right part of the screen. This
 * component only shows up in development and is not visible in production.
 */
export function TailwindBreakpointIndicator() {
	if (process.env.NODE_ENV === 'production') return null;

	return (
		<div
			className='fixed bottom-2 right-2 z-50 flex h-6 w-6 items-center justify-center rounded bg-gray-900 p-3 font-mono text-xs font-medium text-white'
			aria-hidden='true'
		>
			<div className='hidden sm:block'>sm</div>
			<div className='hidden md:block sm:hidden'>md</div>
			<div className='hidden lg:block md:hidden sm:hidden'>lg</div>
			<div className='hidden xl:block lg:hidden md:hidden sm:hidden'>xl</div>
		</div>
	);
}
