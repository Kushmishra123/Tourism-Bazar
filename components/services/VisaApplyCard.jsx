'use client';

import { useState } from 'react';
import { Clock, Calendar, ShieldCheck, ArrowRight, CheckCircle, MessageCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, formatVisaEnquiryMessage } from '@/lib/whatsapp';

export default function VisaApplyCard({ country, visa, isService }) {
  const [showDocs, setShowDocs] = useState(false);
  const isSpecialService = isService || visa.category === 'service';

  const handleApplyNow = () => {
    const serviceNoun = isSpecialService ? 'Clearance / Facilitation Service' : 'Visa';
    const message = formatVisaEnquiryMessage({
      country: country.name,
      visaType: visa.title,
      notes: `Hello Horizon Tourism, I would like to inquire/apply for the ${visa.title} (${serviceNoun}) for ${country.name}. Please guide me on specific document verification, fee quote, and turnaround timeline.`
    });
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const hasStats = Boolean(visa.processingTime || visa.stayDuration || visa.validity);

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-7 border shadow-sm hover:shadow-md transition-all space-y-5 ${
      isSpecialService ? 'border-blue-200/90 ring-1 ring-blue-500/10' : 'border-slate-200/90'
    }`}>
      {/* Top Header of Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {isSpecialService ? (
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                Special Facilitation & Clearance
              </span>
            ) : (
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow-dark bg-brand-yellow/15 px-2.5 py-0.5 rounded-full">
                {visa.type || 'Visa'}
              </span>
            )}
            {visa.entryType && (
              <span className="text-xs text-slate-500 font-medium">• {visa.entryType}</span>
            )}
          </div>
          <h3 className="text-xl font-bold text-brand-dark">{visa.title}</h3>
        </div>

        <button
          onClick={handleApplyNow}
          className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-brand-yellow/20 active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-brand-dark" />
          <span>Apply via WhatsApp</span>
        </button>
      </div>

      {/* Description */}
      {visa.description && (
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          {visa.description}
        </p>
      )}

      {/* Key Stats Grid (conditionally rendered only for populated fields) */}
      {hasStats && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
          {visa.processingTime && (
            <div>
              <span className="text-slate-400 block text-[11px]">Processing Time</span>
              <span className="font-bold text-brand-dark flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-brand-navy shrink-0" />
                <span className="truncate">{visa.processingTime}</span>
              </span>
            </div>
          )}

          {visa.stayDuration && (
            <div>
              <span className="text-slate-400 block text-[11px]">Stay Duration</span>
              <span className="font-bold text-brand-dark flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-brand-navy shrink-0" />
                <span className="truncate">{visa.stayDuration}</span>
              </span>
            </div>
          )}

          {visa.validity && (
            <div className={!visa.stayDuration || !visa.processingTime ? '' : 'col-span-2 sm:col-span-1'}>
              <span className="text-slate-400 block text-[11px]">Validity</span>
              <span className="font-bold text-brand-dark flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-navy shrink-0" />
                <span className="truncate">{visa.validity}</span>
              </span>
            </div>
          )}
        </div>
      )}

      {/* Required Documents Toggle */}
      {visa.requirements && visa.requirements.length > 0 && (
        <div className="pt-1">
          <button
            onClick={() => setShowDocs(!showDocs)}
            className="flex items-center justify-between w-full text-xs font-bold text-brand-navy hover:text-brand-yellow-dark py-2 border-t border-slate-100 focus:outline-none"
          >
            <span>Specific Checklist for {visa.title} ({visa.requirements.length} Items)</span>
            {showDocs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDocs && (
            <ul className="mt-3 space-y-2 bg-slate-50/70 p-4 rounded-2xl border border-slate-100 text-xs text-slate-700 animate-in fade-in duration-200">
              {visa.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
