import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import '~/styles/globals.css';
import { cx } from '~/utils';
import { LOCALE } from '~/utils/constants';

const interFont = Inter({
	subsets: ['latin', 'latin-ext'],
	variable: '--inter-font',
});

export const metadata = {
	title: {
		default: 'ZAP',
		template: 'ZAP - %s',
	},
};

export default function RootLayout(props: PropsWithChildren<{}>) {
	const { children } = props;

	return (
		<html
			lang={LOCALE}
			className={cx('bg-white font-sans text-gray-900 antialiased')}
		>
			<head />
			<body className={cx('min-h-screen', interFont.className)}>
				{children}
			</body>
		</html>
	);
}
