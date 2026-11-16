import { DEFAULT_SITE_METADATA } from '@/lib/seo';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DEFAULT_SITE_METADATA.siteUrl}/sitemap.xml`,
  };
}
