'use client';

import Link from 'next/link';
import { Compass, Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Void Ticket for Visa', href: '/void-ticket' },
    { name: 'Visa Services (35 Countries)', href: '/visas' },
    { name: 'Holiday Packages', href: '/holidays' },
    { name: 'Travel Documentation', href: '/documentation' },
    { name: 'Contact & Support', href: '/contact' },
  ];

  const visaLinks = [
    { name: 'UAE Visa & Extensions', href: '/visas/uae' },
    { name: 'Qatar Visa & Clearance', href: '/visas/qatar' },
    { name: 'Thailand Tourist & ARVC', href: '/visas/thailand' },
    { name: 'Vietnam 90 Days E-Visa', href: '/visas/vietnam' },
    { name: 'Singapore Visa & RMI', href: '/visas/singapore' },
    { name: 'Malaysia Visa & DAC/VDR', href: '/visas/malaysia' },
  ];

  const docLinks = [
    { name: 'OK to Board (OTB)', href: '/documentation/ok-to-board' },
    { name: 'POE Emigration Guidance', href: '/documentation/poe-emigration' },
    { name: 'Confirmed Hotel Vouchers', href: '/documentation/hotel-bookings' },
    { name: 'Travel Insurance & Dossier', href: '/documentation/travel-documentation' },
  ];

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      subject: "Footer Consultation Enquiry",
      message: "Hi Horizon Tourism team, I would like to consult regarding my travel and visa plans."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-12 border-t border-brand-navy">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-5">
              <Link href="/" className="flex items-center gap-3 group inline-flex">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-navy shadow-md shadow-brand-yellow/20">
                  <Compass className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl tracking-tight leading-tight">
                    Horizon Tourism
                  </span>
                  <span className="text-brand-yellow text-xs font-semibold tracking-wider uppercase">
                    & Visas Co.
                  </span>
                </div>
              </Link>

              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                Your dependable partner for verifiable flight itineraries, tourist & business visa consultation across 35 countries, Umrah & holiday packages, and essential travel documentation.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold px-4 py-2.5 rounded-lg text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-brand-dark" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                <span>Transparent Consultation • No Hidden Fees</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-yellow pl-2.5">
                Quick Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-brand-yellow transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-slate-500" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Visas */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-yellow pl-2.5">
                Popular Visas
              </h3>
              <ul className="space-y-2.5 text-sm">
                {visaLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-brand-yellow transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-slate-500" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-yellow pl-2.5">
                Contact & Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                  <div>
                    <a href={`tel:${WHATSAPP_CONFIG.phoneNumber}`} className="text-white font-medium hover:text-brand-yellow transition-colors">{WHATSAPP_CONFIG.displayNumber}</a>
                    <p className="text-xs text-slate-400">Available on Call & WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                  <div>
                    <a href={`mailto:${WHATSAPP_CONFIG.email}`} className="text-white font-medium hover:text-brand-yellow transition-colors">{WHATSAPP_CONFIG.email}</a>
                    <p className="text-xs text-slate-400">Enquiries & Documentation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Support Hours</p>
                    <p className="text-xs text-slate-400">{WHATSAPP_CONFIG.businessHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">{WHATSAPP_CONFIG.location}</p>
                    <p className="text-xs text-slate-400">Serving Travelers Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer & Copyright */}
          <div className="pt-8 text-xs text-slate-400 space-y-4">
            <p className="leading-relaxed bg-brand-navy/60 p-4 rounded-xl border border-white/5">
              <strong className="text-slate-200">Disclaimer:</strong> Horizon Tourism & Visas Co. is a private travel facilitation agency providing documentation assistance, flight itinerary reservations (void tickets), and holiday planning. We are not an embassy, consulate, or government authority. Flight itineraries provided for visa purposes are verifiable reservations for documentation only and do not constitute confirmed airline passenger boarding passes. Final visa approval and entry permission rest exclusively with the sovereign immigration authorities of the destination country.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-slate-500">
              <p>
                © {new Date().getFullYear()} Horizon Tourism & Visas Co. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-slate-400">
                <Link href="/void-ticket" className="hover:text-brand-yellow transition-colors">Void Ticket</Link>
                <span>•</span>
                <Link href="/visas" className="hover:text-brand-yellow transition-colors">Visas</Link>
                <span>•</span>
                <Link href="/holidays" className="hover:text-brand-yellow transition-colors">Holidays</Link>
                <span>•</span>
                <Link href="/documentation" className="hover:text-brand-yellow transition-colors">Documentation</Link>
                <span>•</span>
                <Link href="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
