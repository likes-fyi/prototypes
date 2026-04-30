import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ base: "./src/content", pattern: [
    "*/index.{md,mdx}",
    "*.{md,mdx}",
  ]}),

  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  })
});

export const collections = { pages };
