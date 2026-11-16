'use client';

import { MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function FinalCtaSection() {
  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      subject: "Final CTA Booking Enquiry",
      message: "Hello Horizon Tourism team, I am ready to plan my trip and would like assistance with flight itinerary / visa services."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-navy-light/40 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Start Your Planning Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready for Your Next Journey?
        </h2>

        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Let Horizon Tourism & Visas Co. help you plan your next trip. Fast dummy tickets, seamless visa filings, and memorable holidays are just one message away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-8 py-4 rounded-xl text-base font-extrabold shadow-xl hover:shadow-brand-yellow/30 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-brand-dark text-brand-yellow" />
            <span>Contact Us on WhatsApp</span>
          </button>

          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200"
          >
            <PhoneCall className="w-5 h-5 text-brand-yellow" />
            <span>Call: {WHATSAPP_CONFIG.displayNumber}</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-6">
          <span>✓ Prompt Response</span>
          <span>✓ Personalized Attention</span>
          <span>✓ Honest Advisory</span>
        </div>
      </div>
    </section>
  );
}
