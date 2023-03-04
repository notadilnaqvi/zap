import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function UserIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
			<circle
				cx='12'
				cy='7'
				r='4'
			></circle>
		</svg>
	);
}
