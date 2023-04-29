import { PropsWithChildren } from 'react';

import { DefaultLayout } from '~/components/common';

export default function RootLayout(props: PropsWithChildren<{}>) {
	const { children } = props;

	return <DefaultLayout>{children}</DefaultLayout>;
}
