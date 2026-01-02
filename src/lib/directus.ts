import { CMS_URL } from 'astro:env/server';
import { createDirectus, type RestCommand, rest } from '@directus/sdk';
import type { ApiCollections } from '@/generated/directus';

const directusCache = new Map<string, unknown>();

export const directusClient = createDirectus<ApiCollections>(CMS_URL).with(rest());

export const directusRequest = async <T>(options: RestCommand<T, ApiCollections>): Promise<T> => {
    const cacheKey = JSON.stringify(options());

    if (directusCache.has(cacheKey)) {
        return directusCache.get(cacheKey) as T;
    }

    const data = await directusClient.request(options);

    directusCache.set(cacheKey, data);

    return data;
};
