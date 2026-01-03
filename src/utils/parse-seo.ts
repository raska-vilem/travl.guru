import { z } from 'astro/zod';

const seoSchema = z.object({
    title: z.string(),
    meta_description: z.string(),
    og_image: z.string().optional(),
});

export const parseSeo = (data: Record<string, unknown>) => {
    return seoSchema.parse(data);
};
