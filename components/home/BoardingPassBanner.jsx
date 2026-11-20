'use client';

import { Plane, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '@/lib/whatsapp';

export default function BoardingPassBanner() {
  const handleBoardingPassClick = () => {
    const message = `🎫 *EXCLUSIVE BOARDING PASS / TRAVEL ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
✈️ *Route:* From Idea ➡️ To Dream Trip
🚪 *Boarding Gate:* WhatsApp Direct Desk
💺 *Priority:* First-Class Travel Support
👤 *Passenger:* Ready to Plan My Trip

Hi Horizon Tourism team, I would like to turn my travel idea into reality. Please assist me with flight itinerary, visa, and package options!`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Banner Card with Premium Aviation Theme */}
        <div className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 text-white">
          
          {/* Subtle Ambient Background Elements */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

          {/* Section Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-brand-yellow/30">
                <Sparkles className="w-3.5 h-3.5" />
                Fast-Track Boarding Desk
              </span>
              <span className="text-xs text-slate-300 hidden sm:inline">• Hassle-Free Travel Preparation</span>
            </div>
            <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct Priority Line Active
            </div>
          </div>

          {/* STYLED BOARDING PASS COMPONENT */}
          <div className="bg-white text-brand-dark rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-200">
            
            {/* Left Main Boarding Pass Section (8 cols) */}
            <div className="lg:col-span-8 p-4 xs:p-6 sm:p-8 flex flex-col justify-between">
              
              {/* Boarding Pass Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-dark font-black text-xs">
                    TB
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
                      Horizon Tourism & Visas Co.
                    </span>
                    <p className="text-[10px] text-brand-muted font-medium">Passenger Ticket & Travel Itinerary</p>
                  </div>
                </div>
                <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-widest px-2 xs:px-2.5 py-1 bg-amber-50 text-amber-800 rounded-md border border-amber-200">
                  Priority First Class
                </span>
              </div>

              {/* Major Route Display */}
              <div className="grid grid-cols-3 items-center text-center my-2 sm:my-4">
                {/* Origin */}
                <div className="text-left">
                  <p className="text-[10px] xs:text-xs font-bold text-brand-muted uppercase">From</p>
                  <h4 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">IDEA</h4>
                  <p className="text-[10px] xs:text-xs font-semibold text-slate-700 mt-0.5 truncate">Your Travel Vision</p>
                </div>

                {/* Plane Graphic */}
                <div className="flex flex-col items-center justify-center px-1 xs:px-2">
                  <div className="w-full flex items-center justify-center gap-1">
                    <div className="h-0.5 flex-grow bg-slate-200 border-t border-dashed border-slate-300" />
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-navy text-brand-yellow flex items-center justify-center shadow-md shrink-0">
                      <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="h-0.5 flex-grow bg-slate-200 border-t border-dashed border-slate-300" />
                  </div>
                  <span className="text-[9px] xs:text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider text-center">Non-Stop Assistance</span>
                </div>

                {/* Destination */}
                <div className="text-right">
                  <p className="text-[10px] xs:text-xs font-bold text-brand-muted uppercase">To</p>
                  <h4 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-brand-yellow-dark tracking-tight">TRIP</h4>
                  <p className="text-[10px] xs:text-xs font-semibold text-slate-700 mt-0.5 truncate">Your Reality</p>
                </div>
              </div>

              {/* Ticket Details Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4 pt-4 sm:pt-6 mt-3 sm:mt-4 border-t border-slate-100 text-left">
                <div>
                  <span className="text-[9px] xs:text-[10px] uppercase font-bold text-slate-400">Passenger</span>
                  <p className="text-xs sm:text-sm font-bold text-brand-dark">You & Companions</p>
                </div>
                <div>
                  <span className="text-[9px] xs:text-[10px] uppercase font-bold text-slate-400">Gate</span>
                  <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1">
                    <span>WhatsApp</span>
                  </p>
                </div>
                <div>
                  <span className="text-[9px] xs:text-[10px] uppercase font-bold text-slate-400">Seat</span>
                  <p className="text-xs sm:text-sm font-bold text-brand-dark">01A (VIP)</p>
                </div>
                <div>
                  <span className="text-[9px] xs:text-[10px] uppercase font-bold text-slate-400">PNR Status</span>
                  <p className="text-xs sm:text-sm font-bold text-brand-navy">VERIFIED & LIVE</p>
                </div>
              </div>

              {/* Barcode Graphic */}
              <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between overflow-hidden">
                <div className="flex items-center gap-1 h-6 sm:h-8 opacity-70 shrink-0">
                  <div className="w-1 h-full bg-slate-800" />
                  <div className="w-2 h-full bg-slate-800" />
                  <div className="w-0.5 h-full bg-slate-800" />
                  <div className="w-1.5 h-full bg-slate-800" />
                  <div className="w-0.5 h-full bg-slate-800" />
                  <div className="w-2 h-full bg-slate-800" />
                  <div className="w-1 h-full bg-slate-800" />
                  <div className="w-0.5 h-full bg-slate-800" />
                  <div className="w-2.5 h-full bg-slate-800" />
                  <div className="w-1 h-full bg-slate-800" />
                </div>
                <span className="text-[10px] xs:text-[11px] font-mono text-slate-400 font-semibold tracking-widest truncate ml-2">
                  PNR: TB-HTV-2026-LIVE
                </span>
              </div>
            </div>

            {/* Right Perforated Stub Section (4 cols) */}
            <div className="lg:col-span-4 bg-slate-50 p-4 xs:p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 relative flex flex-col justify-between">
              
              {/* Circular Notches for desktop */}
              <div className="hidden lg:block absolute -top-3.5 -left-3.5 w-7 h-7 rounded-full bg-brand-navy-dark" />
              <div className="hidden lg:block absolute -bottom-3.5 -left-3.5 w-7 h-7 rounded-full bg-brand-navy" />

              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs font-black uppercase text-brand-dark tracking-wider">
                    BOARDING PASS
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase bg-white px-2 py-0.5 rounded border border-slate-200">
                    GATE: WA
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Destination</span>
                    <p className="font-bold text-brand-navy text-xs sm:text-sm">30+ Global Destinations</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Services Included</span>
                    <div className="space-y-1 mt-1 text-slate-600 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Verifiable Dummy Ticket (PNR)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Embassy-ready Visa Dossiers</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Direct 24/7 WhatsApp Updates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-200">
                <button
                  onClick={handleBoardingPassClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-black py-3 sm:py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-brand-yellow/40 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-brand-dark text-brand-yellow" />
                  <span>Claim Pass on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] sm:text-[11px] text-center text-slate-500 mt-2 font-medium">
                  Instant response • No automated bots
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
