'use client';

import { Globe, Ticket, MessageSquare, ShieldCheck } from 'lucide-react';

export default function TrustStatsSection() {
  const metrics = [
    {
      icon: Globe,
      number: "35",
      label: "Visa Destinations",
      sublabel: "Embassy & Consular compliant dossiers",
      accent: "text-brand-yellow",
      bg: "bg-brand-navy"
    },
    {
      icon: Ticket,
      number: "15,000+",
      label: "Verifiable PNRs Issued",
      sublabel: "Authentic airline reservation codes",
      accent: "text-brand-yellow",
      bg: "bg-brand-navy"
    },
    {
      icon: MessageSquare,
      number: "24x7",
      label: "WhatsApp Support Desk",
      sublabel: "Average response within 5 minutes",
      accent: "text-brand-yellow",
      bg: "bg-brand-navy"
    },
    {
      icon: ShieldCheck,
      number: "4.9★",
      label: "Customer Trust Rating",
      sublabel: "Zero hidden fees & transparent process",
      accent: "text-brand-yellow",
      bg: "bg-brand-navy"
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3.5 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-3.5 xs:p-4 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`w-9 h-9 xs:w-11 xs:h-11 rounded-lg xs:rounded-xl ${item.bg} flex items-center justify-center text-brand-yellow shadow-md shrink-0`}>
                    <Icon className="w-4 h-4 xs:w-5 xs:h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-brand-dark tracking-tight">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-brand-dark group-hover:text-brand-navy transition-colors leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-[10px] xs:text-xs text-brand-muted mt-1 leading-normal line-clamp-2">
                    {item.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
