'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Plane, 
  Globe2, 
  Palmtree, 
  Building2, 
  Calendar, 
  Users, 
  MapPin, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Search,
  Clock,
  Compass
} from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '@/lib/whatsapp';
import { countries } from '@/data/countries';
import { airports } from '@/data/airports';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('dummy-ticket');

  // Dummy Ticket / Flights form state
  const [dummyForm, setDummyForm] = useState({
    tripType: 'round',
    from: 'DEL - New Delhi, India',
    to: 'DXB - Dubai, UAE',
    departDate: '',
    returnDate: '',
    passengers: '1 Adult',
  });

  // Visa form state
  const [visaForm, setVisaForm] = useState({
    country: 'Dubai / UAE',
    visaType: 'Tourist Visa (30 Days)',
    travellers: '1 Traveller',
    travelMonth: 'Within next 15-30 days',
  });

  // Holidays form state
  const [holidayForm, setHolidayForm] = useState({
    destination: 'Dubai Grand Explorer',
    travelMonth: 'Upcoming Season',
    duration: '4 Nights / 5 Days',
    travellers: '2 Adults (Couple)',
  });

  // Flights & Hotels form state
  const [hotelForm, setHotelForm] = useState({
    serviceType: 'Confirmed Hotel Voucher for Visa',
    destination: 'Dubai, UAE',
    checkInDate: '',
    durationNights: '5 Nights',
    guests: '2 Adults, 1 Room',
  });

  // Common popular airport choices for quick selection
  const popularAirports = [
    { code: 'DEL', city: 'Delhi', name: 'DEL - New Delhi, India' },
    { code: 'BOM', city: 'Mumbai', name: 'BOM - Mumbai, India' },
    { code: 'DXB', city: 'Dubai', name: 'DXB - Dubai, UAE' },
    { code: 'BKK', city: 'Bangkok', name: 'BKK - Bangkok, Thailand' },
    { code: 'SIN', city: 'Singapore', name: 'SIN - Singapore' },
    { code: 'JED', city: 'Jeddah', name: 'JED - Jeddah / Makkah' },
    { code: 'LHR', city: 'London', name: 'LHR - London Heathrow, UK' },
    { code: 'KUL', city: 'Kuala Lumpur', name: 'KUL - Kuala Lumpur, Malaysia' },
  ];

  const popularVisaDestinations = [
    'Dubai / UAE',
    'Thailand',
    'Saudi Arabia (Umrah / Tourist)',
    'Schengen Europe',
    'Singapore',
    'Vietnam',
    'United Kingdom',
    'United States (USA)',
    'Azerbaijan (Baku)',
    'Malaysia',
    'Indonesia (Bali)',
    'Turkey (Türkiye)',
  ];

  const popularHolidayDestinations = [
    'Dubai Grand Explorer',
    'Magical Manali & Solang Valley',
    'Exotic Andaman & Havelock',
    '15 Days Executive Umrah Package',
    'Heaven on Earth: Kashmir',
    'Best of Thailand (Phuket & Bangkok)',
    'Enchanting Vietnam',
    'Sunkissed Goa Beach Escape',
  ];

  // WhatsApp Action Handlers
  const handleDummyTicketSubmit = (e) => {
    e.preventDefault();
    const returnDetail = dummyForm.tripType === 'round' 
      ? `\n📅 *Return Date:* ${dummyForm.returnDate || 'Flexible / To be discussed'}` 
      : '';

    const message = `✈️ *INSTANT DUMMY TICKET / FLIGHT ITINERARY QUOTE*
━━━━━━━━━━━━━━━━━━━━
🔄 *Trip Type:* ${dummyForm.tripType === 'round' ? 'Round Trip' : 'One Way'}
🛫 *From:* ${dummyForm.from}
🛬 *To:* ${dummyForm.to}
📅 *Depart Date:* ${dummyForm.departDate || 'Immediate / Flexible'}${returnDetail}
👥 *Passengers:* ${dummyForm.passengers}
📋 *Requirement:* Verifiable PNR itinerary for visa submission & embassy compliance.

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Tourism-Bazar Hero Search Widget_
_Please share available flight combinations, validity duration, and instant quote._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleVisaSubmit = (e) => {
    e.preventDefault();
    const message = `🛂 *INSTANT VISA ASSISTANCE QUOTE*
━━━━━━━━━━━━━━━━━━━━
🌍 *Destination Country:* ${visaForm.country}
📄 *Visa Category:* ${visaForm.visaType}
👥 *Travellers:* ${visaForm.travellers}
📅 *Intended Travel Period:* ${visaForm.travelMonth}

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Tourism-Bazar Hero Search Widget_
_Please share required document checklist, government visa fees, processing timeframe, and guidance._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleHolidaySubmit = (e) => {
    e.preventDefault();
    const message = `🏖️ *HOLIDAY / TOUR PACKAGE ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
📍 *Destination:* ${holidayForm.destination}
📅 *Target Month:* ${holidayForm.travelMonth}
⏳ *Duration:* ${holidayForm.duration}
👥 *Travellers:* ${holidayForm.travellers}

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Tourism-Bazar Hero Search Widget_
_Please share day-wise itinerary, hotel inclusions, vehicle options, and discounted package pricing._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleHotelSubmit = (e) => {
    e.preventDefault();
    const message = `🏨 *FLIGHT / HOTEL VOUCHER ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
🛎️ *Service Needed:* ${hotelForm.serviceType}
📍 *Destination:* ${hotelForm.destination}
📅 *Check-in / Depart:* ${hotelForm.checkInDate || 'Flexible'}
⏳ *Duration:* ${hotelForm.durationNights}
👥 *Guests / Rooms:* ${hotelForm.guests}

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Tourism-Bazar Hero Search Widget_
_Please provide confirmed booking vouchers / fare options for documentation._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const tabs = [
    { id: 'dummy-ticket', label: 'Dummy Ticket', icon: Plane, badge: 'Verifiable PNR' },
    { id: 'visas', label: 'Visas', icon: Globe2, badge: '30+ Countries' },
    { id: 'holidays', label: 'Holidays', icon: Palmtree, badge: 'Deals from ₹9k' },
    { id: 'flights-hotels', label: 'Flights & Hotels', icon: Building2, badge: 'Confirmed Vouchers' },
  ];

  return (
    <section className="relative min-h-[720px] lg:min-h-[780px] flex items-center justify-center bg-brand-navy overflow-hidden py-12 lg:py-16">
      {/* Background with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
          alt="International travel and flights"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/95 via-brand-navy/90 to-brand-navy-dark" />
        {/* Subtle decorative glow accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Header / Social Proof Strip */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-brand-yellow/30 text-white text-xs sm:text-sm font-semibold shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-brand-yellow font-bold">★ 4.9/5 Rating</span>
            <span className="text-slate-400">•</span>
            <span>15,000+ Verifiable PNRs & Visas Assisted</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Fly Smarter. Apply Faster.{' '}
            <span className="text-brand-yellow underline decoration-brand-yellow/40 decoration-wavy decoration-2">
              Travel Confidently.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get instant verifiable flight itineraries (dummy tickets), seamless tourist & business visa consultation across 30+ countries, and tailored holiday packages.
          </p>
        </div>

        {/* HERO MULTI-TAB SEARCH & QUOTE WIDGET (DREAMHOLIDAY AGENCY UX) */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 dark:bg-brand-navy-dark/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            
            {/* Interactive Tab Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-brand-navy border-b border-brand-navy-light/60 p-1.5 sm:p-2 gap-1.5 sm:gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center justify-center sm:justify-start gap-2.5 px-3 sm:px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-brand-yellow text-brand-dark shadow-md scale-[1.01]'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${isActive ? 'text-brand-dark' : 'text-brand-yellow'}`} />
                    <div className="flex flex-col text-left">
                      <span className="leading-tight">{tab.label}</span>
                      <span className={`text-[10px] hidden md:inline font-medium ${isActive ? 'text-brand-navy-dark/80 font-semibold' : 'text-slate-400'}`}>
                        {tab.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab Form Containers */}
            <div className="p-5 sm:p-7 lg:p-8 bg-white">
              
              {/* TAB 1: DUMMY TICKET & FLIGHTS */}
              {activeTab === 'dummy-ticket' && (
                <form onSubmit={handleDummyTicketSubmit} className="space-y-5">
                  <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trip Type:</span>
                      <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-xs font-semibold">
                        <button
                          type="button"
                          onClick={() => setDummyForm({ ...dummyForm, tripType: 'round' })}
                          className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                            dummyForm.tripType === 'round'
                              ? 'bg-brand-navy text-white shadow-sm'
                              : 'text-slate-600 hover:text-brand-navy'
                          }`}
                        >
                          Round Trip
                        </button>
                        <button
                          type="button"
                          onClick={() => setDummyForm({ ...dummyForm, tripType: 'oneway' })}
                          className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                            dummyForm.tripType === 'oneway'
                              ? 'bg-brand-navy text-white shadow-sm'
                              : 'text-slate-600 hover:text-brand-navy'
                          }`}
                        >
                          One Way
                        </button>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      100% Verifiable on Airline Websites
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* From Airport */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Flying From</span>
                      </label>
                      <select
                        value={dummyForm.from}
                        onChange={(e) => setDummyForm({ ...dummyForm, from: e.target.value })}
                        className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                      >
                        {popularAirports.map((ap) => (
                          <option key={ap.code} value={ap.name}>
                            {ap.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* To Airport */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Plane className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Flying To</span>
                      </label>
                      <select
                        value={dummyForm.to}
                        onChange={(e) => setDummyForm({ ...dummyForm, to: e.target.value })}
                        className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                      >
                        <option value="DXB - Dubai, UAE">DXB - Dubai International, UAE</option>
                        <option value="BKK - Bangkok, Thailand">BKK - Bangkok Suvarnabhumi, Thailand</option>
                        <option value="SIN - Singapore Changi">SIN - Singapore Changi</option>
                        <option value="JED - King Abdulaziz, Jeddah / Umrah">JED - Jeddah / Makkah, Saudi Arabia</option>
                        <option value="LHR - London Heathrow, UK">LHR - London Heathrow, UK</option>
                        <option value="CDG - Paris Charles de Gaulle, France">CDG - Paris (Schengen Area)</option>
                        <option value="KUL - Kuala Lumpur, Malaysia">KUL - Kuala Lumpur, Malaysia</option>
                        <option value="DPS - Bali Ngurah Rai, Indonesia">DPS - Bali, Indonesia</option>
                        <option value="HAN - Hanoi Noi Bai, Vietnam">HAN - Hanoi, Vietnam</option>
                        <option value="JFK - New York, United States">JFK - New York, USA</option>
                        <option value="YYZ - Toronto Pearson, Canada">YYZ - Toronto, Canada</option>
                      </select>
                    </div>

                    {/* Departure Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Departure Date</span>
                      </label>
                      <input
                        type="date"
                        value={dummyForm.departDate}
                        onChange={(e) => setDummyForm({ ...dummyForm, departDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                    </div>

                    {/* Return Date or Passengers */}
                    {dummyForm.tripType === 'round' ? (
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                          <span>Return Date</span>
                        </label>
                        <input
                          type="date"
                          value={dummyForm.returnDate}
                          onChange={(e) => setDummyForm({ ...dummyForm, returnDate: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                        />
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-brand-navy" />
                          <span>Passengers</span>
                        </label>
                        <select
                          value={dummyForm.passengers}
                          onChange={(e) => setDummyForm({ ...dummyForm, passengers: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                        >
                          <option value="1 Adult">1 Adult</option>
                          <option value="2 Adults">2 Adults</option>
                          <option value="3 Adults">3 Adults</option>
                          <option value="4+ Family / Group">4+ Family / Group</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Submission Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-4 h-4 text-brand-yellow-dark" />
                      <span>Delivery in <strong>15–30 minutes</strong> with authentic PNR code & e-ticket format.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-lg hover:shadow-brand-yellow/40 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-brand-dark" />
                      <span>Get Instant Quote on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 2: VISAS */}
              {activeTab === 'visas' && (
                <form onSubmit={handleVisaSubmit} className="space-y-5">
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Select Destination & Travel Criteria:
                    </span>
                    <span className="text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full font-semibold border border-blue-200 flex items-center gap-1">
                      <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                      30+ Worldwide Embassies & Consular Desks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Country Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Globe2 className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Destination Country</span>
                      </label>
                      <select
                        value={visaForm.country}
                        onChange={(e) => setVisaForm({ ...visaForm, country: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        {popularVisaDestinations.map((countryName) => (
                          <option key={countryName} value={countryName}>
                            {countryName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Visa Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Visa Category</span>
                      </label>
                      <select
                        value={visaForm.visaType}
                        onChange={(e) => setVisaForm({ ...visaForm, visaType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="Tourist Visa (Single Entry)">Tourist Visa (Single Entry)</option>
                        <option value="Tourist Visa (Multiple Entry)">Tourist Visa (Multiple Entry)</option>
                        <option value="Business / Commercial Visa">Business / Commercial Visa</option>
                        <option value="Umrah / Pilgrimage E-Visa">Umrah / Pilgrimage E-Visa</option>
                        <option value="Visa On Arrival Fast-Track / OTB">VoA Assistance / OK To Board</option>
                      </select>
                    </div>

                    {/* Travellers Count */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Travellers Count</span>
                      </label>
                      <select
                        value={visaForm.travellers}
                        onChange={(e) => setVisaForm({ ...visaForm, travellers: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="1 Traveller (Individual)">1 Traveller (Individual)</option>
                        <option value="2 Travellers (Couple / Friends)">2 Travellers (Couple / Friends)</option>
                        <option value="3-4 Travellers (Family)">3-4 Travellers (Family)</option>
                        <option value="5+ Travellers (Group / Corporate)">5+ Travellers (Group / Corporate)</option>
                      </select>
                    </div>

                    {/* Travel Period */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Travel Period</span>
                      </label>
                      <select
                        value={visaForm.travelMonth}
                        onChange={(e) => setVisaForm({ ...visaForm, travelMonth: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="Urgent (Next 7-10 Days)">Urgent (Next 7-10 Days)</option>
                        <option value="Within next 15-30 days">Within next 15-30 days</option>
                        <option value="Next 1-2 Months">Next 1-2 Months</option>
                        <option value="Flexible / Just Checking Requirements">Flexible / Checking Requirements</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Complete document checklist & embassy eligibility check sent on WhatsApp.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-lg hover:shadow-brand-yellow/40 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-brand-dark" />
                      <span>Get Instant Quote on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 3: HOLIDAYS */}
              {activeTab === 'holidays' && (
                <form onSubmit={handleHolidaySubmit} className="space-y-5">
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Tailor-Made Domestic, International & Umrah Packages:
                    </span>
                    <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full font-semibold border border-amber-200 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Personalized Itineraries & Transparent Prices
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Destination */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Destination</span>
                      </label>
                      <select
                        value={holidayForm.destination}
                        onChange={(e) => setHolidayForm({ ...holidayForm, destination: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        {popularHolidayDestinations.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Travel Month */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Travel Month</span>
                      </label>
                      <select
                        value={holidayForm.travelMonth}
                        onChange={(e) => setHolidayForm({ ...holidayForm, travelMonth: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="This Month / Immediate">This Month / Immediate</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Upcoming Season (Winter/Spring)">Upcoming Season (Winter/Spring)</option>
                        <option value="Summer Holidays">Summer Holidays</option>
                        <option value="Ramadan / Shawwal Umrah">Ramadan / Shawwal Umrah</option>
                      </select>
                    </div>

                    {/* Duration Filter */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Duration Filter</span>
                      </label>
                      <select
                        value={holidayForm.duration}
                        onChange={(e) => setHolidayForm({ ...holidayForm, duration: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="3 Nights / 4 Days (Weekend Getaway)">3 Nights / 4 Days</option>
                        <option value="4 Nights / 5 Days (Classic)">4 Nights / 5 Days</option>
                        <option value="5 Nights / 6 Days (Explorer)">5 Nights / 6 Days</option>
                        <option value="6 Nights / 7 Days (Grand Tour)">6 Nights / 7 Days</option>
                        <option value="14 Nights / 15 Days (Spiritual Umrah)">14 Nights / 15 Days</option>
                      </select>
                    </div>

                    {/* Travellers / Group */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Travellers / Type</span>
                      </label>
                      <select
                        value={holidayForm.travellers}
                        onChange={(e) => setHolidayForm({ ...holidayForm, travellers: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                        <option value="Family with Kids (3-4)">Family with Kids (3-4)</option>
                        <option value="Solo Traveler">Solo Traveler</option>
                        <option value="Friends / Group (5+)">Friends / Group (5+)</option>
                        <option value="Corporate / Incentive Tour">Corporate / Incentive Tour</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Compass className="w-4 h-4 text-brand-yellow-dark" />
                      <span>Customized hotel options, cab transfers & sightseeing itinerary shared directly.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-lg hover:shadow-brand-yellow/40 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-brand-dark" />
                      <span>Get Instant Quote on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 4: FLIGHTS & HOTELS */}
              {activeTab === 'flights-hotels' && (
                <form onSubmit={handleHotelSubmit} className="space-y-5">
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Confirmed Accommodations & Airline Fare Services:
                    </span>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                      Official Hotel Booking Vouchers for Embassies
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Service Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Service Needed</span>
                      </label>
                      <select
                        value={hotelForm.serviceType}
                        onChange={(e) => setHotelForm({ ...hotelForm, serviceType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="Confirmed Hotel Voucher for Visa">Hotel Voucher for Visa</option>
                        <option value="International Flight Ticket Booking">Commercial Flight Booking</option>
                        <option value="Flight + Hotel Combo Booking">Flight + Hotel Combo</option>
                        <option value="OK to Board (OTB) Clearance">OK to Board (OTB) Clearance</option>
                      </select>
                    </div>

                    {/* Destination City */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Destination City</span>
                      </label>
                      <input
                        type="text"
                        value={hotelForm.destination}
                        onChange={(e) => setHotelForm({ ...hotelForm, destination: e.target.value })}
                        placeholder="e.g. Dubai, Makkah, Paris"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                    </div>

                    {/* Check-in Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Target Travel Date</span>
                      </label>
                      <input
                        type="date"
                        value={hotelForm.checkInDate}
                        onChange={(e) => setHotelForm({ ...hotelForm, checkInDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                    </div>

                    {/* Guests / Rooms */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-brand-navy" />
                        <span>Guests & Rooms</span>
                      </label>
                      <select
                        value={hotelForm.guests}
                        onChange={(e) => setHotelForm({ ...hotelForm, guests: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="1 Guest (1 Room)">1 Guest (1 Room)</option>
                        <option value="2 Adults (1 Room)">2 Adults (1 Room)</option>
                        <option value="3 Adults (1 Triple Room)">3 Adults (1 Triple Room)</option>
                        <option value="Family (2 Adults, 2 Kids)">Family (2 Adults, 2 Kids)</option>
                        <option value="Group (Multiple Rooms)">Group (Multiple Rooms)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Legitimate confirmation letters with hotel contact & booking reference details.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-lg hover:shadow-brand-yellow/40 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-brand-dark" />
                      <span>Get Instant Quote on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Bottom Fast Trust Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 text-slate-200 text-xs">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span>Verifiable PNRs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span>30+ Visa Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span>15–30 Min Turnaround</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span>24x7 WhatsApp Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
