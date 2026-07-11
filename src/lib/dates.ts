export const isoDate = (d: Date): string => d.toISOString().slice(0, 10);

export const formatDate = (d: Date): string =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
