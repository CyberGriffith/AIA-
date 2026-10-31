import React, { useState } from 'react';
import { Award, CheckCircle2, ArrowRight, Star, GraduationCap, Quote } from 'lucide-react';
import { PageId } from '../types';
import { SUCCESS_STORIES } from '../data/aiaData';

interface SuccessStoriesPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string) => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const divisions = [
    'All',
    'Study Abroad',
    'Credit Management (SLICM)',
  ];

  const filteredStories = SUCCESS_STORIES.filter((st) => {
    if (activeFilter === 'All') return true;
    return st.division.includes(activeFilter) || activeFilter.includes(st.division);
  });

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Header Banner in Bright Clean University Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)] text-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#d71920]" />
              <span>AIA Alumni Network</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Student Success Stories
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Explore how students, school leavers, and financial executives reached their university admissions and career milestones with AIA advisory.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className="liquid-glass-red py-3 px-6 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/20"
              >
                Start Your Success Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white border border-slate-200/90 shadow-xs p-2 rounded-2xl flex flex-wrap items-center gap-1 w-fit">
          {divisions.map((div) => (
            <button
              key={div}
              onClick={() => setActiveFilter(div)}
              className={`py-2 px-4 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === div
                  ? 'bg-[#d71920] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {div}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={story.image}
                    alt={story.studentName}
                    className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-slate-200 shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{story.studentName}</h4>
                    <p className="text-[11px] font-semibold text-[#d71920]">{story.destinationOrProgram}</p>
                    <p className="text-[10px] text-slate-500">{story.year}</p>
                  </div>
                </div>

                <div className="relative pt-1">
                  <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-normal">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium truncate max-w-[180px]">
                  {story.institutionOrAward}
                </span>
                <span className="font-semibold text-[#d71920] shrink-0">
                  {story.division}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
