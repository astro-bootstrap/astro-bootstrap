// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const componentsCollection = defineCollection({ 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    layout: z.string(),
    variant: z.string().optional()
  }),
 });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'components': componentsCollection,
  'utiltiies': componentsCollection,
};
