'use client';

import { ApolloError } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Checkbox, Input } from '~/components/ui';
import { useUi } from '~/hooks';
import { useSignUp } from '~/lib/commercetools/hooks';
import { VALID_EMAIL_REGEX } from '~/utils/constants';

type SignUpFormInputs = {
	email: string;
	password: string;
	lastName: string;
	firstName: string;
	confirmPassword: string;
};

export function SignUpForm() {
	const router = useRouter();
	const [signup] = useSignUp();
	const showToast = useUi(state => state.showToast);
	const [isSignUpLoading, setIsSignUpLoading] = useState(false);
	const {
		watch,
		register,
		handleSubmit,
		reset: resetSignUpForm,
		formState: { errors },
	} = useForm<SignUpFormInputs>();

	const onSubmit: SubmitHandler<SignUpFormInputs> = async data => {
		const { email, password, firstName, lastName } = data;
		setIsSignUpLoading(true);
		try {
			await signup({
				email,
				password,
				firstName,
				lastName,
			});

			showToast({ message: 'Account created successfully', type: 'success' });
			resetSignUpForm();
			router.push('/');
		} catch (error) {
			let message = 'Account creation failed. Please try again';
			if (error instanceof ApolloError) {
				const accountAlreadyExists =
					error?.graphQLErrors?.[0]?.extensions['code'] === 'DuplicateField' &&
					error?.graphQLErrors?.[0]?.extensions['field'] === 'email';
				if (accountAlreadyExists) {
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
					error={errors.firstName?.message}
					label='First name'
					{...register('firstName', { required: 'First name is missing' })}
				/>
				<Input
					error={errors.lastName?.message}
					label='Last name'
					{...register('lastName', { required: 'Last name is missing' })}
				/>
			</div>
			<Input
				error={errors.email?.message}
				label='Email'
				{...register('email', {
					required: 'Email is missing',
					pattern: {
						value: VALID_EMAIL_REGEX,
						message: 'Email is not valid',
					},
				})}
			/>
			<Input
				label='Password'
				type='password'
				{...register('password', {
					required: 'Password is missing',
				})}
				error={errors.password?.message}
			/>
			<Input
				label='Confirm password'
				type='password'
				{...register('confirmPassword', {
					required: 'Confirm password is missing',
					validate: value => {
						if (watch('password') !== value) {
							return 'Passwords do not match';
						}
					},
				})}
				error={errors.confirmPassword?.message}
			/>
			<Checkbox label='Sign up to our newsletter' />
			<Button
				className='w-full'
				type='submit'
				loading={isSignUpLoading}
				disabled={isSignUpLoading}
			>
				Create account
			</Button>
		</form>
	);
}
