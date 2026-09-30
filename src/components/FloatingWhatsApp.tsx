import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/interiorData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultUrl =
    'https://wa.me/917088571598?text=Hello%20Anas%20Interior%20Designer,%20I%20want%20to%20know%20more%20about%20your%20services';

  const quickMessages = [
    {
      label: 'General Inquiry (Default)',
      text: 'Hello Anas Interior Designer, I want to know more about your services',
    },
    {
      label: 'Modern Furniture Designs',
      text: "Hi Anas Interior, I'm looking for modern furniture designs for my home in Meerut.",
    },
    {
      label: 'Book Free Site Measurement',
      text: 'Hi Mohd. Anas, I would like to schedule a free site measurement visit at my residence.',
    },
    {
      label: 'Modular Kitchen Estimate',
      text: 'Hello, please send me information and price estimates for modular kitchens with quartz counters.',
    },
  ];

  const handleSendCustom = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917088571598?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-sm">
                  AI
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#1A1A1A]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-playfair">
                  Mohd. Anas Saifi
                </h4>
                <p className="text-[11px] text-emerald-400">Online · Typically replies in &lt;5 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
              aria-label="Close WhatsApp chat drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F5F2EB]/50 space-y-3 max-h-[360px] overflow-y-auto text-xs">
            {/* Owner Speech Bubble */}
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-neutral-200 shadow-sm text-neutral-800 space-y-1">
              <p className="font-medium">
                नमस्ते! Welcome to Anas Interior Designer (अनस इंटीरियर डिजाइनर).
              </p>
              <p className="text-[11px] text-neutral-600">
                Are you looking for bespoke furniture, modular kitchens, or turnkey interiors in Meerut? Click an option below to start chatting:
              </p>
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-1.5 pt-1">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleSendCustom(msg.text)}
                  className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] text-neutral-800 font-medium transition-all flex items-center justify-between gap-2 shadow-xs cursor-pointer group"
                >
                  <span className="text-[11px]">{msg.label}</span>
                  <Send className="w-3 h-3 text-neutral-400 group-hover:text-[#C5A059] shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Call Link */}
          <div className="p-3 bg-white border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500">
            <span>Or call directly:</span>
            <a
              href={`tel:${BUSINESS_DETAILS.cleanPhone}`}
              className="font-bold text-[#C5A059] hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>+91 70885 71598</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="flex items-center gap-2">
        {/* Pulsating Quick Label (Hidden on small mobile screens to keep within 15% sticky cap) */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-neutral-200 text-xs font-semibold text-neutral-800 cursor-pointer hover:bg-white transition-all hover:scale-105 select-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat with Anas</span>
          </div>
        )}

        {/* WhatsApp Icon Button */}
        <a
          href={defaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // If user specifically wants quick menu on desktop, or direct click
            // Clicking directly opens the requested master prompt link:
            // https://wa.me/917088571598?text=Hello%20Anas%20Interior%20Designer,%20I%20want%20to%20know%20more%20about%20your%20services
          }}
          className="relative group bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp with Anas Interior Designer"
        >
          {/* Subtle gold ring accent */}
          <div className="absolute -inset-1 rounded-full bg-[#C5A059]/30 blur-xs -z-10 group-hover:bg-[#C5A059]/60 transition-colors" />

          {/* SVG WhatsApp icon as requested */}
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.393.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
