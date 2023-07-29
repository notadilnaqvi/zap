import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
			<circle
				cx='12'
				cy='12'
				r='3'
			></circle>
		</svg>
	);
}
