import { z } from 'zod';

import { ctTokenInfoSchema } from '~/lib/commercetools/validators';

export * from '~/lib/commercetools/graphql/__generated__/graphql';

export type CtTokenInfo = z.infer<typeof ctTokenInfoSchema>;
