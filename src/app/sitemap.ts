export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import { guides, languages, siteUrl } from '@/i18n/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  const routes = ['', '/privacy', '/terms', '/cookies', ...guides.map(({ slug }) => `/explore/${slug}`)];

  const sitemapEntries = routes.flatMap((route) => {
    return languages.map((lang) => ({
      url: `${baseUrl}/${lang}${route}`,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          es: `${baseUrl}/es${route}`,
          zh: `${baseUrl}/zh${route}`,
        },
      },
    }));
  });

  return sitemapEntries;
}