import { CDN_URL } from 'astro:env/server';
import type { DirectusFile } from '@/generated/directus';

export const buildAssetUrl = (asset: string | DirectusFile, options?: Record<string, string>) => {
    let assetId: string;

    if (typeof asset === 'string') {
        assetId = asset;
    } else {
        assetId = asset.id;
    }

    let url = `${CDN_URL}/${assetId}`;

    if (options) {
        url = `${url}?${new URLSearchParams(options)}`;
    }

    return url;
};
