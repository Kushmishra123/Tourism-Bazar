import ContactForm from '@/components/forms/ContactForm';
import { buildMetadata } from '@/lib/seo';
import { WHATSAPP_CONFIG } from '@/lib/whatsapp';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Compass } from 'lucide-react';

export const metadata = buildMetadata({
  title: "Contact Us | Horizon Tourism & Visas Co.",
  description: "Get in touch with Horizon Tourism & Visas Co. for flight itinerary bookings, visa consultations, holiday planning, and airport documentation assistance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Connect With Our Team</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Contact Horizon Tourism & Visas Co.
          </h1>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Have questions about your travel itinerary, visa documentation requirements, or holiday tour bookings? We are here to help.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider">
                  Direct Support Desk
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-1">
                  We're Here For You
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Connect with our dedicated travel experts directly on WhatsApp or voice call during business hours.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp & Telephone</span>
                    <span className="font-bold text-white text-base">{WHATSAPP_CONFIG.displayNumber}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email Enquiries</span>
                    <span className="font-bold text-white">{WHATSAPP_CONFIG.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Operating Hours</span>
                    <span className="font-bold text-white">{WHATSAPP_CONFIG.businessHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Corporate Office Location</span>
                    <span className="font-bold text-white">{WHATSAPP_CONFIG.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                <span>Transparent Consulting • Quick Response</span>
              </div>
            </div>

            {/* Fast Assistance Widget */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-brand-dark text-sm">Need an Urgent Dummy Ticket?</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                If your embassy appointment is tomorrow, use our specialized Dummy Ticket portal for fast 30-minute delivery.
              </p>
              <a
                href="/dummy-ticket"
                className="inline-block text-xs font-bold text-brand-navy hover:text-brand-yellow-dark underline decoration-brand-yellow decoration-2"
              >
                Go to Dummy Ticket Portal →
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
