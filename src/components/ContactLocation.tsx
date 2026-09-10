import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Navigation, Car, Bus, Accessibility, ExternalLink, Instagram, Facebook, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-b border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous breathing room */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-pink-600" />
            <span>Find Us in Nairobi</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact & Location <span className="text-pink-600">Details</span> in <span className="text-emerald-500">Nairobi</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Conveniently situated along Thika Superhighway at Garden City Business Park, with dedicated covered parking, wheelchair access, and seamless transit links.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Info & Social Media Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-pink-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 border border-pink-100">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Direct Phone Line
                  </span>
                  <div className="font-display text-2xl font-black text-slate-900">
                    {CLINIC_INFO.phone}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pt-0.5">
                    Call during clinic hours for appointments, inquiries, and immediate emergency triage.
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 pt-3.5">
                    <a
                      href={`tel:${CLINIC_INFO.phoneClean}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={`https://wa.me/${CLINIC_INFO.phoneClean.replace('+', '')}?text=Hello%20EverSmile%20Dental,%20I%20would%20like%20to%20inquire%20about%20dental%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Address Card with Google Maps Direct Link */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Physical Address
                  </span>
                  <div className="font-display text-lg font-bold text-slate-900 leading-snug">
                    Garden City, Business Park, A103 Thika Rd, Nairobi, Kenya
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Building A, Suite A103 (Ground Floor). Follow the Business Park signage opposite the main mall entrance.
                  </p>
                  
                  <div className="pt-3">
                    <a
                      href={CLINIC_INFO.socialLinks.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Open in Google Maps App</span>
                      <ExternalLink className="w-3 h-3 text-emerald-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect on Social Media Card with provided TikTok, Instagram, Facebook Links */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <h4 className="font-display text-base font-bold text-slate-900">
                  Connect With EverSmile Online
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Follow our daily smile transformations, oral hygiene tips, patient reviews, and clinic updates on social media:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {/* TikTok Link */}
                <a
                  href={CLINIC_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.29.98.19 2.05-.09 2.78-.77.56-.52.93-1.24.97-2.01.05-2.92.01-5.84.02-8.76.01-3.33-.02-6.67.01-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      TikTok
                    </div>
                    <div className="text-[10px] text-slate-400">@eversmile_dental</div>
                  </div>
                </a>

                {/* Instagram Link */}
                <a
                  href={CLINIC_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-300 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover:text-pink-600">
                      Instagram
                    </div>
                    <div className="text-[10px] text-slate-400">@eversmiledental_ke</div>
                  </div>
                </a>

                {/* Facebook Link */}
                <a
                  href={CLINIC_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 group-hover:text-sky-700">
                      Facebook
                    </div>
                    <div className="text-[10px] text-slate-400">EverSmile Dental</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Accessibility & Transit Highlights */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Getting to the Clinic
              </h4>
              
              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <Car className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>By Private Vehicle:</strong> Take Exit 7 off Thika Superhighway. Dedicated covered visitor parking is available inside Garden City Mall & Business Park.
                </span>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <Bus className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Public Transit (Matatu):</strong> Any Thika Rd matatu or bus (Routes 44, 45, 17B, 237) alighting at the Garden City Overpass bus stop.
                </span>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <Accessibility className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Wheelchair Accessible:</strong> Ground-level clinic entrance with ramp access and elevator service throughout the business park.
                </span>
              </div>
            </div>

          </div>

          {/* Right: Map Embed & Live Navigation Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg">
              {/* Map Header */}
              <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-pink-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-800">
                    EverSmile Dental • Garden City Business Park
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                  Thika Road, Exit 7, Nairobi
                </span>
              </div>

              {/* Responsive Map Embed */}
              <div className="relative h-[420px] w-full bg-slate-100">
                <iframe
                  title="EverSmile Dental Location at Garden City Business Park Nairobi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.895319803157!2d36.87770857577553!3d-1.2324083358941785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1681ab811a43%3A0x6d9f0490b2170be1!2sGarden%20City%20Business%20Park!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer with Direct Google Maps Link */}
              <div className="p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="text-slate-600 text-center sm:text-left">
                  <span>📍 GPS Coordinates: </span>
                  <span className="font-mono text-slate-800 font-bold">1.2324° S, 36.8799° E</span>
                </div>
                
                <a
                  href={CLINIC_INFO.socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-emerald-600 hover:from-pink-700 hover:to-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Live Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-white/80" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
