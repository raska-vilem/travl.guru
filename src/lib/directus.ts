import { CMS_URL } from 'astro:env/server';
import { createDirectus, rest } from '@directus/sdk';
import type { ApiCollections } from '@generated/directus';

export const directusClient = createDirectus<ApiCollections>(CMS_URL).with(rest());
