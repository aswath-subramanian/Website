export type Project = {
  name: string;
  desc: string;
  href: string;
  tag?: string;
};

// Curated by hand, rendered at build time: no reader-side GitHub requests.
export const projects: Project[] = [
  {
    name: 'aswath.nl',
    desc: 'This site: Astro, static, self-hosted, zero-JS pages with chart islands to come.',
    href: 'https://github.com/aswath-subramanian/website',
    tag: 'live',
  },
];
