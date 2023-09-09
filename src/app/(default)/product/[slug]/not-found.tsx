import TextBalancer from 'react-wrap-balancer';

import { ButtonLink } from '~/components/ui/ButtonLink';

export const metadata = {
	title: 'Not found',
	description: 'This product could not be found',
};

export default function NotFound() {
	return (
		<section className='flex justify-center px-4 py-16'>
			<div className='w-full max-w-page'>
				<h1 className='mb-4 text-2xl font-medium sm:text-center'>
					Product not found
				</h1>
				<h2 className='mb-8 sm:text-center'>
					<TextBalancer>This product does not exist</TextBalancer>
				</h2>
				<ButtonLink href='/'>Go to homepage</ButtonLink>
			</div>
		</section>
	);
}
