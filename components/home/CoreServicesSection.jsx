import Link from 'next/link';
import Image from 'next/image';
import { Plane, Globe2, Palmtree, FileText, ArrowRight } from 'lucide-react';

export default function CoreServicesSection() {
  const services = [
    {
      id: "visas",
      icon: Globe2,
      title: "Visa Services",
      tag: "29+ Countries",
      description: "Explore tourist and business visa assistance and electronic clearance services across 29+ international destinations.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Visas",
      href: "/visas",
      points: ["Tourist, Business & E-Visa categories", "Document review & check", "Consular & Express processing"],
    },
    {
      id: "holidays",
      icon: Palmtree,
      title: "Holiday Packages",
      tag: "Custom Tours & Umrah",
      description: "Discover memorable holiday experiences, international tours, domestic destinations and Umrah packages.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Holidays",
      href: "/holidays",
      points: ["Umrah packages in Makkah & Madinah", "Curated day-wise itineraries", "Hand-picked hotel stays"],
    },
    {
      id: "void-ticket",
      icon: Plane,
      title: "Void Ticket",
      tag: "Flight Itinerary",
      description: "Get assistance with flight itinerary and void ticket requirements for your travel documentation.",
      image: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=800&auto=format&fit=crop",
      cta: "Book Void Ticket",
      href: "/void-ticket",
      points: ["Verifiable reservation codes", "Embassy & VFS compliant", "Fast delivery on WhatsApp"],
    },
    {
      id: "documentation",
      icon: FileText,
      title: "Documentation",
      tag: "Travel Clearance",
      description: "Get assistance with OK to Board, POE Emigration, hotel bookings and other travel documentation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Documentation",
      href: "/documentation",
      points: ["OK to Board (OTB) clearance", "POE Emigration assistance", "Hotel vouchers & insurance"],
    },
  ];

  return (
    <section id="core-services" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <span>Core Travel Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Comprehensive Travel Solutions Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Whether you need a verified flight itinerary for your embassy appointment, end-to-end visa application assistance, custom holidays, or essential travel clearances.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 hover:border-brand-yellow/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Image Container with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3.5 left-3.5 bg-brand-navy/90 backdrop-blur-sm text-brand-yellow text-xs font-bold px-3 py-1 rounded-full border border-brand-yellow/30">
                    {service.tag}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-brand-yellow text-brand-dark flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-navy transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Quick bullet points */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      {service.points.map((pt, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3">
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-between w-full bg-slate-50 hover:bg-brand-yellow text-brand-navy hover:text-brand-dark font-bold px-4 py-3 rounded-xl text-sm transition-all duration-200 border border-slate-200/80 group-hover:border-brand-yellow/50 shadow-sm"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
