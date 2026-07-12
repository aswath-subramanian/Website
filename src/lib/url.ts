const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix a root-absolute path ('/x/…') with the configured base, so links
 *  work both at the domain root and under a subpath (github.io staging). */
export const url = (path: string): string => base + path;
