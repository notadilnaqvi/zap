import { AlreadyHaveAnAccount, SignUpForm } from '~/components/sign-up/';

export const metadata = {
	title: 'Sign up',
	description:
		'Create an account to speed up your checkout, create wishlists, and save your addresses',
};

export default function SignUpPage() {
	return (
		<div className='w-full px-4 py-16'>
			<section className='mx-auto flex w-full max-w-md flex-col space-y-8 sm:max-w-none'>
				<SignUpForm />
				<AlreadyHaveAnAccount />
			</section>
		</div>
	);
}
