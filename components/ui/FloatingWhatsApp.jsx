'use client';

import { useState } from 'react';
import { MessageCircle, X, ChevronUp, Plane, Globe2, Palmtree, Moon, Send, Sparkles } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  // Quick query chips
  const queryChips = [
    {
      label: '✈️ Verifiable Void Ticket',
      query: 'Hello! I need an authentic verifiable void ticket (flight itinerary) for my visa application. Please share available airlines, PNR validity, and pricing.',
    },
    {
      label: '🛂 Visa Assistance & Fees',
      query: 'Hello! I need guidance regarding visa requirements, document checklist, and processing timeline for my upcoming international travel.',
    },
    {
      label: '🏖️ Holiday Tour Packages',
      query: 'Hello! I am looking for curated holiday tour packages (Manali, Dubai, Andaman, Goa, Kashmir, etc.). Please share current deals and itineraries.',
    },
    {
      label: '🕋 Umrah Package Quote',
      query: 'Assalamu Alaikum! I would like details and pricing for your 15 Days Executive Umrah Package (5-star hotels near Haram, visa, transport & Ziyarat).',
    },
    {
      label: '💬 Custom Travel Enquiry',
      query: 'Hi Horizon Tourism team, I have a custom travel question and would like to speak with a travel advisor.',
    },
  ];

  const handleChipClick = (message) => {
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenDirectChat = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      subject: "Floating Assistant Direct Consultation",
      message: "Hello Horizon Tourism team, I am on your website and would like immediate travel and visa assistance."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-16 sm:bottom-20 lg:bottom-6 right-2 sm:right-6 z-50 flex flex-col items-end gap-2.5 print:hidden max-w-[calc(100vw-1rem)]">
      
      {/* EXPANDABLE ASSISTANT DRAWER */}
      {isOpen && (
        <div className="w-[calc(100vw-1.5rem)] xs:w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Assistant Header */}
          <div className="bg-brand-navy p-4 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-black text-sm shadow-md">
                  HT
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-navy" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5 leading-tight">
                  <span>Horizon Travel Desk</span>
                  <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
                </h4>
                <p className="text-[11px] text-slate-300 font-medium">Online • Typical reply in &lt; 5 mins</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Assistant Chat Body */}
          <div className="p-4 sm:p-5 bg-slate-50 space-y-4 max-h-[65vh] overflow-y-auto">
            
            {/* Bot message bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className="font-semibold text-brand-navy mb-1">
                Need help planning a trip? ✈️
              </p>
              <p>
                Our travel consultants are active right now. Pick a quick topic below or connect directly on WhatsApp:
              </p>
            </div>

            {/* Quick Query Chips */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Quick Query Chips:
              </span>
              <div className="flex flex-col gap-2">
                {queryChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChipClick(chip.query)}
                    className="text-left text-xs font-semibold bg-white hover:bg-brand-yellow/15 hover:border-brand-yellow text-slate-800 p-2.5 rounded-xl border border-slate-200 shadow-sm transition-all duration-150 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{chip.label}</span>
                    <span className="text-brand-navy-light group-hover:translate-x-0.5 transition-transform text-[11px] font-bold">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Open WhatsApp button */}
            <div className="pt-2">
              <button
                onClick={handleOpenDirectChat}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-[#25D366]/30 transition-all cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Start Direct WhatsApp Chat</span>
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Official Business Number: {WHATSAPP_CONFIG.displayNumber}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* 5. FLOATING PROMPT & ACTION BAR (White pill flanked by Assistant badge and green WhatsApp button) */}
      {!isOpen && (
        <div className="flex items-center gap-1.5 sm:gap-2 max-w-full">
          {/* Left: Dark Navy/Yellow Assistant Badge */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#0C1B33] via-[#142B50] to-[#1B3B6F] border-2 border-brand-yellow/60 text-brand-yellow flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            aria-label="Open travel assistant"
          >
            <Sparkles className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
          </button>

          {/* Center: Clean White Pill */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg border border-slate-200/90 hover:border-brand-navy/30 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>Need help planning a trip?</span>
          </button>

          {/* Right: Circular Green WhatsApp Icon Button */}
          <button
            onClick={handleOpenDirectChat}
            className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            aria-label="Open direct WhatsApp chat"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-yellow text-[8px] font-black text-brand-dark items-center justify-center">
                1
              </span>
            </span>
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366]" />
          </button>
        </div>
      )}

      {/* Close button when drawer is open */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center w-11 h-11 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Close assistant"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
