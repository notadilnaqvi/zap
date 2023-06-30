import { DefaultLayout } from '~/components/common';

export const metadata = {
	title: 'Not found',
	description: 'This page could not be found',
};

export default function NotFound() {
	return (
		<DefaultLayout>
			<div className='flex justify-center px-4 py-16'>
				<section className='w-full max-w-page'>
					<h1 className='text-lg font-medium'>Page not found</h1>
				</section>
			</div>
		</DefaultLayout>
	);
}
