import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { url } from '../../lib/url';

export async function GET(context) {
  const entries = (await getCollection('groundtruth')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const section = new URL(url('/ground-truth/'), context.site);
  const self = new URL(url('/ground-truth/rss.xml'), context.site);
  return rss({
    title: 'Ground Truth: claims vs. measured reality',
    description:
      'Engineering and climate claims put next to measured data: the gap quantified, error bars intact.',
    site: section,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<atom:link href="${self.href}" rel="self" type="application/rss+xml"/>`,
    items: entries.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.date,
      link: url(`/ground-truth/${e.id}/`),
    })),
  });
}
