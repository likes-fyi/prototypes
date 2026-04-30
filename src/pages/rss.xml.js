import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { frontmatter } from "./index.mdx"

export async function GET(context) {
  const pages = await getCollection("pages");
  return rss({
    title: frontmatter.title,
    description: frontmatter.subtitle,
    site: context.site,
    items: pages.map((page) => ({
      ...page.data,
      link: `/${page.id}/`,
    })),
  });
}
