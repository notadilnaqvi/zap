import TextBalancer from 'react-wrap-balancer';

import { DefaultLayout } from '~/components/common/DefaultLayout';
import { ButtonLink } from '~/components/ui/ButtonLink';

export const metadata = {
	title: 'Not found',
	description: 'This page could not be found',
};

export default function NotFound() {
	return (
		<DefaultLayout>
			<section className='flex justify-center px-4 py-16'>
				<div className='w-full max-w-page'>
					<h1 className='mb-4 text-2xl font-medium sm:text-center'>
						Page not found
					</h1>
					<h2 className='mb-8 sm:text-center'>
						<TextBalancer>
							The page you're looking for does not exist
						</TextBalancer>
					</h2>
					<ButtonLink href='/'>Go to homepage</ButtonLink>
				</div>
			</section>
		</DefaultLayout>
	);
}
