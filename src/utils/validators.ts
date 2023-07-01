import { z } from 'zod';

export const authTokenSchema = z.object({
	scope: z.string(),
	expires_in: z.number(),
	expires_at: z.number(),
	access_token: z.string(),
	token_type: z.literal('Bearer'),
	refresh_token: z.string(),
	/**
	 * This is a custom field that we add to the auth token to indicate whether
	 * the user is logged in or not since Commercetools doesn't provide an easy
	 * way to check the login status of a user.
	 */
	is_logged_in: z.boolean().optional(),
});

export const ctTestDataSchema = z.object({
	foo: z.string(),
	bar: z.number(),
});
