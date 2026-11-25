import CountryDirectory from '@/components/services/CountryDirectory';
import { buildMetadata } from '@/lib/seo';
import { Globe2, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export const metadata = buildMetadata({
  title: "Visa Services | Tourist & Business Visa Assistance for 35 Countries",
  description: "Explore tourist, business, and visit visa services across 35 global destinations. Expert document checklists, application review, and direct WhatsApp assistance.",
  path: "/visas",
});

export default function VisasPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>International Visa Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Tourist &amp; Business Visa Services
          </h1>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Professional visa guidance and application facilitation across 35 destinations worldwide. Select your destination below to view available visa categories and document requirements.
          </p>
        </div>

        {/* Informative Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-yellow-dark shrink-0" />
            <span className="text-xs font-bold text-slate-700">Dossier Quality & Document Verification</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-brand-yellow-dark shrink-0" />
            <span className="text-xs font-bold text-slate-700">E-Visa & Consular Sticker Visas</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-yellow-dark shrink-0" />
            <span className="text-xs font-bold text-slate-700">Direct 1-on-1 WhatsApp Support</span>
          </div>
        </div>

        {/* Searchable Directory */}
        <CountryDirectory />
      </div>
    </div>
  );
}
