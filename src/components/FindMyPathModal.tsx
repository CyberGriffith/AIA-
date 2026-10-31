import React, { useState } from 'react';
import { X, Compass, ArrowRight, Check, Sparkles, GraduationCap, Building2, Briefcase, Award } from 'lucide-react';
import { PageId } from '../types';

interface FindMyPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string) => void;
}

export const FindMyPathModal: React.FC<FindMyPathModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenConsultation,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [academicLevel, setAcademicLevel] = useState<string>('');
  const [careerInterest, setCareerInterest] = useState<string>('');
  const [budgetTimeline, setBudgetTimeline] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setAcademicLevel('');
    setCareerInterest('');
    setBudgetTimeline('');
    onClose();
  };

  // Determine Recommendation based on answers
  const getRecommendation = () => {
    if (careerInterest === 'credit') {
      return {
        title: 'Professional Credit Management Pathway',
        institution: 'Sri Lanka Institute of Credit Management (SLICM)',
        divisionId: 'credit-management' as PageId,
        desc: 'Accelerate your career into executive banking, corporate credit underwriting, loan appraisal, and risk management with the premier credential awarded by SLICM.',
        highlights: [
          'Qualification awarded by Sri Lanka Institute of Credit Management (SLICM)',
          'High demand across commercial banks, NBFIs, and multinational corporations',
          'Flexible evening & weekend study schedules',
        ],
        ctaText: 'Explore Credit Management',
      };
    } else {
      // Default: Study Abroad
      return {
        title: 'Global University Admissions (17 Destinations)',
        institution: 'AIA Study Abroad Division',
        divisionId: 'study-abroad' as PageId,
        desc: 'Direct university placements, scholarship evaluations, and comprehensive visa counselling across 17 countries including the UK, Australia, Canada, Europe, and Asia.',
        highlights: [
          'Over 17 destination countries represented',
          'Full visa application, financial assessment & document audit',
          'Direct institutional relationships with top accredited universities',
        ],
        ctaText: 'Explore 17 Study Abroad Destinations',
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 text-slate-800 border border-slate-200/90 shadow-2xl">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Indicator */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#d71920]" />
            <span>AIA Academic Path Diagnostic</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            Find My Path
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Answer 3 quick questions to discover your optimal educational route at AIA Holdings.
          </p>

          {/* Stepper dots */}
          <div className="flex items-center gap-2 mt-4">
            <div className={`h-1.5 rounded-full flex-1 transition-all ${step >= 1 ? 'bg-[#d71920]' : 'bg-slate-200'}`} />
            <div className={`h-1.5 rounded-full flex-1 transition-all ${step >= 2 ? 'bg-[#d71920]' : 'bg-slate-200'}`} />
            <div className={`h-1.5 rounded-full flex-1 transition-all ${step >= 3 ? 'bg-[#d71920]' : 'bg-slate-200'}`} />
          </div>
        </div>

        {/* Step 1: Current stage */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-900">
              1. What is your current educational background?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'al', title: 'Completed GCE A/Ls', subtitle: 'Local or Cambridge / Edexcel' },
                { id: 'ol', title: 'Completed GCE O/Ls', subtitle: 'Looking for foundation or early entry' },
                { id: 'degree', title: 'Undergraduate / Degree Holder', subtitle: 'Seeking Master’s or Postgrad study' },
                { id: 'working', title: 'Working Professional', subtitle: 'Aiming for executive qualification' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setAcademicLevel(opt.id);
                    setStep(2);
                  }}
                  className={`p-4 rounded-2xl text-left transition-all cursor-pointer ${
                    academicLevel === opt.id
                      ? 'liquid-glass-red text-white'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800'
                  }`}
                >
                  <p className={`text-xs font-bold ${academicLevel === opt.id ? 'text-white' : 'text-slate-900'}`}>{opt.title}</p>
                  <p className={`text-[11px] mt-0.5 ${academicLevel === opt.id ? 'text-white/80' : 'text-slate-500'}`}>{opt.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Goal / Field */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900">
                2. What is your primary career or education goal?
              </p>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
              >
                Back
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: 'abroad',
                  icon: GraduationCap,
                  title: 'Study Abroad (17 Countries)',
                  desc: 'Earn an overseas university degree in the UK, Australia, Canada, Europe, or Asia.',
                },
                {
                  id: 'credit',
                  icon: Award,
                  title: 'Credit Management (SLICM)',
                  desc: 'Specialise in banking credit analysis, loan underwriting & risk management.',
                },
              ].map((opt) => {
                const Icon = opt.icon;
                const isSelected = careerInterest === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setCareerInterest(opt.id);
                      setStep(3);
                    }}
                    className={`p-4 rounded-2xl text-left transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'liquid-glass-red text-white'
                        : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-red-50 text-[#d71920]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>{opt.title}</p>
                      <p className={`text-[11px] mt-1 leading-snug font-normal ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Recommendation */}
        {step === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="bg-red-50/70 rounded-2xl p-6 border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d71920]">
                <Sparkles className="w-4 h-4" />
                <span>Recommended AIA Pathway for You</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {rec.title}
              </h3>
              <p className="text-xs font-semibold text-slate-700">
                {rec.institution}
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                {rec.desc}
              </p>

              <div className="mt-4 space-y-2 pt-3 border-t border-red-200/60">
                {rec.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onNavigate(rec.divisionId);
                  handleReset();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <span>{rec.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const pathwayKey =
                    careerInterest === 'credit'
                      ? 'credit-management'
                      : careerInterest === 'engineering'
                      ? 'engineering-it'
                      : careerInterest === 'acca'
                      ? 'business-acca'
                      : 'study-abroad';
                  handleReset();
                  onOpenConsultation(pathwayKey);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 liquid-glass-red text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                <span>Book Free Consultation</span>
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
              >
                Start Diagnostic Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
