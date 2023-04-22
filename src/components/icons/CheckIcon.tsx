import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polyline points='20 6 9 17 4 12'></polyline>
		</svg>
	);
}
