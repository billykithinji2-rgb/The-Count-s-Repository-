import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle, Shield, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/clinicData';

export const TestimonialsFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const insurances = [
    'Jubilee Insurance',
    'AAR Insurance',
    'Britam',
    'APA Insurance',
    'CIC Group',
    'NHIF / SHA Accredited',
    'Madison Insurance',
    'Resolution Insurance',
    'First Assurance',
    'Heritage Insurance',
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white border-b border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header with ample breathing room */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 text-pink-600 fill-current" />
            <span>Patient Testimonials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real Stories, Real Radiant <span className="text-pink-600">Smiles</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover why families and working professionals across Nairobi trust EverSmile Dental for routine hygiene, transformative cosmetic whitening, and gentle emergency care.
          </p>
        </div>

        {/* Testimonial Cards Grid with generous gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base font-bold text-slate-900">{review.name}</h4>
                  <div className="text-xs text-slate-500">{review.location}</div>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    idx % 2 === 0
                      ? 'text-pink-700 bg-pink-50 border border-pink-200'
                      : 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                  }`}
                >
                  {review.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Partners Bar on clean white with pink/emerald borders */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-100 shadow-sm mb-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Direct Billing & Insurance Coverage</span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Accepted Health Insurance & Corporate Schemes
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We provide seamless direct billing with leading insurance providers across Kenya for hassle-free consultations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            {insurances.map((ins) => (
              <span
                key={ins}
                className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-800 hover:border-emerald-300 transition-colors shadow-2xs"
              >
                ✓ {ins}
              </span>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions with generous spacing */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Common Questions</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Everything you need to know about booking, visiting, and receiving care at EverSmile Dental.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all hover:border-pink-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  <span className="font-display text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      openFaqIndex === index ? 'transform rotate-180 text-pink-600' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
