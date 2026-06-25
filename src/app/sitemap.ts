export const dynamic = 'force-static';

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "morrocoynationalpark.com"}`;

  const languages = ['en', 'es', 'zh'];
  const routes = ['', '/privacy', '/terms', '/cookies'];

  const sitemapEntries = routes.flatMap((route) => {
    return languages.map((lang) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
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