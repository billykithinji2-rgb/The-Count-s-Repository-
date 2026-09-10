import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Smile, Activity, Heart, AlertCircle, CheckCircle2, Clock, ArrowRight, Info, Phone } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
    { id: 'restorative', label: 'Implants & Restoration' },
    { id: 'preventive', label: 'Routine Checkups' },
    { id: 'pediatric', label: 'Pediatric Care' },
    { id: 'emergency', label: 'Emergency Care' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-pink-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-emerald-600" />;
      case 'Smile':
        return <Smile className="w-7 h-7 text-pink-600" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-emerald-600" />;
      case 'Heart':
        return <Heart className="w-7 h-7 text-pink-600" />;
      case 'AlertCircle':
        return <AlertCircle className="w-7 h-7 text-rose-600" />;
      default:
        return <Sparkles className="w-7 h-7 text-pink-600" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-white border-b border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with generous whitespace */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold tracking-wide uppercase">
            <Smile className="w-3.5 h-3.5 text-pink-600" />
            <span>Comprehensive Dental Solutions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Advanced Dental Services for{' '}
            <span className="text-pink-600">Every Smile</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From gentle routine cleanings and sparkling laser whitening to restorative implants and pediatrics, our treatments prioritize comfort, clinical safety, and long-term vitality.
          </p>
        </div>

        {/* Filter Tabs with spacious pills */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-600/20'
                  : 'bg-white text-slate-700 hover:bg-pink-50 hover:text-pink-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with generous spacing between items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top: Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                        isEven
                          ? 'bg-pink-50/80 border border-pink-100 group-hover:bg-pink-100'
                          : 'bg-emerald-50/80 border border-emerald-100 group-hover:bg-emerald-100'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                          isEven
                            ? 'bg-pink-50 text-pink-700 border-pink-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits with Emerald Checkmarks */}
                  <div className="space-y-3 mb-8 border-t border-slate-100 pt-5">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Duration & CTA Buttons */}
                <div className="pt-5 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Clock className="w-4 h-4 text-pink-500" />
                      <span>{service.duration}</span>
                    </span>
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-pink-600 hover:text-pink-800 font-bold inline-flex items-center gap-1 text-xs cursor-pointer"
                    >
                      <span>Details</span>
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 text-white font-bold text-sm py-3 px-5 rounded-2xl shadow-xs hover:shadow-md hover:shadow-pink-500/20 transition-all cursor-pointer"
                  >
                    <span>Book for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Emergency Contact */}
        <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border-2 border-pink-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider border border-rose-200">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Dental Emergency?</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Facing sudden acute tooth pain or accident trauma?
            </h4>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
              Don’t suffer in silence. Our emergency dental team prioritizes same-day appointments and urgent pain relief at Garden City Business Park.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
            <a
              href="tel:+254795803669"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold px-7 py-4 rounded-2xl shadow-md transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: +254 795 803 669</span>
            </a>
          </div>
        </div>

      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-pink-100 animate-fadeIn">
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">
                  Service Details
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 text-lg leading-none"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <div className="space-y-5 mb-8">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Patient Benefits:
                </h4>
                <div className="space-y-2.5">
                  {activeModalService.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-pink-50/70 rounded-2xl border border-pink-100 text-xs text-slate-800">
                <span className="font-bold block mb-1 text-pink-800">Recommended For:</span>
                <span>{activeModalService.recommendedFor}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-4">
                <span>Typical Duration: <strong>{activeModalService.duration}</strong></span>
                {activeModalService.priceGuide && (
                  <span>Cost Guide: <strong className="text-emerald-700">{activeModalService.priceGuide}</strong></span>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                const title = activeModalService.title;
                setActiveModalService(null);
                onSelectServiceForBooking(title);
              }}
              className="w-full py-3.5 bg-gradient-to-r from-pink-600 to-emerald-500 text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              Book Appointment for This Service
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
