import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'></polygon>
		</svg>
	);
}
