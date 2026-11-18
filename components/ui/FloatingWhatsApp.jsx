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
      label: '✈️ Verifiable Dummy Ticket',
      query: 'Hello! I need an authentic verifiable flight itinerary (dummy ticket) for my visa application. Please share available airlines, PNR validity, and pricing.',
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 print:hidden">
      
      {/* EXPANDABLE ASSISTANT DRAWER */}
      {isOpen && (
        <div className="w-[90vw] sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
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

      {/* FLOATING PROMPT PILL (Visible when drawer is closed) */}
      {!isOpen && !tooltipDismissed && (
        <div 
          onClick={() => setIsOpen(true)}
          className="cursor-pointer hidden sm:flex items-center gap-2 bg-brand-navy-dark text-white text-xs px-4 py-2.5 rounded-2xl shadow-2xl border border-brand-yellow/40 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 hover:scale-[1.02] transition-transform"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-semibold leading-tight text-slate-100">
            Need help planning a trip? <span className="text-brand-yellow underline">Chat now!</span>
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            className="text-slate-400 hover:text-white ml-2 p-1 rounded-md hover:bg-white/10"
            aria-label="Dismiss prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Open Horizon Tourism WhatsApp Assistant"
      >
        {!isOpen ? (
          <>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-yellow text-[9px] font-bold text-brand-dark items-center justify-center">
                1
              </span>
            </span>
            <MessageCircle className="w-7 h-7 fill-white text-[#25D366] transition-transform group-hover:scale-110" />
          </>
        ) : (
          <X className="w-6 h-6 stroke-[2.5]" />
        )}
      </button>

    </div>
  );
}
