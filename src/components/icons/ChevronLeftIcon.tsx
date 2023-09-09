import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polyline points='15 18 9 12 15 6'></polyline>
		</svg>
	);
}
