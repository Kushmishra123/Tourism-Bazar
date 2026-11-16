'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { holidayPackages, holidayCategories } from '@/data/holidays';
import { Clock, MapPin, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, formatHolidayEnquiryMessage } from '@/lib/whatsapp';

export default function HolidayPackageDirectory() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPackages = activeCategory === 'all'
    ? holidayPackages
    : holidayPackages.filter((pkg) => pkg.category === activeCategory);

  const handleQuickEnquire = (pkg) => {
    const message = formatHolidayEnquiryMessage({
      packageName: pkg.title,
      destination: pkg.destination,
      duration: pkg.duration,
      notes: "Hi, I am interested in this holiday package. Please share the detailed quotation, hotel options, and available dates."
    });
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm max-w-3xl mx-auto">
        {holidayCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-brand-navy text-white shadow-md'
                : 'text-slate-600 hover:text-brand-dark hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-brand-yellow/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
              <Image
                src={pkg.coverImage}
                alt={pkg.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/85 via-transparent to-transparent" />
              
              {/* Duration Badge */}
              <div className="absolute top-3.5 left-3.5 bg-brand-navy/90 backdrop-blur-sm text-brand-yellow text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-brand-yellow/30">
                <Clock className="w-3.5 h-3.5" />
                <span>{pkg.duration}</span>
              </div>

              {/* Price Quote Badge */}
              <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {pkg.priceDisplay}
              </div>

              {/* Destination */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-1.5 text-slate-200 text-xs">
                <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <span className="truncate">{pkg.destination}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-navy transition-colors line-clamp-1">
                  {pkg.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed line-clamp-2">
                  {pkg.overview}
                </p>
              </div>

              {/* Inclusions overview */}
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 text-xs text-slate-600">
                <p className="font-bold text-brand-navy flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-yellow-dark" />
                  <span>Key Inclusions:</span>
                </p>
                <ul className="space-y-1 text-slate-500">
                  {pkg.inclusions.slice(0, 2).map((inc, i) => (
                    <li key={i} className="truncate">• {inc}</li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href={`/holidays/${pkg.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-brand-navy font-semibold px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-colors text-center"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleQuickEnquire(pkg)}
                  className="inline-flex items-center justify-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm active:scale-95 text-center cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-brand-dark" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
