import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Compass, 
  ArrowUpRight, 
  MapPin,
  Calendar
} from 'lucide-react';
import { PageId } from '../types';
import { ALL_DESTINATIONS } from '../data/aiaData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: () => void;
  onOpenFindMyPath: () => void;
}

interface NavItem {
  id: string;
  label: string;
  page: PageId;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'study-abroad', label: 'Study Abroad', page: 'study-abroad', hasDropdown: true },
  { id: 'credit-management', label: 'Professional Education', page: 'credit-management' },
  { id: 'events', label: 'Events', page: 'events' },
  { id: 'success-stories', label: 'Success Stories', page: 'success-stories' },
  { id: 'about', label: 'About AIA', page: 'about' },
  { id: 'contact', label: 'Contact', page: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  onOpenFindMyPath,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studyAbroadDropdown, setStudyAbroadDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const featuredDestinations = ALL_DESTINATIONS.filter((d) => d.featured).slice(0, 8);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId, extraId?: string) => {
    onNavigate(page, extraId);
    setMobileMenuOpen(false);
    setStudyAbroadDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getActiveItemId = () => {
    if (currentPage === 'study-abroad' || currentPage === 'destination-detail') return 'study-abroad';
    if (currentPage === 'credit-management') return 'credit-management';
    if (currentPage === 'events') return 'events';
    if (currentPage === 'success-stories') return 'success-stories';
    if (currentPage === 'about') return 'about';
    if (currentPage === 'contact') return 'contact';
    return null;
  };

  const activeItemId = getActiveItemId();

  return (
    <header
      className={`sticky top-3 sm:top-5 z-50 w-full px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300 ${
        currentPage === 'home' ? '-mb-20 sm:-mb-24' : 'mb-6 sm:mb-8'
      }`}
    >
      <div className="max-w-[1380px] mx-auto pointer-events-auto">
        {/* Floating Liquid-Glass Pill Navigation Bar */}
        <nav
          className={`w-full rounded-full transition-all duration-300 relative ${
            isScrolled
              ? 'bg-[#080d19]/85 backdrop-blur-2xl border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.65)] py-2 px-3 sm:px-5'
              : 'bg-[#090e1c]/75 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.45)] py-2.5 px-3 sm:px-6'
          } flex items-center justify-between gap-2 sm:gap-4`}
          aria-label="Main Floating Navigation"
        >
          {/* 1. AIA Holdings Original Logo on the Left */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none cursor-pointer group shrink-0"
            aria-label="AIA Holdings Home"
          >
            {/* Pristine white backing capsule ensuring 100% brand color accuracy on dark glass */}
            <div className="bg-white/95 hover:bg-white px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-sm flex items-center transition-all group-hover:shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/aia-logo_3fefb8d5.png`}
                alt="AIA Holdings – Asian International Academy"
                className="h-7 sm:h-8.5 w-auto object-contain transition-transform duration-150 group-hover:scale-102"
              />
            </div>
          </button>

          {/* 2. Desktop Navigation Links Horizontally in the Middle */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItemId === item.id;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setStudyAbroadDropdown(true)}
                    onMouseLeave={() => setStudyAbroadDropdown(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.page)}
                      className={`px-3 xl:px-3.5 py-1.5 rounded-full text-[12px] xl:text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#d71920] text-white shadow-md shadow-red-950/40 font-semibold'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          studyAbroadDropdown ? 'rotate-180 text-white' : 'text-white/60'
                        }`}
                      />
                    </button>

                    {/* Liquid Glass Dropdown Menu */}
                    {studyAbroadDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[460px] bg-[#090e1c]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] border border-white/20 p-5 z-50 text-white animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                          <div>
                            <p className="text-xs font-bold text-white uppercase tracking-wider">
                              Global Destinations
                            </p>
                            <p className="text-[11px] text-slate-300">17 represented countries & university networks</p>
                          </div>
                          <button
                            onClick={() => handleNavClick('study-abroad')}
                            className="text-xs font-bold text-[#ff4d4f] hover:underline flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>View All 17</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {featuredDestinations.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => handleNavClick('destination-detail', d.id)}
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/10 text-left transition-colors group cursor-pointer border border-transparent hover:border-white/10"
                            >
                              <span className="text-lg">{d.flag}</span>
                              <div>
                                <p className="text-xs font-bold text-white group-hover:text-[#ff4d4f] transition-colors">
                                  {d.name}
                                </p>
                                <p className="text-[10px] text-slate-400 truncate max-w-[130px]">
                                  {d.region}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                          <span className="text-slate-400 text-[11px]">Personalized admissions guidance</span>
                          <button
                            onClick={() => {
                              setStudyAbroadDropdown(false);
                              onOpenConsultation();
                            }}
                            className="font-bold text-[#ff4d4f] hover:underline cursor-pointer"
                          >
                            Book Consultation →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 xl:px-3.5 py-1.5 rounded-full text-[12px] xl:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#d71920] text-white shadow-md shadow-red-950/40 font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* 3. Action Buttons on the Right */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Secondary Action: Find My Path */}
            <button
              onClick={onOpenFindMyPath}
              className="flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 text-xs font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full backdrop-blur-md transition-all cursor-pointer hover:border-white/25"
            >
              <Compass className="w-4 h-4 text-white/80 shrink-0" />
              <span>Find My Path</span>
            </button>

            {/* Primary Action: Book a Free Consultation */}
            <button
              onClick={onOpenConsultation}
              className="px-4.5 py-2 text-xs font-bold text-white bg-[#d71920] hover:bg-[#b8141a] rounded-full shadow-lg shadow-red-950/50 hover:shadow-red-900/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              Book a Free Consultation
            </button>
          </div>

          {/* 4. Mobile Menu & Fast Consultation Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="py-1.5 px-3 bg-[#d71920] text-white rounded-full text-xs font-bold shadow-md cursor-pointer whitespace-nowrap"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Liquid-Glass Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#090e1c]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-white animate-in slide-in-from-top-2 duration-150">
            {/* Campus & Helpline Notice */}
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-xs flex items-center justify-between">
              <div>
                <p className="font-bold text-white">Direct Helpline: 07748 07748</p>
                <p className="text-[11px] text-slate-300">Colombo 04 & Kandy Centres</p>
              </div>
              <a
                href="https://wa.me/94774807748"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFindMyPath();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full text-xs font-semibold text-white cursor-pointer"
              >
                <Compass className="w-4 h-4 text-white/80 shrink-0" />
                <span>Find My Path</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="py-2.5 px-3 bg-[#d71920] hover:bg-[#b8141a] text-white rounded-full text-xs font-bold text-center shadow-md cursor-pointer"
              >
                Free Consultation
              </button>
            </div>

            {/* Navigation Links */}
            <div className="border-t border-white/10 pt-2 space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-2 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  currentPage === 'home'
                    ? 'bg-[#d71920] text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                Home
              </button>
              {NAV_ITEMS.map((item) => {
                const isActive = activeItemId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.page)}
                    className={`w-full text-left py-2 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#d71920] text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Centres Footer */}
            <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10 space-y-1">
              <p><strong className="text-slate-300">Colombo:</strong> 329 Galle Road, Colombo 04</p>
              <p><strong className="text-slate-300">Kandy:</strong> 675 William Gopallawa Mawatha, Kandy</p>
              <p className="text-[10px] text-slate-500">Walk-ins & scheduled appointments welcome</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
