import { ButtonLink } from '~/components/ui';

export function AlreadyHaveAnAccount() {
	return (
		<div className='flex flex-col space-y-4 rounded border p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]'>
			<h2 className='text-2xl font-semibold'>Already have an account?</h2>
			<ButtonLink
				href='/login'
				className='w-full'
				variant='outlined'
			>
				Login here
			</ButtonLink>
		</div>
	);
}
