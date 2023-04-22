import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polyline points='6 9 12 15 18 9'></polyline>
		</svg>
	);
}
