import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { frontmatter } from "./index.mdx"

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: frontmatter.title,
    description: frontmatter.subtitle,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
