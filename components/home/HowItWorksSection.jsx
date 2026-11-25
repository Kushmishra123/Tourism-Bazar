'use client';

import { Share2, Compass, CheckCircle2, Headphones, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '@/lib/whatsapp';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Share2,
      title: "Share Plan",
      subtitle: "Tell Us Where & When",
      description: "Pick your service (void ticket, visa assistance, holiday package, or hotel vouchers) and share your route, dates, and traveller count on our website or direct WhatsApp.",
      badge: "Quick 2-Min Form"
    },
    {
      step: "02",
      icon: Compass,
      title: "Get Options",
      subtitle: "Verified Itineraries & Quotes",
      description: "Our licensed travel experts review consular requirements, generate verifiable flight PNR options, and provide a transparent, all-inclusive quote with no hidden extras.",
      badge: "Instant 15-30 Min Review"
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "Confirm",
      subtitle: "Hassle-Free Issuance",
      description: "Approve your itinerary, complete secure payments via bank transfer or UPI, and receive verified booking files, visa dossiers, and documentation straight to your WhatsApp & Email.",
      badge: "100% Secure & Compliant"
    },
    {
      step: "04",
      icon: Headphones,
      title: "Travel Support",
      subtitle: "24x7 Assistance Till Return",
      description: "Travel with absolute peace of mind. Our support desk stays accessible 24/7 on WhatsApp for live flight status, OTB clearance, hotel confirmations, and travel emergencies.",
      badge: "Full Trip Concierge"
    },
  ];

  const handleStartPlanning = () => {
    const url = buildWhatsAppUrl("Hello Horizon Tourism team, I would like to start planning my travel requirements with your 4-step process.");
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <span>Seamless & Transparent Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            How It Works in 4 Easy Steps
          </h2>
          <p className="text-base text-brand-muted">
            From your initial thought to landing back home, we eliminate bureaucratic delays and complicated embassy paperwork.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-navy-light flex items-center justify-center text-brand-yellow shadow-md transition-colors">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-4xl font-black text-slate-200 group-hover:text-brand-yellow/50 transition-colors tracking-tighter">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-[11px] font-bold text-brand-yellow-dark uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-brand-dark mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Badge Bottom */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="text-slate-400 font-bold">Step {index + 1}/4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bottom Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={handleStartPlanning}
            className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-md hover:shadow-brand-yellow/30 transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-brand-dark" />
            <span>Start Step 01: Share Your Plan on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
