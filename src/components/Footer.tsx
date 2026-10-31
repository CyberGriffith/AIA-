import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { ALL_DESTINATIONS, CAMPUS_LOCATIONS } from '../data/aiaData';

interface FooterProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: () => void;
  onOpenFindMyPath: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenFindMyPath,
}) => {
  return (
    <footer className="bg-[#050810]/95 text-slate-400 pt-16 pb-12 border-t border-white/10 relative z-10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Strip in Liquid Glass */}
        <div className="liquid-glass-dark rounded-3xl p-7 md:p-9 mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-1.5">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Speak with an AIA Advisor
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
                Consultations available at our Colombo 04 and Kandy centres, or online via video call.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
              <button
                onClick={onOpenConsultation}
                className="liquid-glass-red py-2.5 px-5 text-white font-bold text-xs rounded-full transition-all text-center cursor-pointer"
              >
                Book Consultation
              </button>
              <a
                href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20would%20like%20to%20speak%20with%20an%20education%20advisor."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs rounded-full transition-all shadow-md shadow-emerald-950/40 backdrop-blur-md text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp 07748 07748</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
              <img
                src="/assets/aistudio/aia-logo_3fefb8d5.png"
                alt="AIA Holdings – Asian International Academy"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Asian International Academy (AIA Holdings) provides premier international education consulting and statutory professional education in Sri Lanka, in partnership with leading global universities and official institutes.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff4d4f] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Colombo Campus:</strong> 329 Galle Road, Colombo 04
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff4d4f] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Kandy Campus:</strong> 675 William Gopallawa Mawatha, Kandy
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff4d4f] shrink-0" />
                <a href="tel:+94774807748" className="hover:text-white transition-colors">
                  Helpline: <strong className="text-white">07748 07748</strong>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@aia.lk" className="hover:text-white transition-colors">
                  info@aia.lk
                </a>
              </div>
            </div>
          </div>

          {/* Educational Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Educational Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('study-abroad')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Study Abroad (17 Countries)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('credit-management')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Credit Management (SLICM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Admissions Days & Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('success-stories')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Student Success Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Global Destinations
            </h4>
            <ul className="grid grid-cols-1 gap-1.5 text-xs">
              {['United Kingdom', 'Australia', 'Canada', 'South Korea', 'Germany', 'Ireland', 'Singapore', 'New Zealand'].map(
                (name) => {
                  const dest = ALL_DESTINATIONS.find((d) => d.name === name);
                  return (
                    <li key={name}>
                      <button
                        onClick={() => dest && onNavigate('destination-detail', dest.id)}
                        className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{dest?.flag}</span>
                        <span>{name}</span>
                      </button>
                    </li>
                  );
                }
              )}
              <li className="pt-1">
                <button
                  onClick={() => onNavigate('study-abroad')}
                  className="text-[#ff4d4f] hover:text-red-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>View All 17 Destinations</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation & Guidance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About AIA Holdings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-white transition-colors cursor-pointer">
                  Upcoming Admissions Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('success-stories')} className="hover:text-white transition-colors cursor-pointer">
                  Student Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Campus Directions
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenFindMyPath}
                  className="font-bold text-slate-200 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Find My Path Diagnostic</span>
                  <ArrowRight className="w-3 h-3 text-[#ff4d4f]" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Certification Notice */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div className="text-xs sm:text-[13px] leading-relaxed text-slate-800">
              <p>
                <strong className="font-bold text-slate-950">Official Certification Notice:</strong> The Professional Credit Management qualification is awarded by the <strong className="font-bold text-slate-950">Sri Lanka Institute of Credit Management (SLICM)</strong>. Asian International Academy (AIA) delivers tuition, study pathways, exam preparation, and student support. AIA does not independently award the credit management qualification.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} AIA Holdings – Asian International Academy Holdings Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-300">
            <span>Colombo: 329 Galle Road, Colombo 04</span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span>Kandy: 675 William Gopallawa Mawatha, Kandy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
