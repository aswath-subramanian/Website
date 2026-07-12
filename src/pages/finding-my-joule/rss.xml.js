import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { url } from '../../lib/url';

export async function GET(context) {
  const posts = (await getCollection('fmj')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const section = new URL(url('/finding-my-joule/'), context.site);
  const self = new URL(url('/finding-my-joule/rss.xml'), context.site);
  return rss({
    title: 'Finding My Joule: a wider notebook',
    description: 'Energy, engineering, process, and tangents. Any register.',
    site: section,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<atom:link href="${self.href}" rel="self" type="application/rss+xml"/>`,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: url(`/finding-my-joule/${p.id}/`),
    })),
  });
}
