'use client';

import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Checkbox, Input } from '~/components/ui';
import { useUi } from '~/hooks';
import { useSignUp } from '~/lib/commercetools/hooks';
import { extractApolloErrorCode } from '~/utils';

const signUpFormSchema = z
	.object({
		firstName: z.string().min(1, 'Please enter your first name'),
		lastName: z.string().min(1, 'Please enter your last name'),
		email: z.string().email('Please enter a valid email'),
		password: z.string().min(1, 'Please enter your password'),
		confirmPassword: z.string().min(1, 'Please confirm your password'),
	})
	.refine(form => form.password === form.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

type SignUpForm = z.infer<typeof signUpFormSchema>;

export function SignUpForm() {
	const router = useRouter();
	const [signup] = useSignUp();
	const showToast = useUi(state => state.showToast);
	const [isSignUpLoading, setIsSignUpLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset: resetSignUpForm,
		formState: { errors },
	} = useForm<SignUpForm>({ resolver: zodResolver(signUpFormSchema) });

	const onSubmit: SubmitHandler<SignUpForm> = async data => {
		const { email, password, firstName, lastName } = data;
		setIsSignUpLoading(true);
		try {
			await signup({
				firstName,
				lastName,
				email,
				password,
			});
			showToast({ message: 'Account created successfully', type: 'success' });
			resetSignUpForm();
			router.push('/');
		} catch (error) {
			let message = 'Account creation failed. Please try again';
			if (error instanceof ApolloError) {
				if (extractApolloErrorCode(error) === 'DuplicateField') {
					message = 'Account already exists. Try logging in';
				}
			}
			showToast({
				message,
				type: 'error',
			});
			setIsSignUpLoading(false);
		}
	};

	return (
		<form
			className='flex flex-col space-y-4 rounded border p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className='text-2xl font-semibold'>Create an account</h1>
			<div className='flex flex-row space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4'>
				<Input
					label='First name'
					error={errors.firstName?.message}
					{...register('firstName')}
				/>
				<Input
					label='Last name'
					error={errors.lastName?.message}
					{...register('lastName')}
				/>
			</div>
			<Input
				label='Email'
				error={errors.email?.message}
				{...register('email')}
			/>
			<Input
				label='Password'
				type='password'
				error={errors.password?.message}
				{...register('password')}
			/>
			<Input
				label='Confirm password'
				type='password'
				error={errors.confirmPassword?.message}
				{...register('confirmPassword')}
			/>
			<Checkbox label='Sign up to our newsletter' />
			<Button
				type='submit'
				className='w-full'
				loading={isSignUpLoading}
				disabled={isSignUpLoading}
			>
				Create account
			</Button>
		</form>
	);
}
