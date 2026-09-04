'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Star, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LocationContact() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="location" className="py-24 bg-dark-900/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-beast-500/10 border border-beast-500/30 text-beast-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            <span>Keelaveethi Madurai Main Location</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Visit & Contact <span className="gold-gradient-text">Beauty and Beast Gym</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Located on Keelaveli Veethi near Rajmahal Car Parking, Kamarajar Salai, Madurai. Drop by or call us instantly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Phone Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-beast-500/30 space-y-6">
              
              {/* Gym Name & 5.0 Rating */}
              <div>
                <div className="flex items-center space-x-1.5 text-beast-400 text-sm font-bold mb-1">
                  <Star className="w-4 h-4 fill-beast-400" />
                  <span>5.0 ★ Rating (40+ Verified Reviews)</span>
                </div>
                <h3 className="text-2xl font-black text-white">Beauty and Beast Fitness Gym</h3>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  ● Open Daily · Closes 10 PM
                </span>
              </div>

              {/* Address details */}
              <div className="space-y-4 pt-4 border-t border-gray-800">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-beast-500/20 text-beast-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Address</span>
                    <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                      3rd floor, L. k. Bhavanam, 187, keelaveli veethi, near rajmahal car parking, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625001
                    </p>
                    <span className="text-xs text-beast-400 font-mono mt-1 block">Plus Code: W49G+83 Madurai</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-beast-500/20 text-beast-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Primary Phone / Call Trigger</span>
                    <a 
                      href="tel:08428090900" 
                      className="text-xl font-black text-beast-400 hover:text-white transition-colors block mt-0.5 font-mono underline decoration-beast-500"
                    >
                      084280 90900
                    </a>
                    <span className="text-[11px] text-gray-400">Clicking number connects instantly on any device</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Gym Operating Hours</span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Monday – Sunday: 5:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action CTAs */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <a
                  href="tel:08428090900"
                  className="w-full inline-flex items-center justify-center space-x-2.5 py-4 rounded-2xl bg-gradient-to-r from-beast-500 via-beast-600 to-beast-amber text-black font-extrabold text-base shadow-glow-gold hover:scale-[1.02] transition-transform"
                >
                  <Phone className="w-5 h-5 fill-black animate-pulse" />
                  <span>Call Us Now: 084280 90900</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Beauty+and+Beast+Fitness+Gym+3rd+floor+L.+k.+Bhavanam+187+keelaveli+veethi+Madurai+625001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-dark-800 hover:bg-dark-700 text-beast-400 font-bold text-sm border border-beast-500/30 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps Directions</span>
                </a>
              </div>

            </div>

          </div>

          {/* Embedded Google Map Box (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-beast-500/20 min-h-[420px] relative flex flex-col justify-between">
            <div className="w-full h-full min-h-[380px] relative">
              <iframe
                title="Beauty and Beast Fitness Gym Location Madurai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.12586208643!2d78.1215!3d9.9195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMTAuMiJOIDc4wrAwNycxNy40IkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', filter: 'brightness(0.85) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-t-3xl"
              ></iframe>
            </div>

            {/* Callback Request Form Bar */}
            <div className="p-6 bg-dark-950/95 border-t border-gray-800 rounded-b-3xl">
              <h4 className="text-base font-extrabold text-white mb-2 flex items-center gap-2">
                <Send className="w-4 h-4 text-beast-400" />
                <span>Request Instant Gym Callback</span>
              </h4>

              {formSent ? (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Callback requested! Our Madurai trainers will call 084280 90900 or your number shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-dark-900 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-xs font-semibold focus:outline-none focus:border-beast-500 flex-1"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    className="bg-dark-900 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-xs font-semibold focus:outline-none focus:border-beast-500 flex-1"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-beast-500 text-black font-extrabold text-xs shadow-glow-gold hover:opacity-90 shrink-0"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
