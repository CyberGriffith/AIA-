import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface SlideData {
  id: string;
  country: string;
  flag: string;
  destinationId: string;
  badgeLabel: string;
  heading: string;
  description: string;
  ctaText: string;
  image: string;
  highlights: string[];
}

export const HERO_SLIDES: SlideData[] = [
  {
    id: 'malaysia',
    country: 'Malaysia',
    flag: '🇲🇾',
    destinationId: 'malaysia',
    badgeLabel: 'Branch Campuses & Twinning Degrees',
    heading: 'Study in Malaysia',
    description: 'Discover quality education at leading universities.',
    ctaText: 'Explore Malaysia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=2560&q=85',
    highlights: ['UK & Australian Branch Campuses', 'Lower Tuition & Living Expenses', 'Direct Campus Transfer Options'],
  },
  {
    id: 'south-korea',
    country: 'South Korea',
    flag: '🇰🇷',
    destinationId: 'south-korea',
    badgeLabel: 'Technology, Engineering & Business',
    heading: 'Study in South Korea',
    description: 'Explore education and career opportunities in Korea.',
    ctaText: 'Explore South Korea',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=2560&q=85',
    highlights: ['English-Taught Degree Tracks', 'Merit Scholarships Available', 'D-10 Post-Study Work Search Visa'],
  },
  {
    id: 'united-kingdom',
    country: 'United Kingdom',
    flag: '🇬🇧',
    destinationId: 'united-kingdom',
    badgeLabel: 'Undergraduate & Postgraduate Degrees',
    heading: 'Study in the UK',
    description: 'Choose from a wide range of recognised universities.',
    ctaText: 'Explore the UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2560&q=85',
    highlights: ['Russell Group & Leading Universities', 'Intensive 1-Year Master’s Options', '2-Year Graduate Route Visa'],
  },
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    destinationId: 'canada',
    badgeLabel: 'Universities & Applied Colleges',
    heading: 'Study in Canada',
    description: 'Find the right programme for your future.',
    ctaText: 'Explore Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=2560&q=85',
    highlights: ['Up to 3-Year Post-Graduation Work Permit', 'Integrated Co-op Work Placements', 'Accredited Public Institutions'],
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    destinationId: 'australia',
    badgeLabel: 'Group of Eight & National Universities',
    heading: 'Study in Australia',
    description: 'Explore internationally recognised education opportunities.',
    ctaText: 'Explore Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2560&q=85',
    highlights: ['Group of Eight & National Universities', 'Fortnightly Part-Time Work Rights', 'Post-Study Work Visa Pathways'],
  },
  {
    id: 'dubai-uae',
    country: 'Dubai / UAE',
    flag: '🇦🇪',
    destinationId: 'dubai-uae',
    badgeLabel: 'Global Branch Campuses',
    heading: 'Study in Dubai',
    description: 'Discover international education closer to home.',
    ctaText: 'Explore Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2560&q=85',
    highlights: ['Degrees Conferred by Parent Institutions', 'Fast & Reliable Visa Processing', 'Dedicated Academic Free Zones'],
  },
];

interface HeroSliderProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenConsultation: (pathwayId?: string, destId?: string) => void;
  onOpenFindMyPath?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigate,
  onOpenConsultation,
  // onOpenFindMyPath preserved in props for backwards compatibility
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Automatically change slides every 5 seconds (5000ms)
  useEffect(() => {
    if (!isPaused) {
      slideIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900 text-white select-none border-b border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="AIA Study Abroad Destination Highlights"
    >
      {/* Taller, cinematic hero container with optimal vertical balance */}
      <div className="relative min-h-[700px] sm:min-h-[780px] lg:min-h-[820px] xl:min-h-[850px] h-[88vh] max-h-[920px] w-full flex flex-col justify-between">
        
        {/* Full-width Destination Image Slides with Crossfade and Subtle Zoom */}
        <div className="absolute inset-0">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`${slide.country} - Asian International Academy`}
                  className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out brightness-105 contrast-102 ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                {/* Subtle photographic overlays: keeps the architecture & landscape bright, vibrant and fully visible */}
                {/* 1. Left-side subtle directional gradient solely for headline & description contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
                
                {/* 2. Soft bottom vignette behind destination selector buttons */}
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/55 to-transparent" />
                
                {/* 3. Soft top gradient behind floating pill navbar */}
                <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Foreground Content Container - Perfectly vertically balanced */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36 lg:pt-40 pb-8 flex-1 flex flex-col justify-center">
          <div key={currentSlide.id} className="max-w-3xl space-y-4 sm:space-y-6 animate-hero-fade">
            
            {/* Liquid-Glass Destination Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-xs text-white border border-white/20 shadow-sm">
              <span className="text-sm">{currentSlide.flag}</span>
              <span className="text-[#ff4d4f] font-bold uppercase tracking-wider text-[11px]">
                {currentSlide.country}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-slate-200 text-[11px] font-medium tracking-wide">
                {currentSlide.badgeLabel}
              </span>
            </div>

            {/* Impressive Main Headline with Crisp Editorial Hierarchy */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {currentSlide.heading}
            </h1>

            {/* Short, Professional Description with high contrast and readable line-height */}
            <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-normal max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              {currentSlide.description}
            </p>

            {/* Exactly Two CTAs: Explore Destination + Book Free Consultation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 sm:pt-5">
              <button
                onClick={() => onNavigate('destination-detail', currentSlide.destinationId)}
                className="liquid-glass-red inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-white rounded-full text-sm font-semibold tracking-wide cursor-pointer group shadow-lg shadow-red-950/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenConsultation('study-abroad', currentSlide.destinationId)}
                className="bg-white/15 hover:bg-white/25 backdrop-blur-md inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white rounded-full text-sm font-semibold transition-all cursor-pointer border border-white/30 hover:border-white/50 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Frosted Glass Previous & Next Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#d71920]/90 backdrop-blur-xl border border-white/20 hover:border-white/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Previous destination slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#d71920]/90 backdrop-blur-xl border border-white/20 hover:border-white/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Next destination slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Destination Selector Component - Slimmer, elegant liquid-glass pill bar */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 w-full pb-5 sm:pb-7">
          <div className="bg-black/40 backdrop-blur-2xl border border-white/15 rounded-full p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`flex-1 min-w-[105px] sm:min-w-0 py-2 px-2.5 sm:px-3 rounded-full text-center transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? 'bg-[#d71920] text-white shadow-[0_2px_12px_rgba(215,25,32,0.5)]'
                        : 'text-white/75 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5 min-w-0">
                      <span className="text-xs sm:text-sm shrink-0">{slide.flag}</span>
                      <span className={`text-xs tracking-tight truncate ${isActive ? 'font-bold text-white' : 'font-medium text-slate-200'}`}>
                        {slide.country}
                      </span>
                    </div>

                    {/* Ultra-slim active progress line at the base of the pill */}
                    {isActive && (
                      <div className="absolute bottom-0 inset-x-2 h-[2px] bg-white/40 rounded-full overflow-hidden">
                        <div
                          key={`progress-${idx}-${isPaused}`}
                          className={`h-full bg-white rounded-full ${
                            isPaused ? 'w-full' : 'animate-hero-progress'
                          }`}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
