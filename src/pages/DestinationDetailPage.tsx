import React from 'react';
import { ArrowLeft, CheckCircle2, Clock, Briefcase, GraduationCap, Globe2, ShieldCheck, MessageCircle, Calendar } from 'lucide-react';
import { PageId, Destination } from '../types';
import { ALL_DESTINATIONS } from '../data/aiaData';

interface DestinationDetailPageProps {
  destinationId: string;
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string, destId?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destinationId,
  onNavigate,
  onOpenConsultation,
}) => {
  const destination: Destination =
    ALL_DESTINATIONS.find((d) => d.id === destinationId) || ALL_DESTINATIONS[0];

  return (
    <div className="space-y-12 py-8 md:py-12">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('study-abroad')}
          className="bg-white hover:bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-full inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#d71920]" />
          <span>Back to All 17 Destinations</span>
        </button>
      </div>

      {/* Hero Banner for Destination with Bright Vivid Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-center p-8 sm:p-12 shadow-xl border border-slate-200/80 bg-slate-900">
          {/* Background image: Bright, crisp and vibrant */}
          <img
            src={destination.image}
            alt={`${destination.name} campus and scenery`}
            className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-102"
          />
          {/* Subtle directional text overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-semibold text-[#ff4d4f] border border-white/20 uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-[#ff4d4f]" />
                <span>{destination.region}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl sm:text-5xl">{destination.flag}</span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Study in {destination.name}
                </h1>
              </div>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                {destination.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('study-abroad', destination.id)}
                className="liquid-glass-red py-3 px-6 text-white rounded-full text-xs font-bold transition-all text-center cursor-pointer shadow-lg shadow-red-950/30"
              >
                Apply for {destination.name}
              </button>
              <a
                href={`https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20am%20interested%20in%20studying%20in%20${encodeURIComponent(
                  destination.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-950/20 backdrop-blur-md text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Overview, Highlights, Work Rights, Intakes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="liquid-glass-card rounded-3xl p-7 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                About Studying in {destination.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {destination.overview}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#d71920] mb-3">
                  Key Advantages for Sri Lankan Students
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Popular Programs */}
            <div className="liquid-glass-card rounded-3xl p-7 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d71920] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#d71920]" />
                <span>Academic Streams</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                High-Demand Fields of Study in {destination.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {destination.popularCourses.map((c, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d71920]"></span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Entry Requirements & Post Study */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="liquid-glass-card rounded-3xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-[#d71920]" />
                  <span>Academic & Language Entry Criteria</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {destination.academicRequirements}
                </p>
              </div>

              <div className="liquid-glass-card rounded-3xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Briefcase className="w-4 h-4 text-[#d71920]" />
                  <span>Post-Study Work & Career Avenues</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {destination.postStudyOptions}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Snapshot */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 space-y-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <h3 className="text-base font-bold text-slate-900">
                {destination.name} Snapshot
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d71920]" />
                    Major Intakes
                  </p>
                  <p className="text-slate-600 pl-5">{destination.intakes.join(', ')}</p>
                </div>

                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#d71920]" />
                    Student Working Rights
                  </p>
                  <p className="text-slate-600 pl-5 leading-relaxed">{destination.workRights}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => onOpenConsultation('study-abroad', destination.id)}
                  className="w-full liquid-glass-red py-3 px-4 text-white rounded-full text-xs font-bold transition-all text-center cursor-pointer shadow-md"
                >
                  Book Free Consultation for {destination.name}
                </button>
                <p className="text-[11px] text-slate-500 text-center">
                  Counselling sessions at Colombo 04 or Kandy branches.
                </p>
              </div>
            </div>

            {/* Other Recommended Destinations */}
            <div className="liquid-glass-card rounded-2xl p-5 space-y-3">
              <p className="text-xs font-bold text-slate-900">Explore Other Destinations</p>
              <div className="grid grid-cols-2 gap-2">
                {ALL_DESTINATIONS.filter((d) => d.id !== destination.id)
                  .slice(0, 6)
                  .map((od) => (
                    <button
                      key={od.id}
                      onClick={() => {
                        onNavigate('destination-detail', od.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{od.flag}</span>
                      <span className="truncate">{od.name}</span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
