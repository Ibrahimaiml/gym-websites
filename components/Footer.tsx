'use client';

import React from 'react';
import { Phone, Star, MapPin, Flame, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-beast-500/20 text-gray-400 py-16 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-beast-500 to-beast-600 flex items-center justify-center shadow-glow-gold">
                <Flame className="w-6 h-6 text-black fill-black" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase font-heading">
                BEAUTY & <span className="gold-gradient-text">BEAST</span>
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold text-beast-400">
              <Star className="w-4 h-4 text-beast-400 fill-beast-400" />
              <span>5.0 ★ Rating in Madurai (40+ Verified Reviews)</span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              Beauty and Beast Fitness Gym is Madurai's premier high-performance workout center located at 3rd floor, L. k. Bhavanam, 187, Keelaveli Veethi, Kamarajar Salai, Madurai Main.
            </p>

            <div className="pt-2">
              <a
                href="tel:08428090900"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-beast-500/10 border border-beast-500/40 text-beast-400 font-extrabold text-xs hover:bg-beast-500 hover:text-black transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Hotline: 084280 90900</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#equipment" className="hover:text-beast-400 transition-colors">3D Equipment Showcase</a></li>
              <li><a href="#programs" className="hover:text-beast-400 transition-colors">Diet & Nutrition Plans</a></li>
              <li><a href="#programs" className="hover:text-beast-400 transition-colors">Workout Splits (PPL / Power)</a></li>
              <li><a href="#calculator" className="hover:text-beast-400 transition-colors">Macro & Calorie Calculator</a></li>
              <li><a href="#dashboards" className="hover:text-beast-400 transition-colors">Client Workout Portal</a></li>
              <li><a href="#location" className="hover:text-beast-400 transition-colors">Madurai Location & Hours</a></li>
            </ul>
          </div>

          {/* Operating Hours & Address (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Madurai Location Details</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              3rd floor, L. k. Bhavanam, 187, keelaveli veethi, near rajmahal car parking, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625001
            </p>
            <div className="pt-2 text-xs">
              <span className="text-beast-400 font-semibold block">Hours: Open Daily (5 AM – 10 PM)</span>
              <span className="text-gray-400 font-mono mt-1 block">Plus Code: W49G+83 Madurai</span>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/80 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Beauty and Beast Fitness Gym, Madurai Main. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built for High Performance & Results</span>
            <Heart className="w-3.5 h-3.5 text-beast-500 fill-beast-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
