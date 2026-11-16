import { notFound } from 'next/navigation';
import Link from 'next/link';
import { holidayPackages } from '@/data/holidays';
import { buildMetadata } from '@/lib/seo';
import HolidayDetailView from '@/components/services/HolidayDetailView';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return holidayPackages.map((pkg) => ({
    package: pkg.slug,
  }));
}

export async function generateMetadata({ params }) {
  const pkg = holidayPackages.find((p) => p.slug === params.package);
  if (!pkg) return {};

  return buildMetadata({
    title: `${pkg.title} (${pkg.duration})`,
    description: pkg.overview,
    path: `/holidays/${pkg.slug}`,
    image: pkg.coverImage,
  });
}

export default function PackageDetailPage({ params }) {
  const pkg = holidayPackages.find((p) => p.slug === params.package);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back */}
        <div className="mb-6">
          <Link
            href="/holidays"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Holiday Packages</span>
          </Link>
        </div>

        {/* Client View */}
        <HolidayDetailView pkg={pkg} />
      </div>
    </div>
  );
}
