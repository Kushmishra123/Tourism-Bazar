'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { countries } from '@/data/countries';
import { Search, Globe2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CountryDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = [
    'All',
    'Middle East',
    'Southeast Asia',
    'South Asia',
    'Central Asia',
    'East Asia',
    'Africa',
    'Americas',
    'East Asia / Eurasia',
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = 
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.overview.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = 
      selectedRegion === 'All' || 
      country.region.toLowerCase().includes(selectedRegion.toLowerCase());

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="space-y-8">
      {/* Controls Bar: Search & Region Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destination country (e.g. Thailand, Dubai, France, Japan, United Kingdom)..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow/60 transition-all placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-200 px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Region Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
          <span className="font-bold text-slate-500 mr-1 shrink-0">Region:</span>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-full font-semibold shrink-0 transition-all cursor-pointer ${
                selectedRegion === region
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-brand-muted px-1">
        <span>Showing <strong className="text-brand-dark font-bold">{filteredCountries.length}</strong> destination countries</span>
        <span>Click any country to view visa categories & document checklists</span>
      </div>

      {/* Directory Grid */}
      {filteredCountries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <Link
              key={country.id}
              href={`/visas/${country.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-brand-yellow/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={country.cardImage}
                  alt={country.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy-dark/30 to-transparent" />
                
                {/* Flag and Region */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xl drop-shadow">{country.flag}</span>
                  <span className="bg-white/90 backdrop-blur-sm text-brand-dark font-medium text-[11px] px-2 py-0.5 rounded-full">
                    {country.region}
                  </span>
                </div>

                {/* Country Name */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-tight">
                    {country.name}
                  </h3>
                </div>
              </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {country.highlight || country.overview}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-navy group-hover:text-brand-yellow-dark">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {country.visas?.filter((v) => v.category !== 'service').length > 0 && (
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium">
                          {country.visas.filter((v) => v.category !== 'service').length} Visas
                        </span>
                      )}
                      {country.visas?.filter((v) => v.category === 'service').length > 0 && (
                        <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-[11px] font-bold">
                          +{country.visas.filter((v) => v.category === 'service').length} Clearances
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
          <Globe2 className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-brand-dark">No countries match your search</h3>
          <p className="text-sm text-brand-muted">Try clearing your search keyword or switching region filters.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedRegion('All');
            }}
            className="mt-2 bg-brand-navy text-white text-xs font-bold px-4 py-2 rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
