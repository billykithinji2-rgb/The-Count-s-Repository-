import React, { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, AlertCircle, Phone, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getClinicCurrentStatus } from '../utils/hoursHelper';

interface WorkingHoursProps {
  onOpenBooking: () => void;
}

export const WorkingHours: React.FC<WorkingHoursProps> = ({ onOpenBooking }) => {
  const [status, setStatus] = useState(getClinicCurrentStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getClinicCurrentStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hours" className="py-24 md:py-32 bg-white border-b border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with roomy spacing */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold tracking-wide uppercase">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Operational Schedule</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Reliable Clinic <span className="text-pink-600">Working Hours</span> & <span className="text-emerald-500">Live Status</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Conveniently open six days a week at Garden City Business Park, Nairobi to cater to both professional work schedules and family weekends.
          </p>
        </div>

        {/* Schedule Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Live Status & Hours Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg relative overflow-hidden">
              
              {/* Dynamic Real-time Status Banner */}
              <div
                className={`p-6 rounded-2xl mb-8 border flex items-center justify-between gap-4 flex-wrap ${
                  status.isOpen
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                    : 'bg-pink-50/80 border-pink-200 text-pink-950'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <span
                      className={`w-3.5 h-3.5 rounded-full block ${
                        status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-pink-500'
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Live Clinic Reception Status
                    </div>
                    <div className="text-base sm:text-lg font-black font-display text-slate-900">
                      {status.isOpen ? '🟢 Currently Open for Patients' : '🔴 Currently Closed'}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-600 block">
                    {status.detail}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Nairobi Time (EAT)
                  </span>
                </div>
              </div>

              {/* Weekly Schedule Rows */}
              <div className="space-y-4">
                {CLINIC_INFO.hoursDisplay.map((h, i) => (
                  <div
                    key={h.day}
                    className={`p-5 rounded-2xl flex items-center justify-between border transition-all ${
                      h.open
                        ? 'bg-white border-slate-200/80 hover:border-pink-200'
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                          h.open
                            ? 'bg-pink-50 text-pink-600'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {i === 0 ? 'M-F' : i === 1 ? 'SAT' : 'SUN'}
                      </div>
                      <div>
                        <div className="font-display font-bold text-base sm:text-lg text-slate-900">
                          {h.day}
                        </div>
                        <div className="text-xs text-slate-500">
                          {i === 0 ? 'Regular full day consultations' : i === 1 ? 'Weekend family appointments' : 'Closed for sterilisation'}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-sm sm:text-base font-bold ${
                          h.open ? 'text-emerald-700' : 'text-slate-400 italic'
                        }`}
                      >
                        {h.time}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {h.open ? 'Walk-ins & Bookings' : 'Emergency phone open'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Notification */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>Online appointment booking is available 24/7.</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="font-bold text-pink-600 hover:text-pink-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Select Preferred Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Convenient Visit Amenities & Map Link */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-pink-100 shadow-sm space-y-6">
              <h3 className="font-display text-2xl font-bold text-slate-900 leading-snug">
                Planning Your Visit to EverSmile Dental
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Located in the prestigious Garden City Business Park, our modern facility offers exceptional convenience for patients arriving from Nairobi CBD, Thika Road, Ruaraka, and Kiambu.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Easy Parking:</strong>
                    <span>Multi-storey covered parking with complimentary security and direct elevator access to our suite.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Public Transit & Taxi Access:</strong>
                    <span>Direct pedestrian walkway from the Garden City footbridge on Thika Superhighway.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Zero Wait-Time Protocol:</strong>
                    <span>Appointments are strictly scheduled to minimize waiting room overlap and maintain calm tranquility.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Google Maps link */}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={CLINIC_INFO.socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm py-3.5 px-6 rounded-2xl border border-emerald-200 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Open Directions on Google Maps</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve an Appointment</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
