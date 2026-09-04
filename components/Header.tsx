'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Star, MapPin, Menu, X, Flame } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-950/90 backdrop-blur-xl border-b border-beast-500/20 py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-dark-950/90 via-dark-950/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Rating Badge */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-beast-500 to-beast-600 flex items-center justify-center shadow-glow-gold group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-black fill-black" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl md:text-2xl font-black tracking-tight text-white uppercase font-heading">
                  BEAUTY & <span className="gold-gradient-text">BEAST</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 text-xs font-semibold text-beast-400">
                <Star className="w-3.5 h-3.5 text-beast-400 fill-beast-400" />
                <span>5.0 ★ Rated in Madurai (40+ Reviews)</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-300">
            <a href="#equipment" className="hover:text-beast-400 transition-colors">3D Gear</a>
            <a href="#programs" className="hover:text-beast-400 transition-colors">Workouts & Diet</a>
            <a href="#calculator" className="hover:text-beast-400 transition-colors">Macro Calculator</a>
            <a href="#dashboards" className="hover:text-beast-400 transition-colors">Portal Dashboard</a>
            <a href="#location" className="hover:text-beast-400 transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-beast-400" />
              <span>Madurai Main</span>
            </a>
          </nav>

          {/* Header Action CTA - Call 084280 90900 */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:08428090900"
              className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-beast-500 to-beast-amber text-black font-extrabold text-sm shadow-glow-gold hover:scale-105 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 fill-black animate-pulse" />
              <span>Call 084280 90900</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-dark-900 border border-gray-800 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-beast-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4 text-base font-bold text-gray-200">
            <a 
              href="#equipment" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-beast-400 transition-colors py-1"
            >
              3D Gear Visualizer
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-beast-400 transition-colors py-1"
            >
              Workout & Nutrition Plans
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-beast-400 transition-colors py-1"
            >
              Calorie & Macro Calculator
            </a>
            <a 
              href="#dashboards" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-beast-400 transition-colors py-1"
            >
              Client & Admin Dashboard
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-beast-400 transition-colors py-1 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-beast-400" />
              <span>Location & Hours</span>
            </a>
          </nav>

          <div className="pt-4 border-t border-gray-800">
            <a
              href="tel:08428090900"
              className="w-full inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-beast-500 to-beast-amber text-black font-black text-base shadow-glow-gold"
            >
              <Phone className="w-5 h-5 fill-black" />
              <span>Call Gym: 084280 90900</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
