import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Send, MessageSquare } from 'lucide-react';
import { ALL_DESTINATIONS, CAMPUS_LOCATIONS } from '../data/aiaData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPathway?: string;
  preselectedDestination?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedPathway = '',
  preselectedDestination = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [campus, setCampus] = useState<'colombo' | 'kandy' | 'online'>('colombo');
  const [division, setDivision] = useState(preselectedPathway || 'study-abroad');
  const [destination, setDestination] = useState(preselectedDestination || 'united-kingdom');
  const [currentLevel, setCurrentLevel] = useState('After A/Ls');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (phone.trim().length < 9) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please provide a valid email';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 text-slate-800 border border-slate-200/90 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-wider text-[#d71920] uppercase">
                Advisory Appointment & Walk-In
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Book a Free Consultation
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                Connect with AIA senior academic advisors at our Colombo or Kandy centres, or schedule a comprehensive video session.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campus Choice */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Consultation Location
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCampus('colombo')}
                    className={`py-2 px-3 rounded-full text-xs font-semibold transition-all text-center cursor-pointer ${
                      campus === 'colombo'
                        ? 'bg-[#d71920] text-white shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                    }`}
                  >
                    Colombo 04
                  </button>
                  <button
                    type="button"
                    onClick={() => setCampus('kandy')}
                    className={`py-2 px-3 rounded-full text-xs font-semibold transition-all text-center cursor-pointer ${
                      campus === 'kandy'
                        ? 'bg-[#d71920] text-white shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                    }`}
                  >
                    Kandy
                  </button>
                  <button
                    type="button"
                    onClick={() => setCampus('online')}
                    className={`py-2 px-3 rounded-full text-xs font-semibold transition-all text-center cursor-pointer ${
                      campus === 'online'
                        ? 'bg-[#d71920] text-white shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
                    }`}
                  >
                    Online (Zoom)
                  </button>
                </div>
              </div>

              {/* Division */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Educational Pathway of Interest
                </label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
                >
                  <option value="study-abroad">Study Abroad (17 Global Destinations)</option>
                  <option value="credit-management">Professional Education – Credit Management (Awarded by SLICM)</option>
                </select>
              </div>

              {/* Destination if Study Abroad */}
              {division === 'study-abroad' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
                  >
                    {ALL_DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.flag} {d.name} — {d.region}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Priyantha Silva"
                    className={`w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border ${
                      errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-200'
                    } text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-1 pl-2">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 077 123 4567"
                    className={`w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'
                    } text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1 pl-2">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. priyantha@gmail.com"
                    className={`w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'
                    } text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1 pl-2">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Academic Level
                  </label>
                  <select
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                    className="w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
                  >
                    <option value="After O/Ls">After O/Ls</option>
                    <option value="After A/Ls">After A/Ls</option>
                    <option value="Diploma Holder">Diploma / HND Holder</option>
                    <option value="Undergraduate">Current Undergraduate</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date / Approximate Timing (Optional)
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Questions or Target University / Intake
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Looking for UK September intake, interested in data science scholarships..."
                  className="w-full text-xs py-2.5 px-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full liquid-glass-red py-3 px-6 text-white rounded-full text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Consultation Booking</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  100% Free Consultation
                </span>
                <span>•</span>
                <span>Walk-ins Welcome at Galle Rd & Kandy</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Consultation Request Received!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
              Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. An AIA educational advisor will contact you shortly on{' '}
              <span className="font-semibold text-slate-900">{phone}</span> to confirm your session.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-200 text-xs space-y-2 text-slate-600">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <MapPin className="w-4 h-4 text-[#d71920]" />
                <span>
                  {campus === 'colombo'
                    ? 'Colombo Campus: 329 Galle Road, Colombo 04'
                    : campus === 'kandy'
                    ? 'Kandy Campus: 675 William Gopallawa Mawatha, Kandy'
                    : 'Online Video Session via Zoom / Google Meet'}
                </span>
              </div>
              <p className="text-slate-500 pl-6">
                Direct Hotline: <strong className="text-slate-900">07748 07748</strong> | Email: <strong className="text-slate-900">info@aia.lk</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/94774807748?text=Hi%20AIA%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(
                  fullName
                )}%20regarding%20${encodeURIComponent(division)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-950/20 backdrop-blur-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-5 rounded-full text-xs font-semibold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
