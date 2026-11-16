'use client';

import { useState, useRef, useEffect } from 'react';
import { airports } from '@/data/airports';
import { Plane, Search, X, MapPin } from 'lucide-react';

export default function AirportSelect({ label, value, onChange, placeholder, error, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAirports = airports.filter((airport) => {
    const term = searchTerm.toLowerCase();
    return (
      airport.code.toLowerCase().includes(term) ||
      airport.city.toLowerCase().includes(term) ||
      airport.country.toLowerCase().includes(term) ||
      airport.name.toLowerCase().includes(term)
    );
  }).slice(0, 10); // show top 10 matches for fast scrolling

  const selectedAirport = airports.find((a) => a.code === value);

  const handleSelect = (airport) => {
    onChange(airport.code);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
    setSearchTerm('');
  };

  return (
    <div className="relative space-y-1.5" ref={wrapperRef}>
      <label htmlFor={id} className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
        {label} <span className="text-red-500">*</span>
      </label>

      {/* Input box displaying selected value or placeholder */}
      <div
        id={id}
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border rounded-xl px-3.5 py-3 text-left cursor-pointer flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
          error ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          <Plane className="w-4 h-4 text-brand-navy shrink-0" />
          {selectedAirport ? (
            <div className="truncate text-sm">
              <span className="font-extrabold text-brand-navy mr-1.5 bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                {selectedAirport.code}
              </span>
              <span className="font-semibold text-brand-dark">{selectedAirport.city}</span>
              <span className="text-slate-400 text-xs ml-1.5">({selectedAirport.country})</span>
            </div>
          ) : (
            <span className="text-slate-400 text-sm">{placeholder || 'Search city or airport code'}</span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {selectedAirport && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <Search className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

      {/* Autocomplete Dropdown List */}
      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in duration-150">
          {/* Search box inside dropdown */}
          <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type city (e.g. Dubai, London, Delhi) or code..."
              className="w-full bg-transparent text-sm focus:outline-none text-brand-dark placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-slate-400 hover:text-slate-600 text-xs px-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results list */}
          <div className="max-h-60 overflow-y-auto divide-y divide-slate-100">
            {filteredAirports.length > 0 ? (
              filteredAirports.map((airport) => (
                <div
                  key={airport.code}
                  onClick={() => handleSelect(airport)}
                  className="p-3 hover:bg-slate-50 cursor-pointer flex items-center justify-between text-left transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-dark">{airport.city}</span>
                        <span className="text-xs text-slate-500 font-normal">{airport.country}</span>
                      </div>
                      <p className="text-xs text-slate-400 truncate max-w-[240px] sm:max-w-xs">{airport.name}</p>
                    </div>
                  </div>
                  <span className="font-extrabold text-brand-navy bg-slate-100 px-2 py-1 rounded text-xs">
                    {airport.code}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-slate-500">
                No matching airports found. Try city or country name.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
