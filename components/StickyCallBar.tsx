'use client';

import React from 'react';
import { Phone, Navigation } from 'lucide-react';

export default function StickyCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-dark-950/98 backdrop-blur-2xl border-t border-beast-500/40 shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Direct Call Button (8 cols) */}
        <a
          href="tel:08428090900"
          className="col-span-8 flex items-center justify-center space-x-2 bg-gradient-to-r from-beast-500 via-beast-600 to-beast-900 text-white py-3.5 px-4 rounded-xl font-extrabold text-sm shadow-glow-crimson active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 fill-white animate-pulse" />
          <span>CALL: 084280 90900</span>
        </a>

        {/* Get Directions Button (4 cols) */}
        <a
          href="https://maps.google.com/?q=Beauty+and+Beast+Fitness+Gym+3rd+floor+L.+k.+Bhavanam+187+keelaveli+veethi+Madurai"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 flex items-center justify-center space-x-1.5 bg-dark-900 border border-beast-500/40 text-beast-400 py-3.5 px-2 rounded-xl font-bold text-xs active:scale-95 transition-all"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Map</span>
        </a>
      </div>
    </div>
  );
}
