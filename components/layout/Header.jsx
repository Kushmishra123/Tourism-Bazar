'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Compass, PhoneCall, ChevronRight, MessageCircle, MapPin } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Dummy Ticket', href: '/dummy-ticket' },
    { name: 'Visa Services', href: '/visas' },
    { name: 'Holidays', href: '/holidays' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleWhatsAppEnquiry = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      name: "Website Visitor",
      subject: "Direct Header Enquiry",
      message: "Hello Horizon Tourism team, I would like to inquire about your travel services."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* 1. TOP UTILITY BAR (Slim dark navy #0C1B33 with phone and location badge) */}
      <div className="bg-[#0C1B33] text-white pt-2.5 pb-2.5 px-3 sm:px-6 border-b border-white/5 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          
          {/* Centered phone support on mobile */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start">
            <a
              href={`tel:${WHATSAPP_CONFIG.phoneNumber}`}
              className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-brand-yellow font-medium transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{WHATSAPP_CONFIG.displayNumber}</span>
            </a>
          </div>

          {/* Secondary rounded translucent pill bar */}
          <div className="flex items-center justify-center gap-2 max-w-full">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-300 shrink-0">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] sm:text-xs text-slate-200 flex items-center gap-1.5 truncate shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <MapPin className="w-3 h-3 text-brand-yellow shrink-0" />
              <span className="font-semibold text-white">New Delhi</span>
              <span className="text-white/40">|</span>
              <span className="truncate">30+ Countries Visa &amp; PNR Desk</span>
            </div>
          </div>

          {/* Desktop business hours */}
          <div className="hidden lg:flex items-center text-xs text-slate-400">
            <span>{WHATSAPP_CONFIG.businessHours}</span>
          </div>

        </div>
      </div>

      {/* 2. FLOATING WHITE ROUNDED HEADER */}
      <header className="sticky top-2 z-50 mx-3 sm:mx-6 lg:mx-8 mt-2 transition-all duration-200">
        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100/90 px-3.5 sm:px-5 py-3 flex items-center justify-between gap-3">
          
          {/* Left: Brand Logo + Brand Title & Tagline */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-dark shadow-md shadow-brand-yellow/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-brand-dark font-black text-sm sm:text-lg tracking-tight leading-tight group-hover:text-brand-navy transition-colors truncate">
                Horizon Tourism
              </span>
              <span className="text-brand-muted text-[10px] sm:text-xs font-semibold tracking-tight truncate">
                Fly Smarter. Travel Confidently.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-brand-navy bg-brand-navy/10 font-bold'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleWhatsAppEnquiry}
              className="hidden sm:inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black shadow-md hover:shadow-brand-yellow/30 transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-brand-dark" />
              <span>Enquire on WhatsApp</span>
            </button>

            {/* Clean bordered square hamburger menu button on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:text-brand-dark hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-yellow shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.2]" /> : <Menu className="w-5 h-5 stroke-[2.2]" />}
            </button>
          </div>

          {/* Sleek floating pill badge tucked directly below the left side of the white header card */}
          <div className="absolute -bottom-4 sm:-bottom-5 left-3 sm:left-6 z-20 flex items-center gap-2 bg-white rounded-full py-1 px-2.5 sm:px-3 shadow-md border border-slate-200/80 text-xs text-slate-800">
            <div className="w-4 h-4 rounded-full bg-brand-navy flex items-center justify-center text-brand-yellow shrink-0">
              <Compass className="w-2.5 h-2.5" />
            </div>
            <span className="font-bold text-[10px] sm:text-[11px] text-slate-800 whitespace-nowrap">
              Quick PNR &amp; Visa Quote
            </span>
            <button
              onClick={handleWhatsAppEnquiry}
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm cursor-pointer active:scale-95 transition-transform"
            >
              Start
            </button>
          </div>

        </div>

        {/* Mobile Navigation Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 transition-all animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-navy text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-yellow' : 'text-slate-400'}`} />
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppEnquiry();
                  }}
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-brand-dark" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Live support: {WHATSAPP_CONFIG.displayNumber}
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
