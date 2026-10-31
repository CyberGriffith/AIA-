import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 rounded-3xl liquid-glass-dark p-5 border border-white/20 text-white shadow-[0_25px_60px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-lg shadow-sm">
                💬
              </div>
              <div>
                <p className="text-sm font-bold text-white">AIA Admissions Team</p>
                <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Colombo & Kandy Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mt-3 leading-relaxed font-normal">
            Have questions about Study Abroad, Credit Management (SLICM), BIET Engineering, or ACCA? Connect directly with an AIA counsellor on WhatsApp.
          </p>

          <a
            href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20would%20like%20to%20inquire%20about%20educational%20pathways."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-full text-xs font-semibold shadow-md shadow-emerald-950/40 backdrop-blur-md transition-all cursor-pointer"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            Direct Helpline: 07748 07748
          </p>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-emerald-600/90 hover:bg-emerald-600 text-white px-4.5 py-3 rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.35)] backdrop-blur-xl border border-emerald-400/30 transition-all duration-200 cursor-pointer active:scale-95"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide">
          WhatsApp 07748 07748
        </span>
      </button>
    </div>
  );
};
