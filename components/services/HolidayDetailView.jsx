'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, MapPin, Check, X, Calendar, Building, MessageCircle, 
  Send, Sparkles, ShieldCheck, ChevronDown, ChevronUp, Share2 
} from 'lucide-react';
import { buildWhatsAppUrl, formatHolidayEnquiryMessage } from '@/lib/whatsapp';

export default function HolidayDetailView({ pkg }) {
  const [selectedImage, setSelectedImage] = useState(pkg.gallery[0] || pkg.coverImage);
  const [activeDay, setActiveDay] = useState(1);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    travelers: '2 Adults',
    notes: '',
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const message = formatHolidayEnquiryMessage({
      packageName: pkg.title,
      destination: pkg.destination,
      duration: pkg.duration,
      travelers: inquiryData.travelers,
      travelDate: inquiryData.travelDate,
      customerName: inquiryData.name,
      phone: inquiryData.phone,
      notes: inquiryData.notes || `Please share pricing quote and hotel availability for ${pkg.title}.`,
    });
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12">
      {/* Top Banner & Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Gallery Section (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Display Image */}
          <div className="relative h-[340px] sm:h-[440px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
            <Image
              src={selectedImage}
              alt={pkg.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-all duration-300"
            />
            <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-brand-yellow text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-brand-yellow/30">
              <Clock className="w-4 h-4" />
              <span>{pkg.duration}</span>
            </div>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {pkg.priceDisplay}
            </div>
          </div>

          {/* Thumbnails */}
          {pkg.gallery?.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {pkg.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    selectedImage === img ? 'border-brand-yellow shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Details & Booking Card (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <MapPin className="w-4 h-4 text-brand-yellow-dark" />
              <span>{pkg.destination}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-tight">
              {pkg.title}
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              {pkg.overview}
            </p>
          </div>

          {/* Price & Quote Notice */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Pricing Standard</span>
              <span className="text-lg font-bold text-brand-navy">{pkg.priceDisplay}</span>
            </div>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold">
              Custom Dates Available
            </span>
          </div>

          {/* WhatsApp Direct Enquiry Form */}
          <form onSubmit={handleInquirySubmit} className="space-y-3.5 pt-2">
            <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Request Customized Quote via WhatsApp
            </h2>

            <div>
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={inquiryData.name}
                onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="tel"
                required
                placeholder="WhatsApp Number *"
                value={inquiryData.phone}
                onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />

              <input
                type="text"
                placeholder="Target Travel Month"
                value={inquiryData.travelDate}
                onChange={(e) => setInquiryData({ ...inquiryData, travelDate: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />
            </div>

            <div>
              <select
                value={inquiryData.travelers}
                onChange={(e) => setInquiryData({ ...inquiryData, travelers: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              >
                <option value="1 Solo Traveler">1 Solo Traveler</option>
                <option value="2 Adults (Couple / Friends)">2 Adults (Couple / Friends)</option>
                <option value="Family (2 Adults + 1 Child)">Family (2 Adults + 1 Child)</option>
                <option value="Family (2 Adults + 2 Children)">Family (2 Adults + 2 Children)</option>
                <option value="Group (4+ Travelers)">Group (4+ Travelers)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-brand-dark" />
              <span>Send Enquiry on WhatsApp</span>
            </button>
          </form>
        </div>
      </div>

      {/* Hotel & Accommodation Details */}
      {pkg.hotelInfo && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <Building className="w-6 h-6 text-brand-navy" />
            <h2 className="text-xl font-bold text-brand-dark">Hotel & Accommodation Standards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {Object.entries(pkg.hotelInfo).map(([key, value]) => (
              <div key={key} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-brand-navy capitalize block text-sm">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <p className="text-slate-600 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Day-Wise Detailed Itinerary */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-brand-dark">Day-Wise Detailed Itinerary</h2>
            <p className="text-xs text-brand-muted">Comprehensive day-by-day sightseeing and transfer schedule.</p>
          </div>
          <span className="text-xs font-bold text-brand-navy bg-slate-100 px-3 py-1 rounded-full">
            {pkg.itinerary?.length || 0} Days
          </span>
        </div>

        <div className="space-y-3">
          {pkg.itinerary?.map((item) => {
            const isOpen = activeDay === item.day;
            return (
              <div
                key={item.day}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveDay(isOpen ? -1 : item.day)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-brand-dark hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-brand-navy text-brand-yellow font-extrabold flex items-center justify-center text-xs shrink-0">
                      D{item.day}
                    </span>
                    <span className="text-sm sm:text-base font-bold">{item.title}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Inclusions & Exclusions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inclusions */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg border-b border-slate-100 pb-3">
            <Check className="w-5 h-5" />
            <span>Package Inclusions</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {pkg.inclusions?.map((inc, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-lg border-b border-slate-100 pb-3">
            <X className="w-5 h-5" />
            <span>Package Exclusions</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {pkg.exclusions?.map((exc, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{exc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
