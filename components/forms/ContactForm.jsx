'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/validation';
import { buildWhatsAppUrl, formatGeneralEnquiryMessage } from '@/lib/whatsapp';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Travel Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
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
    const { isValid, errors: validationErrors } = validateContactForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const message = formatGeneralEnquiryMessage(formData);
    const url = buildWhatsAppUrl(message);

    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
      <div className="space-y-1 pb-2 border-b border-slate-100">
        <h2 className="text-xl font-bold text-brand-dark">Send Us an Enquiry</h2>
        <p className="text-xs text-brand-muted">
          Fill the form below to connect instantly with our support team on WhatsApp.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
              errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              WhatsApp / Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
                errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
              }`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="e.g. user@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Service Topic
          </label>
          <select
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
          >
            <option value="Dummy Ticket / Flight Itinerary">Dummy Ticket / Flight Itinerary</option>
            <option value="Tourist Visa Assistance">Tourist Visa Assistance</option>
            <option value="Business Visa Assistance">Business Visa Assistance</option>
            <option value="Umrah Package Planning">Umrah Package Planning</option>
            <option value="Holiday Tour Package">Holiday Tour Package</option>
            <option value="OK to Board (OTB) Clearance">OK to Board (OTB) Clearance</option>
            <option value="POE Emigration Assistance">POE Emigration Assistance</option>
            <option value="Other Travel Services">Other Travel Services</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Your Requirements / Questions <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Please detail your travel route, intended travel dates, or specific visa documentation questions..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`w-full bg-slate-50 border rounded-xl p-4 text-sm text-brand-dark transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
              errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
            }`}
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold text-base py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
      >
        <MessageCircle className="w-5 h-5 fill-brand-dark" />
        <span>Continue on WhatsApp</span>
      </button>

      {submitted && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Opening WhatsApp... Connecting you directly with a travel specialist.</span>
        </div>
      )}
    </form>
  );
}
