import React, { useState, useId } from 'react';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/interiorData';

interface CostEstimatorProps {
  onProceedWithEstimate: (details: {
    property: string;
    scope: string;
    tier: string;
    estimatedCost: string;
    timeline: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onProceedWithEstimate }) => {
  const propertySelectId = useId();
  const [propertyType, setPropertyType] = useState<'1bhk' | '2bhk' | '3bhk' | 'villa' | 'office'>('3bhk');
  const [scope, setScope] = useState<'full' | 'kitchen' | 'wardrobes' | 'living' | 'ceiling'>('full');
  const [tier, setTier] = useState<'premium' | 'royal'>('premium');

  // Calculation logic based on standard Meerut & NCR luxury interior benchmarks
  const calculateEstimate = () => {
    let base = 0;
    let days = 25;

    // Property multipliers
    const propMap = {
      '1bhk': { baseCost: 220000, days: 20 },
      '2bhk': { baseCost: 380000, days: 30 },
      '3bhk': { baseCost: 550000, days: 40 },
      villa: { baseCost: 950000, days: 55 },
      office: { baseCost: 420000, days: 30 },
    };

    const currentProp = propMap[propertyType];

    // Scope reduction factors
    const scopeFactor = {
      full: 1.0,
      kitchen: 0.35,
      wardrobes: 0.30,
      living: 0.25,
      ceiling: 0.15,
    };

    // Tier factor
    const tierMultiplier = tier === 'royal' ? 1.45 : 1.0;

    base = currentProp.baseCost * scopeFactor[scope] * tierMultiplier;
    days = Math.round(currentProp.days * (scope === 'full' ? 1 : 0.6));

    const minCost = Math.round((base * 0.9) / 5000) * 5000;
    const maxCost = Math.round((base * 1.15) / 5000) * 5000;

    return {
      minCostFormatted: `₹${(minCost / 100000).toFixed(2)} Lakhs`,
      maxCostFormatted: `₹${(maxCost / 100000).toFixed(2)} Lakhs`,
      timeline: `${days} - ${days + 10} Working Days`,
      minCost,
      maxCost,
    };
  };

  const estimate = calculateEstimate();

  const handleBookWithEstimate = () => {
    const propNames = {
      '1bhk': '1 BHK Apartment',
      '2bhk': '2 BHK Apartment',
      '3bhk': '3 BHK Flat / Kothi',
      villa: 'Independent Villa / Bungalow',
      office: 'Commercial Office / Showroom',
    };
    const scopeNames = {
      full: 'Full Turnkey Interior & Woodwork',
      kitchen: 'Modular Kitchen Island & Cabinetry',
      wardrobes: 'Bespoke Wardrobes & Storage',
      living: 'Living Room TV Unit & Paneling',
      ceiling: 'Designer False Ceiling & Lighting',
    };
    const tierNames = {
      premium: 'Premium Luxury (HDHMR + Acrylic + Hettich)',
      royal: 'Royal Signature (Solid Teak + Italian Marble + Hafele)',
    };

    onProceedWithEstimate({
      property: propNames[propertyType],
      scope: scopeNames[scope],
      tier: tierNames[tier],
      estimatedCost: `${estimate.minCostFormatted} - ${estimate.maxCostFormatted}`,
      timeline: estimate.timeline,
    });
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hi Anas Interior Designer, I used your website Cost Estimator for my ${propertyType.toUpperCase()} in Meerut. Estimated range: ${estimate.minCostFormatted} - ${estimate.maxCostFormatted}. I would like to schedule a free site measurement.`
    );
    window.open(`https://wa.me/917088571598?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Calculator className="w-4 h-4" />
            <span>Instant & Transparent Budgeting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-[#1A1A1A]">
            Interior & Furniture Cost Estimator
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            Configure your property type and scope to calculate real-time estimated investments and timelines for your home in Meerut or NCR.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Controls (7 Cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            {/* Step 1: Property Type */}
            <div>
              <label htmlFor={propertySelectId} className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-2.5">
                1. Select Property Configuration
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {[
                  { id: '1bhk', label: '1 BHK' },
                  { id: '2bhk', label: '2 BHK' },
                  { id: '3bhk', label: '3 BHK' },
                  { id: 'villa', label: 'Villa' },
                  { id: 'office', label: 'Office' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPropertyType(item.id as any)}
                    className={`py-2 px-2 text-xs font-semibold rounded-md border text-center transition-all cursor-pointer ${
                      propertyType === item.id
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-[#FAFAFA] text-neutral-700 border-neutral-200 hover:border-[#C5A059]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope of Work */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-2.5">
                2. Project Scope
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'full', label: 'Complete Turnkey (Full Home)' },
                  { id: 'kitchen', label: 'Modular Kitchen Only' },
                  { id: 'wardrobes', label: 'Custom Wardrobes & Storage' },
                  { id: 'living', label: 'Living Room & TV Wall Paneling' },
                  { id: 'ceiling', label: 'False Ceiling & Cove Lighting' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScope(item.id as any)}
                    className={`py-2.5 px-3 text-left font-medium rounded-md border transition-all cursor-pointer flex items-center justify-between ${
                      scope === item.id
                        ? 'bg-[#F5F2EB] text-[#1A1A1A] border-[#C5A059] font-semibold'
                        : 'bg-[#FAFAFA] text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <span>{item.label}</span>
                    {scope === item.id && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Tier */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-2.5">
                3. Material & Craftsmanship Tier
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => setTier('premium')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    tier === 'premium'
                      ? 'border-[#C5A059] bg-[#F5F2EB]'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-neutral-900">Premium Luxury</span>
                    {tier === 'premium' && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </div>
                  <p className="text-[11px] text-neutral-600">
                    Action TESA HDHMR, Hettich channels, anti-scratch acrylic & PU finish.
                  </p>
                </button>

                <button
                  onClick={() => setTier('royal')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    tier === 'royal'
                      ? 'border-[#C5A059] bg-[#F5F2EB]'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-neutral-900">Royal Signature</span>
                    {tier === 'royal' && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </div>
                  <p className="text-[11px] text-neutral-600">
                    Solid Teak wood, Italian Statuario marble slabs, Hafele mechanisms & profile glass.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary (5 Cols) */}
          <div className="md:col-span-5 bg-[#1A1A1A] text-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#DFBF7A] uppercase tracking-wider font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Investment</span>
              </div>

              {/* Price display with tabular figures */}
              <div className="mb-4">
                <div className="text-2xl sm:text-3xl font-bold font-playfair tracking-tight text-white tabular-nums">
                  {estimate.minCostFormatted}
                  <span className="text-neutral-400 text-lg font-normal"> to </span>
                  {estimate.maxCostFormatted}
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  *Includes materials, master carpentry, finishing, hardware & on-site assembly in Meerut.
                </p>
              </div>

              {/* Estimated Timeline */}
              <div className="bg-neutral-800/80 rounded-lg p-3.5 border border-neutral-700 space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Estimated Timeline:</span>
                  </span>
                  <span className="font-semibold text-white tabular-nums">{estimate.timeline}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300 pt-1 border-t border-neutral-700/60">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Hardware Warranty:</span>
                  </span>
                  <span className="font-semibold text-white">Up to 10 Years</span>
                </div>
              </div>

              <div className="text-xs text-neutral-300 space-y-1.5 mb-6">
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Free in-person measurement visit in Meerut</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>3D CAD & VR visual preview before cutting wood</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Zero hidden costs; transparent bill of quantities</span>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <button
                onClick={handleBookWithEstimate}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#C5A059] hover:bg-[#B48F47] text-white text-xs font-semibold rounded-md shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Book Free Site Visit with this Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleWhatsAppQuote}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/60 text-emerald-400 text-xs font-semibold rounded-md transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Get Itemized Quote on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
