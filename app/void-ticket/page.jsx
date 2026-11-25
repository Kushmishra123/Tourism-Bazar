import DummyTicketForm from '@/components/forms/DummyTicketForm';
import { buildMetadata } from '@/lib/seo';
import { Plane, CheckCircle2, ShieldCheck, Clock, FileCheck2, HelpCircle } from 'lucide-react';

export const metadata = buildMetadata({
  title: "Void Ticket for Visa | Verifiable Flight Itinerary Assistance",
  description: "Get verifiable flight reservation itineraries and void tickets for tourist and business visa applications. Embassy compliant, fast delivery on WhatsApp.",
  path: "/void-ticket",
});

export default function VoidTicketPage() {
  const benefits = [
    {
      title: "Verifiable Reservation",
      desc: "Our itineraries carry genuine airline reservation codes (PNR) verifiable on official airline portals.",
      icon: CheckCircle2,
    },
    {
      title: "Embassy & VFS Compliant",
      desc: "Accepted by Schengen, US, UK, Canada, Australia, and Asian visa application centers.",
      icon: ShieldCheck,
    },
    {
      title: "Fast Turnaround",
      desc: "Receive your PDF flight itinerary directly on WhatsApp within 30 to 60 minutes of submission.",
      icon: Clock,
    },
    {
      title: "No Risk of Expensive Tickets",
      desc: "Protect yourself from heavy airline cancellation penalties if your visa application is delayed or refused.",
      icon: FileCheck2,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <Plane className="w-3.5 h-3.5 text-brand-navy" />
            <span>Flight Itinerary Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Void Ticket for Visa Application
          </h1>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Obtain a genuine, verifiable flight reservation for your embassy appointment or visa submission without paying the full cost of an unconfirmed air ticket.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-brand-dark">{b.title}</h2>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <DummyTicketForm />
        </div>

        {/* Informative Guidance Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <HelpCircle className="w-6 h-6 text-brand-navy" />
            <h2 className="text-xl font-bold text-brand-dark">
              Frequently Asked Questions About Void Tickets
            </h2>
          </div>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div>
              <h3 className="font-bold text-brand-navy mb-1">
                Why do embassies ask for a round-trip flight reservation?
              </h3>
              <p>
                Consulates and visa processing centers mandate proof of travel dates to verify that you have a planned departure and return date, ensuring you do not intend to overstay your visa duration in the destination country.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-navy mb-1">
                Is this void ticket safe for VFS and Embassy appointments?
              </h3>
              <p>
                Yes. Embassies explicitly recommend in their official visa checklists NOT to purchase non-refundable airline tickets before visa approval. They require a verifiable flight reservation or travel itinerary, which is precisely what our service supplies.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-brand-navy mb-1">
                How long does the flight reservation stay active?
              </h3>
              <p>
                Standard reservations remain active in the Global Distribution System (GDS) for up to 7 to 14 days, which is typically sufficient for consular verification during initial processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
