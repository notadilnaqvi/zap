'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Checkbox, Input } from '~/components/ui';
import { VALID_EMAIL_REGEX } from '~/utils/constants';

type SignUpFormInputs = {
	email: string;
	password: string;
	lastName: string;
	firstName: string;
	confirmPassword: string;
};

export function SignUpForm() {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormInputs>();

	const onSubmit: SubmitHandler<SignUpFormInputs> = data => console.log(data);
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
			>
				Create account
			</Button>
		</form>
	);
}
