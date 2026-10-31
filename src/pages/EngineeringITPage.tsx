import React, { useState } from 'react';
import { Building2, ExternalLink, ArrowRight, CheckCircle2, Cpu, Wrench, Shield, Code, MessageCircle } from 'lucide-react';
import { PageId } from '../types';

interface EngineeringITPageProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string) => void;
}

export const EngineeringITPage: React.FC<EngineeringITPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Find My BIET Pathway diagnostic state
  const [stream, setStream] = useState<'computing' | 'engineering'>('computing');
  const [entryQualification, setEntryQualification] = useState<'ol' | 'al' | 'hnd'>('al');
  const [bietResult, setBietResult] = useState<string | null>(null);

  const handleDiagnose = (e: React.FormEvent) => {
    e.preventDefault();
    if (stream === 'computing') {
      if (entryQualification === 'ol') {
        setBietResult('BIET International Foundation Diploma in Information Technology');
      } else if (entryQualification === 'al') {
        setBietResult('Higher National Diploma (HND) in Software Engineering & Cyber Security');
      } else {
        setBietResult('BSc (Hons) Computing & IT Final Year Top-Up (British Degree Pathway)');
      }
    } else {
      if (entryQualification === 'ol') {
        setBietResult('BIET Engineering Foundation Certificate (Civil / Electrical / Mechanical)');
      } else if (entryQualification === 'al') {
        setBietResult('Higher National Diploma in Engineering (Civil, Mechanical or Electrical)');
      } else {
        setBietResult('BEng (Hons) Engineering Final Year Progression to UK Partner Universities');
      }
    }
  };

  return (
    <div className="space-y-12 py-6 md:py-10">
      {/* Hero Banner in Bright Clean University Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-7 sm:p-10 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#d71920]" />
              <span>BIET · Engineering & IT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Engineering & Computing Pathways
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Practical, lab-based engineering and IT diplomas delivered via the British Institute of Engineering & Technology (BIET), with direct UK degree top-up routes.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation('engineering-it')}
                className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-900/20"
              >
                Inquire Upcoming Intake
              </button>
              <a
                href="https://biet.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center gap-2 py-2.5 px-5 text-slate-800 rounded-full text-xs font-bold transition-all shadow-xs"
              >
                <span>Visit biet.lk</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#d71920]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Pathways: Engineering vs Computing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Academic Streams
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            British engineering diplomas and software development specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engineering Pathways */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 text-[#d71920] border border-red-100 rounded-2xl">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Engineering
                </h3>
                <p className="text-xs text-slate-500">Civil, Mechanical & Electrical</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Practical British engineering diplomas with direct UK university top-up and progression routes.
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Civil & Structural Engineering</p>
                <p className="text-slate-500 mt-0.5">Surveying, structural design, CAD, and hydraulics.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Mechanical & Mechatronics</p>
                <p className="text-slate-500 mt-0.5">Robotics, automation, thermodynamics, and manufacturing.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Electrical & Electronics</p>
                <p className="text-slate-500 mt-0.5">Power systems, microcontrollers, circuits, and renewable energy.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onOpenConsultation('engineering-it')}
                className="liquid-glass-red py-2 px-4 text-white rounded-full text-xs font-bold cursor-pointer shadow-sm"
              >
                Inquire Engineering
              </button>
              <a
                href="https://biet.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#d71920] hover:underline flex items-center gap-1"
              >
                <span>Curriculum on biet.lk</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Computing & IT Pathways */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 text-[#d71920] border border-red-100 rounded-2xl">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Computing & IT
                </h3>
                <p className="text-xs text-slate-500">Software, Data & Cyber Security</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Industry-aligned programmes in full-stack software development, cloud systems, and cyber security.
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Software Engineering</p>
                <p className="text-slate-500 mt-0.5">JavaScript, Python, Java, agile methods, and full-stack applications.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Cyber Security</p>
                <p className="text-slate-500 mt-0.5">Network defense, penetration testing, security audits, and cryptography.</p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="font-bold text-slate-900">Data & AI</p>
                <p className="text-slate-500 mt-0.5">Machine learning basics, databases, data visualization, and cloud pipelines.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onOpenConsultation('engineering-it')}
                className="liquid-glass-red py-2 px-4 text-white rounded-full text-xs font-bold cursor-pointer shadow-sm"
              >
                Inquire Computing
              </button>
              <a
                href="https://biet.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#d71920] hover:underline flex items-center gap-1"
              >
                <span>Curriculum on biet.lk</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Find My BIET Pathway Interactive Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d71920]">
              Interactive Pathway Diagnostic
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Find My BIET Pathway
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Match your entry qualifications with the exact BIET qualification level and British top-up path.
            </p>
          </div>

          <form onSubmit={handleDiagnose} className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Area of Interest
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setStream('computing')}
                  className={`py-2 px-3 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                    stream === 'computing'
                      ? 'bg-[#d71920] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                  }`}
                >
                  Computing & IT
                </button>
                <button
                  type="button"
                  onClick={() => setStream('engineering')}
                  className={`py-2 px-3 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                    stream === 'engineering'
                      ? 'bg-[#d71920] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                  }`}
                >
                  Engineering
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Highest Current Qualification
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setEntryQualification('ol')}
                  className={`py-2 px-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                    entryQualification === 'ol'
                      ? 'bg-[#d71920] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                  }`}
                >
                  After O/Ls
                </button>
                <button
                  type="button"
                  onClick={() => setEntryQualification('al')}
                  className={`py-2 px-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                    entryQualification === 'al'
                      ? 'bg-[#d71920] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                  }`}
                >
                  After A/Ls
                </button>
                <button
                  type="button"
                  onClick={() => setEntryQualification('hnd')}
                  className={`py-2 px-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                    entryQualification === 'hnd'
                      ? 'bg-[#d71920] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                  }`}
                >
                  Diploma / HND
                </button>
              </div>
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="liquid-glass-red py-3 px-6 text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                Diagnose My BIET Pathway
              </button>
            </div>
          </form>

          {bietResult && (
            <div className="p-6 bg-red-50/70 border border-red-200 rounded-2xl space-y-3 relative z-10">
              <span className="text-xs font-bold text-[#d71920] uppercase tracking-wider">Your Suggested Pathway:</span>
              <h3 className="text-xl font-bold text-slate-900">
                {bietResult}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                This pathway grants recognized British progression. You can complete lectures at AIA / BIET Colombo or Kandy campuses, with options to top up locally or transfer to partner institutions in the UK.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenConsultation('engineering-it')}
                  className="liquid-glass-red py-2.5 px-5 text-white rounded-full text-xs font-bold cursor-pointer shadow-sm"
                >
                  Book Free Consultation for this Pathway
                </button>
                <a
                  href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20am%20inquiring%20about%20the%20BIET%20pathway."
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
    </div>
  );
};
