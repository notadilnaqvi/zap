'use client';

import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { Button, Checkbox, Input } from '~/components/ui';
import { useUi, type ShowToastProps } from '~/hooks';
import { useLogin } from '~/lib/commercetools/hooks';
import { extractApolloErrorCode } from '~/utils';

const loginFormSchema = z.object({
	email: z.string().email('Please enter a valid email'),
	password: z.string().min(1, 'Please enter your password'),
	rememberMe: z.boolean().optional(),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export function LoginForm() {
	const router = useRouter();
	const [login] = useLogin();
	const showToast = useUi(state => state.showToast);
	const [isLoginLoading, setIsLoginLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmit: SubmitHandler<LoginForm> = async data => {
		const { email, password } = data;
		setIsLoginLoading(true);
		let message = 'Logged in successfully';
		let type: ShowToastProps['type'] = 'success';
		try {
			await login({ email, password });
			showToast({ message, type });
			router.push('/');
		} catch (error) {
			type = 'error';
			message = 'Failed to login. Please try again';
			if (error instanceof ApolloError) {
				const invalidCredentialsEntered =
					extractApolloErrorCode(error) === 'InvalidCredentials';
				if (invalidCredentialsEntered) {
					message = 'Invalid credentials. Please try again';
				}
			}
			showToast({ message, type });
			setIsLoginLoading(false);
		}
	};

	return (
		<form
			className='flex flex-col space-y-4 rounded border p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className='text-2xl font-semibold'>Login to your account</h1>
			<Input
				error={errors.email?.message}
				label='Email'
				{...register('email')}
			/>
			<Input
				label='Password'
				type='password'
				{...register('password')}
				error={errors.password?.message}
			/>
			<div className='flex flex-row items-center justify-between'>
				<Checkbox
					label='Remember me'
					{...register('rememberMe')}
				/>
				<Link
					href='#'
					className='text-sm text-primary-light underline hover:text-primary'
				>
					Forgot your password?
				</Link>
			</div>
			<Button
				className='w-full'
				type='submit'
				loading={isLoginLoading}
				disabled={isLoginLoading}
			>
				Login
			</Button>
		</form>
	);
}
