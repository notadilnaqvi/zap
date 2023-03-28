export default function Loading() {
	return (
		<div className='w-full py-16'>
			<div className='relative mb-4 w-full overflow-hidden rounded before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent'>
				<div className='h-full bg-gray-200'>
					{' '}
					{/* TODO: Explain this hack */}
					<div className='w-full select-none rounded bg-gray-200 p-3 font-mono text-sm text-gray-200'>
						xxxx xxxx xxx xxxxxxxxx xx xx/xxx/xxxx xx:xx:xx xx (xx xxxxxx xxx)
					</div>
				</div>
			</div>
			<div className='grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				{Array(8)
					.fill(null)
					.map((_, i) => i)
					?.map(index => {
						return (
							<div
								className='relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent'
								key={index}
							>
								<div className='aspect-[4/5] rounded bg-gray-200'></div>
								<div className='flex flex-col py-[5px]'>
									<div className='flex flex-row items-center'>
										<div className='w-full'>
											<div className='my-1 h-3 w-36 rounded-full bg-gray-200'></div>
										</div>
										<div className='my-1 h-3 w-4 rounded-full bg-gray-200'></div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='my-1 h-3 w-16 rounded-full bg-gray-200'></div>
										<div className='flex space-x-2'>
											<div className='my-1 h-3 w-10 rounded-full bg-gray-200'></div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
