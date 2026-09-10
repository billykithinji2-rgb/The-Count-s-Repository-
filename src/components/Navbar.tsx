import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, Menu, X, FileCode, MapPin, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getClinicCurrentStatus } from '../utils/hoursHelper';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenHtmlExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenHtmlExport }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clinicStatus, setClinicStatus] = useState(getClinicCurrentStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // update status every minute
    const interval = setInterval(() => {
      setClinicStatus(getClinicCurrentStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Working Hours', href: '#hours' },
    { label: 'Location & Contact', href: '#contact' },
    { label: 'Patient Reviews', href: '#testimonials' },
  ];

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      {/* Top announcement & social bar - Clean white background with soft pink border */}
      <div className="bg-white border-b border-pink-100 text-slate-700 text-xs py-2 px-4 sm:px-6 lg:px-8 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Status & Address */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <span
                className={`w-2 h-2 rounded-full ${
                  clinicStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'
                }`}
              />
              {clinicStatus.statusBadge}
            </span>

            <a
              href={CLINIC_INFO.socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-slate-600 hover:text-pink-600 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-pink-500" />
              <span>Garden City Business Park, A103 Thika Rd, Nairobi</span>
            </a>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="flex items-center gap-4 text-xs">
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 border-r border-slate-200 pr-3 mr-1">
              {/* Instagram */}
              <a
                href={CLINIC_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EverSmile Dental on Instagram"
                className="w-6 h-6 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-700 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              {/* TikTok */}
              <a
                href={CLINIC_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EverSmile Dental on TikTok"
                className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex items-center justify-center transition-colors"
              >
                {/* TikTok SVG Icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.29.98.19 2.05-.09 2.78-.77.56-.52.93-1.24.97-2.01.05-2.92.01-5.84.02-8.76.01-3.33-.02-6.67.01-10z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={CLINIC_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EverSmile Dental on Facebook"
                className="w-6 h-6 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              {/* Google Maps Pin */}
              <a
                href={CLINIC_INFO.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                title="View clinic on Google Maps"
                className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone */}
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 font-bold text-pink-600 hover:text-pink-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <span className="text-slate-300 hidden sm:inline">•</span>

            <button
              onClick={onOpenHtmlExport}
              title="Download self-contained single HTML version"
              className="hidden sm:inline-flex items-center gap-1 text-slate-500 hover:text-pink-600 transition-colors text-xs cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5 text-emerald-500" />
              <span>Standalone HTML</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5'
            : 'bg-white py-5 shadow-2xs border-b border-pink-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo matching user uploaded smiley badge */}
          <a href="#" className="flex items-center gap-3.5 group">
            <Logo size="md" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-slate-900 leading-none">
                <span className="text-pink-600">Ever</span>
                <span className="text-emerald-500">Smile</span>
                <span className="text-slate-800 ml-1.5 text-lg font-bold">Dental</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wider uppercase mt-1">
                Garden City • Nairobi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with generous whitespace */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-pink-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-pink-600 px-4 py-2.5 rounded-xl hover:bg-pink-50/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>Call Us</span>
            </a>

            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-sm hover:shadow-md hover:shadow-pink-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden text-xs bg-pink-600 text-white font-bold px-3 py-2 rounded-xl shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-pink-600 hover:bg-pink-50 focus:outline-none transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-pink-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-pink-100 px-5 pt-4 pb-7 space-y-4 shadow-xl animate-fadeIn">
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-100 rounded-2xl flex items-center justify-between text-xs text-emerald-900">
              <span className="font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                {clinicStatus.detail}
              </span>
            </div>

            {/* Mobile Social Links Bar */}
            <div className="flex items-center justify-around p-3 bg-pink-50/50 rounded-2xl border border-pink-100 text-xs">
              <a
                href={CLINIC_INFO.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-slate-700 hover:text-pink-600"
              >
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Google Maps</span>
              </a>
              <span className="text-pink-200">|</span>
              <a
                href={CLINIC_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-slate-700 hover:text-pink-600"
              >
                <span>TikTok</span>
              </a>
              <span className="text-pink-200">|</span>
              <a
                href={CLINIC_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-slate-700 hover:text-pink-600"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram</span>
              </a>
              <span className="text-pink-200">|</span>
              <a
                href={CLINIC_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-slate-700 hover:text-pink-600"
              >
                <Facebook className="w-4 h-4 text-sky-600" />
                <span>Facebook</span>
              </a>
            </div>

            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-slate-800 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-pink-100 flex flex-col gap-2.5">
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border border-pink-200 text-pink-700 font-bold text-sm bg-pink-50/40"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>Call Clinic: {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 text-white font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenHtmlExport();
                }}
                className="flex items-center justify-center gap-1.5 text-xs text-slate-500 py-1"
              >
                <FileCode className="w-3.5 h-3.5 text-emerald-500" />
                <span>Export Standalone HTML</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
