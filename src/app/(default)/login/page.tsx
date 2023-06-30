import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { DontHaveAnAccount, LoginForm } from '~/components/login';
import type { AuthToken } from '~/lib/commercetools/types';
import { parseJson } from '~/utils';

export const metadata = {
	title: 'Login',
	description:
		'Login to to your account to speed up your checkout, create wishlists, and see saved addresses',
};

export default function LoginPage() {
	const cookieStore = cookies();
	const authTokenCookie = cookieStore.get('zap_auth_token');
	const authToken = parseJson<AuthToken>(authTokenCookie?.value);

	const isLoggedIn = authToken?.is_logged_in;

	if (isLoggedIn) {
		redirect('/account');
	}

	return (
		<div className='flex flex-row justify-center gap-x-4 py-16'>
			<section className='flex w-full max-w-md flex-col space-y-8 sm:max-w-none'>
				<LoginForm />
				<DontHaveAnAccount />
			</section>
		</div>
	);
}
