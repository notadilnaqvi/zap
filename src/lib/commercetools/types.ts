import { z } from 'zod';
import { ctTokenInfoSchema } from './schemas';

export type CtTokenInfo = z.infer<typeof ctTokenInfoSchema>;
