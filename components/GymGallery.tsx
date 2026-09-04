'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Flame, Dumbbell, Sparkles, Eye } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  badge: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Dumbbell Rack & Free Weights Zone',
    category: 'Heavy Weights',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    description: 'Precision chrome dumbbells from 2.5kg up to 50kg for intense hypertrophic training.',
    badge: 'Free Weights',
  },
  {
    id: 2,
    title: 'Olympic Power Rack & Barbell Zone',
    category: 'Heavy Weights',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    description: 'Professional 20kg Olympic bars and color-coded bumper plates for heavy squats and deadlifts.',
    badge: 'Power Rig',
  },
  {
    id: 3,
    title: 'Heavy Duty Cable Crossover & Machine Floor',
    category: 'All Equipment',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    description: 'Dual cable crossover stations and isolated lever machines for maximum muscular pump.',
    badge: 'Cable Arena',
  },
  {
    id: 4,
    title: 'Aesthetic Gym Lighting & Cardio Deck',
    category: 'Cardio Zone',
    image: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?q=80&w=1200&auto=format&fit=crop',
    description: 'High-end treadmills, spin bikes, and elliptical trainers under cyber crimson atmospheric lighting.',
    badge: 'Cardio Deck',
  },
  {
    id: 5,
    title: 'Intense Personal Training & Beast Coaching',
    category: 'Personal Training',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    description: '1-on-1 personal coaching with certified trainers correcting form and pushing your limits.',
    badge: '1-on-1 Coaching',
  },
  {
    id: 6,
    title: 'Functional Training & Turf Area',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Sled pushes, kettlebells, calisthenics rigs, and high-intensity agility turf floor.',
    badge: 'Turf Zone',
  },
];

const CATEGORIES = ['All Equipment', 'Heavy Weights', 'Cardio Zone', 'Personal Training', 'Ambience'];

export default function GymGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Equipment');

  const filteredItems = selectedCategory === 'All Equipment'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Neon Crimson Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-beast-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-beast-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-beast-500/10 border border-beast-500/30 text-beast-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-glow-crimson">
            <Flame className="w-4 h-4 fill-beast-400" />
            <span>BEAST ARENA · INSIDE BEAUTY & BEAST</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-heading">
            EXPLORE THE <span className="crimson-gradient-text">BEAST ARENA</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Immerse yourself in our high-contrast, state-of-the-art workout zones at Keelaveethi, Madurai Main.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-beast-500 text-white shadow-glow-crimson scale-105 border border-beast-400'
                  : 'bg-dark-900 text-gray-400 hover:text-white hover:bg-dark-800 border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden glass-card border border-neutral-800 hover:border-beast-500/60 shadow-2xl transition-all duration-500"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-72 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  {/* Dark Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-dark-950/90 border border-beast-500/40 text-beast-400 font-bold text-[11px] uppercase tracking-wider backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Button */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-beast-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Overlay Trigger - Call 084280 90900 */}
                  <div className="pt-2">
                    <a
                      href="tel:08428090900"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-beast-500 via-beast-600 to-beast-900 text-white font-black text-xs uppercase tracking-wider shadow-glow-crimson hover:brightness-125 active:scale-95 transition-all"
                    >
                      <Phone className="w-4 h-4 fill-white animate-pulse" />
                      <span>Join This Zone • Call 084280 90900</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
