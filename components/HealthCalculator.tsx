'use client';

import React, { useState } from 'react';
import { Calculator, Flame, Activity, CheckCircle, ArrowRight, RefreshCw, Phone, UserCheck } from 'lucide-react';

export default function HealthCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(25);
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [activity, setActivity] = useState<number>(1.375); // Light active default
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'recomp'>('fat_loss');
  const [dietPref, setDietPref] = useState<'veg' | 'non_veg' | 'eggetarian'>('non_veg');

  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState({
    bmr: 0,
    tdee: 0,
    targetCalories: 0,
    proteinGrams: 0,
    carbsGrams: 0,
    fatsGrams: 0,
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    // Mifflin-St Jeor Equation
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    const tdee = Math.round(bmr * activity);
    let targetCalories = tdee;

    if (goal === 'fat_loss') {
      targetCalories = Math.round(tdee * 0.8); // 20% deficit
    } else if (goal === 'muscle_gain') {
      targetCalories = Math.round(tdee * 1.15); // 15% surplus
    }

    // Macro distribution
    const proteinGrams = Math.round(weightKg * 2.2); // ~2.2g per kg bodyweight
    const fatsGrams = Math.round((targetCalories * 0.25) / 9); // 25% calories from fat
    const remainingCal = targetCalories - (proteinGrams * 4 + fatsGrams * 9);
    const carbsGrams = Math.max(50, Math.round(remainingCal / 4));

    setResults({
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      proteinGrams,
      carbsGrams,
      fatsGrams,
    });
    setCalculated(true);
  };

  return (
    <section id="calculator" className="py-24 bg-dark-900/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-4 h-4" />
            <span>Fitness Questionnaire & Macro Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Automated <span className="gold-gradient-text">Calorie & Macro Calculator</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Complete our 1-minute health assessment form to calculate your exact daily calorie intake and macro targets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Box (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-beast-500/20">
            <form onSubmit={handleCalculate} className="space-y-6">
              
              {/* Gender Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">1. Gender</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                      gender === 'male'
                        ? 'bg-beast-500 text-black border-beast-500 shadow-glow-gold'
                        : 'bg-dark-800 text-gray-400 border-gray-700 hover:border-beast-500/40'
                    }`}
                  >
                    Male 👨
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                      gender === 'female'
                        ? 'bg-beast-500 text-black border-beast-500 shadow-glow-gold'
                        : 'bg-dark-800 text-gray-400 border-gray-700 hover:border-beast-500/40'
                    }`}
                  >
                    Female 👩
                  </button>
                </div>
              </div>

              {/* Age, Weight, Height */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">2. Age (Years)</label>
                  <input
                    type="number"
                    min="14"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full bg-dark-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:outline-none focus:border-beast-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">3. Weight (KG)</label>
                  <input
                    type="number"
                    min="35"
                    max="200"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full bg-dark-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:outline-none focus:border-beast-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">4. Height (CM)</label>
                  <input
                    type="number"
                    min="120"
                    max="230"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full bg-dark-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:outline-none focus:border-beast-500"
                    required
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">5. Daily Physical Activity</label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(Number(e.target.value))}
                  className="w-full bg-dark-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:outline-none focus:border-beast-500"
                >
                  <option value={1.2}>Sedentary (Little or no workout)</option>
                  <option value={1.375}>Lightly Active (Gym 1-3 days/week)</option>
                  <option value={1.55}>Moderately Active (Gym 3-5 days/week)</option>
                  <option value={1.725}>Very Active (Heavy Workout 6-7 days/week)</option>
                </select>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">6. Primary Fitness Target</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'fat_loss', label: 'Fat Loss 🔥' },
                    { id: 'muscle_gain', label: 'Muscle Gain 💪' },
                    { id: 'recomp', label: 'Recomposition ⚡' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id as any)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                        goal === g.id
                          ? 'bg-beast-500 text-black border-beast-500 shadow-glow-gold'
                          : 'bg-dark-800 text-gray-400 border-gray-700 hover:border-beast-500/40'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Diet Preference */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">7. Diet Preference</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'veg', label: 'Vegetarian 🌱' },
                    { id: 'non_veg', label: 'Non-Veg 🍗' },
                    { id: 'eggetarian', label: 'Eggetarian 🥚' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDietPref(d.id as any)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                        dietPref === d.id
                          ? 'bg-emerald-500 text-black border-emerald-500'
                          : 'bg-dark-800 text-gray-400 border-gray-700 hover:border-emerald-500/40'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-beast-500 via-beast-600 to-beast-amber text-black font-extrabold text-base shadow-glow-gold hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                Calculate My Custom Targets Now
              </button>
            </form>
          </div>

          {/* Results Output Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-beast-500/30 bg-gradient-to-b from-dark-900/90 to-dark-950/90 shadow-2xl">
              
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-beast-500/20 text-beast-400 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Your Macro Plan Report</h3>
                  <p className="text-xs text-gray-400">Based on Mifflin-St Jeor Science</p>
                </div>
              </div>

              {calculated ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  {/* Calorie Target Banner */}
                  <div className="p-4 rounded-2xl bg-beast-500/10 border border-beast-500/30 text-center">
                    <span className="text-xs font-bold text-beast-400 uppercase tracking-widest block">Daily Target Intake</span>
                    <span className="text-4xl font-black text-white mt-1 block">
                      {results.targetCalories} <span className="text-lg font-bold text-beast-400">kcal/day</span>
                    </span>
                    <span className="text-xs text-gray-400 mt-1 block">
                      TDEE: {results.tdee} kcal · BMR: {results.bmr} kcal
                    </span>
                  </div>

                  {/* Macro Cards Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-dark-950 border border-emerald-500/30 text-center">
                      <span className="text-[11px] font-bold text-emerald-400 block">PROTEIN</span>
                      <span className="text-xl font-extrabold text-white mt-1 block">{results.proteinGrams}g</span>
                      <span className="text-[10px] text-gray-400">{results.proteinGrams * 4} kcal</span>
                    </div>

                    <div className="p-3 rounded-xl bg-dark-950 border border-amber-500/30 text-center">
                      <span className="text-[11px] font-bold text-amber-400 block">CARBS</span>
                      <span className="text-xl font-extrabold text-white mt-1 block">{results.carbsGrams}g</span>
                      <span className="text-[10px] text-gray-400">{results.carbsGrams * 4} kcal</span>
                    </div>

                    <div className="p-3 rounded-xl bg-dark-950 border border-beast-500/30 text-center">
                      <span className="text-[11px] font-bold text-beast-400 block">FATS</span>
                      <span className="text-xl font-extrabold text-white mt-1 block">{results.fatsGrams}g</span>
                      <span className="text-[10px] text-gray-400">{results.fatsGrams * 9} kcal</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-950/80 border border-gray-800 text-xs text-gray-300 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Diet Plan: <strong className="text-white capitalize">{dietPref.replace('_', ' ')} Meal Schedule</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Estimated Timeline: <strong className="text-beast-400">8 - 12 Weeks Target</strong></span>
                    </div>
                  </div>

                  <a
                    href="tel:08428090900"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-beast-500 to-beast-amber text-black font-extrabold text-sm shadow-glow-gold hover:opacity-95"
                  >
                    <Phone className="w-4 h-4 fill-black" />
                    <span>Call Coach to Review Plan: 084280 90900</span>
                  </a>
                </div>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-dark-800 text-beast-400 flex items-center justify-center mx-auto border border-gray-700">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Fill Out Questionnaire</h4>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Select your age, height, weight, activity level, and dietary preference on the left to view your customized macro target report.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
