import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function MailIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
			<polyline points='22,6 12,13 2,6'></polyline>
		</svg>
	);
}
