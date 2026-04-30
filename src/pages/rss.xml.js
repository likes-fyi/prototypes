import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SiteTitle, SiteDescription } from "../site.config";

export async function GET(context) {
  const pages = await getCollection("pages");
  return rss({
    title: SiteTitle,
    description: SiteDescription,
    site: context.site,
    items: pages.map((page) => ({
      ...page.data,
      link: `/${page.id}/`,
    })),
  });
}
