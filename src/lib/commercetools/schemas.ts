import { z } from 'zod';

export const ctTokenInfoSchema = z.object({
	scope: z.string(),
	expires_in: z.number(),
	expires_at: z.number(),
	access_token: z.string(),
	token_type: z.literal('Bearer'),
	refresh_token: z.string().optional(),
});

type CtTokenInfo = z.infer<typeof ctTokenInfoSchema>;
