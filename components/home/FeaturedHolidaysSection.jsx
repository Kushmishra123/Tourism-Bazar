'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { holidayPackages, holidayCategories } from '@/data/holidays';
import { Clock, MapPin, ArrowRight, MessageCircle, Sparkles, Check, ChevronRight } from 'lucide-react';
import { buildWhatsAppUrl, formatHolidayEnquiryMessage } from '@/lib/whatsapp';

export default function FeaturedHolidaysSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter pills: All, International, Domestic, Umrah
  const filterPills = [
    { id: 'all', label: 'All Packages' },
    { id: 'international', label: 'International' },
    { id: 'domestic', label: 'Domestic' },
    { id: 'umrah', label: 'Umrah' },
  ];

  const filteredPackages = selectedCategory === 'all'
    ? holidayPackages
    : holidayPackages.filter((pkg) => pkg.category === selectedCategory);

  const handleEnquire = (pkg) => {
    const url = buildWhatsAppUrl(formatHolidayEnquiryMessage({
      packageName: pkg.title,
      destination: pkg.destination,
      duration: pkg.durationBadge || pkg.duration,
      notes: `Hi, I am interested in booking the "${pkg.title}" (${pkg.priceDisplay}). Please share hotel details, available departure dates, and best discounted quote.`
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="holiday-deals" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow/20 text-brand-dark text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow-dark" />
              <span>Handpicked Holiday Deals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Featured Deals & Holiday Packages
            </h2>
            <p className="text-base text-brand-muted">
              Choose from high-converting domestic getaways, international city and beach escapes, or spiritual Umrah pilgrimages with end-to-end guidance.
            </p>
          </div>

          <Link
            href="/holidays"
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light font-bold text-sm transition-colors self-start md:self-auto group"
          >
            <span>Browse All Packages</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills (All, International, Domestic, Umrah) */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap mb-8 sm:mb-10 border-b border-slate-200">
          {filterPills.map((pill) => {
            const isActive = selectedCategory === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setSelectedCategory(pill.id)}
                className={`px-4 xs:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-brand-navy border border-slate-200'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-yellow shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image with Badges */}
              <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={pkg.coverImage}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
                
                {/* Duration Badge (e.g. 4 Nights / 5 Days) */}
                <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-brand-yellow text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-brand-yellow/30 shadow-sm">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{pkg.durationBadge || pkg.duration}</span>
                </div>

                {/* Starting Price Pill on Image */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-brand-dark text-xs font-black px-3 py-1 rounded-full shadow-md">
                  {pkg.priceDisplay || `From ${pkg.startingPrice}`}
                </div>

                {/* Destination */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-slate-200 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                  <span className="truncate">{pkg.destination}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-navy transition-colors line-clamp-1 leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">
                    {pkg.overview}
                  </p>
                </div>

                {/* Inclusions Highlights */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Hotel Stay with Breakfast</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">Airport Transfers & Sightseeing Cab</span>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting From</span>
                      <span className="text-lg font-black text-brand-navy">
                        {pkg.startingPrice || pkg.priceDisplay}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">/ person</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/holidays/${pkg.slug}`}
                      className="inline-flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-brand-navy font-semibold px-2 py-2.5 rounded-xl text-xs transition-colors text-center"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>

                    <button
                      onClick={() => handleEnquire(pkg)}
                      className="inline-flex items-center justify-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold px-3 py-2.5 rounded-xl text-xs transition-all shadow-sm active:scale-95 text-center cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-brand-dark" />
                      <span>Enquire Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-brand-dark">Need a Custom Itinerary for your Group or Family?</h4>
            <p className="text-xs text-brand-muted">We customize hotel ratings, private vehicle choices, and day-wise activities according to your budget.</p>
          </div>
          <button
            onClick={() => {
              const url = buildWhatsAppUrl("Hello Horizon Tourism team, I would like to design a custom holiday itinerary for my upcoming trip.");
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-brand-yellow px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Customize on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
