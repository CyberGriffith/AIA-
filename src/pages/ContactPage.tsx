import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CAMPUS_LOCATIONS, ALL_DESTINATIONS } from '../data/aiaData';

export const ContactPage: React.FC = () => {
  const [activeCampus, setActiveCampus] = useState<'colombo' | 'kandy'>('colombo');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [division, setDivision] = useState('study-abroad');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name';
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

  const currentCampus = CAMPUS_LOCATIONS.find((c) => c.id === activeCampus) || CAMPUS_LOCATIONS[0];

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Hero Banner in Bright Clean University Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-7 sm:p-10 relative overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.05)] text-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-[#d71920] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#d71920]" />
              <span>Colombo 04 & Kandy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Campuses & Contact
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              In-person counselling by appointment or walk-in, and online advisory support.
            </p>
            <div className="pt-1 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="tel:+94774807748"
                className="flex items-center gap-2 text-slate-900 hover:text-[#d71920] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d71920]" />
                <span>07748 07748</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href="https://wa.me/94774807748"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href="mailto:info@aia.lk"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>info@aia.lk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Campus Cards + Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Campus Details & Maps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200/90 shadow-xs p-1.5 rounded-full flex items-center gap-1 w-fit">
              <button
                onClick={() => setActiveCampus('colombo')}
                className={`py-2 px-5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCampus === 'colombo'
                    ? 'bg-[#d71920] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Colombo Campus
              </button>
              <button
                onClick={() => setActiveCampus('kandy')}
                className={`py-2 px-5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCampus === 'kandy'
                    ? 'bg-[#d71920] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Kandy Campus
              </button>
            </div>

            {/* Selected Campus Card */}
            <div className="liquid-glass-card rounded-3xl p-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900">
                  {currentCampus.city} Campus
                </h3>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  {currentCampus.counsellingNote}
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d71920] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Address:</strong>
                    <span>{currentCampus.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#d71920] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Operating Hours:</strong>
                    <span>{currentCampus.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#d71920] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Phone / WhatsApp:</strong>
                    <a href={`tel:${currentCampus.phone}`} className="text-[#d71920] font-bold hover:underline">
                      {currentCampus.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#d71920] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Direct Email:</strong>
                    <a href={`mailto:${currentCampus.email}`} className="text-slate-600 hover:underline">
                      {currentCampus.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Buttons */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20am%20inquiring%20about%20the%20${currentCampus.city}%20campus.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-md shadow-emerald-950/20 backdrop-blur-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp {currentCampus.city} Desk</span>
                </a>
                <a
                  href={`tel:${currentCampus.phone}`}
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 py-2.5 px-4 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#d71920]" />
                  <span>Call {currentCampus.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md p-1 bg-white h-72">
              <iframe
                title={`${currentCampus.city} Campus Location`}
                src={currentCampus.mapEmbedUrl}
                width="100%"
                height="100%"
                className="rounded-[22px] w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 space-y-6 relative overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.06)] text-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d71920]">
                  Direct Enquiry
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Send an Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed font-normal">
                  Fill in your details below and an AIA counsellor from Colombo or Kandy will reach out within 24 hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Kasun Bandara"
                      className={`w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'
                      } text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1 pl-2">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="e.g. 077 480 7748"
                      className={`w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'
                      } text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1 pl-2">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. kasun@gmail.com"
                      className={`w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'
                      } text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1 pl-2">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Division of Interest
                    </label>
                    <select
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full text-xs py-2.5 px-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#d71920] focus:bg-white"
                    >
                      <option value="study-abroad">Study Abroad (17 Countries)</option>
                      <option value="credit-management">Professional Education – Credit Management (SLICM)</option>
                      <option value="engineering-it">Engineering & IT (BIET)</option>
                      <option value="business-acca">Business & ACCA (Alpha Business School)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message or Academic Query
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about your academic background or destination preferences..."
                      className="w-full text-xs py-2.5 px-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#d71920] focus:bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full liquid-glass-red py-3 px-6 text-white rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4 relative z-10">
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Enquiry Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-normal">
                    Thank you, <strong className="text-slate-900">{name}</strong>. An AIA senior counsellor will review your message and reach out on <strong className="text-slate-900">{phone}</strong>.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20just%20submitted%20an%20enquiry%20under%20${encodeURIComponent(name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-md shadow-emerald-950/20 backdrop-blur-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed up via WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
