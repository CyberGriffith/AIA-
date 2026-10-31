import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight, Filter, MessageCircle } from 'lucide-react';
import { PageId } from '../types';
import { UPCOMING_EVENTS } from '../data/aiaData';

interface EventsPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  const categories = ['All', 'Admissions', 'Webinar', 'Credit Management'];

  const filteredEvents = UPCOMING_EVENTS.filter((ev) => {
    return selectedCategory === 'All' || ev.category === selectedCategory;
  });

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Header Banner in Bright Clean University Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)] text-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#d71920]" />
              <span>Admissions Days, Webinars & Open Sessions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              AIA Events Calendar
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Connect directly with university delegates, international admissions counsellors, and SLICM credit management practitioners. Free entry with advance seat booking.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className="liquid-glass-red py-3 px-6 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/20"
              >
                Book One-on-One Session
              </button>
              <a
                href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20would%20like%20to%20register%20for%20an%20upcoming%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-950/20 backdrop-blur-md cursor-pointer"
              >
                Register via WhatsApp (07748 07748)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filter */}
        <div className="bg-white border border-slate-200/90 shadow-xs p-2 rounded-2xl flex flex-wrap items-center gap-1 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-4 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#d71920] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {registeredEvent && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Seat reserved for "{registeredEvent}". Our event coordinator will send confirmation details to your WhatsApp.</span>
            </span>
            <button onClick={() => setRegisteredEvent(null)} className="font-bold underline text-emerald-950 cursor-pointer">
              Dismiss
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="liquid-glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-bold text-slate-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                  {ev.category}
                </span>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white liquid-glass-red px-2.5 py-1 rounded-full shadow-sm">
                  {ev.status}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#d71920] transition-colors">
                    {ev.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                    <div className="flex items-center gap-2 font-medium text-slate-900">
                      <Calendar className="w-3.5 h-3.5 text-[#d71920] shrink-0" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{ev.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1 line-clamp-2 font-normal">
                    {ev.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setRegisteredEvent(ev.title)}
                    className="liquid-glass-red py-2 px-4 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    Register Free
                  </button>
                  <a
                    href={`https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20would%20like%20to%20register%20for%20the%20event%3A%20${encodeURIComponent(
                      ev.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
