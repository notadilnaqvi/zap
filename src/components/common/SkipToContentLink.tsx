/**
 * Allows users to skip the navigation and jump straight to the main content
 * of the page. This should always be the first focusable element on the page.
 */
export function SkipToContentLink() {
	return (
		<div className='flex w-full justify-center px-4'>
			<div className='relative w-full max-w-page'>
				<a
					href='#content'
					className='absolute z-50 mt-4 -translate-y-16 bg-white px-2.5 py-1.5 text-sm text-primary underline ring-2 ring-white focus-visible:translate-y-0'
				>
					Skip to content
				</a>
			</div>
		</div>
	);
}
