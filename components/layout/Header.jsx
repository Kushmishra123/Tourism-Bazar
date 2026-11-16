'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Compass, PhoneCall, ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Top Notice Bar */}
          <div className="bg-brand-navy-dark text-slate-300 text-xs py-2 border-b border-brand-navy/60 hidden md:block">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Dedicated Travel & Visa Support Desk
                </span>
                <span className="text-slate-400">|</span>
                <span>Assisting with 30+ Visa Destinations & Flight Itineraries</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-slate-300">{WHATSAPP_CONFIG.businessHours}</span>
                <span className="text-slate-400">|</span>
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="text-brand-yellow font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Direct Support: {WHATSAPP_CONFIG.displayNumber}
                </button>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
                : 'bg-brand-navy py-4'
              }`}
          >
              <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-between">
                  {/* Brand Logo */}
                  <Link
                    href="/"
                    className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-navy shadow-md shadow-brand-yellow/20 group-hover:scale-105 transition-transform duration-200">
                      <Compass className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-lg sm:text-xl tracking-tight leading-tight group-hover:text-brand-yellow transition-colors">
                        Horizon Tourism
                      </span>
                      <span className="text-brand-yellow text-xs font-semibold tracking-wider uppercase">
                        & Visas Co.
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
                          className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                              ? 'text-brand-yellow bg-white/10 font-semibold'
                              : 'text-slate-200 hover:text-white hover:bg-white/5'
                            }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Header Right Actions */}
                  <div className="hidden sm:flex items-center gap-3">
                    <button
                      onClick={handleWhatsAppEnquiry}
                      className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-brand-yellow/30 transition-all duration-200 flex items-center gap-2 group active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-brand-dark text-brand-yellow group-hover:scale-110 transition-transform" />
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>

                  {/* Mobile Hamburger Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    aria-label="Toggle mobile menu"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Menu Dropdown */}
              {mobileMenuOpen && (
                <div className="lg:hidden bg-brand-navy-dark border-t border-brand-navy/60 px-4 pt-3 pb-6 shadow-2xl transition-all animate-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col space-y-1">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                              ? 'bg-brand-yellow text-brand-dark font-bold'
                              : 'text-slate-200 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                          <span>{link.name}</span>
                          <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-dark' : 'text-slate-400'}`} />
                        </Link>
                      );
                    })}

                    <div className="pt-4 mt-2 border-t border-white/10">
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleWhatsAppEnquiry();
                        }}
                        className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5 fill-brand-dark text-brand-yellow" />
                        <span>Enquire on WhatsApp</span>
                      </button>

                      <p className="text-center text-xs text-slate-400 mt-3">
                        Need quick assistance? Our advisors respond promptly.
                      </p>
                    </div>
                  </div>
                </div>
              )}
          </header>
        </>
        );
}
