'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const handleClick = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      subject: "Quick Floating Chat Enquiry",
      message: "Hello Horizon Tourism team, I am on your website and would like assistance with travel / visa services."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 print:hidden">
      {/* Tooltip / Prompt bubble */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-brand-navy-dark text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-brand-yellow/30 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
          <span className="leading-tight">Need travel or visa help? Chat with an advisor now!</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setTooltipVisible(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat on WhatsApp with Horizon Tourism & Visas Co."
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-yellow text-[9px] font-bold text-brand-dark items-center justify-center">
            1
          </span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
}
