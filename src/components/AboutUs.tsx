import React from 'react';
import { Heart, Users, Sparkles, Shield, Award, CheckCircle } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: 'Family-Centered Dentistry',
      description:
        'We welcome patients of all generations. Whether guiding a toddler through their very first cheerful checkup or restoring an adult’s smile with implants, our care is personalized with warmth and empathy.',
      accent: 'pink',
    },
    {
      icon: Heart,
      title: 'Anxiety-Free & Painless',
      description:
        'Dental visits shouldn’t cause dread. We utilize gentle computer-assisted numbing, calming ambient operatories, and clear step-by-step communication to eliminate treatment anxiety.',
      accent: 'emerald',
    },
    {
      icon: Sparkles,
      title: 'Cutting-Edge Digital Tech',
      description:
        'Equipped with low-radiation digital panoramic imaging, 3D intraoral scanners, and soft-tissue dental lasers for pinpoint clinical precision and rapid recovery times.',
      accent: 'pink',
    },
    {
      icon: Shield,
      title: 'Strict Hospital Sterilization',
      description:
        'Patient safety is paramount. We maintain rigorous international infection control standards using hospital-grade vacuum autoclaves and single-use protective barriers.',
      accent: 'emerald',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Kimani, BDS, MDS',
      role: 'Lead Dental Surgeon & Implantologist',
      bio: 'Over 14 years of restorative excellence. Passionate about painless implants, cosmetic smile redesigns, and gentle patient advocacy.',
      image: '/images/dr-sarah-kimani.jpg',
      badge: '14+ Years Experience',
      badgeColor: 'bg-pink-100 text-pink-700',
    },
    {
      name: 'Dr. Kevin Ombati, BDS',
      role: 'Specialist Orthodontist',
      bio: 'Expert in invisible aligner biomechanics and contemporary pediatric interceptive orthodontics. Dedicated to harmonious facial symmetry and healthy bites.',
      image: '/images/dr-kevin-ombati.jpg',
      badge: 'Aligner Certified',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      name: 'Dr. Amina Yusuf, BDS, Paed.Dent',
      role: 'Pediatric Dental Care Specialist',
      bio: 'Specialized in fear-free pediatric care, behavioral shaping, and preventive fissure sealants to ensure your little ones cultivate lifelong positive oral hygiene.',
      image: '/images/dr-amina-yusuf.jpg',
      badge: 'Pediatric Lead',
      badgeColor: 'bg-pink-100 text-pink-700',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white border-b border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with generous breathing room */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>About EverSmile Dental</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            High-Quality, Family-Friendly{' '}
            <span className="text-pink-600">Dental Care</span> in{' '}
            <span className="text-emerald-500">Nairobi</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Founded with a vision to redefine dental experiences in Kenya, EverSmile Dental pairs world-class clinical expertise with genuine human compassion in a serene, modern setting at Garden City Business Park.
          </p>
        </div>

        {/* Story & Clinic Imagery Banner with Pink & LightGreen Touches */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 bg-white rounded-3xl p-8 sm:p-12 border border-pink-100/90 shadow-sm">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              A Warm, Welcoming Space Built for the Comfort of Every Family Member
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At EverSmile Dental, we believe a healthy smile is the foundation of confidence, happiness, and thriving relationships. Our clinic was intentionally designed from the ground up to replace the sterile, intimidating atmosphere of traditional dental offices with a calming sanctuary.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              From our comfortable reception lounge equipped with complimentary refreshments and high-speed Wi-Fi, to dedicated child-friendly treatment spaces, our entire team is devoted to making your visit pleasant, unhurried, and genuinely enjoyable.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">Transparent treatment plans with no hidden fees</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">Emergency same-day appointments prioritized</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">Direct billing with major health insurance providers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">Convenient location with ample, secure mall parking</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-md h-52 sm:h-60 bg-slate-100 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                    alt="EverSmile Dental Consultation Operatory"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-white border border-pink-100 shadow-xs">
                  <div className="font-display text-3xl font-black text-pink-600">100%</div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mt-1">Pain-Free Protocol</div>
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">Gentle ultrasonic scaling & delicate local numbing</div>
                </div>
              </div>

              <div className="space-y-5 pt-8 sm:pt-10">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
                  <div className="font-display text-3xl font-black">15+</div>
                  <div className="text-xs font-bold text-emerald-100 uppercase tracking-wide mt-1">Years of Trusted Care</div>
                  <div className="text-xs text-emerald-100 mt-1">Across Nairobi & Kiambu</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-52 sm:h-60 bg-slate-100 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                    alt="Dentist with smiling child patient"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid with Uncongested Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isPink = pillar.accent === 'pink';
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-pink-200 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    isPink
                      ? 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white'
                      : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dental Specialists Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              Meet Our Dental Specialists
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Our clinical team consists of certified practitioners accredited by the Kenya Medical Practitioners and Dentists Council (KMPDC).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {team.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-pink-200 transition-all duration-300 group"
              >
                <div className="h-72 overflow-hidden relative bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${doctor.badgeColor}`}>
                    {doctor.badge}
                  </div>
                </div>
                <div className="p-7 space-y-2">
                  <h4 className="font-display text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                    {doctor.name}
                  </h4>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    {doctor.role}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
