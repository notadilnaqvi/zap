export function LoadingDots() {
	return (
		<span className='inline-flex items-center gap-0.5'>
			<span className='animate-blink h-1 w-1 rounded-full bg-white'></span>
			<span className='animate-blink animation-delay-[200ms] h-1 w-1 rounded-full bg-white'></span>
			<span className='animate-blink animation-delay-[400ms] h-1 w-1 rounded-full bg-white'></span>
		</span>
	);
}
