import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading: boolean;
}

export function Button({
	children,
	loading,
	...rest
}: PropsWithChildren<Props>) {
	return <button {...rest}>{loading ? 'loading' : children}</button>;
}
