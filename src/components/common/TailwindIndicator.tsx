export function TailwindIndicator() {
	if (process.env.NODE_ENV === 'production') return null;

	return (
		<div className='fixed bottom-2 right-2 z-50 flex h-6 w-6 items-center justify-center rounded bg-gray-900 p-3 font-mono text-xs font-medium text-white'>
			<div className='hidden sm:block'>sm</div>
			<div className='hidden md:block sm:hidden'>md</div>
			<div className='hidden lg:block md:hidden sm:hidden'>lg</div>
			<div className='hidden xl:block lg:hidden md:hidden sm:hidden'>xl</div>
		</div>
	);
}
