import React, { useState } from 'react';
import { Search, Globe2, ArrowRight, CheckCircle2, Compass, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { ALL_DESTINATIONS } from '../data/aiaData';

interface StudyAbroadPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string, destId?: string) => void;
}

export const StudyAbroadPage: React.FC<StudyAbroadPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = ['All', 'Europe', 'North America', 'Asia & Middle East', 'Oceania'];

  const filtered = ALL_DESTINATIONS.filter((d) => {
    const matchesRegion = selectedRegion === 'All' || d.region === selectedRegion;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.popularCourses.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      d.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6 md:py-10">
      {/* Header Banner in Bright Clean University Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-7 sm:p-10 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <Globe2 className="w-4 h-4 text-[#d71920]" />
              <span>Global Education</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Study Abroad Destinations
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              University admissions, scholarship evaluations, and student visa guidance across 17 countries.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('study-abroad')}
                className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/20"
              >
                Book Admissions Consultation
              </button>
              <a
                href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20am%20interested%20in%20studying%20abroad."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-950/20 backdrop-blur-md cursor-pointer"
              >
                WhatsApp Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white border border-slate-200/90 shadow-sm p-2 rounded-2xl">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#d71920] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {region} {region === 'All' ? `(${ALL_DESTINATIONS.length})` : ''}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or course..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white"
            />
          </div>
        </div>

        {/* 17 Destinations Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onNavigate('destination-detail', dest.id)}
              className="liquid-glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-2.5 left-2.5 text-xl p-1 bg-white/90 backdrop-blur-md rounded-lg shadow-xs">
                  {dest.flag}
                </span>
                <span className="absolute bottom-2.5 left-3 text-white text-base font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  {dest.name}
                </span>
                <span className="absolute bottom-2.5 right-3 text-white/90 text-[11px] font-semibold drop-shadow">
                  {dest.region}
                </span>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {dest.tagline}
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5">
                    <span className="font-semibold text-slate-800">Fields: </span>
                    {dest.popularCourses.slice(0, 3).join(', ')}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#d71920]">
                  <span>Destination Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AIA 5-Step Admissions Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Admissions Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Step-by-step guidance from initial consultation to campus enrollment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {[
            {
              step: '01',
              title: 'Profile Assessment',
              desc: 'Academic records review, English readiness check, and budget planning.',
            },
            {
              step: '02',
              title: 'University Selection',
              desc: 'Shortlisting accredited institutions and available scholarship options.',
            },
            {
              step: '03',
              title: 'Application Filing',
              desc: 'Preparation of Statement of Purpose (SOP) and transcript submissions.',
            },
            {
              step: '04',
              title: 'Visa & Documentation',
              desc: 'Financial audit, Genuine Student criteria review, and visa filing.',
            },
            {
              step: '05',
              title: 'Pre-Departure',
              desc: 'Briefing on accommodation, currency transfers, and student arrival.',
            },
          ].map((s, idx) => (
            <div key={idx} className="liquid-glass-card p-4 rounded-2xl space-y-1.5">
              <span className="text-xs font-extrabold text-[#d71920]">{s.step}</span>
              <h3 className="text-xs font-bold text-slate-900">{s.title}</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">
                Book a consultation with an AIA advisor
              </p>
              <p className="text-[11px] text-slate-500">
                Available at Colombo 04, Kandy, or online.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenConsultation('study-abroad')}
            className="liquid-glass-red py-2 px-5 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            Schedule Assessment
          </button>
        </div>
      </section>
    </div>
  );
};
