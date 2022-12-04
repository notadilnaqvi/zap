import Head from 'next/head';
import Link from 'next/link';

function Error404() {
	return (
		<>
			<Head>
				<title>ZAP | Not found</title>
			</Head>
			<div className='flex items-start w-full pt-32 pb-16 md:items-center md:pt-0'>
				<div className='space-y-4 md:px-8 sm:px-4 max-w-prose'>
					<h1 className='text-3xl font-semibold text-left md:text-center text-slate-900'>
						Sorry, we couldn't find what you were looking for.
					</h1>
					<p className='text-sm font-light text-left text-slate-700 md:text-center'>
						If you think this is a mistake, you can{' '}
						<a
							href='mailto:support@zap.store'
							className='text-blue-500 hover:underline'
						>
							email us
						</a>{' '}
						and we'll take a look.
					</p>
					<div className='flex'>
						<Link
							href='/browse'
							className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-sm transition duration-100'
						>
							Browse products
						</Link>
						<button></button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Error404;
