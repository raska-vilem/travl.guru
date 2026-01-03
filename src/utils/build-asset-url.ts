import { CMS_URL } from 'astro:env/server';

export const buildAssetUrl = (assetId: string, options?: Record<string, string>) => {
    let url = `${CMS_URL}/assets/${assetId}`;

    if (options) {
        url = `${url}?${new URLSearchParams(options)}`;
    }

    return url;
};
