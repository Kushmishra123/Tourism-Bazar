'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Dummy Ticket', 'Visa Services', 'Documentation', 'Holidays'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleCustomQuestion = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      subject: "Custom Travel Question",
      message: "Hello Horizon Tourism team, I have a specific question regarding travel requirements."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mx-auto">
            Everything you need to know about flight itineraries, visa applications, processing guidelines, and travel documentation.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-brand-dark hover:text-brand-navy transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-brand-yellow-dark' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
          <p className="text-sm font-semibold text-brand-dark">Still have questions about your specific travel situation?</p>
          <p className="text-xs text-brand-muted">Our travel and visa specialists are available on WhatsApp to answer case-specific questions.</p>
          <button
            onClick={handleCustomQuestion}
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-brand-dark" />
            <span>Ask Us on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
