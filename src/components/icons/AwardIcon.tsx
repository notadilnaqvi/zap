import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<circle
				cx='12'
				cy='8'
				r='7'
			></circle>
			<polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'></polyline>
		</svg>
	);
}
