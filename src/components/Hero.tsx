import React from 'react';
import { Calendar, ShieldCheck, Star, Sparkles, CheckCircle2, ArrowRight, Clock, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Logo } from './Logo';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-pink-50">
      {/* Delicate ambient pastel glows */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-[500px] h-[500px] rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-[460px] h-[460px] rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headlines, Value Prop & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Eyebrow with Pink & Emerald Accent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-pink-50/90 border border-pink-200/80 text-pink-700 text-xs sm:text-sm font-semibold shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Welcoming Smiles at Garden City Business Park, Nairobi</span>
            </div>

            {/* Main Headline with Distinctive Font & Pink/LightGreen Lettering */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Bright, Confident Smiles Begin with{' '}
              <span className="text-pink-600 inline-block">Gentle Care</span> &{' '}
              <span className="text-emerald-500 inline-block">Pure Radiance</span>
            </h1>

            {/* Spacious Value Proposition */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience modern, anxiety-free family dentistry at <strong className="text-slate-900 font-bold">EverSmile Dental</strong>. From dazzling laser teeth whitening and permanent titanium implants to joyful pediatric visits, our licensed specialists prioritize comfort, precision, and lasting oral health.
            </p>

            {/* Value Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-1 text-left max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">100% Gentle & Pain-Free</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">NHIF & Major Insurances</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">Same-Day Emergencies</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 text-white text-base font-bold px-8 py-4 rounded-2xl shadow-lg shadow-pink-600/20 hover:shadow-xl hover:shadow-pink-600/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-pink-200" />
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-white/90" />
              </button>
              
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-pink-50/50 text-slate-800 border border-slate-200 hover:border-pink-200 text-base font-semibold px-7 py-4 rounded-2xl shadow-2xs transition-colors"
              >
                <Phone className="w-4 h-4 text-pink-600" />
                <span>Call: {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Social Channels & Map Fast Links */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs">
              <span className="text-slate-400 font-medium">Connect with us:</span>
              
              <a
                href={CLINIC_INFO.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 transition-colors font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>Google Maps Directions</span>
              </a>

              <a
                href={CLINIC_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-300 text-slate-700 hover:text-pink-700 transition-colors font-medium"
              >
                <span className="font-bold">TikTok</span>
              </a>

              <a
                href={CLINIC_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-300 text-slate-700 hover:text-pink-700 transition-colors font-medium"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram</span>
              </a>

              <a
                href={CLINIC_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 transition-colors font-medium"
              >
                <Facebook className="w-3.5 h-3.5 text-sky-600" />
                <span>Facebook</span>
              </a>
            </div>

            {/* Trust Proof Banner */}
            <div className="pt-5 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 border-t border-slate-100 mt-6">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-800">4.9/5 Rating</span>
                <span>(380+ Patient Reviews)</span>
              </div>
              <div className="hidden sm:inline text-slate-300">•</div>
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Licensed Dental Board of Kenya</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card with Clinic Experience & Logo Badge */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Showcase Card */}
              <div className="relative rounded-3xl bg-white p-5 sm:p-6 shadow-xl border border-pink-100/80 ring-1 ring-slate-100 overflow-hidden">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
                  {/* High quality clean dental clinic interior */}
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="EverSmile Dental Clinic Interior in Nairobi"
                    className="w-full h-full object-cover opacity-95 transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />
                  
                  {/* Floating Logo Badge in Top Left */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md flex items-center gap-2.5 border border-pink-100">
                    <Logo size="sm" />
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight">
                        <span className="text-pink-600">Ever</span>
                        <span className="text-emerald-500">Smile</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-semibold">Verified Practice</div>
                    </div>
                  </div>

                  {/* Accepting Patients Pill */}
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span>Open for Visits</span>
                  </div>

                  {/* Overlay Bottom Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg text-slate-900">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-black text-pink-600 uppercase tracking-wider">
                          Garden City Business Park
                        </div>
                        <div className="text-sm font-bold text-slate-900">
                          Suite A103, Thika Road, Nairobi
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-emerald-700 font-bold flex items-center gap-1 justify-end">
                          <Clock className="w-3.5 h-3.5" />
                          <span>8:00 AM – 5:00 PM</span>
                        </div>
                        <div className="text-[10px] text-slate-500">Mon – Fri • Sat till 3:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Stats Grid with Pink and Emerald styling */}
                <div className="grid grid-cols-3 gap-3 mt-5 text-center">
                  <div className="bg-pink-50/60 rounded-2xl p-3 border border-pink-100/80">
                    <div className="font-display text-2xl font-black text-pink-600">12k+</div>
                    <div className="text-xs font-semibold text-slate-700">Smiles Treated</div>
                  </div>
                  <div className="bg-emerald-50/60 rounded-2xl p-3 border border-emerald-100/80">
                    <div className="font-display text-2xl font-black text-emerald-600">15+</div>
                    <div className="text-xs font-semibold text-slate-700">Years Practice</div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80">
                    <div className="font-display text-2xl font-black text-slate-800">100%</div>
                    <div className="text-xs font-semibold text-slate-700">Gentle Care</div>
                  </div>
                </div>

              </div>

              {/* Floating review card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-100 items-center gap-3.5 max-w-xs animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-sm">
                  WM
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">"Painless & friendly team!"</div>
                  <div className="text-slate-500 text-[11px]">Wanjiku M. • Laser Whitening</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
