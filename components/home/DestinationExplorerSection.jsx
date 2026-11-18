'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Compass, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '@/lib/whatsapp';

export default function DestinationExplorerSection() {
  const [activeTab, setActiveTab] = useState('domestic');

  const domesticDestinations = [
    {
      id: 'manali',
      name: 'Manali & Solang',
      state: 'Himachal Pradesh',
      tag: 'Snow & Adventure',
      price: 'From ₹9,999',
      duration: '4N / 5D',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'kashmir',
      name: 'Kashmir Valley',
      state: 'Srinagar & Gulmarg',
      tag: 'Paradise on Earth',
      price: 'From ₹16,999',
      duration: '5N / 6D',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'andaman',
      name: 'Andaman & Havelock',
      state: 'Bay of Bengal',
      tag: 'Coral Reefs & Beaches',
      price: 'From ₹18,499',
      duration: '5N / 6D',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'goa',
      name: 'Goa Coastline',
      state: 'North & South Goa',
      tag: 'Beaches & Heritage',
      price: 'From ₹9,499',
      duration: '3N / 4D',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'kerala',
      name: 'Kerala Backwaters',
      state: 'Munnar & Alleppey',
      tag: 'Houseboats & Hills',
      price: 'From ₹14,999',
      duration: '4N / 5D',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'rajasthan',
      name: 'Royal Rajasthan',
      state: 'Jaipur & Udaipur',
      tag: 'Palaces & Forts',
      price: 'From ₹12,999',
      duration: '4N / 5D',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const internationalDestinations = [
    {
      id: 'dubai',
      name: 'Dubai & Abu Dhabi',
      country: 'United Arab Emirates',
      tag: 'Bestseller • Express Visa',
      price: 'From ₹24,999',
      duration: '4N / 5D',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'thailand',
      name: 'Phuket & Bangkok',
      country: 'Thailand',
      tag: 'Visa on Arrival',
      price: 'From ₹22,499',
      duration: '5N / 6D',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'vietnam',
      name: 'Hanoi & Halong Bay',
      country: 'Vietnam',
      tag: 'Trending Destination',
      price: 'From ₹28,999',
      duration: '6N / 7D',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'umrah',
      name: 'Makkah & Madinah',
      country: 'Saudi Arabia',
      tag: 'Spiritual Umrah Journey',
      price: 'From ₹74,999',
      duration: '14N / 15D',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'bali',
      name: 'Bali Island',
      country: 'Indonesia',
      tag: 'Tropical Romance',
      price: 'From ₹29,999',
      duration: '5N / 6D',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'singapore',
      name: 'Singapore City',
      country: 'Singapore',
      tag: 'Family & Sentosa',
      price: 'From ₹34,999',
      duration: '4N / 5D',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const handleDestinationWhatsApp = (item) => {
    const isDomestic = activeTab === 'domestic';
    const message = `🗺️ *DESTINATION ENQUIRY: ${item.name.toUpperCase()}*
━━━━━━━━━━━━━━━━━━━━
📍 *Destination:* ${item.name} (${isDomestic ? item.state : item.country})
🏷️ *Theme:* ${item.tag}
⏳ *Recommended Duration:* ${item.duration}
💰 *Starting Budget:* ${item.price}

Hi Horizon Tourism team, I would like to explore packages, flights, and visa requirements for ${item.name}. Please share customized quotes.`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const destinations = activeTab === 'domestic' ? domesticDestinations : internationalDestinations;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Travel Inspirations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Destination Explorer
          </h2>
          <p className="text-base text-brand-muted">
            Whether you are looking for domestic hill stations and beach retreats or top international bucket-list destinations, we have got you covered.
          </p>

          {/* Interactive Toggle Pill */}
          <div className="inline-flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200 mt-4 shadow-inner">
            <button
              onClick={() => setActiveTab('domestic')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'domestic'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              Domestic Destinations (India)
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'international'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              International Destinations (Worldwide)
            </button>
          </div>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleDestinationWhatsApp(dest)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
            >
              {/* Background Photo */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-brand-navy/90 backdrop-blur-md text-brand-yellow text-[11px] font-bold px-3 py-1 rounded-full border border-brand-yellow/30 shadow-sm">
                  {dest.tag}
                </span>
                <span className="bg-white/90 backdrop-blur-md text-brand-dark text-[11px] font-black px-2.5 py-1 rounded-full shadow-sm">
                  {dest.duration}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                  <span>{activeTab === 'domestic' ? dest.state : dest.country}</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-black text-white group-hover:text-brand-yellow transition-colors tracking-tight">
                    {dest.name}
                  </h3>
                  <span className="text-sm font-extrabold text-brand-yellow">
                    {dest.price}
                  </span>
                </div>

                {/* Hover CTA prompt */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-brand-yellow" />
                    Enquire on WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
