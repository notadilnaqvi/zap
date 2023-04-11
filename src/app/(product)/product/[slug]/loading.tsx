// FIX: For some reason, the loading component does not show up with ISR.
// It only shows up when the revalidate is set to 0. This is maybe a bug with
// `appDir`. Not sure tho.

export default function Loading() {
	return (
		<div className='w-full py-16'>
			<div className='relative mb-8 h-7 w-64 overflow-hidden rounded before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent'>
				<div className='h-full bg-gray-200'>
					{' '}
					{/* TODO: Explain this hack */}
					<div className='w-full select-none rounded bg-gray-200 p-3 font-mono text-sm text-gray-200'></div>
				</div>
			</div>
			<div className='mb-4 grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				{Array(3)
					.fill(null)
					.map((_, i) => i)
					?.map(index => {
						return (
							<div
								className='relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent'
								key={index}
							>
								<div className='aspect-[4/5] rounded bg-gray-200'></div>
							</div>
						);
					})}
			</div>
			<div className='relative mb-8 h-[512px] w-full overflow-hidden rounded before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent'>
				<div className='h-full bg-gray-200'></div>
			</div>
		</div>
	);
}
