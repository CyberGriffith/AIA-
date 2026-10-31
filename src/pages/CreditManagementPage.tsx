import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Building2, Users, BookOpen, Calendar, HelpCircle, MessageCircle } from 'lucide-react';
import { PageId } from '../types';

interface CreditManagementPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string) => void;
}

export const CreditManagementPage: React.FC<CreditManagementPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Interactive Credit Career Assessment State
  const [currentRole, setCurrentRole] = useState('bank-officer');
  const [experienceYears, setExperienceYears] = useState('1-3');
  const [targetGoal, setTargetGoal] = useState('credit-analyst');
  const [assessmentResult, setAssessmentResult] = useState<string | null>(null);

  const handleRunAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    let recommendation = '';
    if (experienceYears === '0' || currentRole === 'student') {
      recommendation = 'Diploma in Credit Management (SLICM Foundation Pathway)';
    } else if (experienceYears === '1-3') {
      recommendation = 'Advanced Diploma in Credit Management (SLICM Professional Level)';
    } else {
      recommendation = 'Executive Diploma & Fellowship Pathway in Credit Risk Management (SLICM)';
    }
    setAssessmentResult(recommendation);
  };

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Header Banner in Bright Clean University Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-7 sm:p-10 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#d71920]" />
              <span>Credit Management</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              SLICM Professional Pathway
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Statutory credit appraisal, risk analysis, and compliance qualifications awarded by the Sri Lanka Institute of Credit Management (SLICM).
            </p>

            {/* Attribution Notice */}
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs text-emerald-900">
              <p className="font-bold text-emerald-950 flex items-center gap-1.5 mb-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Awarded by SLICM · Enacted by Parliament Act No. 07 of 2000
              </p>
              <p className="text-emerald-800 text-[11px] leading-relaxed">
                AIA is the official study and tuition centre delivering lecture programmes in Colombo 04 and Kandy.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('credit-management')}
                className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/20"
              >
                Inquire Upcoming Intake
              </button>
              <a
                href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20would%20like%20to%20inquire%20about%20the%20SLICM%20Credit%20Management%20pathway."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-950/20 backdrop-blur-md cursor-pointer"
              >
                WhatsApp Credit Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Curriculum & Delivery
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Structured lectures, past paper revisions, and case analysis led by experienced banking and credit practitioners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 pt-1">
              {[
                'Practical case studies by senior banking practitioners',
                'Weekend and evening executive batches',
                'Official SLICM syllabus and exam preparation',
                'Classroom sessions in Colombo 04 and Kandy',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 liquid-glass-card p-5 rounded-2xl space-y-3">
            <h3 className="text-sm font-bold text-slate-900">
              Qualification Levels
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Certificate in Credit Management</p>
                <p className="text-slate-500 mt-0.5">Fundamentals of lending, borrower assessment, and banking operations.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Diploma in Credit Management</p>
                <p className="text-slate-500 mt-0.5">Financial statement evaluation, loan structuring, and security perfection.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Advanced Diploma in Credit Management</p>
                <p className="text-slate-500 mt-0.5">Credit risk modeling, portfolio monitoring, and recovery laws.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Credit Career Assessment Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d71920]">
              Interactive Diagnostic
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Credit Career Assessment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Evaluate which SLICM qualification tier matches your current background and career aspirations in banking or corporate finance.
            </p>
          </div>

          <form onSubmit={handleRunAssessment} className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Current Background / Role
              </label>
              <select
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                className="w-full text-xs py-2.5 px-3 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
              >
                <option value="student">Student / School Leaver</option>
                <option value="bank-officer">Bank Officer / Assistant</option>
                <option value="credit-exec">Credit Executive / Analyst</option>
                <option value="recovery">Recovery / Collections Officer</option>
                <option value="finance-manager">Accountant / Finance Manager</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Relevant Industry Experience
              </label>
              <select
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                className="w-full text-xs py-2.5 px-3 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
              >
                <option value="0">Less than 1 year (or Fresh)</option>
                <option value="1-3">1 to 3 years in Finance / Credit</option>
                <option value="4+">Over 4 years in Financial Services</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Target Career Outcome
              </label>
              <select
                value={targetGoal}
                onChange={(e) => setTargetGoal(e.target.value)}
                className="w-full text-xs py-2.5 px-3 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
              >
                <option value="credit-analyst">Corporate Credit Analyst</option>
                <option value="risk-underwriter">Senior Risk Underwriter</option>
                <option value="branch-manager">Branch Manager / Head of Lending</option>
                <option value="recovery-head">Debt Recovery & Remedial Manager</option>
              </select>
            </div>

            <div className="md:col-span-3 pt-2">
              <button
                type="submit"
                className="liquid-glass-red py-3 px-6 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                Calculate Recommended SLICM Pathway
              </button>
            </div>
          </form>

          {assessmentResult && (
            <div className="p-6 bg-red-50/70 border border-red-200 rounded-2xl space-y-3 relative z-10">
              <span className="text-xs font-bold text-[#d71920] uppercase tracking-wider">Assessment Output:</span>
              <h3 className="text-xl font-bold text-slate-900">
                Recommended: {assessmentResult}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Based on your profile, you are eligible to enroll into this structured study pathway. Our lecturers at AIA Colombo and Kandy conduct comprehensive preparation aligned with SLICM examination requirements.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenConsultation('credit-management')}
                  className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold cursor-pointer shadow-sm"
                >
                  Book Free Credit Advisor Session
                </button>
                <a
                  href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20completed%20the%20Credit%20Career%20Assessment%20and%20got%20recommended%20the%20SLICM%20pathway."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-950/20 backdrop-blur-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Employers & L&D Teams Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d71920]">
                Corporate Training Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                For Employers & L&D Teams
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                AIA partners with commercial banks, licensed finance companies, microfinance institutions, and corporate credit divisions to deliver customized credit risk training, loan appraisal bootcamps, and executive coaching.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <strong className="block text-slate-900 mb-0.5">Custom In-House Programs</strong>
                  Tailored to your institution’s internal credit policy and risk appetite.
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <strong className="block text-slate-900 mb-0.5">SLICM Corporate Cohorts</strong>
                  Group sponsorships for your credit, underwriting, and recoveries staff.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200/90 p-6 rounded-2xl space-y-4 text-center">
              <h3 className="text-sm font-bold text-slate-900">
                Partner With AIA for Corporate Training
              </h3>
              <p className="text-xs text-slate-500">
                Contact our Corporate Partnerships division to arrange customized training for your teams.
              </p>
              <a
                href="mailto:info@aia.lk?subject=Corporate%20L%26D%20Credit%20Management%20Inquiry"
                className="w-full liquid-glass-red py-2.5 px-4 text-white rounded-full text-xs font-bold block transition-all shadow-sm"
              >
                Email: info@aia.lk
              </a>
              <a
                href="tel:+94774807748"
                className="text-xs font-bold text-[#d71920] hover:underline block"
              >
                Helpline: 07748 07748
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
