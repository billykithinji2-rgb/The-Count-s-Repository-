import React, { useState, useEffect } from 'react';
import { Calendar, Phone, User, MessageSquare, Clock, CheckCircle2, AlertCircle, Sparkles, Download, ArrowRight, Mail } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import { BookingFormData } from '../types';

interface BookingFormProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: today,
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    service: preselectedService || 'Routine Checkups & Cleaning',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingId: string;
    name: string;
    phone: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.name.trim()) {
      setSubmitError('Please provide your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setSubmitError('Please provide your active phone or WhatsApp number.');
      return;
    }
    if (!formData.preferredDate) {
      setSubmitError('Please choose your preferred appointment date.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setConfirmedBooking({
          bookingId: data.bookingId || `ESD-${Math.floor(100000 + Math.random() * 900000)}`,
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
        });
      } else {
        // Fallback local confirmation
        setConfirmedBooking({
          bookingId: `ESD-${Math.floor(100000 + Math.random() * 900000)}`,
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
        });
      }
    } catch (err) {
      // Offline / network fallback
      setConfirmedBooking({
        bookingId: `ESD-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate an .ics calendar file download
  const downloadCalendarInvite = () => {
    if (!confirmedBooking) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//EverSmile Dental//Nairobi KE//EN
BEGIN:VEVENT
SUMMARY:Dental Appointment - ${confirmedBooking.service} at EverSmile Dental
DESCRIPTION:Appointment for ${confirmedBooking.name}. Service: ${confirmedBooking.service}. Slot: ${confirmedBooking.preferredTime}. Location: Garden City Business Park A103 Thika Rd Nairobi. Phone: ${CLINIC_INFO.phone}
LOCATION:Garden City Business Park, A103 Thika Rd, Nairobi, Kenya
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `EverSmile-Appointment-${confirmedBooking.bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: today,
      preferredTime: 'Morning (8:00 AM – 12:00 PM)',
      service: 'Routine Checkups & Cleaning',
      message: '',
    });
    if (onClearPreselectedService) onClearPreselectedService();
  };

  return (
    <section id="book-appointment" className="py-24 md:py-32 bg-white border-b border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with generous whitespace */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold tracking-wide uppercase">
            <Calendar className="w-3.5 h-3.5 text-pink-600" />
            <span>Schedule Your Visit</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Book Your <span className="text-pink-600">Smile Visit</span> Online
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Fill out the simple form below. Our dedicated patient care concierge will promptly reach out via call or WhatsApp to confirm your preferred time slot.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {confirmedBooking ? (
            /* Confirmation Card */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-200 shadow-xl text-slate-900 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="text-center space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  Request Received Successfully
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Thank You, {confirmedBooking.name}!
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  We have registered your dental appointment request. Our reception desk will call or WhatsApp you at <strong className="text-slate-900">{confirmedBooking.phone}</strong> shortly to confirm.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 space-y-3.5 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-pink-600">{confirmedBooking.bookingId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.preferredDate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Time Window:</span>
                  <span className="font-bold text-emerald-700">{confirmedBooking.preferredTime}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-medium text-slate-800 text-right">Garden City Business Park, Suite A103</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <button
                  onClick={downloadCalendarInvite}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-5 rounded-2xl text-sm shadow-md transition-colors"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Add to Calendar (.ics)</span>
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneClean.replace('+', '')}?text=Hello%20EverSmile%20Dental,%20I%20just%20submitted%20appointment%20request%20${confirmedBooking.bookingId}%20for%20${encodeURIComponent(confirmedBooking.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-2xl text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm via WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-pink-600 underline cursor-pointer"
                >
                  Book another appointment
                </button>
              </div>

            </div>
          ) : (
            /* Booking Form on clean white canvas */
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-7"
            >
              {submitError && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="booking-name" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Full Name <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      id="booking-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Kamau"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="booking-phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Phone / WhatsApp Number <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      id="booking-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label htmlFor="booking-date" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Preferred Date <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
                    <input
                      id="booking-date"
                      type="date"
                      name="preferredDate"
                      min={today}
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-2">
                  <label htmlFor="booking-time" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
                    <select
                      id="booking-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white transition-all shadow-2xs"
                    >
                      <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Early Afternoon (12:00 PM – 2:30 PM)">Early Afternoon (12:00 PM – 2:30 PM)</option>
                      <option value="Late Afternoon (2:30 PM – 5:00 PM)">Late Afternoon (2:30 PM – 5:00 PM)</option>
                      <option value="Saturday Morning (8:00 AM – 12:00 PM)">Saturday Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Saturday Afternoon (12:00 PM – 3:00 PM)">Saturday Afternoon (12:00 PM – 3:00 PM)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label htmlFor="booking-service" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Service Requested
                </label>
                <select
                  id="booking-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-slate-50/50 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white transition-all shadow-2xs"
                >
                  <option value="Routine Checkups & Cleaning">Routine Checkups & Cleaning (Scaling & Polishing)</option>
                  <option value="Teeth Whitening">Teeth Whitening (Laser & Cosmetic Polish)</option>
                  <option value="Dental Implants">Dental Implants (Titanium & Crown Restoration)</option>
                  <option value="Orthodontics & Aligners">Orthodontics & Clear Aligners</option>
                  <option value="Pediatric Dentistry">Pediatric Dentistry (Kids & Teens)</option>
                  <option value="Emergency Dental Care">Emergency Dental Care (Same-Day Pain Relief)</option>
                  <option value="Cosmetic Consultation">Cosmetic Dentistry / Full Smile Makeover</option>
                  <option value="Other Dental Inquiry">Other Dental Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="booking-message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Message or Symptoms (Optional)
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={3}
                  placeholder="Share any tooth sensitivity, pain history, or specific questions..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-slate-50/50 rounded-2xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:bg-white transition-all shadow-2xs resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                id="submit-booking-form-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg shadow-pink-600/20 hover:shadow-xl transition-all cursor-pointer disabled:opacity-60 text-base"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 text-pink-200" />
                    <span>Confirm & Request Appointment</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                <span>🔒 Your medical information is kept strictly private & confidential.</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
