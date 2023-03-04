import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
		</svg>
	);
}
