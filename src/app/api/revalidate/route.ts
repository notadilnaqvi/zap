import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get('secret');
	const slug = request.nextUrl.searchParams.get('tag');

	if (secret !== process.env.REVALIDATE_SECRET) {
		return NextResponse.json(
			{ message: 'Invalid `secret` search param' },
			{ status: 401 },
		);
	}

	if (!slug) {
		return NextResponse.json(
			{ message: 'Missing `slug` search param' },
			{ status: 400 },
		);
	}

	revalidatePath('/product/' + slug);

	return NextResponse.json({ revalidated: true, now: Date.now() });
}
