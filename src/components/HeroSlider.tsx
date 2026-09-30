import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, Star, Sparkles, MessageCircle, ShieldCheck, Ruler } from 'lucide-react';
import { HERO_SLIDES, BUSINESS_DETAILS } from '../data/interiorData';

interface HeroSliderProps {
  onOpenBooking: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [quoteLang, setQuoteLang] = useState<'hi' | 'en'>('hi');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
      }, 6000);
    }
    return () => resetTimeout();
  }, [currentSlide, isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#1A1A1A] text-white pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase Slider"
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        const hasError = imageErrors[slide.id];

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image or resilient luxury fallback */}
            {!hasError ? (
              <img
                src={slide.imageUrl}
                alt={slide.title}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(slide.id)}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${slide.fallbackGradient} flex items-center justify-center`}>
                <div className="text-center p-8 opacity-20">
                  <Ruler className="w-24 h-24 mx-auto mb-4 text-[#C5A059]" />
                  <p className="font-playfair text-3xl">Anas Interior Designer</p>
                </div>
              </div>
            )}

            {/* Gradient Scrim Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
        );
      })}

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Subtle location & rating badge */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium tracking-wide uppercase text-[#DFBF7A]">
            <span className="flex items-center gap-1 bg-[#1A1A1A]/80 backdrop-blur-md px-3 py-1 rounded border border-[#C5A059]/30">
              <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-neutral-400">· 32 Verified Reviews</span>
            </span>
            <span className="text-neutral-300">Meerut, UP</span>
          </div>

          {/* Marquee Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-white leading-tight mb-4 text-balance">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 mb-8 max-w-2xl font-light leading-relaxed">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          {/* Owner Quote Card (Highlighting Mohd. Anas Saifi) */}
          <div className="mb-8 p-5 sm:p-6 rounded-lg bg-black/60 backdrop-blur-md border border-[#C5A059]/40 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C5A059]" />
            <div className="flex items-center justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#DFBF7A]">
                  Direct Message from Mohd. Anas Saifi
                </span>
                <span className="text-xs text-neutral-400">· Founder & Chief Designer</span>
              </div>

              {/* Language toggle for quote */}
              <div className="flex items-center gap-1 p-0.5 bg-neutral-800/80 rounded border border-neutral-700 text-xs">
                <button
                  onClick={() => setQuoteLang('hi')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    quoteLang === 'hi' ? 'bg-[#C5A059] text-white font-medium' : 'text-neutral-300 hover:text-white'
                  }`}
                  aria-label="View quote in Hindi"
                >
                  हिन्दी
                </button>
                <button
                  onClick={() => setQuoteLang('en')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    quoteLang === 'en' ? 'bg-[#C5A059] text-white font-medium' : 'text-neutral-300 hover:text-white'
                  }`}
                  aria-label="View quote in English"
                >
                  ENG
                </button>
              </div>
            </div>

            <blockquote className="text-sm sm:text-base text-neutral-100 font-medium leading-relaxed italic">
              "{quoteLang === 'hi' ? BUSINESS_DETAILS.quoteHindi : BUSINESS_DETAILS.quoteEnglish}"
            </blockquote>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Gold Book Consultation Button */}
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#C5A059] hover:bg-[#B48F47] transition-all rounded shadow-lg shadow-[#C5A059]/20 hover:shadow-xl hover:shadow-[#C5A059]/30 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>

            {/* Direct Call Now Button with pulse effect */}
            <a
              href={`tel:${BUSINESS_DETAILS.cleanPhone}`}
              className="relative group flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-600 hover:border-[#C5A059] transition-all rounded shadow-md active:scale-95"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <Phone className="w-4 h-4 text-[#C5A059] group-hover:rotate-12 transition-transform" />
              <span>Call Now: +91 70885 71598</span>
            </a>

            {/* Direct WhatsApp button */}
            <a
              href={BUSINESS_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slider Controls & Slide Indicators */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-4">
          {/* Slide Indicator bars */}
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className="group flex flex-col gap-1 focus:outline-none text-left"
                aria-label={`Jump to slide ${idx + 1}: ${slide.category}`}
              >
                <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-400 group-hover:text-white transition-colors">
                  0{idx + 1} · {slide.category}
                </span>
                <div className="w-24 sm:w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#C5A059] transition-all duration-500 ${
                      idx === currentSlide ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-white transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-white transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Markers Bar */}
      <div className="relative z-20 bg-[#141414] border-t border-neutral-800 text-neutral-300 py-3.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>100% Termite-Proof & BWP Marine Ply</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Ruler className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Free On-Site Precision Measurement</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Photorealistic 3D Renders Before Work</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Star className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>4.9★ Rated Local Meerut Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
