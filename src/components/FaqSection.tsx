import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_DETAILS } from '../data/interiorData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            Everything you need to know about our interior design workflow, measurements in Meerut, pricing models, and hardware guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-neutral-200 shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1A1A1A] font-playfair">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-[#F5F2EB] text-[#C5A059] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C5A059] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 pt-2 flex items-center gap-2 text-[11px] text-neutral-400">
                      <span className="text-[#C5A059] font-medium">Category:</span>
                      <span>{faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-xl bg-[#F5F2EB] border border-[#E5E0D8] text-center flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold font-playfair text-[#1A1A1A]">
              Have a custom requirement or question?
            </h4>
            <p className="text-xs text-neutral-600 mt-0.5">
              Speak directly with Mohd. Anas Saifi for honest advice on your floor plan.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_DETAILS.cleanPhone}`}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#1A1A1A] text-white hover:bg-neutral-800 text-xs font-semibold rounded-md transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call +91 70885 71598</span>
            </a>
            <a
              href={BUSINESS_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
