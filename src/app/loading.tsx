export default function Loading() {
	return (
		<div className='w-full py-16'>
			<div className='grid grid-flow-row grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				{Array(8)
					.fill(null)
					.map((_, i) => i)
					?.map(index => {
						return (
							<div
								className='relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent overflow-hidden'
								key={index}
							>
								<div className='aspect-[4/5] bg-slate-200 rounded-sm'></div>
								<div className='flex flex-col py-1.5'>
									<div className='flex flex-row items-center'>
										<div className='w-full'>
											<div className='w-36 h-3 my-1 bg-slate-200 rounded-full'></div>
										</div>
										<div className='w-4 h-3 my-1 bg-slate-200 rounded-full'></div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='w-16 h-3 my-1 bg-slate-200 rounded-full'></div>
										<div className='flex space-x-2'>
											<div className='w-10 h-3 my-1 bg-slate-200 rounded-full'></div>
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
