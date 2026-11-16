import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/data/countries';
import { buildMetadata } from '@/lib/seo';
import VisaApplyCard from '@/components/services/VisaApplyCard';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

export async function generateStaticParams() {
  return countries.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({ params }) {
  const country = countries.find((c) => c.slug === params.country);
  if (!country) return {};

  return buildMetadata({
    title: `${country.name} Visa Services & Document Requirements`,
    description: `Apply for ${country.name} Tourist & Business Visa. Review document checklists, processing times, validity, and chat with our visa specialists.`,
    path: `/visas/${country.slug}`,
    image: country.heroImage,
  });
}

export default function CountryVisaPage({ params }) {
  const country = countries.find((c) => c.slug === params.country);

  if (!country) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header with Destination Image */}
      <div className="relative min-h-[360px] sm:min-h-[420px] flex items-end bg-brand-navy overflow-hidden">
        <Image
          src={country.heroImage}
          alt={country.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-navy-dark/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-brand-yellow transition-colors">Visas</Link>
            <span>/</span>
            <span className="text-brand-yellow font-semibold">{country.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl drop-shadow">{country.flag}</span>
                <span className="bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {country.region}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {country.name} Visa Assistance
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {country.overview}
              </p>
            </div>

            <Link
              href="/visas"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 self-start sm:self-auto shrink-0 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Countries</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Section: Available Visa Types */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark">Available Visa Categories</h2>
                  <p className="text-xs text-brand-muted">Select the visa category matching your travel intent to apply.</p>
                </div>
                <span className="text-xs font-bold text-brand-navy bg-slate-200/80 px-2.5 py-1 rounded-full">
                  {country.visas?.length || 0} Options
                </span>
              </div>

              <div className="space-y-5">
                {country.visas?.map((visa) => (
                  <VisaApplyCard key={visa.id} country={country} visa={visa} />
                ))}
              </div>
            </div>

            {/* General Requirements & Checklists */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                <ShieldCheck className="w-6 h-6 text-brand-navy" />
                <h3 className="text-xl font-bold text-brand-dark">
                  General Document Checklist for {country.name}
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {country.generalRequirements?.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              {/* Need Dummy Ticket or Hotel Booking CTA inside */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                <div className="space-y-0.5 text-center sm:text-left">
                  <p className="text-xs font-bold text-brand-dark">Missing flight reservation or hotel vouchers for {country.name}?</p>
                  <p className="text-xs text-brand-muted">We provide embassy-compliant dummy tickets and verified hotel confirmations.</p>
                </div>
                <Link
                  href="/dummy-ticket"
                  className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-4 py-2.5 rounded-xl shrink-0 transition-colors"
                >
                  Book Flight Itinerary
                </Link>
              </div>
            </div>

            {/* Important Notes & Consular Disclaimers */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 space-y-2 text-xs text-amber-900 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Important Consular Advisory for {country.name}</span>
              </div>
              <p>{country.importantNotes}</p>
              <p className="text-[11px] text-amber-800/80 pt-1 border-t border-amber-200/60">
                * Visa fees, biometric requirements, and immigration policies are subject to unilateral changes by sovereign governments. Horizon Tourism & Visas Co. provides documentation assistance and submission coordination. Final visa issuance decisions rest solely with the consular authority.
              </p>
            </div>
          </div>

          {/* Right Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Country Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-brand-dark text-base border-b border-slate-100 pb-3">
                Destination Fast Facts
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400">Country:</span>
                  <span className="font-bold text-brand-dark">{country.name}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400">Region:</span>
                  <span className="font-medium text-brand-dark">{country.region}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400">Passport Validity:</span>
                  <span className="font-medium text-brand-dark">Min 6 Months required</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400">Assistance Mode:</span>
                  <span className="font-medium text-brand-dark">Online Dossier & WhatsApp</span>
                </div>
              </div>

              <div className="p-3 bg-brand-yellow/10 rounded-xl border border-brand-yellow/30 text-[11px] text-brand-dark font-medium leading-relaxed">
                Need customized visa advice for your group or family? Our advisors review your documents prior to application.
              </div>
            </div>

            {/* Other Popular Destinations Widget */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-brand-dark text-sm border-b border-slate-100 pb-2.5">
                Other Popular Destinations
              </h3>
              <div className="space-y-2">
                {countries
                  .filter((c) => c.slug !== country.slug && c.popular)
                  .slice(0, 5)
                  .map((other) => (
                    <Link
                      key={other.id}
                      href={`/visas/${other.slug}`}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <span>{other.flag}</span>
                        <span className="font-semibold text-brand-dark group-hover:text-brand-navy">{other.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 group-hover:text-brand-yellow-dark">View</span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
