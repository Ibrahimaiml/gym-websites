'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import StickyCallBar from '@/components/StickyCallBar';
import CoachingServices from '@/components/CoachingServices';
import HealthCalculator from '@/components/HealthCalculator';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import { Star, Phone, Navigation, CheckCircle2 } from 'lucide-react';

// Dynamic client import for WebGL 3D Three.js components to prevent SSR hydration mismatch
const Hero3DCanvas = dynamic(() => import('@/components/3d/Hero3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[540px] flex flex-col items-center justify-center bg-dark-900/60 rounded-3xl border border-beast-500/20 backdrop-blur-md">
      <div className="w-14 h-14 border-4 border-beast-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-beast-400 text-sm font-semibold tracking-wide">Initializing 3D WebGL Canvas...</p>
    </div>
  ),
});

const EquipmentVisualizer = dynamic(() => import('@/components/3d/EquipmentVisualizer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-dark-900/60 rounded-3xl">
      <div className="w-12 h-12 border-4 border-beast-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const GymGallery = dynamic(() => import('@/components/GymGallery'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-dark-900/60 rounded-3xl">
      <div className="w-12 h-12 border-4 border-beast-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 flex flex-col selection:bg-beast-500 selection:text-white">
      
      {/* Sticky Top Header Navigation */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-grow pt-24">
        
        {/* --- HERO SECTION WITH INTERACTIVE 3D EQUIPMENT --- */}
        <section className="relative min-h-[90vh] flex items-center justify-center py-12 md:py-20 overflow-hidden">
          
          {/* Crimson Ambient Lighting Glow Orbs */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-beast-500/20 via-beast-600/15 to-transparent rounded-full filter blur-[140px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Text & CTA Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Rating Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-beast-500/10 border border-beast-500/30 shadow-glow-crimson backdrop-blur-md">
                  <div className="flex text-beast-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-beast-400 text-beast-400" />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-bold text-white tracking-wide">
                    5.0 ★ Rating in Madurai (40+ Verified Reviews)
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-heading">
                  UNLEASH YOUR STRENGTH AT <br />
                  <span className="crimson-gradient-text">BEAUTY AND BEAST</span> <br />
                  FITNESS GYM
                </h1>

                {/* Subheadline & Location Details */}
                <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  Madurai’s premier high-performance gym. Equipped with commercial 3D-visualized gear, elite personal trainers, and customized nutrition diet plans.
                </p>

                {/* Key Gym Highlights Pills */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-semibold text-gray-300 pt-1">
                  <span className="px-3.5 py-1.5 rounded-xl bg-dark-900 border border-neutral-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-beast-400" />
                    Open Daily (Closes 10 PM)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-dark-900 border border-neutral-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-beast-400" />
                    Keelaveli Veethi, Madurai Main
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-dark-900 border border-neutral-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-beast-400" />
                    Veg & Non-Veg Diet Plans
                  </span>
                </div>

                {/* Primary Call & Directions Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="tel:08428090900"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-beast-500 via-beast-600 to-beast-900 text-white font-black text-base md:text-lg shadow-glow-crimson hover:scale-105 active:scale-95 transition-all"
                  >
                    <Phone className="w-5 h-5 fill-white animate-pulse" />
                    <span>Call Us Immediately: 084280 90900</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Beauty+and+Beast+Fitness+Gym+3rd+floor+L.+k.+Bhavanam+187+keelaveli+veethi+Madurai+625001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl bg-dark-900 hover:bg-dark-800 text-beast-400 font-bold text-base border border-beast-500/30 transition-all"
                  >
                    <Navigation className="w-5 h-5" />
                    <span>Get Directions</span>
                  </a>
                </div>

                {/* Trust Footer note */}
                <p className="text-xs text-gray-400 pt-2 font-mono">
                  📍 3rd Floor, L. k. Bhavanam, 187, Keelaveli Veethi, Madurai 625001
                </p>

              </div>

              {/* Right Interactive 3D Equipment Canvas (5 cols) */}
              <div className="lg:col-span-5 w-full">
                <Hero3DCanvas />
              </div>

            </div>
          </div>
        </section>

        {/* --- STATS BAR BANNER --- */}
        <section className="py-8 bg-gradient-to-r from-beast-600/30 via-dark-900 to-beast-500/30 border-y border-beast-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-3xl md:text-4xl font-black text-white font-heading">5.0 ★</span>
                <span className="text-xs text-beast-400 font-semibold block mt-1">Google Rating (40+ Reviews)</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black text-white font-heading">100%</span>
                <span className="text-xs text-white font-semibold block mt-1">Real Transformation Guarantee</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black text-white font-heading">Daily</span>
                <span className="text-xs text-beast-400 font-semibold block mt-1">Open 5:00 AM – 10:00 PM</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black text-white font-heading">1-on-1</span>
                <span className="text-xs text-white font-semibold block mt-1">Personal Certified Coaching</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE 3D EQUIPMENT SHOWCASE --- */}
        <EquipmentVisualizer />

        {/* --- BEAST ARENA PHOTO GALLERY --- */}
        <GymGallery />

        {/* --- NUTRITION & WORKOUT PROGRAMS --- */}
        <CoachingServices />

        {/* --- HEALTH QUESTIONNAIRE & MACRO CALCULATOR --- */}
        <HealthCalculator />

        {/* --- LOCATION & CONTACT SECTION --- */}
        <LocationContact />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Call CTA Bar */}
      <StickyCallBar />

    </div>
  );
}
