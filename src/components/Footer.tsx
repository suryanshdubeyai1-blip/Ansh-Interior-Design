import React from 'react';
import { Phone, MapPin, Star, Sparkles, ArrowUp } from 'lucide-react';
import { BUSINESS_DETAILS, SERVICES_LIST } from '../data/interiorData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Overview (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl sm:text-2xl font-bold font-playfair tracking-tight text-white block">
              Anas Interior Designer
            </span>
            <p className="text-xs text-[#DFBF7A] font-playfair italic">
              अनस इंटीरियर डिजाइनर · Meerut, Uttar Pradesh
            </p>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Premier bespoke interior design and master woodwork studio in Meerut. Transforming residential and commercial properties into refined, functional works of art with guaranteed material excellence.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                ))}
              </div>
              <span className="text-xs text-white font-semibold">4.9 / 5.0</span>
              <span className="text-xs text-neutral-400">· 32 Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#before-after" className="hover:text-[#C5A059] transition-colors">
                  Before & After Transformations
                </a>
              </li>
              <li>
                <a href="#styles" className="hover:text-[#C5A059] transition-colors">
                  Design Styles (Classic, Modern...)
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#C5A059] transition-colors">
                  Cost Estimator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C5A059] transition-colors">
                  Client Reviews & Proof
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#C5A059] transition-colors">
                  FAQs & Warranties
                </a>
              </li>
              <li>
                <a href="#appointments" className="hover:text-[#C5A059] transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Interior Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {SERVICES_LIST.map((srv, idx) => (
                <li key={idx} className="hover:text-white transition-colors">
                  {srv.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Meerut Studio
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Mahaveer College, Sardhana Rd, Kankar Kheda, Meerut, UP 250001
            </p>
            <p className="text-xs text-neutral-300 font-semibold pt-1">
              Direct: +91 70885 71598
            </p>
            <p className="text-[11px] text-neutral-500">
              Open Mon-Sat: 9:30 AM – 8:30 PM
            </p>
          </div>
        </div>

        {/* Quiet Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Anas Interior Designer. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Kankar Kheda · Sardhana Rd · Meerut Cantt</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
