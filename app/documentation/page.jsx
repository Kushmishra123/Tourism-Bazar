import Link from 'next/link';
import Image from 'next/image';
import { documentationServices } from '@/data/documentation';
import { buildMetadata } from '@/lib/seo';
import { PlaneTakeoff, FileCheck, Building2, ShieldCheck, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export const metadata = buildMetadata({
  title: "Travel Documentation Services | OK to Board, POE Emigration & Hotel Vouchers",
  description: "Official travel documentation assistance: airline OK to Board (OTB) clearances, POE emigration, verifiable hotel bookings, and travel medical insurance.",
  path: "/documentation",
});

export default function DocumentationPage() {
  const iconMap = {
    PlaneTakeoff,
    FileCheck,
    Building2,
    ShieldCheck,
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Essential Travel Facilitation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Travel Documentation & Clearances
          </h1>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Fast, compliant processing for mandatory airline verifications, government emigration clearances, hotel reservation vouchers, and international travel insurance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documentationServices.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-brand-yellow/70 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Cover Image Banner */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy-dark/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {service.badge}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-white group-hover:text-brand-yellow transition-colors drop-shadow-sm">
                      {service.title}
                    </h2>
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block">
                        Core Requirements:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {service.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="truncate">{service.turnaroundTime.split('(')[0]}</span>
                    </div>

                    <Link
                      href={`/documentation/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-yellow hover:text-brand-dark text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
