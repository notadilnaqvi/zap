'use client';

import { cx } from '~/utils';

export const CallToActionButton = (
	props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
	const { children, className, ...rest } = props;
	return (
		<button
			className={cx(
				'rounded bg-gradient-to-bl from-primary-light via-primary to-primary-dark px-6 py-3 text-base font-medium tracking-wide text-white',
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
