'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2, Plane, Globe2, FileCheck2 } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function HeroSection() {
  const handleTalkToExperts = () => {
    const url = buildWhatsAppUrl(formatGeneralEnquiryMessage({
      name: "Traveler",
      subject: "Hero Section Consultation",
      message: "Hello Horizon Tourism team, I would like to consult with an expert regarding my upcoming travel requirements."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center bg-brand-navy overflow-hidden">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
          alt="International flight in clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center mix-blend-overlay opacity-35"
        />
        {/* Navy gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/90 to-brand-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 text-brand-yellow text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-yellow" />
              <span>Premium Travel & Visa Advisory Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Your Journey Begins With the{' '}
              <span className="text-brand-yellow underline decoration-brand-yellow/40 decoration-wavy decoration-2">
                Right Travel Partner.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
              From visa assistance and dummy tickets to holiday packages and essential travel documentation, Horizon Tourism & Visas Co. makes your travel planning simple.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#core-services"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-7 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-brand-yellow/30 transition-all duration-200 active:scale-95 text-center cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 text-brand-dark" />
              </a>

              <button
                onClick={handleTalkToExperts}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-xl text-base font-semibold backdrop-blur-sm transition-all duration-200 active:scale-95 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-brand-yellow" />
                <span>Talk to Our Experts</span>
              </button>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15 text-left">
              <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>30+ Visa Destinations</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Verifiable Itineraries</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                <span>Instant WhatsApp Enquiries</span>
              </div>
            </div>
          </div>

          {/* Quick Service Fast Card (Right Column) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-brand-navy-dark/85 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-2xl text-left space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-white font-bold text-sm">Quick Service Finder</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
              </div>

              <div className="space-y-2.5">
                <Link
                  href="/dummy-ticket"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-yellow transition-colors">Dummy Ticket</p>
                      <p className="text-xs text-slate-400">Flight itinerary for visa</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  href="/visas"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-yellow transition-colors">Visa Services</p>
                      <p className="text-xs text-slate-400">Tourist & business visas</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  href="/holidays"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                      <span className="text-sm font-bold">🏖️</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-yellow transition-colors">Holiday Packages</p>
                      <p className="text-xs text-slate-400">Umrah, international & domestic</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  href="/documentation"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-yellow transition-colors">Documentation</p>
                      <p className="text-xs text-slate-400">OTB, POE, hotel vouchers</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              <div className="pt-2 text-center">
                <span className="text-xs text-slate-400">Direct consultation via verified WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
