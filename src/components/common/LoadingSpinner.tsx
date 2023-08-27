'use client';

import { cx } from '~/utils';

export type LoadingSpinnerProps = {
	size?: 'large' | 'small';
	color?: 'light' | 'muted' | 'dark' | 'primary' | 'warning' | 'error';
};

// Stolen from https://github.com/geist-org/geist-ui/blob/master/components/spinner/spinner.tsx

export function LoadingSpinner(props: LoadingSpinnerProps) {
	const { size = 'large', color = 'dark' } = props;

	return (
		<div className={cx('block', size === 'large' ? 'h-6 w-6' : 'h-4 w-4')}>
			<div className='relative left-1/2 top-1/2 h-full w-full'>
				{/* One span for each thingy in the loader */}
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => {
					return (
						<span
							key={index}
							className={cx('loading-spinner-thingy', {
								'bg-white': color === 'light',
								'bg-neutral-400': color === 'muted',
								'bg-black': color === 'dark',
								'bg-primary': color === 'primary',
								'bg-warning': color === 'warning',
								'bg-error': color === 'error',
								'large-thingy': size === 'large',
								'small-thingy': size === 'small',
							})}
						>
							<style>{`
								.loading-spinner-thingy.large-thingy {
									background-color: current;
									position: absolute;
									top: -5%;
									width: 25%;
									height: 2px;
									left: -10%;
									border-radius: 9999px;
									animation: spinner 1.2s linear 0s infinite normal none running;
								} 

								.loading-spinner-thingy.small-thingy {
									background-color: current;
									position: absolute;
									top: -5%;
									width: 25%;
									height: 1.5px;
									left: -10%;
									border-radius: 9999px;
									animation: spinner 1.2s linear 0s infinite normal none running;
								}

								.loading-spinner-thingy:nth-child(1) {
									animation-delay: -1.2s;
									transform: rotate(0deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(2) {
									animation-delay: -1.1s;
									transform: rotate(30deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(3) {
									animation-delay: -1s;
									transform: rotate(60deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(4) {
									animation-delay: -0.9s;
									transform: rotate(90deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(5) {
									animation-delay: -0.8s;
									transform: rotate(120deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(6) {
									animation-delay: -0.7s;
									transform: rotate(150deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(7) {
									animation-delay: -0.6s;
									transform: rotate(180deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(8) {
									animation-delay: -0.5s;
									transform: rotate(210deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(9) {
									animation-delay: -0.4s;
									transform: rotate(240deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(10) {
									animation-delay: -0.3s;
									transform: rotate(270deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(11) {
									animation-delay: -0.2s;
									transform: rotate(300deg) translate(146%);
								}
								.loading-spinner-thingy:nth-child(12) {
									animation-delay: -0.1s;
									transform: rotate(330deg) translate(146%);
								}
								@keyframes spinner {
									0% {
										opacity: 1;
									}
									100% {
										opacity: 0.15;
									}
								}
							`}</style>
						</span>
					);
				})}
			</div>
		</div>
	);
}
