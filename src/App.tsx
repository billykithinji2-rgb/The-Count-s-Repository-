import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { WorkingHours } from './components/WorkingHours';
import { ContactLocation } from './components/ContactLocation';
import { BookingForm } from './components/BookingForm';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { HtmlExportModal } from './components/HtmlExportModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Routine Checkups & Cleaning');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const bookingSection = document.getElementById('book-appointment');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-pink-100 selection:text-pink-900">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenHtmlExport={() => setIsExportModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Us Section */}
        <AboutUs />

        {/* 3. Services Grid */}
        <Services onSelectServiceForBooking={(service) => handleOpenBooking(service)} />

        {/* 4. Working Hours Section */}
        <WorkingHours onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Contact & Location Details */}
        <ContactLocation />

        {/* 6. Booking Form */}
        <BookingForm
          preselectedService={selectedService}
          onClearPreselectedService={() => setSelectedService('Routine Checkups & Cleaning')}
        />

        {/* 7. Patient Testimonials & FAQ */}
        <TestimonialsFaq />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenHtmlExport={() => setIsExportModalOpen(true)}
      />

      {/* Customer Assistance AI Chatbot */}
      <Chatbot onOpenBooking={(service) => handleOpenBooking(service)} />

      {/* Standalone HTML Export Modal */}
      <HtmlExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
