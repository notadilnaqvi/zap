import { DontHaveAnAccount, LoginForm } from '~/components/login';

export const metadata = {
	title: 'Login',
	description: 'Login to to your account to speed up your checkout',
};

export default function LoginPage() {
	return (
		<div className='flex w-full flex-row gap-x-4 py-16'>
			<div className='mx-auto flex w-full max-w-md flex-col space-y-8 sm:max-w-none'>
				<LoginForm />
				<DontHaveAnAccount />
			</div>
		</div>
	);
}
