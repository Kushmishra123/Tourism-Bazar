'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Plane, 
  Globe2, 
  Palmtree, 
  FileCheck2, 
  Calendar, 
  Users, 
  MapPin, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Clock,
  Compass,
  Building2,
  ChevronRight
} from 'lucide-react';
import { WHATSAPP_CONFIG, buildWhatsAppUrl } from '@/lib/whatsapp';
import { countries } from '@/data/countries';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('visas');

  // Pill Sub-options state per tab
  const [flightSubOption, setFlightSubOption] = useState('One Way');
  const [visaSubOption, setVisaSubOption] = useState('All Options');
  const [holidaySubOption, setHolidaySubOption] = useState('International');
  const [docSubOption, setDocSubOption] = useState('OK to Board (OTB)');

  // Void Ticket / Flights form state
  const [dummyForm, setDummyForm] = useState({
    from: 'DEL - New Delhi, India',
    to: 'DXB - Dubai, UAE',
    departDate: '',
    returnDate: '',
    multiLeg1From: 'DEL - New Delhi, India',
    multiLeg1To: 'DXB - Dubai, UAE',
    multiLeg1Date: '',
    multiLeg2From: 'DXB - Dubai, UAE',
    multiLeg2To: 'LHR - London Heathrow, UK',
    multiLeg2Date: '',
    passengers: '1 Adult',
    cabinClass: 'Economy',
  });

  // Visa form state
  const [visaForm, setVisaForm] = useState({
    country: 'UAE',
    selectedOption: 'Tourist Visa – 30 Days',
    travellers: '1 Traveller',
    travelMonth: 'Within next 15-30 days',
  });

  const handleCountryChange = (countryName) => {
    const selected = countries.find(c => c.name === countryName);
    const defaultOption = selected?.visas[0]?.title || '';
    setVisaForm(prev => ({
      ...prev,
      country: countryName,
      selectedOption: defaultOption,
    }));
  };

  const selectedCountryObj = countries.find(c => c.name === visaForm.country) || countries.find(c => c.name === 'UAE') || countries[0];
  const currentVisaOptions = selectedCountryObj?.visas || [];

  // Filter options based on sub-option filter if user clicks pill
  const filteredVisaOptions = visaSubOption === 'Visas Only'
    ? currentVisaOptions.filter(v => v.category !== 'service')
    : visaSubOption === 'Services Only'
      ? currentVisaOptions.filter(v => v.category === 'service')
      : currentVisaOptions;

  // Holidays form state
  const [holidayForm, setHolidayForm] = useState({
    destination: 'Dubai Grand Explorer & Desert Safari',
    travelMonth: 'Upcoming Season',
    duration: '4 Nights / 5 Days',
    travellers: '2 Adults (Couple)',
  });

  // Documentation form state
  const [docForm, setDocForm] = useState({
    airline: 'Air India Express',
    destination: 'UAE (Dubai / Sharjah / Abu Dhabi)',
    flightDate: '',
    pnrRef: '',
    hotelCity: 'Dubai, UAE',
    hotelNights: '5 Nights',
    hotelGuests: '2 Adults, 1 Room',
    poeCountry: 'Saudi Arabia',
    poeTrade: 'Skilled / Professional',
  });

  // Preset airport options
  const popularAirports = [
    { code: 'DEL', name: 'DEL - New Delhi, India' },
    { code: 'BOM', name: 'BOM - Mumbai, India' },
    { code: 'BLR', name: 'BLR - Bengaluru, India' },
    { code: 'MAA', name: 'MAA - Chennai, India' },
    { code: 'HYD', name: 'HYD - Hyderabad, India' },
    { code: 'DXB', name: 'DXB - Dubai, UAE' },
    { code: 'BKK', name: 'BKK - Bangkok, Thailand' },
    { code: 'SIN', name: 'SIN - Singapore Changi' },
    { code: 'JED', name: 'JED - Jeddah / Makkah, Saudi Arabia' },
    { code: 'LHR', name: 'LHR - London Heathrow, UK' },
    { code: 'CDG', name: 'CDG - Paris Charles de Gaulle' },
    { code: 'KUL', name: 'KUL - Kuala Lumpur, Malaysia' },
  ];

  // Dynamic holiday destinations per sub-category
  const internationalDestinations = [
    'Dubai Grand Explorer & Desert Safari',
    'Thailand Island Paradise (Phuket & Bangkok)',
    'Enchanting Vietnam (Hanoi & Halong Bay)',
    'Bali Tropical Romance & Ubud Retreat',
    'Singapore City & Sentosa Island Tour',
  ];

  const domesticDestinations = [
    'Magical Manali & Solang Valley Snow Escape',
    'Heaven on Earth: Kashmir & Gulmarg',
    'Exotic Andaman & Havelock Coral Beaches',
    'Sunkissed Goa Beach & Heritage Getaway',
    'Kerala Backwaters & Munnar Hills',
    'Royal Rajasthan (Jaipur & Udaipur)',
  ];

  const umrahDestinations = [
    '15 Days Executive Umrah Package (5-Star Close to Haram)',
    '10 Days VIP Umrah Pilgrimage',
    'Customized Family Umrah & Ziyarat Package',
  ];

  // ================= Form Submissions with WhatsApp Conversion =================
  const handleVoidTicketSubmit = (e) => {
    e.preventDefault();
    let flightDetails = '';

    if (flightSubOption === 'Multi City') {
      flightDetails = `
🛫 *Leg 1:* ${dummyForm.multiLeg1From} ➔ ${dummyForm.multiLeg1To} (${dummyForm.multiLeg1Date || 'Date TBD'})
🛫 *Leg 2:* ${dummyForm.multiLeg2From} ➔ ${dummyForm.multiLeg2To} (${dummyForm.multiLeg2Date || 'Date TBD'})`;
    } else {
      const returnDateStr = flightSubOption === 'Round Trip'
        ? `\n📅 *Return Date:* ${dummyForm.returnDate || 'Flexible / To be confirmed'}`
        : '';
      flightDetails = `
🛫 *From:* ${dummyForm.from}
🛬 *To:* ${dummyForm.to}
📅 *Departure Date:* ${dummyForm.departDate || 'Immediate / Flexible'}${returnDateStr}`;
    }

    const message = `✈️ *VOID TICKET / FLIGHT ITINERARY ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
📌 *Service:* Verifiable Void Ticket / Flight Itinerary for Visa
🔄 *Trip Type:* ${flightSubOption}${flightDetails}
👥 *Passengers:* ${dummyForm.passengers}
💺 *Class:* ${dummyForm.cabinClass}

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Horizon Tourism & Visas Portal_
_Please share available flight combinations with verifiable PNR and instant quote._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleVisaSubmit = (e) => {
    e.preventDefault();
    const message = `🛂 *VISA / CLEARANCE SERVICE ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
🌍 *Destination Country:* ${visaForm.country}
📄 *Visa / Service Selected:* ${visaForm.selectedOption}
👥 *Travellers Count:* ${visaForm.travellers}
📅 *Target Travel Window:* ${visaForm.travelMonth}

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Horizon Tourism & Visas Portal_
_Please share required document checklist, processing timeline, and exact quotation._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleHolidaySubmit = (e) => {
    e.preventDefault();
    const message = `🏖️ *HOLIDAY PACKAGE ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
🏷️ *Category:* ${holidaySubOption} Holiday
📍 *Destination / Tour:* ${holidayForm.destination}
⏳ *Duration:* ${holidayForm.duration}
📅 *Target Month:* ${holidayForm.travelMonth}
👥 *Travellers:* ${holidayForm.travellers}

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Tourism-Bazar Hero Booking Widget_
_Please share day-wise itinerary, hotel inclusions, vehicle options, and discounted pricing._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleDocSubmit = (e) => {
    e.preventDefault();
    let serviceSpecifics = '';

    if (docSubOption === 'OK to Board (OTB)') {
      serviceSpecifics = `
✈️ *Airline:* ${docForm.airline}
📍 *Destination:* ${docForm.destination}
📅 *Flight Date:* ${docForm.flightDate || 'Upcoming'}
🎫 *PNR / Ticket Ref:* ${docForm.pnrRef || 'Will provide on chat'}`;
    } else if (docSubOption === 'POE Emigration') {
      serviceSpecifics = `
🛂 *Passport Category:* ECR (Emigration Check Required)
🌍 *Employment Country:* ${docForm.poeCountry}
💼 *Trade / Profession:* ${docForm.poeTrade}`;
    } else {
      serviceSpecifics = `
🏨 *Hotel City:* ${docForm.hotelCity}
⏳ *Duration:* ${docForm.hotelNights}
📅 *Check-in Date:* ${docForm.flightDate || 'Flexible'}
👥 *Guests & Rooms:* ${docForm.hotelGuests}`;
    }

    const message = `📋 *TRAVEL DOCUMENTATION ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
🛎️ *Service:* ${docSubOption}${serviceSpecifics}

━━━━━━━━━━━━━━━━━━━━
_Enquiry from Tourism-Bazar Hero Booking Widget_
_Please assist with documentation verification, airline clearance, and requirements._`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  // Top Row Tab Definitions (Strict Sequence: Visas, Holidays, Void Ticket, Documentation)
  const tabs = [
    { id: 'visas', label: 'Visas', icon: Globe2 },
    { id: 'holidays', label: 'Holidays', icon: Palmtree },
    { id: 'void-ticket', label: 'Void Ticket', icon: Plane },
    { id: 'documentation', label: 'Documentation', icon: FileCheck2 },
  ];

  return (
    <section className="relative min-h-[720px] lg:min-h-[800px] flex items-center justify-center overflow-hidden pt-6 pb-12 lg:pt-8 lg:pb-16">
      {/* Atmospheric Soft-Blurred Aviation/Sunset Sky Background with Deep Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
          alt="International travel and flights"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-[1px] brightness-90"
        />
        {/* Deep navy/indigo gradient tint so white text pops cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1B33]/90 via-[#142B50]/80 to-[#0C1B33]/95" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* 3. FROSTED GLASSMORPHIC HERO CARD */}
        <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-3xl p-5 sm:p-7 md:p-9 shadow-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-center text-white space-y-3">
          
          {/* Top row: two uppercase micro-labels separated by a small yellow dot */}
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase">
            <span>HORIZON TOURISM &amp; VISAS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
            <span className="text-[#FACC15]">35 COUNTRIES DIRECT DESK</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Fly Smarter,{' '}
            <span className="text-[#FACC15]">
              Travel Confidently.
            </span>
          </h1>

          {/* Concise 2-line Subtitle */}
          <p className="text-slate-200 text-xs sm:text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
            35 Countries • Visas, E-Visas &amp; Clearance Services, plus verifiable void tickets quoted on WhatsApp in minutes.
          </p>
        </div>

        {/* ================= 4. COMPACT SQUARE APP-STYLE SERVICE TABS & BOOKING CARD ================= */}
        <div className="w-full max-w-full sm:max-w-4xl mx-auto px-0 sm:px-2">
          
          {/* Top Row: 4 Equal-Width Compact Rounded-t-2xl Square Cards */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 w-full max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-center justify-center text-center py-2 sm:py-3.5 px-1 sm:px-3 rounded-t-2xl transition-all duration-200 cursor-pointer w-full ${
                    isActive
                      ? 'bg-[#0C1B33] text-white shadow-xl border-b-4 border-[#FACC15] z-10'
                      : 'bg-white/95 hover:bg-white text-slate-700 hover:text-brand-navy border border-b-0 border-slate-200/80 shadow-sm'
                  }`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-1 shrink-0 ${
                    isActive ? 'text-white stroke-[2.2]' : 'text-[#0C1B33] stroke-[2]'
                  }`} />
                  <span className={`text-[10px] xs:text-xs sm:text-sm font-black tracking-tight leading-tight truncate max-w-full ${
                    isActive ? 'text-white' : 'text-slate-800'
                  }`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Connected White Booking Card */}
          <div className="w-full max-w-full mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 sm:p-6 md:p-7 space-y-4 sm:space-y-6">

            {/* TAB 1: VISAS (Default Primary Service) */}
            {activeTab === 'visas' && (
              <form onSubmit={handleVisaSubmit} className="space-y-4 sm:space-y-6 w-full max-w-full">
                
                {/* Pill-Shaped Radio Option Buttons */}
                <div className="flex flex-wrap items-center gap-2 pb-3 sm:pb-4 border-b border-slate-100 w-full max-w-full">
                  {['All Options', 'Visas Only', 'Services Only'].map((option) => {
                    const isSelected = visaSubOption === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setVisaSubOption(option)}
                        className={`rounded-full border-2 px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'border-brand-navy bg-brand-navy/10 text-brand-navy shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-brand-navy' : 'border-slate-300'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-navy" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}

                  <div className="ml-auto hidden md:flex items-center gap-1.5 text-xs text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full font-semibold border border-blue-200">
                    <Globe2 className="w-4 h-4 text-blue-600" />
                    <span>35 Countries &amp; Specialized Desks</span>
                  </div>
                </div>

                {/* Form Inputs: Destination Country + Dynamic Visa/Service Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Country Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Globe2 className="w-3.5 h-3.5 text-brand-navy" />
                      <span>Destination Country</span>
                    </label>
                    <select
                      value={visaForm.country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      {countries.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dynamic Visa / Service Type Dropdown populated from data/countries.js */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-navy" />
                      <span>Visa / Service Type</span>
                    </label>
                    <select
                      value={visaForm.selectedOption}
                      onChange={(e) => setVisaForm({ ...visaForm, selectedOption: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      {filteredVisaOptions.map((opt) => (
                        <option key={opt.id} value={opt.title}>
                          {opt.category === 'service' ? '⚡ ' : '📄 '}{opt.title}
                        </option>
                      ))}
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
                      <option value="1 Traveller">1 Traveller</option>
                      <option value="2 Travellers">2 Travellers</option>
                      <option value="3-4 Travellers (Family)">3-4 Travellers (Family)</option>
                      <option value="5+ Travellers (Group)">5+ Travellers (Group)</option>
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
                      <option value="Flexible Planning">Flexible Planning</option>
                    </select>
                  </div>
                </div>

                {/* Full-width CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark py-4 px-6 rounded-xl text-base font-black shadow-lg hover:shadow-brand-yellow/30 transition-all duration-200 active:scale-[0.99] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-brand-dark" />
                    <span>Get Quote on WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                    Includes exact document checklist, embassy appointment scheduling, and verification.
                  </p>
                </div>

              </form>
            )}

            {/* TAB 3: HOLIDAYS */}
            {activeTab === 'holidays' && (
              <form onSubmit={handleHolidaySubmit} className="space-y-4 sm:space-y-6 w-full max-w-full">
                
                {/* Pill-Shaped Radio Option Buttons (International, Domestic, Umrah) */}
                <div className="flex flex-wrap items-center gap-2 pb-3 sm:pb-4 border-b border-slate-100 w-full max-w-full">
                  {['International', 'Domestic', 'Umrah'].map((option) => {
                    const isSelected = holidaySubOption === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setHolidaySubOption(option);
                          // Set default destination according to selection
                          if (option === 'Domestic') {
                            setHolidayForm(prev => ({ ...prev, destination: domesticDestinations[0] }));
                          } else if (option === 'Umrah') {
                            setHolidayForm(prev => ({ ...prev, destination: umrahDestinations[0] }));
                          } else {
                            setHolidayForm(prev => ({ ...prev, destination: internationalDestinations[0] }));
                          }
                        }}
                        className={`rounded-full border-2 px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'border-brand-navy bg-brand-navy/10 text-brand-navy shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-brand-navy' : 'border-slate-300'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-navy" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}

                  <div className="ml-auto hidden md:flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-3 py-1.5 rounded-full font-semibold border border-amber-200">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Best Price Guarantee & Verified Hotels</span>
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Destination */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                      <span>{holidaySubOption} Destination</span>
                    </label>
                    <select
                      value={holidayForm.destination}
                      onChange={(e) => setHolidayForm({ ...holidayForm, destination: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      {holidaySubOption === 'Domestic' && domesticDestinations.map(d => <option key={d} value={d}>{d}</option>)}
                      {holidaySubOption === 'Umrah' && umrahDestinations.map(d => <option key={d} value={d}>{d}</option>)}
                      {holidaySubOption === 'International' && internationalDestinations.map(d => <option key={d} value={d}>{d}</option>)}
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
                      <option value="This Month">This Month</option>
                      <option value="Next Month">Next Month</option>
                      <option value="Upcoming Season (Winter/Spring)">Upcoming Season</option>
                      <option value="Summer Holidays">Summer Holidays</option>
                    </select>
                  </div>

                  {/* Duration Filter */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-navy" />
                      <span>Duration</span>
                    </label>
                    <select
                      value={holidayForm.duration}
                      onChange={(e) => setHolidayForm({ ...holidayForm, duration: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      <option value="3 Nights / 4 Days">3 Nights / 4 Days</option>
                      <option value="4 Nights / 5 Days">4 Nights / 5 Days</option>
                      <option value="5 Nights / 6 Days">5 Nights / 6 Days</option>
                      <option value="14 Nights / 15 Days">14 Nights / 15 Days</option>
                    </select>
                  </div>

                  {/* Travellers */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-brand-navy" />
                      <span>Travellers Type</span>
                    </label>
                    <select
                      value={holidayForm.travellers}
                      onChange={(e) => setHolidayForm({ ...holidayForm, travellers: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="Family with Kids (3-4)">Family with Kids (3-4)</option>
                      <option value="Solo Traveler">Solo Traveler</option>
                      <option value="Group / Friends (5+)">Group / Friends (5+)</option>
                    </select>
                  </div>
                </div>

                {/* Full-width CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark py-4 px-6 rounded-xl text-base font-black shadow-lg hover:shadow-brand-yellow/30 transition-all duration-200 active:scale-[0.99] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-brand-dark" />
                    <span>Get Quote on WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                    Receive complete day-wise itineraries, verified hotel options, and cab quotes.
                  </p>
                </div>

              </form>
            )}

            {/* TAB 3: VOID TICKET (Renamed from Dummy Ticket) */}
            {activeTab === 'void-ticket' && (
              <form onSubmit={handleVoidTicketSubmit} className="space-y-4 sm:space-y-6 w-full max-w-full">
                
                {/* Pill-Shaped Radio Option Buttons (One Way, Round Trip, Multi City) */}
                <div className="flex flex-wrap items-center gap-2 pb-3 sm:pb-4 border-b border-slate-100 w-full max-w-full">
                  {['One Way', 'Round Trip', 'Multi City'].map((option) => {
                    const isSelected = flightSubOption === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFlightSubOption(option)}
                        className={`rounded-full border-2 px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'border-brand-navy bg-brand-navy/10 text-brand-navy shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        {/* Custom Circular Radio Indicator */}
                        <span className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-brand-navy' : 'border-slate-300'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-navy" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}

                  <div className="ml-auto hidden md:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full font-semibold border border-emerald-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% Verifiable Void Ticket (PNR)</span>
                  </div>
                </div>

                {/* Form Fields: Standard One Way / Round Trip */}
                {flightSubOption !== 'Multi City' ? (
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
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
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
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="DXB - Dubai, UAE">DXB - Dubai International, UAE</option>
                        <option value="BKK - Bangkok, Thailand">BKK - Bangkok Suvarnabhumi, Thailand</option>
                        <option value="SIN - Singapore Changi">SIN - Singapore Changi</option>
                        <option value="JED - Jeddah / Makkah, Saudi Arabia">JED - Jeddah / Makkah, Saudi Arabia</option>
                        <option value="LHR - London Heathrow, UK">LHR - London Heathrow, UK</option>
                        <option value="CDG - Paris Charles de Gaulle">CDG - Paris (Schengen Area)</option>
                        <option value="KUL - Kuala Lumpur, Malaysia">KUL - Kuala Lumpur, Malaysia</option>
                        <option value="DPS - Bali, Indonesia">DPS - Bali, Indonesia</option>
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

                    {/* Return Date (if Round Trip) or Passengers count */}
                    {flightSubOption === 'Round Trip' ? (
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
                ) : (
                  /* Form Fields: Multi City */
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Flight 1: From</label>
                        <select
                          value={dummyForm.multiLeg1From}
                          onChange={(e) => setDummyForm({ ...dummyForm, multiLeg1From: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs font-semibold"
                        >
                          {popularAirports.map(ap => <option key={ap.code} value={ap.name}>{ap.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Flight 1: To</label>
                        <select
                          value={dummyForm.multiLeg1To}
                          onChange={(e) => setDummyForm({ ...dummyForm, multiLeg1To: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs font-semibold"
                        >
                          {popularAirports.map(ap => <option key={ap.code} value={ap.name}>{ap.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Departure Date</label>
                        <input
                          type="date"
                          value={dummyForm.multiLeg1Date}
                          onChange={(e) => setDummyForm({ ...dummyForm, multiLeg1Date: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Flight 2: From</label>
                        <select
                          value={dummyForm.multiLeg2From}
                          onChange={(e) => setDummyForm({ ...dummyForm, multiLeg2From: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs font-semibold"
                        >
                          {popularAirports.map(ap => <option key={ap.code} value={ap.name}>{ap.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Flight 2: To</label>
                        <select
                          value={dummyForm.multiLeg2To}
                          onChange={(e) => setDummyForm({ ...dummyForm, multiLeg2To: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs font-semibold"
                        >
                          {popularAirports.map(ap => <option key={ap.code} value={ap.name}>{ap.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Departure Date</label>
                        <input
                          type="date"
                          value={dummyForm.multiLeg2Date}
                          onChange={(e) => setDummyForm({ ...dummyForm, multiLeg2Date: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-medium"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Full-width Primary CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark py-4 px-6 rounded-xl text-base font-black shadow-lg hover:shadow-brand-yellow/30 transition-all duration-200 active:scale-[0.99] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-brand-dark" />
                    <span>Get Quote on WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-500 font-medium">
                    <span>⚡ 15-30 Min Delivery</span>
                    <span>•</span>
                    <span>✓ Live Airline PNR Code</span>
                    <span>•</span>
                    <span>🔒 Verifiable Void Ticket</span>
                  </div>
                </div>

              </form>
            )}

            {/* TAB 4: DOCUMENTATION */}
            {activeTab === 'documentation' && (
              <form onSubmit={handleDocSubmit} className="space-y-4 sm:space-y-6 w-full max-w-full">
                
                {/* Pill-Shaped Radio Option Buttons (OK to Board, POE Emigration, Hotel Voucher) */}
                <div className="flex flex-wrap items-center gap-2 pb-3 sm:pb-4 border-b border-slate-100 w-full max-w-full">
                  {['OK to Board (OTB)', 'POE Emigration', 'Hotel Voucher'].map((option) => {
                    const isSelected = docSubOption === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setDocSubOption(option)}
                        className={`rounded-full border-2 px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'border-brand-navy bg-brand-navy/10 text-brand-navy shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-brand-navy' : 'border-slate-300'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-navy" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}

                  <div className="ml-auto hidden md:flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full font-semibold border border-emerald-200">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span>Authorized Airline & Emigration Assistance</span>
                  </div>
                </div>

                {/* Form Inputs based on selected pill */}
                {docSubOption === 'OK to Board (OTB)' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Operating Airline</label>
                      <select
                        value={docForm.airline}
                        onChange={(e) => setDocForm({ ...docForm, airline: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800"
                      >
                        <option value="Air India Express">Air India Express</option>
                        <option value="IndiGo">IndiGo</option>
                        <option value="SpiceJet">SpiceJet</option>
                        <option value="FlyDubai">FlyDubai</option>
                        <option value="Air Arabia">Air Arabia</option>
                        <option value="Akasa Air">Akasa Air</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Destination</label>
                      <select
                        value={docForm.destination}
                        onChange={(e) => setDocForm({ ...docForm, destination: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800"
                      >
                        <option value="UAE (Dubai / Sharjah / Abu Dhabi)">UAE (Dubai / Sharjah / Abu Dhabi)</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Oman">Oman</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Bahrain">Bahrain</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Flight Date</label>
                      <input
                        type="date"
                        value={docForm.flightDate}
                        onChange={(e) => setDocForm({ ...docForm, flightDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Ticket PNR Reference</label>
                      <input
                        type="text"
                        placeholder="e.g. ABC123"
                        value={docForm.pnrRef}
                        onChange={(e) => setDocForm({ ...docForm, pnrRef: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>
                )}

                {docSubOption === 'POE Emigration' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Employment Destination</label>
                      <select
                        value={docForm.poeCountry}
                        onChange={(e) => setDocForm({ ...docForm, poeCountry: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800"
                      >
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="United Arab Emirates (UAE)">United Arab Emirates (UAE)</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Oman">Oman</option>
                        <option value="Malaysia">Malaysia</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Passport Status</label>
                      <div className="w-full bg-slate-100 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-700">
                        ECR (Emigration Check Required)
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Job Trade / Category</label>
                      <input
                        type="text"
                        placeholder="e.g. Technician, Driver, Hospitality"
                        value={docForm.poeTrade}
                        onChange={(e) => setDocForm({ ...docForm, poeTrade: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>
                )}

                {docSubOption === 'Hotel Voucher' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Destination City</label>
                      <input
                        type="text"
                        value={docForm.hotelCity}
                        onChange={(e) => setDocForm({ ...docForm, hotelCity: e.target.value })}
                        placeholder="e.g. Dubai, Paris, Makkah"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Check-in Date</label>
                      <input
                        type="date"
                        value={docForm.flightDate}
                        onChange={(e) => setDocForm({ ...docForm, flightDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Duration</label>
                      <select
                        value={docForm.hotelNights}
                        onChange={(e) => setDocForm({ ...docForm, hotelNights: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800"
                      >
                        <option value="3 Nights">3 Nights</option>
                        <option value="5 Nights">5 Nights</option>
                        <option value="7 Nights">7 Nights</option>
                        <option value="14 Nights">14 Nights</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Guests & Rooms</label>
                      <select
                        value={docForm.hotelGuests}
                        onChange={(e) => setDocForm({ ...docForm, hotelGuests: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800"
                      >
                        <option value="1 Guest, 1 Room">1 Guest, 1 Room</option>
                        <option value="2 Adults, 1 Room">2 Adults, 1 Room</option>
                        <option value="Family, 2 Rooms">Family, 2 Rooms</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Full-width CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark py-4 px-6 rounded-xl text-base font-black shadow-lg hover:shadow-brand-yellow/30 transition-all duration-200 active:scale-[0.99] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-brand-dark" />
                    <span>Get Quote on WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                    Direct assistance for urgent airline boarding clearance and embassy verification.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Bottom Fast Trust Signals Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6 text-slate-200 text-xs w-full max-w-full">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-2.5 sm:px-3 py-2 rounded-xl min-w-0">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span className="truncate">Verifiable PNRs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-2.5 sm:px-3 py-2 rounded-xl min-w-0">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span className="truncate">35 Countries &amp; Clearances</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-2.5 sm:px-3 py-2 rounded-xl min-w-0">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span className="truncate">15–30 Min Turnaround</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-2.5 sm:px-3 py-2 rounded-xl min-w-0">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
              <span className="truncate">24x7 WhatsApp Advisory</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
