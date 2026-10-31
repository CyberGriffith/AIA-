import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2, ArrowRight, Building2, Award, GraduationCap, Briefcase, Phone, Mail } from 'lucide-react';
import { PageId } from '../types';
import { CAMPUS_LOCATIONS } from '../data/aiaData';

interface AboutPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: () => void;
  onOpenFindMyPath: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenFindMyPath,
}) => {
  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Header Banner with Bright Vivid Campus Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[260px] flex items-center p-7 sm:p-10 shadow-xl border border-slate-200/80 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
            alt="University Campus"
            className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-3 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-semibold text-[#ff4d4f] border border-white/20 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#ff4d4f]" />
              <span>About AIA Holdings</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              International Education & Professional Institute
            </h1>
            <p className="text-sm text-slate-100 leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              Direct university admissions across 17 countries and recognised professional qualifications, operating from Colombo 04 and Kandy.
            </p>
            <div className="pt-1 flex flex-wrap gap-3">
              <button
                onClick={onOpenConsultation}
                className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-950/30"
              >
                Book Advisory Consultation
              </button>
              <button
                onClick={onOpenFindMyPath}
                className="bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md py-2.5 px-5 text-white rounded-full text-xs font-semibold transition-all cursor-pointer shadow-sm"
              >
                Find My Path
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Mission & Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Advisory Principles
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We provide transparent academic audits, verified visa assessments, and pathway planning aligned with genuine university requirements and student budgets.
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                { title: 'Zero Hidden Advisory Fees', desc: 'Complimentary preliminary university admissions assessments.' },
                { title: 'Direct Representation', desc: 'Accredited university representation and statutory bodies.' },
                { title: 'Two Established Centres', desc: 'Campuses located in Colombo 04 and Kandy.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 liquid-glass-card rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">
              Institutional Divisions
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="font-bold text-[#d71920]">1. Study Abroad Division</span>
                <p className="text-slate-600 mt-1">Official admissions partner representing top universities across 17 countries including the UK, Australia, Canada, and South Korea.</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                <span className="font-bold text-[#d71920]">2. Statutory Professional Education</span>
                <p className="text-slate-600 mt-1">Accredited tuition centre for the Sri Lanka Institute of Credit Management (SLICM), established under Parliament Act No. 07 of 2000.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Campus Centers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#d71920]">
            Physical Presence
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our Campuses & Advisory Hubs
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Counselling by appointment or walk-in at both convenient locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPUS_LOCATIONS.map((loc) => (
            <div key={loc.id} className="liquid-glass-card rounded-3xl p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d71920]" />
                  <h3 className="text-xl font-bold text-slate-900">{loc.city} Campus</h3>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">Walk-ins Welcome</span>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <p><strong className="text-slate-900 font-semibold">Address:</strong> {loc.address}</p>
                <p><strong className="text-slate-900 font-semibold">Hours:</strong> {loc.hours}</p>
                <p><strong className="text-slate-900 font-semibold">Phone / WhatsApp:</strong> {loc.phoneDisplay}</p>
                <p><strong className="text-slate-900 font-semibold">Email:</strong> {loc.email}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-[#d71920] hover:underline cursor-pointer"
                >
                  View Directions & Map →
                </button>
                <a
                  href="https://wa.me/94774807748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:underline"
                >
                  WhatsApp Helpline
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
