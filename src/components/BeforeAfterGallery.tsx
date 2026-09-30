import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, Columns2, Sparkles, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import { BEFORE_AFTER_PROJECTS } from '../data/interiorData';

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(BEFORE_AFTER_PROJECTS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject =
    BEFORE_AFTER_PROJECTS.find((p) => p.id === selectedProjectId) || BEFORE_AFTER_PROJECTS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Real Transformations in Meerut</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-[#1A1A1A]">
              Before & After Transformations
            </h2>
            <p className="mt-2 text-neutral-600 max-w-xl text-sm sm:text-base">
              Drag the interactive slider handle or switch to side-by-side view to witness how raw brick, cement shells, and outdated spaces are sculpted into luxury sanctuaries.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5F2EB] rounded-lg border border-[#E5E0D8] self-start md:self-auto">
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-white text-[#1A1A1A] shadow-sm font-semibold'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Interactive Slider</span>
            </button>
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                viewMode === 'side-by-side'
                  ? 'bg-white text-[#1A1A1A] shadow-sm font-semibold'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar">
          {BEFORE_AFTER_PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all border cursor-pointer ${
                selectedProjectId === proj.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-[#C5A059]'
              }`}
            >
              <span>{proj.title.split('–')[0]}</span>
              <span className="opacity-60 text-xs ml-1.5">({proj.category})</span>
            </button>
          ))}
        </div>

        {/* Main Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase (8 Columns) */}
          <div className="lg:col-span-8">
            {viewMode === 'slider' ? (
              /* Interactive Comparison Slider */
              <div
                ref={containerRef}
                onClick={handleContainerClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                className="relative h-[340px] sm:h-[480px] w-full rounded-xl overflow-hidden shadow-lg border border-neutral-200 select-none cursor-ew-resize bg-neutral-900"
              >
                {/* AFTER Image (Full background layer) */}
                <img
                  src={activeProject.afterImage}
                  alt={`After renovation: ${activeProject.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* AFTER Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold rounded border border-[#C5A059]/40 tracking-wider">
                  AFTER · {activeProject.afterLabel}
                </div>

                {/* BEFORE Image (Clipped layer) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeProject.beforeImage}
                    alt={`Before renovation: ${activeProject.title}`}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%',
                    }}
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle sepia/gray tint on before layer to emphasize transformation */}
                  <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
                </div>

                {/* BEFORE Badge */}
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1 bg-neutral-900/80 backdrop-blur-sm text-neutral-200 text-xs font-semibold rounded border border-neutral-700 tracking-wider"
                  style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
                >
                  BEFORE · {activeProject.beforeLabel}
                </div>

                {/* Vertical Divider Line with Grab Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-xl border-2 border-white hover:scale-110 active:scale-95 transition-transform">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>

                {/* Helpful drag prompt banner at bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/65 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[11px] font-medium pointer-events-none border border-white/10">
                  Slide left / right to compare transformation
                </div>
              </div>
            ) : (
              /* Side-by-Side Dual View */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow border border-neutral-200 bg-neutral-900 h-72 sm:h-96 group">
                  <img
                    src={activeProject.beforeImage}
                    alt={`Before: ${activeProject.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-neutral-900/90 text-white text-xs font-semibold rounded">
                    BEFORE
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <p className="font-semibold text-neutral-100">{activeProject.beforeLabel}</p>
                    <p className="text-neutral-300 text-[11px] line-clamp-2 mt-0.5">{activeProject.beforeDesc}</p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow border border-[#C5A059]/40 bg-neutral-900 h-72 sm:h-96 group">
                  <img
                    src={activeProject.afterImage}
                    alt={`After: ${activeProject.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#C5A059] text-white text-xs font-semibold rounded shadow-md">
                    AFTER
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <p className="font-semibold text-[#DFBF7A]">{activeProject.afterLabel}</p>
                    <p className="text-neutral-200 text-[11px] line-clamp-2 mt-0.5">{activeProject.afterDesc}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details & Story (4 Columns) */}
          <div className="lg:col-span-4 bg-[#F5F2EB] p-6 sm:p-7 rounded-xl border border-[#E5E0D8] space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-1">
                <span>{activeProject.category}</span>
              </div>
              <h3 className="text-xl font-bold font-playfair text-[#1A1A1A] leading-snug">
                {activeProject.title}
              </h3>
            </div>

            {/* Metadata pills replaced with clean unboxed editorial list */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-600 border-y border-neutral-200/80 py-3">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-medium text-neutral-900">{activeProject.location}</span>
              </div>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-medium text-neutral-900">{activeProject.duration}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
              <div>
                <span className="font-semibold text-neutral-900 block mb-1">The Challenge (Before):</span>
                <p className="text-neutral-600 leading-relaxed">{activeProject.beforeDesc}</p>
              </div>

              <div>
                <span className="font-semibold text-neutral-900 block mb-1">The Transformation (After):</span>
                <p className="text-neutral-600 leading-relaxed">{activeProject.afterDesc}</p>
              </div>
            </div>

            {/* Materials Used */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900 block mb-2">
                Key Materials & Hardware
              </span>
              <div className="space-y-1.5">
                {activeProject.materials.map((mat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#C5A059] hover:bg-[#B48F47] text-white text-xs font-semibold rounded-md shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <span>Request Similar Transformation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
