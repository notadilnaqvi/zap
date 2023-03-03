export function LoadingDots() {
	return (
		<span className='inline-flex items-center gap-0.5'>
			<span className='h-1 w-1 animate-blink rounded-full bg-white'></span>
			<span className='h-1 w-1 animate-blink rounded-full bg-white animation-delay-[200ms]'></span>
			<span className='h-1 w-1 animate-blink rounded-full bg-white animation-delay-[400ms]'></span>
		</span>
	);
}
