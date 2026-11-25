'use client';

import Link from 'next/link';
import { 
  Globe2, 
  Plane, 
  Users, 
  CalendarCheck, 
  Palmtree, 
  Sparkles, 
  CheckCircle2, 
  FileCheck2, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { buildWhatsAppUrl, formatOfferingEnquiryMessage } from '@/lib/whatsapp';

export default function CoreServicesSection() {
  const offerings = [
    {
      id: "tourist-visas",
      icon: Globe2,
      title: "Tourist Visas For 35 Countries",
      subtitle: "Fast • Reliable • Hassle-Free",
      description: "Direct consular dossier preparation, e-visa turnaround in 24–72 hours, and sticker visa facilitation with zero rejection risk advisory.",
      badge: "DMC Direct Desk",
      route: "/visas",
      routeLabel: "View 35 Countries",
      highlights: ["35 Countries Covered", "Fast-Track E-Visas", "VFS/Consular Dossiers"],
      whatsappEnquiry: "Tourist Visas For 35 Countries",
      whatsappDetail: "Fast • Reliable • Hassle-Free consular & e-visa filing"
    },
    {
      id: "void-tickets",
      icon: Plane,
      title: "Return / Void Tickets / Dummy Live Hotel Booking",
      subtitle: "Aeroflot • Etihad • Fly Dubai • Thai Air",
      description: "100% genuine airline reservation PNRs and verifiable hotel vouchers compliant with VFS, embassy guidelines, and transit immigration desks.",
      badge: "15–30 Min Turnaround",
      route: "/void-ticket",
      routeLabel: "Book Void Ticket",
      highlights: ["Aeroflot, Etihad & Fly Dubai", "Thai Air & Major Airlines", "Verifiable Airline PNRs"],
      whatsappEnquiry: "Return / Void Tickets / Dummy Live Hotel Booking",
      whatsappDetail: "Aeroflot • Etihad • Fly Dubai • Thai Air itineraries & vouchers"
    },
    {
      id: "group-airfares",
      icon: Users,
      title: "Group Airfares",
      subtitle: "Exclusive B2B Deals for Kashmir, Goa, Manali",
      description: "Bulk group allocations, student groups, corporate travel, and family group flight rates with special agent discounts and flexible name additions.",
      badge: "Exclusive B2B Deals",
      route: null,
      routeLabel: null,
      highlights: ["Kashmir, Goa & Manali Sectors", "Instant Group Quotes", "Flexible Name Changes"],
      whatsappEnquiry: "Group Airfares",
      whatsappDetail: "Exclusive B2B deals for Kashmir, Goa, Manali & Pan-India sectors"
    },
    {
      id: "fixed-departures",
      icon: CalendarCheck,
      title: "Fixed Departures",
      subtitle: "Guaranteed Seats & Final Rates",
      description: "Pre-purchased guaranteed seat blocks across prime holiday seasons, long weekends, and festival dates with locked-in final pricing.",
      badge: "Guaranteed Seats",
      route: null,
      routeLabel: null,
      highlights: ["Guaranteed Seat Inventory", "No Hidden Surges", "Prime Holiday Dates"],
      whatsappEnquiry: "Fixed Departures",
      whatsappDetail: "Guaranteed seats & locked-in final rates for seasonal departures"
    },
    {
      id: "international-tours",
      icon: Palmtree,
      title: "International Tours",
      subtitle: "Complete Travel Assistance",
      description: "Tailor-made international tour packages with flight bookings, visa clearance, handpicked 4★/5★ hotels, transfers, and licensed local tour guides.",
      badge: "Complete Assistance",
      route: "/holidays",
      routeLabel: "Browse Holidays",
      highlights: ["Dubai, Thailand, Vietnam, Bali", "Bespoke Day-Wise Plans", "Private & Group Tours"],
      whatsappEnquiry: "International Tours",
      whatsappDetail: "Complete travel assistance for international holiday packages"
    },
    {
      id: "umrah-chardham",
      icon: Sparkles,
      title: "Umrah & CharDham Packages",
      subtitle: "Packages & Group Tickets",
      description: "Spiritual journeys handled with sacred respect. 5★ Haram-facing hotels in Makkah & Madinah, luxury CharDham helicopter & road yatra itineraries.",
      badge: "Packages & Group Tickets",
      route: null,
      routeLabel: null,
      highlights: ["Direct Haram Stays", "CharDham Helicopter & Road", "Special Group PNRs"],
      whatsappEnquiry: "Umrah & CharDham Packages",
      whatsappDetail: "Packages, luxury hotel arrangements, and special group tickets"
    },
    {
      id: "otb-clearance",
      icon: CheckCircle2,
      title: "OKAY TO BOARD (OTB)",
      subtitle: "Expert Documentation Support",
      description: "Urgent OTB updating directly on airline systems (Air India Express, IndiGo, SpiceJet, Fly Dubai) within 2 to 6 hours before departure.",
      badge: "2-6 Hr Airline Update",
      route: "/documentation",
      routeLabel: "Documentation Hub",
      highlights: ["Air India Express & IndiGo", "SpiceJet & Gulf Airlines", "Fast Airline Status Update"],
      whatsappEnquiry: "OKAY TO BOARD (OTB)",
      whatsappDetail: "Urgent OTB updating & airline system clearance"
    },
    {
      id: "emigration-services",
      icon: FileCheck2,
      title: "Emigration Services",
      subtitle: "Quick & Reliable Processing",
      description: "End-to-end assistance for Indian ECR passport holders traveling abroad for employment, including MEA eMigrate portal filing and POE clearance.",
      badge: "Quick & Reliable",
      route: "/documentation",
      routeLabel: "POE Emigration Info",
      highlights: ["MEA eMigrate Portal Support", "18 Notified ECR Countries", "Employment Clearance Review"],
      whatsappEnquiry: "Emigration Services",
      whatsappDetail: "Quick & reliable POE Emigration processing for ECR passports"
    },
    {
      id: "travel-insurance",
      icon: ShieldCheck,
      title: "Travel Insurance",
      subtitle: "Worldwide Coverage",
      description: "Embassy-compliant travel health insurance with cashless hospitalization, COVID-19 medical coverage, trip cancellation, and baggage loss protection.",
      badge: "Worldwide Coverage",
      route: null,
      routeLabel: null,
      highlights: ["Cashless Medical Coverage", "Embassy & Schengen Approved", "Loss of Baggage & Delay"],
      whatsappEnquiry: "Travel Insurance",
      whatsappDetail: "Worldwide travel insurance with cashless hospitalization & trip protection"
    },
  ];

  const handleEnquire = (offering) => {
    const message = formatOfferingEnquiryMessage(offering.whatsappEnquiry, offering.whatsappDetail);
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/80 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-black uppercase tracking-wider border border-brand-navy/15">
            <span>HORIZON TOURISM &amp; VISAS CO.</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight leading-tight">
            Cheapest Name for{' '}
            <span className="text-brand-navy bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy bg-clip-text text-transparent">
              Tourist Visa DMC
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
            Complete B2B &amp; retail travel solutions — instant visas, void tickets, fixed departures, and worldwide clearances.
          </p>
        </div>

        {/* 9 Service Cards Responsive 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {offerings.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-yellow/80 transition-all duration-300 p-6 sm:p-7 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top Ambient Highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-yellow/15 transition-colors" />

                <div className="space-y-4 relative z-10">
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-yellow flex items-center justify-center shadow-md shadow-brand-navy/10 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-200 shrink-0">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-navy bg-slate-100 group-hover:bg-brand-yellow/20 group-hover:text-brand-dark px-3 py-1 rounded-full border border-slate-200/80 transition-colors shrink-0">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-lg sm:text-xl font-black text-brand-dark group-hover:text-brand-navy transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="inline-block px-2.5 py-1 rounded-lg bg-brand-yellow/15 text-brand-dark text-xs font-bold border border-brand-yellow/30">
                      {service.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Micro Highlight Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.highlights.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/80 rounded-md px-2 py-0.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-yellow mr-1.5 shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 space-y-2 relative z-10">
                  {/* WhatsApp CTA Button */}
                  <button
                    onClick={() => handleEnquire(service)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md hover:shadow-brand-yellow/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-brand-dark" />
                    <span>Enquire on WhatsApp</span>
                  </button>

                  {/* Secondary Portal Link if exists */}
                  {service.route && (
                    <Link
                      href={service.route}
                      className="inline-flex items-center justify-center gap-1.5 w-full text-center text-xs font-bold text-slate-600 hover:text-brand-navy py-1.5 transition-colors group/link"
                    >
                      <span>{service.routeLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-brand-dark flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Transparent B2B DMC Tariffs • Direct WhatsApp Quotation</span>
            </h4>
            <p className="text-xs text-brand-muted">
              Travel agents and individual travelers get instant verifiable reservations, genuine consular dossiers, and direct advisory.
            </p>
          </div>

          <a
            href="https://wa.me/918750737086?text=Hi%20Horizon%20Tourism%2C%20I%20would%20like%20to%20partner%20or%20enquire%20for%20DMC%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-5 py-3 rounded-xl shrink-0 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
