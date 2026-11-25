'use client';

import { useState } from 'react';
import AirportSelect from './AirportSelect';
import { validateDummyTicketForm } from '@/lib/validation';
import { buildWhatsAppUrl, formatDummyTicketMessage } from '@/lib/whatsapp';
import { Plane, Calendar, Users, Send, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DummyTicketForm() {
  const [tripType, setTripType] = useState('round'); // 'one' or 'round'
  const [formData, setFormData] = useState({
    fromAirport: 'DEL',
    toAirport: 'DXB',
    departureDate: '',
    returnDate: '',
    passengers: '1',
    fullName: '',
    whatsapp: '',
    email: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Set min dates for HTML date picker
  const todayStr = new Date().toISOString().split('T')[0];

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    // Clear field-specific error on change
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToValidate = { ...formData, tripType };
    const { isValid, errors: validationErrors } = validateDummyTicketForm(dataToValidate);

    if (!isValid) {
      setErrors(validationErrors);
      // scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setErrors({});
    
    // Build WhatsApp message
    const message = formatDummyTicketMessage(dataToValidate);
    const url = buildWhatsAppUrl(message);

    setSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Form Top Banner */}
      <div className="bg-brand-navy p-6 sm:p-8 text-white space-y-2 border-b border-brand-navy-light">
        <div className="flex items-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-wider">
          <Plane className="w-4 h-4" />
          <span>Embassy & Visa Compliant</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Book Verifiable Flight Itinerary
        </h2>
        <p className="text-slate-300 text-sm">
          Get authentic flight reservation documentation for visa application, immigration clearance, or travel proof.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Trip Type Selector */}
        <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Trip Type:</label>
          <div className="inline-flex rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => {
                setTripType('round');
                handleInputChange('returnDate', '');
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                tripType === 'round'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-dark'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setTripType('one')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                tripType === 'one'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-dark'
              }`}
            >
              One Way
            </button>
          </div>
        </div>

        {/* Airport Search Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AirportSelect
            id="fromAirport"
            label="Departure City / Airport"
            value={formData.fromAirport}
            onChange={(val) => handleInputChange('fromAirport', val)}
            placeholder="Select departure airport"
            error={errors.fromAirport}
          />

          <AirportSelect
            id="toAirport"
            label="Destination City / Airport"
            value={formData.toAirport}
            onChange={(val) => handleInputChange('toAirport', val)}
            placeholder="Select destination airport"
            error={errors.toAirport}
          />
        </div>

        {/* Dates and Passengers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Departure Date */}
          <div className="space-y-1.5" id="departureDate">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              Departure Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                min={todayStr}
                value={formData.departureDate}
                onChange={(e) => handleInputChange('departureDate', e.target.value)}
                className={`w-full bg-white border rounded-xl px-3.5 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
                  errors.departureDate ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.departureDate && (
              <p className="text-xs text-red-600 font-medium">{errors.departureDate}</p>
            )}
          </div>

          {/* Return Date (only for round trip) */}
          {tripType === 'round' ? (
            <div className="space-y-1.5" id="returnDate">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Return Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={formData.departureDate || todayStr}
                  value={formData.returnDate}
                  onChange={(e) => handleInputChange('returnDate', e.target.value)}
                  className={`w-full bg-white border rounded-xl px-3.5 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
                    errors.returnDate ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
              </div>
              {errors.returnDate && (
                <p className="text-xs text-red-600 font-medium">{errors.returnDate}</p>
              )}
            </div>
          ) : (
            <div className="space-y-1.5 opacity-40 pointer-events-none hidden sm:block">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide">
                Return Date
              </label>
              <input
                type="text"
                disabled
                placeholder="Not required (One Way)"
                className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-400"
              />
            </div>
          )}

          {/* Number of Passengers */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              Passengers
            </label>
            <div className="relative">
              <select
                value={formData.passengers}
                onChange={(e) => handleInputChange('passengers', e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Passenger' : 'Passengers'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Passenger Contact Details */}
        <div className="pt-4 border-t border-slate-100 space-y-4">
          <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider">
            Applicant & Delivery Contact
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="space-y-1.5" id="fullName">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Full Name (As in Passport) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full bg-white border rounded-xl px-3.5 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
                  errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-1.5" id="whatsapp">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 8750737086"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className={`w-full bg-white border rounded-xl px-3.5 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
                  errors.whatsapp ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                }`}
              />
              {errors.whatsapp && (
                <p className="text-xs text-red-600 font-medium">{errors.whatsapp}</p>
              )}
            </div>

            <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="e.g. traveler@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              Additional Requirements or Preferred Airlines <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Prefer Emirates or Qatar Airways route, multi-passenger names, specific layover city..."
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
            />
          </div>
        </div>

        {/* Clear Legal Disclaimer (Strict Requirement) */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Important Notice & Disclaimer:</strong>
            <p className="mt-0.5">
              A void ticket is a flight itinerary reservation held exclusively for visa application documentation, embassy interviews, and travel proof. It is NOT a confirmed paid passenger ticket and cannot be used to board an aircraft.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold text-base py-4 px-6 rounded-2xl shadow-lg hover:shadow-brand-yellow/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Send className="w-5 h-5 fill-brand-dark" />
            <span>Book Now via WhatsApp</span>
          </button>
          <p className="text-center text-xs text-slate-400 mt-2.5">
            Your details are converted into a structured message and delivered directly to our reservation desk.
          </p>
        </div>

        {submitted && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Opening WhatsApp with your flight requirements... If your browser blocked the popup, check WhatsApp on your device.</span>
          </div>
        )}
      </form>
    </div>
  );
}
