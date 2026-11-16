import { notFound } from 'next/navigation';
import Link from 'next/link';
import { documentationServices } from '@/data/documentation';
import { buildMetadata } from '@/lib/seo';
import DocumentationDetailView from '@/components/services/DocumentationDetailView';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return documentationServices.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = documentationServices.find((s) => s.slug === params.service);
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} | Travel Clearances`,
    description: service.shortDescription,
    path: `/documentation/${service.slug}`,
    image: service.heroImage,
  });
}

export default function DocumentationDetailPage({ params }) {
  const service = documentationServices.find((s) => s.slug === params.service);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/documentation"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Documentation Services</span>
          </Link>
        </div>

        <DocumentationDetailView service={service} />
      </div>
    </div>
  );
}
