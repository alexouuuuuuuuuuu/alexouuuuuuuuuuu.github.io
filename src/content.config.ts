import { glob,file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { date } from 'astro:schema';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		auteur: z.string().optional(),
		tags: z.array(z.string())

	}),
});



const works = defineCollection({
	loader: file("src/content/data/works.json"),
	schema: z.object({
	  id: z.number(),
	  workName: z.string(),
	  competences: z.array(z.string()),
	  photo: z.string(),
	  date: z.string()
	}),
  });


//   const works = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
// 	// Type-check frontmatter using a schema
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		// Transform string to Date object
// 		pubDate: z.coerce.date(),
// 		updatedDate: z.coerce.date().optional(),
// 		heroImage: z.string().optional(),
// 		auteur: z.string().optional()
// 	}),
// });

  
  export const collections = { blog, works};