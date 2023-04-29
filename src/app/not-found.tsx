import { DefaultLayout } from '~/components/common';

export const metadata = {
	title: 'Not found',
	description: 'This page could not be found',
};

export default function NotFound() {
	return (
		<DefaultLayout>
			<h1>Not found (root)</h1>
		</DefaultLayout>
	);
}
