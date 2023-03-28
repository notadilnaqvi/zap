'use client';

import { cx } from '~/utils';

interface Props {
	size?: 'large' | 'small';
}

export function LoadingSpinner({ size = 'large' }: Props) {
	return (
		<div className={cx('block', size === 'large' ? 'h-6 w-6' : 'h-4 w-4')}>
			<div className='relative top-1/2 left-1/2 h-full w-full'>
				{/* One span for each line thingy in the loader */}
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => {
					return (
						<span key={index}>
							<style jsx>{`
								span {
									background-color: #111827;
									position: absolute;
									top: -5%;
									width: 25%;
									height: ${size === 'large' ? '2px' : '1.5px'};
									left: -10%;
									border-radius: 9999px;
									animation: spinner 1.2s linear 0s infinite normal none running;
								}
								span:nth-child(1) {
									animation-delay: -1.2s;
									transform: rotate(0deg) translate(146%);
								}
								span:nth-child(2) {
									animation-delay: -1.1s;
									transform: rotate(30deg) translate(146%);
								}
								span:nth-child(3) {
									animation-delay: -1s;
									transform: rotate(60deg) translate(146%);
								}
								span:nth-child(4) {
									animation-delay: -0.9s;
									transform: rotate(90deg) translate(146%);
								}
								span:nth-child(5) {
									animation-delay: -0.8s;
									transform: rotate(120deg) translate(146%);
								}
								span:nth-child(6) {
									animation-delay: -0.7s;
									transform: rotate(150deg) translate(146%);
								}
								span:nth-child(7) {
									animation-delay: -0.6s;
									transform: rotate(180deg) translate(146%);
								}
								span:nth-child(8) {
									animation-delay: -0.5s;
									transform: rotate(210deg) translate(146%);
								}
								span:nth-child(9) {
									animation-delay: -0.4s;
									transform: rotate(240deg) translate(146%);
								}
								span:nth-child(10) {
									animation-delay: -0.3s;
									transform: rotate(270deg) translate(146%);
								}
								span:nth-child(11) {
									animation-delay: -0.2s;
									transform: rotate(300deg) translate(146%);
								}
								span:nth-child(12) {
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

// DOCS: https://github.com/geist-org/geist-ui/blob/master/components/spinner/spinner.tsx
