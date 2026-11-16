import { CheckCircle2, ShieldCheck, Headphones, Layers, Globe, Sparkles } from 'lucide-react';

export default function WhyChooseUsSection() {
  const points = [
    {
      icon: Layers,
      title: "Multiple Travel Services Under One Roof",
      description: "From dummy tickets and visa paperwork to curated holiday itineraries and OTB clearance, manage your entire travel workflow with a single trusted partner.",
    },
    {
      icon: Globe,
      title: "Assistance Across 30+ Visa Destinations",
      description: "Extensive knowledge of consular requirements, e-visa protocols, and document specifications for Asia, Middle East, Europe, and the Americas.",
    },
    {
      icon: CheckCircle2,
      title: "Simple & Transparent Process",
      description: "No confusing bureaucratic jargon. We clearly outline document checklists, timelines, and guidelines before you start your application.",
    },
    {
      icon: Headphones,
      title: "Dedicated Customer Support",
      description: "Real-time communication via WhatsApp and direct calling. Our travel specialists assist you step-by-step from requirement gathering to departure.",
    },
    {
      icon: Sparkles,
      title: "Personalised Travel Assistance",
      description: "Tailored flight route options, custom holiday itineraries, and personalized documentation review matching your unique travel itinerary.",
    },
    {
      icon: ShieldCheck,
      title: "Professional & Ethical Advisory",
      description: "We provide honest, realistic timelines and legitimate reservation vouchers without making misleading claims or false guarantees.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider">
            <span>Why Choose Horizon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built on Reliability, Clarity, and Personalized Care
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Planning international travel shouldn't be stressful. Here is why travelers, families, and corporate executives choose Horizon Tourism & Visas Co.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, index) => {
            const Icon = pt.icon;
            return (
              <div
                key={index}
                className="bg-brand-navy-dark/70 border border-white/10 hover:border-brand-yellow/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow mb-5 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-yellow transition-colors">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
