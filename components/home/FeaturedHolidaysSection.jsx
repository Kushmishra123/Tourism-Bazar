'use client';

import Link from 'next/link';
import Image from 'next/image';
import { holidayPackages } from '@/data/holidays';
import { Clock, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, formatHolidayEnquiryMessage } from '@/lib/whatsapp';

export default function FeaturedHolidaysSection() {
  const handleEnquire = (pkg) => {
    const url = buildWhatsAppUrl(formatHolidayEnquiryMessage({
      packageName: pkg.title,
      destination: pkg.destination,
      duration: pkg.duration,
      notes: "Hi, I am interested in this featured holiday package. Please share detailed itinerary, hotel options, and best quote."
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-dark text-xs font-bold uppercase tracking-wider">
              <span>Curated Travel Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Featured Holidays & Packages
            </h2>
            <p className="text-base text-brand-muted">
              Explore hand-crafted holiday packages across spiritual Umrah pilgrimages, Southeast Asia getaways, Himalayan retreats, and beach holidays.
            </p>
          </div>

          <Link
            href="/holidays"
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-navy-light font-bold text-sm transition-colors self-start md:self-auto group"
          >
            <span>Explore All Holiday Packages</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Holiday Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {holidayPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-brand-yellow/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image */}
              <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={pkg.coverImage}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-brand-yellow text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-brand-yellow/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Price Display Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {pkg.priceDisplay}
                </div>

                {/* Destination */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-slate-200 text-xs">
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

                {/* Hotel highlights */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                  <p className="font-semibold text-brand-navy flex items-center gap-1">
                    <span>🏨 Accommodation & Services</span>
                  </p>
                  <p className="truncate text-slate-500">
                    {pkg.hotelInfo?.makkah || pkg.hotelInfo?.phuket || pkg.hotelInfo?.hanoi || pkg.hotelInfo?.srinagar || pkg.hotelInfo?.goa || pkg.hotelInfo?.dubai}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href={`/holidays/${pkg.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-brand-navy font-semibold px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-colors text-center"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => handleEnquire(pkg)}
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
    </section>
  );
}
