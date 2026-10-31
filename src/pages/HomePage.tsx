import React, { useState } from 'react';
import { 
  ArrowRight, 
  Compass, 
  MapPin, 
  Calendar, 
  Search, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Building, 
  GraduationCap, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { PageId } from '../types';
import { 
  ALL_DESTINATIONS, 
  FOUR_PATHWAYS, 
  UPCOMING_EVENTS, 
  SUCCESS_STORIES 
} from '../data/aiaData';
import { HeroSlider } from '../components/HeroSlider';

interface HomePageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string) => void;
  onOpenFindMyPath: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenFindMyPath,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [destinationSearch, setDestinationSearch] = useState<string>('');

  const filteredDestinations = ALL_DESTINATIONS.filter((d) => {
    const matchesRegion = activeRegion === 'All' || d.region === activeRegion;
    const matchesSearch = d.name.toLowerCase().includes(destinationSearch.toLowerCase()) ||
                          d.popularCourses.some(c => c.toLowerCase().includes(destinationSearch.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. CINEMATIC DESTINATION HERO SLIDER */}
      <HeroSlider
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
        onOpenFindMyPath={onOpenFindMyPath}
      />

      {/* 2. DUAL CAMPUS & COUNSELLING FLOATING GLASS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 relative z-30">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d71920] shrink-0" />
              <span><strong className="text-slate-900 font-semibold">Colombo Campus:</strong> 329 Galle Road, Colombo 04</span>
            </div>
            <div className="hidden sm:inline text-slate-300">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d71920] shrink-0" />
              <span><strong className="text-slate-900 font-semibold">Kandy Campus:</strong> 675 William Gopallawa Mawatha, Kandy</span>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-slate-500 hidden lg:inline">Walk-ins & scheduled appointments welcome</span>
            <a
              href="tel:+94774807748"
              className="font-bold text-slate-900 hover:text-[#d71920] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d71920]" />
              <span>07748 07748</span>
            </a>
            <a
              href="https://wa.me/94774807748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full text-xs shadow-md shadow-emerald-950/20 backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d71920]" />
              <span>AIA Holdings</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Higher Education & <span className="text-[#d71920]">Professional Pathways</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
              Centres in Colombo 04 and Kandy. Direct university admissions across 17 countries, alongside recognised statutory qualifications in Credit Management awarded by SLICM.
            </p>

            {/* Light Glass Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg">
              <div className="liquid-glass-card rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-slate-900">17</p>
                <p className="text-[11px] text-slate-500 font-medium">Study Destinations</p>
              </div>
              <div className="liquid-glass-card rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-slate-900">2</p>
                <p className="text-[11px] text-slate-500 font-medium">Primary Divisions</p>
              </div>
              <div className="liquid-glass-card rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-slate-900">2</p>
                <p className="text-[11px] text-slate-500 font-medium">Campuses in Sri Lanka</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="liquid-glass-red px-6 py-3 text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer shadow-md shadow-red-900/20"
              >
                Book Free Consultation
              </button>

              <button
                onClick={onOpenFindMyPath}
                className="bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#d71920]" />
                <span>Find My Pathway</span>
              </button>
            </div>
          </div>

          {/* Floating Light Glass Executive Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 space-y-5 relative overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Academic & Professional Focus
            </h3>
            
            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-red-50 text-[#d71920] border border-red-100 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">University Admissions</p>
                  <p className="text-slate-500 mt-0.5">Direct admissions and student visa guidance across 17 countries.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">SLICM Credit Management</p>
                  <p className="text-slate-500 mt-0.5">Statutory qualifications awarded by SLICM; tuition delivered by AIA.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Dual Sri Lankan Campuses</p>
                  <p className="text-slate-500 mt-0.5">Full advisory services, application filing, and lecture delivery in Colombo 04 and Kandy.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Colombo 04 & Kandy</span>
              <button
                onClick={() => onNavigate('contact')}
                className="text-[#d71920] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Campuses & Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCATIONAL PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Educational Pathways
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Explore our core academic divisions: Global University Admissions and Statutory Credit Management.
            </p>
          </div>

          <button
            onClick={onOpenFindMyPath}
            className="text-xs font-bold text-[#d71920] hover:underline flex items-center gap-1 cursor-pointer self-start md:self-auto"
          >
            <span>Pathway Diagnostic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {FOUR_PATHWAYS.map((p) => (
            <div
              key={p.id}
              onClick={() => onNavigate(p.id as PageId)}
              className="liquid-glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              {/* Photo Banner with subtle overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 border border-white/80 shadow-xs">
                  {p.subtitle}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#d71920] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#d71920]">
                  <span>{p.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#d71920]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STUDY ABROAD DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Study Abroad Destinations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Accredited universities across 17 countries with direct admissions and visa support.
            </p>
          </div>

          <button
            onClick={() => onNavigate('study-abroad')}
            className="text-xs font-bold text-[#d71920] hover:underline flex items-center gap-1 cursor-pointer self-start md:self-auto"
          >
            <span>All 17 Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clean Segmented Control & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white border border-slate-200/90 shadow-sm p-2 rounded-2xl">
          <div className="flex flex-wrap items-center gap-1">
            {['All', 'Europe', 'North America', 'Asia & Middle East', 'Oceania'].map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeRegion === region
                    ? 'bg-[#d71920] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={destinationSearch}
              onChange={(e) => setDestinationSearch(e.target.value)}
              placeholder="Search country or course..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white"
            />
          </div>
        </div>

        {/* Crisp Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredDestinations.slice(0, 8).map((dest) => (
            <div
              key={dest.id}
              onClick={() => onNavigate('destination-detail', dest.id)}
              className="liquid-glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-2.5 left-2.5 text-lg p-1 bg-white/90 backdrop-blur-md rounded-lg shadow-xs">
                  {dest.flag}
                </span>
                <span className="absolute bottom-2.5 left-3 text-white text-base font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  {dest.name}
                </span>
                <span className="absolute bottom-2.5 right-3 text-white/90 text-[10px] font-semibold drop-shadow">
                  {dest.region}
                </span>
              </div>

              <div className="p-3.5 space-y-2">
                <p className="text-xs text-slate-600 line-clamp-1 font-medium">
                  {dest.popularCourses.slice(0, 2).join(' · ')}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#d71920]">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-1">
          <button
            onClick={() => onNavigate('study-abroad')}
            className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 shadow-sm inline-flex items-center gap-2 px-5 py-2.5 font-bold text-xs uppercase tracking-wider rounded-full transition-all"
          >
            <span>View All 17 Country Guides</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#d71920]" />
          </button>
        </div>
      </section>

      {/* 6. STATUTORY PROFESSIONAL EDUCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Statutory Professional Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Sri Lanka Institute of Credit Management (SLICM) qualifications delivered by AIA.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 sm:p-9 space-y-6 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Body</span>
              </span>
              <span className="text-xs text-slate-500">Established under Parliament Act No. 07 of 2000</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Sri Lanka Institute of Credit Management (SLICM)
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The sole statutory body for credit management education in Sri Lanka. AIA delivers official lectures from executive certificates to advanced professional diplomas for banking, leasing, and corporate finance practitioners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="text-xs font-bold text-slate-900">Executive Diploma</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Foundational credit appraisal & underwriting</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="text-xs font-bold text-slate-900">Advanced Diploma</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Corporate lending & risk compliance</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="text-xs font-bold text-slate-900">Flexible Delivery</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Weekend & executive evening schedules</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-700">
              <span className="font-bold text-slate-900">Statutory Certification:</span> Qualifications awarded directly by SLICM. AIA provides tuition, lecture facilities, and exam preparation in Colombo 04 and Kandy.
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('credit-management')}
                className="liquid-glass-red px-5 py-2.5 text-white rounded-full text-xs font-bold tracking-wide cursor-pointer shadow-sm"
              >
                Explore SLICM Programmes
              </button>
              <button
                onClick={() => onOpenConsultation('credit-management')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-full text-xs font-semibold cursor-pointer transition-colors"
              >
                Inquire Intake Details
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Lectures delivered at Colombo 04 and Kandy Campuses
            </p>
          </div>
        </div>
      </section>

      {/* 7. EVENTS & STUDENT STORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Upcoming Event */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                Upcoming Information Session
              </h3>
              <button
                onClick={() => onNavigate('events')}
                className="text-xs font-bold text-[#d71920] hover:underline"
              >
                All Events →
              </button>
            </div>

            {UPCOMING_EVENTS.slice(0, 1).map((ev) => (
              <div key={ev.id} className="liquid-glass-card rounded-2xl overflow-hidden group">
                <div className="relative h-40 w-full bg-slate-100">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white liquid-glass-red px-3 py-1 rounded-full shadow-sm">
                    {ev.date}
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <h4 className="text-base font-bold text-slate-900">{ev.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{ev.description}</p>
                  <div className="text-xs text-slate-500 font-medium">
                    {ev.venue} · {ev.time}
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenConsultation(ev.category.toLowerCase())}
                      className="bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 text-slate-800 rounded-full text-xs font-bold transition-all cursor-pointer"
                    >
                      Reserve Free Seat
                    </button>
                    <span className="text-xs font-semibold text-emerald-600">{ev.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Student Success Highlight */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                Student Story
              </h3>
              <button
                onClick={() => onNavigate('success-stories')}
                className="text-xs font-bold text-[#d71920] hover:underline"
              >
                All Stories →
              </button>
            </div>

            {SUCCESS_STORIES.slice(0, 1).map((st) => (
              <div key={st.id} className="liquid-glass-card rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
                <img
                  src={st.image}
                  alt={st.studentName}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shrink-0 border border-slate-200 shadow-sm"
                  loading="lazy"
                />
                <div className="space-y-2">
                  <p className="text-xs italic text-slate-700 leading-relaxed">
                    "{st.quote}"
                  </p>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{st.studentName}</h4>
                    <p className="text-xs text-[#d71920] font-semibold">{st.destinationOrProgram}</p>
                    <p className="text-[11px] text-slate-500">{st.institutionOrAward}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. ADVISORY & CONSULTATION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-[#0c1222] text-white rounded-3xl p-7 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-xl relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Speak with an AIA Advisor
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Meet our team at our Colombo 04 or Kandy centres, or schedule an online session.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <button
              onClick={() => onOpenConsultation()}
              className="liquid-glass-red px-5 py-2.5 text-white rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Book Consultation
            </button>

            <a
              href="https://wa.me/94774807748"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-950/40 backdrop-blur-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp 07748 07748</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
