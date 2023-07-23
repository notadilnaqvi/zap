'use client';

import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Checkbox, Form, FormField, Input } from '~/components/ui';
import { useUi, type ShowToastProps } from '~/hooks';
import { useLogin } from '~/lib/commercetools/hooks';
import { extractApolloErrorCode } from '~/utils';

const loginFormSchema = z.object({
	email: z
		.string({
			required_error: 'Please enter your email',
		})
		.email('Please enter a valid email'),
	password: z.string({
		required_error: 'Please enter your password',
	}),
	rememberMe: z.boolean().optional(),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export function LoginForm() {
	const router = useRouter();
	const [login] = useLogin();
	const showToast = useUi(state => state.showToast);
	const [isLoginLoading, setIsLoginLoading] = useState(false);
	const loginForm = useForm<LoginForm>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			rememberMe: true,
		},
	});

	async function onSubmit(data: LoginForm) {
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
	}

	return (
		<Form
			className='flex flex-col space-y-4 rounded border p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]'
			onSubmit={onSubmit}
			form={loginForm}
		>
			<h1 className='text-2xl font-semibold'>Login to your account</h1>
			<FormField name='email'>
				<Input label='Email' />
			</FormField>
			<FormField name='password'>
				<Input
					label='Password'
					type='password'
				/>
			</FormField>
			<div className='flex flex-row items-center justify-between'>
				<FormField name='rememberMe'>
					<Checkbox label='Remember me' />
				</FormField>
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
		</Form>
	);
}
