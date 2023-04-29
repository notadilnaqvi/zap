import { ButtonLink } from '~/components/ui';

export function DontHaveAnAccount() {
	return (
		<div className='flex flex-col space-y-4 rounded border p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]'>
			<h2 className='text-2xl font-semibold'>Don't have an account?</h2>
			<p className='text-sm'>
				Create an account to speed up your checkout, create wishlists, and save
				your addresses
			</p>
			<ButtonLink
				href='/sign-up'
				className='w-full'
				variant='outlined'
			>
				Sign up now
			</ButtonLink>
		</div>
	);
}
