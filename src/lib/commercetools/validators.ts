import { z } from 'zod';

export const ctTokenInfoSchema = z.object({
	scope: z.string(),
	expires_in: z.number(),
	expires_at: z.number(),
	access_token: z.string(),
	token_type: z.literal('Bearer'),
	refresh_token: z.string().optional(),
});

export const ctTestDataSchema = z.object({
	foo: z.string(),
	bar: z.number(),
});
