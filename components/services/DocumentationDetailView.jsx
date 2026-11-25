'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  PlaneTakeoff, FileCheck, Building2, ShieldCheck, 
  Clock, ArrowRight, MessageCircle, AlertTriangle, CheckCircle2 
} from 'lucide-react';
import { buildWhatsAppUrl, formatDocumentationMessage } from '@/lib/whatsapp';

export default function DocumentationDetailView({ service }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    passportNumber: '',
    remarks: '',
  });

  const iconMap = {
    PlaneTakeoff,
    FileCheck,
    Building2,
    ShieldCheck,
  };

  const Icon = iconMap[service.iconName] || ShieldCheck;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = formatDocumentationMessage({
      serviceTitle: service.title,
      travelerName: formData.name,
      phone: formData.phone,
      passportNumber: formData.passportNumber,
      remarks: formData.remarks || `I require assistance with ${service.title}. Please guide me on next steps.`,
    });
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12">
      {/* Top Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Information Section (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy-dark/40 to-transparent" />
            <div className="absolute top-4 left-4 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {service.badge}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-dark flex items-center justify-center shadow-lg shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {service.title}
              </h1>
            </div>
          </div>

          {/* Overview text */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-brand-dark">About This Service</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.overview}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-bold text-brand-navy">
              <Clock className="w-4 h-4 text-brand-yellow-dark" />
              <span>Standard Turnaround: {service.turnaroundTime}</span>
            </div>
          </div>
        </div>

        {/* Right Application Form (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow-dark">
              Fast Track Processing
            </span>
            <h2 className="text-xl font-extrabold text-brand-dark">
              Apply for {service.title}
            </h2>
            <p className="text-xs text-brand-muted">
              Submit your preliminary details to initiate clearance with our documentation team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Full Name (As in Passport) *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                WhatsApp Contact Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 8750737086"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Passport / Ticket Reference (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Passport number or Flight PNR"
                value={formData.passportNumber}
                onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Specific Notes or Travel Date
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Flight scheduled on Friday, need urgent OTB clearance..."
                value={formData.remarks}
                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-brand-dark" />
              <span>Apply Now on WhatsApp</span>
            </button>
          </form>
        </div>
      </div>

      {/* Step by Step Process */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-brand-dark">Application & Verification Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.process?.map((p) => (
            <div key={p.step} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-brand-navy text-brand-yellow font-black text-xs flex items-center justify-center">
                0{p.step}
              </span>
              <h3 className="font-bold text-sm text-brand-dark">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Document Requirements Checklist */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-brand-dark">Required Documents</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          {service.requirements?.map((req, idx) => (
            <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Important Advisory */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Important Notice:</strong>
          <p className="mt-1">{service.importantNotes}</p>
        </div>
      </div>
    </div>
  );
}
