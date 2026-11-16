import Link from 'next/link';
import { documentationServices } from '@/data/documentation';
import { PlaneTakeoff, FileCheck, Building2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DocumentationPreviewSection() {
  const iconMap = {
    PlaneTakeoff,
    FileCheck,
    Building2,
    ShieldCheck,
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header & Intro */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow text-xs font-bold uppercase tracking-wider">
                <span>Airport & Immigration Clearances</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Essential Travel Documentation Services
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Avoid last-minute airport boarding denials and consular rejections. We handle mandatory airline OK to Board updates, POE Emigration clearances, verifiable hotel vouchers, and comprehensive travel insurance.
              </p>

              <div className="pt-2">
                <Link
                  href="/documentation"
                  className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg active:scale-95"
                >
                  <span>Explore Documentation Services</span>
                  <ArrowRight className="w-4 h-4 text-brand-dark" />
                </Link>
              </div>
            </div>

            {/* Right 4 Services Mini Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documentationServices.map((service) => {
                const Icon = iconMap[service.iconName] || ShieldCheck;
                return (
                  <Link
                    key={service.id}
                    href={`/documentation/${service.slug}`}
                    className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 hover:border-brand-yellow/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold text-brand-yellow bg-brand-yellow/10 px-2.5 py-0.5 rounded-full border border-brand-yellow/20">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-brand-yellow transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs text-brand-yellow font-semibold">
                      <span>View Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
