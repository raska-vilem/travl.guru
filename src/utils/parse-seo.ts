import { z } from 'astro/zod';

const seoSchema = z.object({
    title: z.string(),
    meta_description: z.string(),
    og_image: z.string().nullable(),
});

export const parseSeo = (data: Record<string, unknown>) => {
    try {
        return seoSchema.parse(data);
    } catch (e) {
        throw new Error('Invalid seo schema', { cause: e });
    }
};
