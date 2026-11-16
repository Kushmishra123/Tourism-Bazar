import { MousePointerClick, MessageSquareText, UserCheck, CheckCircle } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: MousePointerClick,
      title: "Choose Your Service",
      description: "Select from dummy tickets, international visa assistance, holiday tour packages, or travel documentation.",
    },
    {
      step: "02",
      icon: MessageSquareText,
      title: "Share Your Requirements",
      description: "Fill our simple enquiry form or message our desk with your route, dates, and passport travel details.",
    },
    {
      step: "03",
      icon: UserCheck,
      title: "Get Expert Assistance",
      description: "Our travel specialist reviews your paperwork, prepares verified flight itineraries, and advises on consular criteria.",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Proceed With Your Application",
      description: "Receive your embassy-compliant documents, booking confirmations, or visas ready for your departure.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            How It Works in 4 Simple Steps
          </h2>
          <p className="text-base text-brand-muted">
            We eliminate complicated paperwork and lengthy bureaucratic delays with our streamlined, customer-first service flow.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-yellow shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 tracking-tighter">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-yellow-dark">
                  <span>Step {item.step} of 04</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
