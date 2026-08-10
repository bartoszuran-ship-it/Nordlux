import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    'dachbeschichtung',
    'dachreinigung',
    'fassadenreinigung',
    'solarreinigung',
    'ueber-uns',
    'kontakt',
    'impressum',
    'datenschutz',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}/${route}${route ? '/' : ''}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
