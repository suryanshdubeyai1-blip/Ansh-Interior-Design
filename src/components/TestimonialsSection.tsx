import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_DETAILS } from '../data/interiorData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filter === 'residential') return !t.projectType.toLowerCase().includes('office');
    if (filter === 'commercial') return t.projectType.toLowerCase().includes('office') || t.projectType.toLowerCase().includes('clinic');
    return true;
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [filteredTestimonials.length]);

  const activeReview = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F5F2EB] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Proof Aggregate */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Real Client Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-[#1A1A1A]">
              Praised by Homeowners & Offices in Meerut
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
              Authentic feedback from our completed turnkey projects across Kankar Kheda, Sardhana Road, and Meerut Cantt.
            </p>
          </div>

          {/* Google 4.9 Score Box */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5E0D8] shadow-sm flex items-center gap-4 self-start md:self-auto">
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#C5A059] font-bold text-lg font-playfair shrink-0">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-neutral-900">
                Google Verified Rating ({BUSINESS_DETAILS.reviewsCount} Reviews)
              </p>
              <p className="text-[11px] text-neutral-500">100% Client Satisfaction Record</p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl border border-[#E5E0D8] shadow-lg p-7 sm:p-12 relative overflow-hidden transition-all duration-300">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-neutral-100 pointer-events-none" />

            <div className="relative z-10">
              {/* Star Rating & Verified Badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-neutral-900 tabular-nums">5.0 / 5.0</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Google Review</span>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-xl font-normal text-neutral-800 leading-relaxed italic mb-8">
                "{activeReview.reviewText}"
              </blockquote>

              {/* Author & Project Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-neutral-100">
                <div>
                  <h4 className="text-base font-bold font-playfair text-[#1A1A1A]">
                    {activeReview.author}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    <span>{activeReview.role}</span>
                    <span className="mx-1.5 text-neutral-400">·</span>
                    <span className="font-medium text-[#C5A059]">{activeReview.location}</span>
                  </p>
                </div>

                <div className="text-xs text-neutral-500 text-left sm:text-right">
                  <span className="block font-medium text-neutral-800">{activeReview.projectType}</span>
                  <span className="text-[11px] text-neutral-400">{activeReview.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to review by ${item.author}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-white hover:bg-[#1A1A1A] text-neutral-700 hover:text-white border border-neutral-200 shadow-sm transition-all active:scale-95 cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-white hover:bg-[#1A1A1A] text-neutral-700 hover:text-white border border-neutral-200 shadow-sm transition-all active:scale-95 cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Preview Grid Below Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-200/60">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div
              key={t.id}
              onClick={() => {
                const targetIdx = filteredTestimonials.findIndex((item) => item.id === t.id);
                if (targetIdx !== -1) setCurrentIndex(targetIdx);
              }}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                activeReview.id === t.id
                  ? 'bg-white border-[#C5A059] shadow-md'
                  : 'bg-white/70 hover:bg-white border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-neutral-900">{t.author}</span>
                <span className="text-[11px] text-[#C5A059] font-medium">{t.location}</span>
              </div>
              <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed italic mb-2">
                "{t.reviewText}"
              </p>
              <span className="text-[11px] text-neutral-400 font-medium">
                {t.projectType}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
