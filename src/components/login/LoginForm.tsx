'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Button, Checkbox, Input } from '~/components/ui';
import { VALID_EMAIL_REGEX } from '~/utils/constants';

import type { SubmitHandler } from 'react-hook-form';

type LoginFormInputs = {
	email: string;
	password: string;
};

export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>();

	const onSubmit: SubmitHandler<LoginFormInputs> = data => console.log(data);
	return (
		<form
			className='flex flex-col space-y-4 rounded border p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className='text-2xl font-semibold'>Login to your account</h1>
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
				{...register('password', { required: 'Password is missing' })}
				error={errors.password?.message}
			/>
			<div className='flex flex-row items-center justify-between'>
				<Checkbox label='Remember me' />
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
			>
				Login
			</Button>
		</form>
	);
}
