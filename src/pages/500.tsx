import Head from 'next/head';

function Error500() {
	return (
		<>
			<Head>
				<title>ZAP | Internal server error</title>
			</Head>
			<div className='flex flex-row w-full pt-48 md:flex-col md:pt-16 md:items-center'>
				<div className='flex w-1/2 p-4 h-fit md:max-w-md md:w-full'></div>
				<div className='flex flex-col w-1/2 p-4 space-y-4 h-fit md:max-w-md md:w-full'>
					<h1 className='text-3xl font-semibold text-left md:text-center'>
						Oops, something has gone terribly wrong!
					</h1>
					<p className='text-sm font-light text-left text-slate-700 md:text-center'>
						Try refresing the page. Feel free to{' '}
						<a
							href='mailto:support@zap.store'
							className='text-blue-500 hover:underline'
						>
							contact us
						</a>{' '}
						is the problem persists
					</p>
				</div>
			</div>
		</>
	);
}

export default Error500;
