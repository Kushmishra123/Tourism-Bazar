'use client';

import { Globe, Ticket, MessageSquare, ShieldCheck } from 'lucide-react';

export default function TrustStatsSection() {
  const metrics = [
    {
      icon: Globe,
      number: "30+",
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
    <section className="bg-slate-50 border-y border-slate-200/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center text-brand-yellow shadow-md`}>
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-brand-dark group-hover:text-brand-navy transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1 leading-normal">
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
