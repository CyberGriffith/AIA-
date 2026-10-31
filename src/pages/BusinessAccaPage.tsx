import React from 'react';
import { Briefcase, ExternalLink, ArrowRight, CheckCircle2, Award, GraduationCap, MessageCircle } from 'lucide-react';
import { PageId } from '../types';

interface BusinessAccaPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string) => void;
}

export const BusinessAccaPage: React.FC<BusinessAccaPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-12 py-6 md:py-10">
      {/* Hero Banner in Bright Clean University Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-7 sm:p-10 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-[#d71920]" />
              <span>Alpha Business School</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Business, Accounting & ACCA
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              ACCA chartered accounting qualifications and dual British BSc (Hons) degrees from Oxford Brookes University delivered through Alpha Business School.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation('business-acca')}
                className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/20"
              >
                Inquire Upcoming Batch
              </button>
              <a
                href="https://alphabusinessschool.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center gap-2 py-2.5 px-5 text-slate-800 rounded-full text-xs font-bold transition-all shadow-xs"
              >
                <span>Visit alphabusinessschool.lk</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#d71920]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Qualification Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Qualifications & Degree Pathways
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Structured ACCA exam preparation and accredited UK degree mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* ACCA */}
          <div className="liquid-glass-card rounded-3xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-2.5 bg-red-50 text-[#d71920] border border-red-100 rounded-2xl w-fit">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                ACCA Qualification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Recognised chartered accounting designation open after O/Ls (via FIA) or A/Ls.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Applied Knowledge (BT, MA, FA)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Applied Skills (LW, PM, TX, FR, AA, FM)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Strategic Professional (SBL, SBR & Options)</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onOpenConsultation('business-acca')}
              className="w-full liquid-glass-red py-2 text-white text-xs font-bold rounded-full transition-all cursor-pointer shadow-sm"
            >
              Inquire ACCA
            </button>
          </div>

          {/* Oxford Brookes Degree */}
          <div className="liquid-glass-card rounded-3xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-2.5 bg-red-50 text-[#d71920] border border-red-100 rounded-2xl w-fit">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Oxford Brookes (UK) BSc
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Earn a British BSc in Applied Accounting upon completing the ACCA Applied Skills level.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Research and Analysis Project (RAP) Mentoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Registered Oxford Brookes Project Mentors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Dual qualification completed in Sri Lanka</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onOpenConsultation('business-acca')}
              className="w-full liquid-glass-red py-2 text-white text-xs font-bold rounded-full transition-all cursor-pointer shadow-sm"
            >
              Inquire OBU Degree
            </button>
          </div>

          {/* Business Pathways */}
          <div className="liquid-glass-card rounded-3xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-2.5 bg-red-50 text-[#d71920] border border-red-100 rounded-2xl w-fit">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Business & Management
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Practical business management and finance diplomas aligned with corporate operations.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Corporate Finance & Financial Management</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Business Administration & Strategy</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d71920] shrink-0 mt-0.5" />
                  <span>Pathways to MBA and Executive Diplomas</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onOpenConsultation('business-acca')}
              className="w-full liquid-glass-red py-2 text-white text-xs font-bold rounded-full transition-all cursor-pointer shadow-sm"
            >
              Inquire Business
            </button>
          </div>
        </div>
      </section>

      {/* Official Linkage Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-7 flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-200/90 shadow-sm text-slate-800">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Alpha Business School Official Portal
            </h3>
            <p className="text-xs text-slate-500">
              Lecturer profiles, prize-winner records, and upcoming intake schedules.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://alphabusinessschool.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Visit alphabusinessschool.lk</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20am%20inquiring%20about%20Alpha%20Business%20School%20ACCA."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-950/20 backdrop-blur-md transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
