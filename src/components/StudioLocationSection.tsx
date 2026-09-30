import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Building, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/interiorData';

export const StudioLocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Anas Interior Designer, Mahaveer College, Sardhana Rd, Kankar Kheda, Meerut, UP 250001'
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F5F2EB] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Contact Info & Address (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
                <MapPin className="w-4 h-4" />
                <span>Visit Our Meerut Workshop & Studio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-[#1A1A1A]">
                Anas Interior Designer
              </h2>
              <p className="text-sm text-neutral-600 mt-1 font-playfair italic">
                अनस इंटीरियर डिजाइनर · Kankar Kheda, Meerut
              </p>

              <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
                Whether you want to inspect wood finishes, discuss your floor layout with Mohd. Anas Saifi, or request an in-person measurement visit, our studio doors are open.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E5E0D8]">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1">
                    Studio & Workshop Address
                  </h4>
                  <p className="text-sm text-neutral-800 font-medium">
                    {BUSINESS_DETAILS.address}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Landmark: {BUSINESS_DETAILS.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E5E0D8]">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1">
                    Direct Phone & WhatsApp
                  </h4>
                  <a
                    href={`tel:${BUSINESS_DETAILS.cleanPhone}`}
                    className="text-base text-neutral-900 font-bold hover:text-[#C5A059] transition-colors block"
                  >
                    +91 70885 71598
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Speak directly with Mohd. Anas Saifi for inquiries and quotes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E5E0D8]">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-neutral-800 font-medium">
                    {BUSINESS_DETAILS.workingHours}
                  </p>
                  <p className="text-xs text-emerald-700 font-medium mt-0.5">
                    Open for on-site visits 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2.5">
                Active Service Coverage in Meerut & NCR
              </h4>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_DETAILS.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 text-xs rounded-md font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Map Action Button */}
            <div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-neutral-800 text-white text-xs font-semibold rounded-md shadow transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right: Map Graphic / Studio Visualization (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white rounded-2xl border border-[#E5E0D8] shadow-lg overflow-hidden h-full flex flex-col">
              {/* Map Header */}
              <div className="p-4 bg-neutral-900 text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold tracking-wide">Meerut Location Hub</span>
                </div>
                <span className="text-neutral-400">PIN: 250001</span>
              </div>

              {/* Interactive Stylized Map Interface */}
              <div className="relative flex-1 min-h-[320px] bg-neutral-100 flex items-center justify-center overflow-hidden p-6">
                {/* Visual architectural grid representation */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Map vector route representation */}
                <svg className="absolute inset-0 w-full h-full stroke-neutral-300 fill-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 100 Q 150 150 300 120 T 600 200" strokeWidth="6" stroke="#E5E0D8" />
                  <path d="M 200 0 Q 220 180 250 350" strokeWidth="8" stroke="#D5CFBE" />
                  <path d="M 100 280 L 500 220" strokeWidth="4" stroke="#E5E0D8" />
                </svg>

                {/* Pin Card Overlay */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-[#C5A059]/40 shadow-2xl max-w-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-[#C5A059] flex items-center justify-center mx-auto mb-3 shadow-md">
                    <MapPin className="w-6 h-6 fill-[#C5A059]" />
                  </div>
                  <h4 className="text-base font-bold font-playfair text-[#1A1A1A]">
                    Anas Interior Designer
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Mahaveer College, Sardhana Rd, Kankar Kheda, Meerut
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-around text-xs text-neutral-600">
                    <div>
                      <span className="block font-bold text-neutral-900">4.9★</span>
                      <span className="text-[10px] text-neutral-400">32 Reviews</span>
                    </div>
                    <div className="w-px h-6 bg-neutral-200" />
                    <div>
                      <span className="block font-bold text-emerald-600">Open Today</span>
                      <span className="text-[10px] text-neutral-400">Until 8:30 PM</span>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full py-2.5 px-4 bg-[#C5A059] hover:bg-[#B48F47] text-white text-xs font-semibold rounded-md shadow-sm transition-all"
                  >
                    Navigate on Google Maps
                  </a>
                </div>
              </div>

              {/* Landmark Callouts */}
              <div className="p-4 bg-[#FAFAFA] border-t border-neutral-200 text-xs text-neutral-600 grid grid-cols-2 gap-2">
                <div>
                  <span className="font-semibold text-neutral-800">Primary Highway:</span>
                  <p>Sardhana Rd Bypass, Meerut</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-800">Closest Hub:</span>
                  <p>Mahaveer Educational Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
