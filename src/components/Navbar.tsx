import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/interiorData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFA]/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D8] py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform focus:outline-none"
            aria-label="Anas Interior Designer Home"
          >
            <span
              className={`text-xl sm:text-2xl font-bold tracking-tight font-playfair transition-colors ${
                isScrolled ? 'text-[#1A1A1A] group-hover:text-[#C5A059]' : 'text-white group-hover:text-[#DFBF7A]'
              }`}
            >
              Anas Interior Designer
            </span>
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <a
              href="#before-after"
              className={`transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-[#1A1A1A]/80' : 'text-white/90'
              }`}
            >
              Before & After
            </a>
            <a
              href="#styles"
              className={`transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-[#1A1A1A]/80' : 'text-white/90'
              }`}
            >
              Design Styles
            </a>
            <a
              href="#estimator"
              className={`transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-[#1A1A1A]/80' : 'text-white/90'
              }`}
            >
              Cost Estimator
            </a>
            <a
              href="#reviews"
              className={`transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-[#1A1A1A]/80' : 'text-white/90'
              }`}
            >
              Reviews (4.9★)
            </a>
            <a
              href="#faqs"
              className={`transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-[#1A1A1A]/80' : 'text-white/90'
              }`}
            >
              FAQs
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-[#1A1A1A]/80' : 'text-white/90'
              }`}
            >
              Meerut Studio
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_DETAILS.cleanPhone}`}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md border transition-all whitespace-nowrap ${
                isScrolled
                  ? 'border-[#C5A059]/40 text-[#1A1A1A] hover:bg-[#F5F2EB]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>+91 70885 71598</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#C5A059] hover:bg-[#B48F47] transition-all rounded-md shadow-sm hover:shadow active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_DETAILS.cleanPhone}`}
              className="p-2 rounded-md bg-[#C5A059] text-white active:scale-95"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-[#1A1A1A] hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAFAFA] text-[#1A1A1A] border-b border-[#E5E0D8] px-5 py-6 space-y-4 shadow-xl animate-in fade-in duration-200">
          <div className="space-y-3 pb-3 border-b border-neutral-200">
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-800 hover:text-[#C5A059]"
            >
              Before & After Transformations
            </a>
            <a
              href="#styles"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-800 hover:text-[#C5A059]"
            >
              Design Styles (Classic, Modern, Rustic...)
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-800 hover:text-[#C5A059]"
            >
              Interior Cost Estimator
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-800 hover:text-[#C5A059]"
            >
              Google Reviews (4.9★ - 32 Reviews)
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-800 hover:text-[#C5A059]"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-800 hover:text-[#C5A059]"
            >
              Meerut Studio & Directions
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_DETAILS.cleanPhone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-[#C5A059] text-[#1A1A1A] font-semibold text-sm hover:bg-[#F5F2EB]"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call: +91 70885 71598</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#C5A059] text-white font-medium text-sm hover:bg-[#B48F47] shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Site Visit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
