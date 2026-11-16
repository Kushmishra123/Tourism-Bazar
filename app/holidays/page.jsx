import HolidayPackageDirectory from '@/components/services/HolidayPackageDirectory';
import { buildMetadata } from '@/lib/seo';
import { Palmtree, Compass, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata = buildMetadata({
  title: "Holiday Packages & Tours | Umrah, International & Domestic Packages",
  description: "Discover curated holiday packages for Umrah, Vietnam, Thailand, Kashmir, Goa, and small-group tours. Custom itineraries and transparent pricing.",
  path: "/holidays",
});

export default function HolidaysPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/20 text-brand-dark text-xs font-bold uppercase tracking-wider">
            <Palmtree className="w-3.5 h-3.5" />
            <span>Curated Travel Experiences</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Holiday Packages & Custom Tours
          </h1>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            From spiritually fulfilling Umrah pilgrimages to breathtaking Southeast Asian getaways and serene domestic retreats, explore authentic hand-crafted itineraries.
          </p>
        </div>

        {/* Directory with category filter */}
        <HolidayPackageDirectory />
      </div>
    </div>
  );
}
