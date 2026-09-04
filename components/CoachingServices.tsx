'use client';

import React, { useState } from 'react';
import { Apple, Dumbbell, Target, CheckCircle2, Award, Phone } from 'lucide-react';

const DIET_PLANS = [
  {
    category: 'Vegetarian Diet',
    tagline: 'High Protein Plant-Based Power',
    icon: '🌱',
    color: 'from-beast-500/20 to-dark-900',
    borderColor: 'border-beast-500/40',
    accentColor: 'text-beast-400',
    badge: 'Veg Special',
    calories: '1800 - 2800 kcal/day',
    macros: { protein: '130g - 170g', carbs: '220g - 300g', fats: '55g - 70g' },
    sources: ['Paneer Tikka & Tofu', 'Greek Yogurt & Sprouts', 'Soy Chunks & Lentil Dal', 'Whey Isolate Shake', 'Quinoa & Mixed Seeds'],
    bestFor: 'Pure Veg athletes seeking fat loss or lean muscle mass.'
  },
  {
    category: 'Non-Vegetarian Diet',
    tagline: 'Maximum Anabolic Protein Density',
    icon: '🍗',
    color: 'from-beast-600/30 to-dark-900',
    borderColor: 'border-beast-500/60',
    accentColor: 'text-beast-400',
    badge: 'Most Popular',
    calories: '2000 - 3200 kcal/day',
    macros: { protein: '160g - 220g', carbs: '200g - 350g', fats: '60g - 80g' },
    sources: ['Grilled Chicken Breast', 'Egg Whites & Whole Eggs', 'Fish Fillets & Lean Mutton', 'Brown Rice & Sweet Potato', 'Almonds & Peanut Butter'],
    bestFor: 'Hardcore bodybuilders, strength training & rapid fat burn.'
  },
  {
    category: 'Eggetarian Diet',
    tagline: 'Flexible High Bioavailability Nutrition',
    icon: '🥚',
    color: 'from-neutral-900 to-dark-950',
    borderColor: 'border-neutral-800',
    accentColor: 'text-beast-400',
    badge: 'Balanced',
    calories: '1900 - 3000 kcal/day',
    macros: { protein: '145g - 190g', carbs: '210g - 320g', fats: '50g - 75g' },
    sources: ['Egg White Omelette & Boiled Eggs', 'Paneer & Cottage Cheese', 'Oats with Whey Protein', 'Whole Grain Toast', 'Nuts & Avocado'],
    bestFor: 'Eggetarians optimizing body recomposition & recovery.'
  }
];

const WORKOUT_PROGRAMS = [
  {
    title: 'Push / Pull / Legs (PPL Split)',
    focus: 'Hypertrophy & Muscle Building',
    days: '6 Days / Week',
    level: 'Intermediate - Advanced',
    highlights: ['Bench Press & Incline Dumbbell Press', 'Heavy Barbell Deadlifts & Lat Pulldowns', 'Barbell Squats & Romanian Deadlifts'],
    description: 'Scientifically proven 6-day split maximizing muscle protein synthesis and recovery windows.'
  },
  {
    title: 'Powerlifting Strength Protocol',
    focus: 'Max Force & 1RM Heavy Compound Lifting',
    days: '4 Days / Week',
    level: 'Advanced Powerlifters',
    highlights: ['Low-Bar Squat Technique Coaching', 'Competition Bench & Arch Setup', 'Sumo & Conventional Deadlift Mechanics'],
    description: 'Designed for strength athletes aiming to break personal records safely on Olympic platforms.'
  },
  {
    title: 'Fat Burn & Recomposition',
    focus: 'HIIT + Heavy Resistance Circuit',
    days: '5 Days / Week',
    level: 'Beginner - Intermediate',
    highlights: ['Kettlebell Swings & Cable Circuits', 'Bodyweight Calisthenics Supersets', 'Targeted Ab & Core Conditioning'],
    description: 'Combines metabolic resistance training with heavy weight training to burn fat while retaining muscle.'
  }
];

export default function CoachingServices() {
  const [dietTab, setDietTab] = useState(0);

  return (
    <section id="programs" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-beast-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-beast-500/10 border border-beast-500/30 text-beast-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-glow-crimson">
            <Award className="w-4 h-4" />
            <span>Tailored Transformation Systems</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-heading">
            PERSONALIZED <span className="crimson-gradient-text">NUTRITION & WORKOUTS</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            At Beauty and Beast Fitness Gym in Madurai, we combine scientific meal plans with aggressive training programs to guarantee visible body transformation.
          </p>
        </div>

        {/* --- NUTRITION & DIET SECTION --- */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-beast-500/20 text-beast-400 flex items-center justify-center font-bold">
                <Apple className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading">Customized Meal Plans</h3>
            </div>
            <span className="text-xs font-semibold text-gray-400 hidden sm:inline">Veg · Non-Veg · Eggetarian Protocols</span>
          </div>

          {/* Diet Tabs Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIET_PLANS.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => setDietTab(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border ${
                  dietTab === idx
                    ? `bg-gradient-to-b ${plan.color} ${plan.borderColor} shadow-glow-crimson scale-[1.02]`
                    : 'bg-dark-900/60 border-neutral-800 hover:border-beast-500/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{plan.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-dark-950/90 border border-neutral-700 ${plan.accentColor}`}>
                    {plan.badge}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white font-heading">{plan.category}</h4>
                <p className="text-xs text-gray-400 mt-1 font-medium">{plan.tagline}</p>
                
                <div className="mt-6 pt-4 border-t border-neutral-800 space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-300">
                    <span>Est. Daily Calories:</span>
                    <span className="text-beast-400">{plan.calories}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300">
                    <span>Target Protein:</span>
                    <span className="text-white">{plan.macros.protein}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-800">
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">Key Protein Sources:</span>
                  <ul className="space-y-1.5">
                    {plan.sources.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-beast-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- WORKOUT PROGRAMS SECTION --- */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-beast-500/20 text-beast-400 flex items-center justify-center font-bold">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading">Custom Workout Protocols</h3>
            </div>
            <span className="text-xs font-semibold text-beast-400">Push/Pull/Legs · Strength · Fat Loss</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKOUT_PROGRAMS.map((prog, idx) => (
              <div key={idx} className="glass-card rounded-3xl p-6 border border-neutral-800 hover:border-beast-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-beast-400 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-beast-500/10 border border-beast-500/30">{prog.days}</span>
                    <span className="text-gray-400">{prog.level}</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-white mt-1 font-heading">{prog.title}</h4>
                  <p className="text-xs font-medium text-beast-400 mt-1">{prog.focus}</p>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">{prog.description}</p>

                  <div className="mt-6 pt-4 border-t border-neutral-800">
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">Included Exercises:</span>
                    <ul className="space-y-2">
                      {prog.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-beast-500 mt-1.5 shrink-0"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <a
                    href="tel:08428090900"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-dark-800 hover:bg-beast-500 text-beast-400 hover:text-white font-extrabold text-xs transition-all border border-beast-500/30"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire Plan: 084280 90900</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
