'use client';

import Image from 'next/image';
import { type MouseEventHandler } from 'react';

import ReactSlickCarousel, { type Settings } from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '~/components/icons';
import '~/styles/hero-image-carousel.css';
import HeroImage1 from '../../../public/hero-image-1.jpeg';
import HeroImage2 from '../../../public/hero-image-2.jpeg';
import HeroImage3 from '../../../public/hero-image-3.jpeg';

type ReactSlickArrowProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const reactSlickSettings: Settings = {
	speed: 750,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	accessibility: true,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

function NextArrow(props: ReactSlickArrowProps) {
	const { onClick } = props;
	return (
		<button
			className='absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 p-0 shadow-sm shadow-black/10 transition-colors hover:bg-white/30'
			onClick={onClick}
		>
			<div className='ml-0.5'>
				<ChevronRightIcon className='h-7 w-7 text-black/30' />
			</div>
		</button>
	);
}

function PrevArrow(props: ReactSlickArrowProps) {
	const { onClick } = props;
	return (
		<button
			className='absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 p-0 shadow-sm shadow-black/10 transition-colors hover:bg-white/30'
			onClick={onClick}
		>
			<div className='mr-0.5'>
				<ChevronLeftIcon className='h-7 w-7 text-black/30' />
			</div>
		</button>
	);
}

export function HeroImageCarousel() {
	return (
		<div id='hero-image-carousel'>
			<ReactSlickCarousel
				{...reactSlickSettings}
				className='h-[400px] overflow-hidden rounded lg:h-[330px] md:h-[256px] sm:rounded-none'
			>
				<div className='relative h-[400px] w-full lg:h-[330px] md:h-[256px]'>
					<Image
						src={HeroImage1}
						className='h-full w-full object-cover'
						alt='Hero image 1'
						priority
						fill
					/>
				</div>
				<div className='relative h-[400px] w-full lg:h-[330px] md:h-[256px]'>
					<Image
						src={HeroImage2}
						className='h-full w-full object-cover'
						alt='Hero image 2'
						priority
						fill
					/>
				</div>
				<div className='relative h-[400px] w-full lg:h-[330px] md:h-[256px]'>
					<Image
						src={HeroImage3}
						className='h-full w-full object-cover'
						alt='Hero image 3'
						priority
						fill
					/>
				</div>
			</ReactSlickCarousel>
		</div>
	);
}
