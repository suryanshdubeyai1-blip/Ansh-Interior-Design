import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { DesignStylesSection } from './components/DesignStylesSection';
import { CostEstimator } from './components/CostEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { AppointmentSection } from './components/AppointmentSection';
import { StudioLocationSection } from './components/StudioLocationSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [bookingPrefill, setBookingPrefill] = useState<{
    property?: string;
    scope?: string;
    tier?: string;
    estimatedCost?: string;
    timeline?: string;
    style?: string;
  } | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('appointments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStyle = (styleName: string) => {
    setBookingPrefill((prev) => ({
      ...prev,
      style: styleName,
    }));
    scrollToBooking();
  };

  const handleProceedEstimate = (details: {
    property: string;
    scope: string;
    tier: string;
    estimatedCost: string;
    timeline: string;
  }) => {
    setBookingPrefill(details);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Showcase Slider with Quote & CTAs */}
        <HeroSlider onOpenBooking={scrollToBooking} />

        {/* 2. Interactive Before & After Room Transformation Gallery */}
        <BeforeAfterGallery onOpenBooking={scrollToBooking} />

        {/* 3. Design Styles Exploration (Classic, Rustic, Modern, Industrial, Traditional, Elegant) */}
        <DesignStylesSection onSelectStyleForBooking={handleSelectStyle} />

        {/* 4. Interactive Cost & Space Estimator */}
        <CostEstimator onProceedWithEstimate={handleProceedEstimate} />

        {/* 5. Client Testimonials Carousel (4.9 Rating, 32 Reviews) */}
        <TestimonialsSection />

        {/* 6. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 7. Appointment Scheduling & Calendly Integration */}
        <AppointmentSection initialData={bookingPrefill} />

        {/* 8. Studio Location & Meerut Map Details */}
        <StudioLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Automation Button */}
      <FloatingWhatsApp />
    </div>
  );
}
