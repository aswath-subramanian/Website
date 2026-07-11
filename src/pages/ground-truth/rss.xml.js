import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('groundtruth')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const section = new URL('/ground-truth/', context.site);
  const self = new URL('/ground-truth/rss.xml', context.site);
  return rss({
    title: 'Ground Truth — measuring superpollutants honestly',
    description:
      'Deep dives into whether the tonnes we claim to cut are actually real, one gas at a time.',
    site: section,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<atom:link href="${self.href}" rel="self" type="application/rss+xml"/>`,
    items: entries.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.date,
      link: `/ground-truth/${e.id}/`,
    })),
  });
}
