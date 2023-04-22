import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polyline points='18 15 12 9 6 15'></polyline>
		</svg>
	);
}
