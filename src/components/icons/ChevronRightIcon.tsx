import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polyline points='9 18 15 12 9 6'></polyline>
		</svg>
	);
}
