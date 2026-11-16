import Link from 'next/link';
import Image from 'next/image';
import { countries } from '@/data/countries';
import { ArrowRight, Globe2, ShieldCheck, Check } from 'lucide-react';

export default function PopularVisasSection() {
  // Grab the popular destinations specified
  const popularCountries = countries.filter(c => [
    'thailand', 'uae', 'saudi-arabia', 'vietnam', 
    'singapore', 'malaysia', 'indonesia', 'turkey', 
    'azerbaijan', 'schengen', 'united-kingdom', 'united-states'
  ].includes(c.id));

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Visa Desk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Popular Visa Destinations
            </h2>
            <p className="text-base text-brand-muted">
              Select your intended destination to explore tourist and business visa requirements, processing times, and apply with expert assistance.
            </p>
          </div>

          <Link
            href="/visas"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all shadow-md self-start md:self-auto shrink-0"
          >
            <span>View All 30+ Countries</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow" />
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularCountries.map((country) => (
            <Link
              key={country.id}
              href={`/visas/${country.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-brand-yellow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Country Image */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={country.cardImage}
                  alt={country.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/85 via-brand-navy-dark/30 to-transparent" />
                
                {/* Flag and Region Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xl drop-shadow-md">{country.flag}</span>
                  <span className="bg-white/90 backdrop-blur-sm text-brand-dark font-medium text-[11px] px-2.5 py-0.5 rounded-full shadow-sm">
                    {country.region}
                  </span>
                </div>

                {/* Country Name overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug drop-shadow-sm">
                    {country.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                  {country.highlight || country.overview}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-navy group-hover:text-brand-yellow-dark">
                  <span>Explore Visa Types & Docs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-navy shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-navy" />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-dark">Don't see your destination listed here?</h4>
              <p className="text-sm text-brand-muted">We process tourist and commercial visas for more than 30 destinations worldwide.</p>
            </div>
          </div>
          <Link
            href="/visas"
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shrink-0 text-center"
          >
            Browse Full Country Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
