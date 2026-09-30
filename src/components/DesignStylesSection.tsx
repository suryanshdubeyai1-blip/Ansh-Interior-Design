import React, { useState } from 'react';
import { Sparkles, Palette, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { DESIGN_STYLES, DesignStyle } from '../data/interiorData';

interface DesignStylesSectionProps {
  onSelectStyleForBooking: (styleName: string) => void;
}

export const DesignStylesSection: React.FC<DesignStylesSectionProps> = ({
  onSelectStyleForBooking,
}) => {
  const [activeStyleId, setActiveStyleId] = useState<string>(DESIGN_STYLES[1].id); // Modern default

  const activeStyle: DesignStyle =
    DESIGN_STYLES.find((s) => s.id === activeStyleId) || DESIGN_STYLES[0];

  return (
    <section id="styles" className="py-20 sm:py-28 bg-[#F5F2EB] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Mastery Across Architectural Genres</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-[#1A1A1A]">
            Curated Interior Design Styles
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            From the time-honored majesty of Classic teak to the streamlined precision of contemporary Modernism, our master craftsmen tailor every joinery, fabric, and texture.
          </p>
        </div>

        {/* Style Selector Tabs */}
        <div className="flex justify-center items-center flex-wrap gap-2 mb-12">
          {DESIGN_STYLES.map((style) => {
            const isSelected = style.id === activeStyleId;
            return (
              <button
                key={style.id}
                onClick={() => setActiveStyleId(style.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md scale-105'
                    : 'bg-white/80 hover:bg-white text-neutral-700 border-neutral-300 hover:border-[#C5A059]'
                }`}
              >
                <span>{style.name}</span>
                <span className={`text-[11px] ${isSelected ? 'text-[#DFBF7A]' : 'text-neutral-400'}`}>
                  ({style.hindiName})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Style Spotlight Card */}
        <div className="bg-white rounded-2xl border border-[#E5E0D8] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left: Details (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#C5A059] font-semibold uppercase tracking-wider mb-2">
                <span>Signature Interior Genre</span>
                <span>·</span>
                <span>{activeStyle.hindiName} स्टाइल</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1A1A1A] mb-3">
                {activeStyle.name} Interior & Furniture Aesthetics
              </h3>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                {activeStyle.description}
              </p>

              {/* Distinguishing Highlight */}
              <div className="p-4 bg-[#F5F2EB] rounded-lg border-l-4 border-[#C5A059] mb-6">
                <span className="text-xs uppercase font-bold text-neutral-800 tracking-wider block mb-1">
                  Design Signature
                </span>
                <p className="text-sm font-medium text-neutral-900">{activeStyle.highlight}</p>
                <p className="text-xs text-neutral-600 mt-1">
                  <span className="font-medium text-neutral-700">Ideal For: </span>
                  {activeStyle.idealFor}
                </p>
              </div>

              {/* Color Palette Swatches */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-2.5">
                  <Palette className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Curated Harmonic Palette</span>
                </div>
                <div className="flex items-center gap-3">
                  {activeStyle.palette.map((hex, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 group">
                      <div
                        className="w-10 h-10 rounded-md shadow-inner border border-black/10 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-[10px] font-mono text-neutral-500">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Materials */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-2">
                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Specialized Materials & Finishes</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-700">
                  {activeStyle.keyMaterials.map((mat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA to customize in this style */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectStyleForBooking(activeStyle.name)}
                className="flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#C5A059] hover:bg-[#B48F47] rounded-md transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                <span>Design My Home in {activeStyle.name} Style</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-neutral-500">
                100% Custom Made in Meerut
              </span>
            </div>
          </div>

          {/* Right: Rich Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-neutral-900 overflow-hidden group">
            <img
              src={activeStyle.sampleImage}
              alt={`${activeStyle.name} Style interior example`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs text-[#DFBF7A] uppercase tracking-wider font-semibold block mb-1">
                Portfolio Inspiration
              </span>
              <p className="text-lg font-playfair font-semibold">
                {activeStyle.name} Architecture & Custom Woodcraft
              </p>
              <p className="text-xs text-neutral-300 mt-1">
                Engineered for longevity, moisture resistance, and timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
