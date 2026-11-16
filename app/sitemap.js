import { countries } from '@/data/countries';
import { holidayPackages } from '@/data/holidays';
import { documentationServices } from '@/data/documentation';
import { DEFAULT_SITE_METADATA } from '@/lib/seo';

export default function sitemap() {
  const baseUrl = DEFAULT_SITE_METADATA.siteUrl;
  const now = new Date();

  // Static routes
  const staticRoutes = [
    '',
    '/dummy-ticket',
    '/visas',
    '/holidays',
    '/documentation',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Country Visa routes
  const visaRoutes = countries.map((country) => ({
    url: `${baseUrl}/visas/${country.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Holiday Package routes
  const holidayRoutes = holidayPackages.map((pkg) => ({
    url: `${baseUrl}/holidays/${pkg.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Documentation Service routes
  const docRoutes = documentationServices.map((service) => ({
    url: `${baseUrl}/documentation/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...visaRoutes, ...holidayRoutes, ...docRoutes];
}
