import { LoadingSpinner } from '~/components/common/LoadingSpinner';
import { MailIcon } from '~/components/icons';

export default function Loading() {
	return (
		<section className='flex flex-col items-center space-y-8'>
			<div className='relative'>
				<div>
					<MailIcon className='h-24 w-24 stroke-[0.5px]' />
				</div>
				<div className='absolute bottom-2 right-0 rounded-full bg-white p-px'>
					<LoadingSpinner />
				</div>
			</div>
			<h1 className='text-xl font-semibold'>Verifying your email...</h1>
			<p className='text-gray-600'>Please wait while we verify your email</p>
		</section>
	);
}
