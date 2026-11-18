'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const homepageFaqs = [
    {
      category: "Dummy Ticket & Validity",
      question: "How does a dummy ticket work, and how do I verify the PNR on airline websites?",
      answer: "A dummy ticket is a genuine, active flight reservation held on airline Global Distribution Systems (GDS like Amadeus, Sabre, or Galileo). Each ticket comes with an authentic 6-character PNR (Passenger Name Record) and airline code. You can verify it directly on the official airline website (e.g., Emirates, Qatar Airways, Singapore Airlines, Saudia) under 'Manage Booking' by entering your surname and PNR."
    },
    {
      category: "Dummy Ticket & Validity",
      question: "How long does a dummy ticket remain valid for visa submission?",
      answer: "Our standard flight itineraries are maintained live for 48 hours to 2 weeks depending on the airline's ticketing time limit and your scheduled visa appointment date. If your embassy appointment gets rescheduled, we provide prompt date re-issuance support on WhatsApp."
    },
    {
      category: "Dummy Ticket & Validity",
      question: "Is a dummy ticket accepted by VFS, BLS, and embassies for Schengen / US / UK visas?",
      answer: "Yes! Embassies and consulates explicitly advise applicants NOT to purchase expensive, non-refundable flight tickets before their visa is granted. They require a 'Flight Itinerary' or 'Round-trip Reservation' proving your travel intent, which is exactly what our verifiable dummy tickets fulfill."
    },
    {
      category: "Visa Processing",
      question: "How long does visa processing take across different destinations?",
      answer: "Processing times depend on the country and visa type: E-Visas (Dubai/UAE, Vietnam, Azerbaijan, Sri Lanka, Egypt) are typically approved in 24 to 72 hours. Visas on Arrival or fast-track clearances are pre-arranged before boarding. Sticker visas requiring biometric appointments (Schengen European countries, UK, US, Canada, Australia) generally take 10 to 25 working days. We guide you on the exact consular schedule."
    },
    {
      category: "Payment Security",
      question: "Is payment secure, and are there any hidden fees?",
      answer: "100% secure. We provide official business invoices and support trusted payment modes including verified UPI, Net Banking, and direct corporate bank transfers. Every quote provided by our team is all-inclusive and transparent, with zero hidden surcharges or surprise post-issuance fees."
    },
    {
      category: "Visa Processing",
      question: "Do you guarantee 100% visa approval?",
      answer: "No reputable agency can guarantee visa approval, as sovereign consulates and immigration officers hold the exclusive legal authority to grant or refuse visas. What Horizon Tourism guarantees is thorough application scrutiny, compliant document formatting, verified hotel & flight itineraries, and zero clerical errors, drastically maximizing your approval likelihood."
    },
    {
      category: "Packages & Changes",
      question: "Can I customize packages or change travel dates after booking?",
      answer: "Yes, all our domestic, international, and Umrah packages can be tailored to your preferred hotel standard, dates, and group size. If your personal travel plans change, our team assists with rescheduling hotels and internal cab transfers smoothly."
    },
  ];

  const categories = ['All', 'Dummy Ticket & Validity', 'Visa Processing', 'Payment Security'];

  const filteredFaqs = activeCategory === 'All'
    ? homepageFaqs
    : homepageFaqs.filter((f) => f.category === activeCategory);

  const handleCustomQuestion = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      subject: "Direct FAQ Consultation",
      message: "Hello Horizon Tourism team, I have a specific question regarding dummy tickets, visa validity, or package payments."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers & Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mx-auto">
            Everything you need to know about verifiable dummy tickets, visa timelines, and our secure agency standards.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-brand-dark hover:text-brand-navy transition-colors focus:outline-none cursor-pointer"
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
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60 space-y-3">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-brand-navy-light uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{faq.category} Guaranteed Standard</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-7 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
          <p className="text-base font-bold text-brand-dark">Still have questions regarding your specific visa interview or flights?</p>
          <p className="text-xs text-brand-muted max-w-lg mx-auto">
            Our experienced travel consultants are available directly on WhatsApp to review your situation free of charge.
          </p>
          <button
            onClick={handleCustomQuestion}
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-brand-dark text-brand-yellow" />
            <span>Ask Us Anything on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
