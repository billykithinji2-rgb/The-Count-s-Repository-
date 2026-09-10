import React from 'react';
import { Phone, MapPin, Mail, Clock, Heart, FileCode, ShieldCheck, Instagram, Facebook, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenHtmlExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenHtmlExport }) => {
  return (
    <footer className="bg-white text-slate-700 pt-20 pb-14 border-t border-pink-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-100">
          
          {/* Col 1: Brand Info & Social Media Links */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block group">
              <Logo size="md" showText={true} />
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Modern, gentle, and family-friendly dental clinic at Garden City Business Park, Nairobi. Dedicated to crafting confident, radiant smiles for patients of every generation.
            </p>

            {/* Social Media Links with specific requested URLs */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Follow & Connect With Us:
              </span>
              <div className="flex items-center gap-3">
                {/* TikTok */}
                <a
                  href={CLINIC_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow EverSmile Dental on TikTok"
                  className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.29.98.19 2.05-.09 2.78-.77.56-.52.93-1.24.97-2.01.05-2.92.01-5.84.02-8.76.01-3.33-.02-6.67.01-10z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={CLINIC_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow EverSmile Dental on Instagram"
                  className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                  href={CLINIC_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow EverSmile Dental on Facebook"
                  className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                {/* Google Maps Pin */}
                <a
                  href={CLINIC_INFO.socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View EverSmile Dental on Google Maps"
                  className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Accredited & Regulated by KMPDC (Kenya)</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
              Core Dental Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#services" className="hover:text-pink-600 transition-colors">
                  Teeth Whitening (Laser & Cosmetic)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition-colors">
                  Dental Implants & Titanium Screws
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition-colors">
                  Orthodontics & Clear Aligners
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition-colors">
                  Routine Checkups & Deep Scaling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition-colors">
                  Pediatric Dentistry for Kids
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition-colors">
                  Emergency Same-Day Dental Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours Summary */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
              Clinic Schedule
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div>
                <span className="text-slate-900 font-bold block">Mon – Fri:</span>
                <span className="text-emerald-700 font-semibold">8:00 AM – 5:00 PM</span>
              </div>
              <div>
                <span className="text-slate-900 font-bold block">Saturday:</span>
                <span className="text-emerald-700 font-semibold">8:00 AM – 3:00 PM</span>
              </div>
              <div>
                <span className="text-slate-900 font-bold block">Sunday:</span>
                <span className="text-rose-500 font-semibold">Closed (Emergency Line Open)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact Details & CTAs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
              Clinic Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="flex items-center gap-2.5 font-bold text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sm">{CLINIC_INFO.phone}</span>
              </a>

              <a
                href={CLINIC_INFO.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-pink-600 transition-colors"
              >
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Garden City, Business Park, A103 Thika Rd, Nairobi, Kenya</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Book Appointment Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with generous padding */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EverSmile Dental. All rights reserved. Garden City Business Park, Nairobi, Kenya.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CLINIC_INFO.socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition-colors font-medium inline-flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <button
              onClick={onOpenHtmlExport}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-pink-600 transition-colors cursor-pointer font-medium"
            >
              <FileCode className="w-3.5 h-3.5 text-pink-500" />
              <span>Standalone HTML Source</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
