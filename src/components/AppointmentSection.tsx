import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  CheckCircle2,
  Check,
  Send,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/interiorData';

interface AppointmentSectionProps {
  initialData?: {
    property?: string;
    scope?: string;
    tier?: string;
    estimatedCost?: string;
    timeline?: string;
    style?: string;
  } | null;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialData }) => {
  const [activeTab, setActiveTab] = useState<'custom-form' | 'calendly'>('custom-form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Kankar Kheda, Meerut');
  const [projectScope, setProjectScope] = useState('3 BHK Full Home Turnkey');
  const [designStyle, setDesignStyle] = useState('Modern');
  const [consultationType, setConsultationType] = useState<'home-visit' | 'studio-visit' | 'video-call'>('home-visit');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM – 1:00 PM)');
  const [notes, setNotes] = useState('');

  // Pre-fill if came from Cost Estimator or Style selector
  useEffect(() => {
    if (initialData) {
      if (initialData.scope) setProjectScope(initialData.scope);
      if (initialData.style) setDesignStyle(initialData.style);
      if (initialData.property) {
        setNotes(
          `Configured via Cost Estimator: Property: ${initialData.property}, Tier: ${initialData.tier || 'Standard'}, Estimated Budget: ${initialData.estimatedCost || 'N/A'}`
        );
      }
    }
  }, [initialData]);

  // Set default preferred date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate n8n workflow lead capture and enrichment
    setTimeout(() => {
      const randomRef = 'AID-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const generateWhatsAppConfirmationUrl = () => {
    const message = encodeURIComponent(
      `*New Consultation Booking [${bookingRef || 'AID-CONSULT'}]*\n` +
      `👤 Name: ${fullName}\n` +
      `📞 Phone: ${phone}\n` +
      `📍 Locality: ${locality}\n` +
      `🏠 Scope: ${projectScope}\n` +
      `🎨 Style: ${designStyle}\n` +
      `🗓️ Date: ${preferredDate} (${timeSlot})\n` +
      `🛠️ Type: ${consultationType === 'home-visit' ? 'Free In-Home Site Visit' : consultationType === 'studio-visit' ? 'Studio Visit at Kankar Kheda' : 'Virtual 3D Call'}\n` +
      (notes ? `📝 Details: ${notes}\n` : '') +
      `\nPlease confirm availability for Mohd. Anas Saifi.`
    );
    return `https://wa.me/917088571598?text=${message}`;
  };

  return (
    <section id="appointments" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#1A1A1A] scroll-mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <Calendar className="w-4 h-4" />
            <span>Complimentary Site Measurements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight text-[#1A1A1A]">
            Book a Free Site Visit & Consultation
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            Mohd. Anas Saifi and our senior architects visit your location in Meerut with material catalogs, laser measurement tools, and initial 3D ideas.
          </p>

          {/* Mode Switcher */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="inline-flex p-1 bg-[#F5F2EB] rounded-lg border border-[#E5E0D8]">
              <button
                onClick={() => setActiveTab('custom-form')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeTab === 'custom-form'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Instant Studio Booking (Preferred)
              </button>
              <button
                onClick={() => setActiveTab('calendly')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'calendly'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <span>Calendly Scheduler</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Box */}
        {activeTab === 'custom-form' ? (
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
                {/* Initial Data Badge if passed from other components */}
                {initialData && (
                  <div className="p-4 bg-[#F5F2EB] border-l-4 border-[#C5A059] rounded text-xs text-neutral-700 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-neutral-900">Pre-configured Project: </span>
                      <span>
                        {initialData.property || initialData.scope} ({initialData.style || 'Custom Style'})
                        {initialData.estimatedCost && ` · Est. ${initialData.estimatedCost}`}
                      </span>
                    </div>
                    <span className="text-[#C5A059] font-semibold">Loaded</span>
                  </div>
                )}

                {/* Section 1: Consultation Type */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-3">
                    1. Choose Consultation Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        id: 'home-visit',
                        title: 'Free In-Home Site Visit',
                        desc: 'We visit your flat, villa, or office in Meerut with laser measure & catalogs.',
                        badge: 'Recommended in Meerut',
                      },
                      {
                        id: 'studio-visit',
                        title: 'Visit Our Kankar Kheda Studio',
                        desc: 'Meet Mohd. Anas Saifi at our studio near Mahaveer College, Sardhana Rd.',
                        badge: 'See Physical Finishes',
                      },
                      {
                        id: 'video-call',
                        title: 'Virtual 3D Video Call',
                        desc: 'Share your floor plan online for immediate layout advice & preliminary pricing.',
                        badge: 'Instant & Convenient',
                      },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setConsultationType(type.id as any)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          consultationType === type.id
                            ? 'border-[#C5A059] bg-[#F5F2EB] shadow-sm'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-neutral-900">{type.title}</span>
                          {consultationType === type.id ? (
                            <Check className="w-4 h-4 text-[#C5A059]" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-neutral-300" />
                          )}
                        </div>
                        <p className="text-[11px] text-neutral-600 mb-2 leading-relaxed">{type.desc}</p>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C5A059]">
                          {type.badge}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 2: Contact Details */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-3">
                    2. Client Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-xs font-medium text-neutral-700 block mb-1">
                        Full Name *
                      </span>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Mohd. Zeeshan / Rohit Verma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-medium text-neutral-700 block mb-1">
                        WhatsApp / Phone Number *
                      </span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-medium text-neutral-700 block mb-1">
                        Locality / Area in Meerut *
                      </span>
                      <select
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm bg-white"
                      >
                        <option value="Kankar Kheda, Meerut">Kankar Kheda, Meerut</option>
                        <option value="Sardhana Road, Meerut">Sardhana Road, Meerut</option>
                        <option value="Modipuram, Meerut">Modipuram, Meerut</option>
                        <option value="Shastri Nagar, Meerut">Shastri Nagar, Meerut</option>
                        <option value="Delhi Road / TP Nagar, Meerut">Delhi Road / TP Nagar, Meerut</option>
                        <option value="Pallavpuram, Meerut">Pallavpuram, Meerut</option>
                        <option value="Meerut Cantt / Begum Bridge">Meerut Cantt / Begum Bridge</option>
                        <option value="Ganga Nagar, Meerut">Ganga Nagar, Meerut</option>
                        <option value="Other Meerut / NCR Location">Other Meerut / NCR Location</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Project Scope & Preferred Style */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-3">
                    3. Project Scope & Design Style
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-medium text-neutral-700 block mb-1">
                        Primary Space / Scope
                      </span>
                      <select
                        value={projectScope}
                        onChange={(e) => setProjectScope(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm bg-white"
                      >
                        <option value="Full Turnkey Home (2BHK / 3BHK / Villa)">Full Turnkey Home (2BHK / 3BHK / Villa)</option>
                        <option value="Modular Kitchen Island & Storage">Modular Kitchen Island & Storage</option>
                        <option value="Luxury Master Bedroom & Wardrobes">Luxury Master Bedroom & Wardrobes</option>
                        <option value="Living Room TV Console & Paneling">Living Room TV Console & Paneling</option>
                        <option value="Designer False Ceiling & Cove Lighting">Designer False Ceiling & Cove Lighting</option>
                        <option value="Corporate Office & Commercial Workstations">Corporate Office & Commercial Workstations</option>
                      </select>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-neutral-700 block mb-1">
                        Aesthetic Style Preference
                      </span>
                      <select
                        value={designStyle}
                        onChange={(e) => setDesignStyle(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm bg-white"
                      >
                        <option value="Modern (Minimalist & Fluted Louvers)">Modern (Minimalist & Fluted Louvers)</option>
                        <option value="Classic (Carved Teak & Regal Symmetry)">Classic (Carved Teak & Regal Symmetry)</option>
                        <option value="Rustic (Warm Earthy Wood & Textures)">Rustic (Warm Earthy Wood & Textures)</option>
                        <option value="Industrial (Black Metal Grids & Raw Concrete)">Industrial (Black Metal Grids & Raw Concrete)</option>
                        <option value="Traditional (Indian Heritage & CNC Jali Work)">Traditional (Indian Heritage & CNC Jali Work)</option>
                        <option value="Elegant (Champagne Gold & Curved Silhouettes)">Elegant (Champagne Gold & Curved Silhouettes)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 4: Schedule Timing */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-3">
                    4. Select Preferred Date & Window
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-medium text-neutral-700 block mb-1">
                        Site Visit Date
                      </span>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm bg-white"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-medium text-neutral-700 block mb-1">
                        Preferred Time Slot
                      </span>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm bg-white"
                      >
                        <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <span className="text-xs font-medium text-neutral-700 block mb-1">
                    Special Notes or Floor Plan Details (Optional)
                  </span>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. We have an unfurnished 3BHK flat in Kankar Kheda. Looking for modular kitchen and master bedroom woodwork..."
                    className="w-full px-3.5 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#C5A059] text-sm"
                  />
                </div>

                {/* Submit Row */}
                <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>100% Free Consultation. No purchase obligation.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C5A059] hover:bg-[#B48F47] text-white text-sm font-semibold rounded-md shadow-lg shadow-[#C5A059]/20 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Site Visit...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Free Site Visit</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Lead Enriched Confirmation Screen */
              <div className="p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Appointment Request Registered
                  </span>
                  <h3 className="text-2xl font-bold font-playfair text-[#1A1A1A]">
                    Thank You, {fullName || 'Valued Client'}!
                  </h3>
                  <p className="text-sm text-neutral-600 mt-2">
                    Booking Reference ID:{' '}
                    <span className="font-mono font-bold text-neutral-900">{bookingRef}</span>
                  </p>
                </div>

                {/* Summary of details */}
                <div className="bg-[#F5F2EB] p-5 rounded-xl border border-[#E5E0D8] text-left text-xs space-y-2 text-neutral-700">
                  <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                    <span className="text-neutral-500">Location:</span>
                    <span className="font-semibold text-neutral-900">{locality}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                    <span className="text-neutral-500">Scope:</span>
                    <span className="font-semibold text-neutral-900">{projectScope}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200/80 pb-2">
                    <span className="text-neutral-500">Preferred Slot:</span>
                    <span className="font-semibold text-neutral-900">
                      {preferredDate} ({timeSlot})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Assigned Designer:</span>
                    <span className="font-semibold text-[#C5A059]">Mohd. Anas Saifi (Lead Designer)</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600">
                  We have routed your details into our priority queue. For immediate confirmation, click below to open your pre-filled WhatsApp ticket with Mohd. Anas Saifi:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppConfirmationUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md shadow transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open Pre-filled WhatsApp Ticket</span>
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 border border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-xs font-medium rounded-md transition-colors cursor-pointer"
                  >
                    Modify / Book Another
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Calendly Widget Embed */
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden p-6 sm:p-10 text-center">
            <div className="max-w-2xl mx-auto mb-6">
              <h3 className="text-xl font-bold font-playfair text-[#1A1A1A] mb-2">
                Live Calendly Appointment Scheduler
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Direct calendar synchronization for site measurements in Meerut and studio meetings.
              </p>
            </div>

            {/* Embedded interactive schedule frame */}
            <div className="rounded-xl border border-neutral-200 bg-[#FAFAFA] p-6 max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-between text-xs text-neutral-600 border-b border-neutral-200 pb-3">
                <span className="font-semibold text-neutral-900">Anas Interior Designer Consultation</span>
                <span className="text-[#C5A059] font-medium">45 Mins · Free</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs">
                <div className="p-4 rounded-lg bg-white border border-neutral-200">
                  <span className="font-bold text-neutral-900 block mb-1">Host</span>
                  <p className="text-neutral-600">Mohd. Anas Saifi & Architecture Team</p>
                  <p className="text-[11px] text-neutral-400 mt-1">Mahaveer College, Sardhana Rd, Meerut</p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-neutral-200">
                  <span className="font-bold text-neutral-900 block mb-1">Locations Supported</span>
                  <p className="text-neutral-600">Kankar Kheda, Sardhana Rd, Modipuram, Shastri Nagar</p>
                </div>
              </div>

              <div className="py-4 bg-white rounded-lg border border-neutral-200">
                <p className="text-xs text-neutral-700 font-medium mb-3">
                  Select your consultation window via Calendly Web Integration:
                </p>
                <a
                  href={`https://calendly.com/?name=Anas%20Interior%20Designer%20Meerut`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-neutral-800 text-white text-xs font-semibold rounded-md shadow transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Open Calendly Booking Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>

              <p className="text-[11px] text-neutral-500">
                Need urgent on-site guidance today? Call our direct line: <a href={`tel:${BUSINESS_DETAILS.cleanPhone}`} className="text-[#C5A059] font-semibold underline">+91 70885 71598</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
