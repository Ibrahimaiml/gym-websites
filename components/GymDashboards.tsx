'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Users, Dumbbell, TrendingUp, Calendar, CheckCircle2, Phone, ShieldCheck, Flame, Plus } from 'lucide-react';

export default function GymDashboards() {
  const [viewMode, setViewMode] = useState<'client' | 'admin'>('client');
  const [workoutLog, setWorkoutLog] = useState([
    { date: 'Today', workout: 'Push Day A (Bench Press 90kg x 8)', weight: '76.2 kg', status: 'Completed' },
    { date: 'Yesterday', workout: 'Pull Day B (Deadlift 140kg x 5)', weight: '76.5 kg', status: 'Completed' },
    { date: '3 days ago', workout: 'Leg Day (Squats 110kg x 6)', weight: '76.8 kg', status: 'Completed' },
  ]);
  const [newExercise, setNewExercise] = useState('');

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExercise.trim()) return;
    setWorkoutLog([
      { date: 'Just now', workout: newExercise, weight: '76.0 kg', status: 'Completed' },
      ...workoutLog,
    ]);
    setNewExercise('');
  };

  return (
    <section id="dashboards" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-beast-500/10 border border-beast-500/30 text-beast-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <LayoutDashboard className="w-4 h-4" />
            <span>Interactive Gym Portals</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Client & Admin <span className="gold-gradient-text">Dashboards</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Track your workouts, body weight trends, and membership subscriptions in real time.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex justify-center mb-10">
          <div className="bg-dark-900 p-1.5 rounded-2xl border border-gray-800 flex items-center space-x-2">
            <button
              onClick={() => setViewMode('client')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 ${
                viewMode === 'client'
                  ? 'bg-beast-500 text-black shadow-glow-gold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>Client Workout Portal</span>
            </button>
            <button
              onClick={() => setViewMode('admin')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center space-x-2 ${
                viewMode === 'admin'
                  ? 'bg-emerald-500 text-black shadow-glow-emerald'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Gym Admin Portal</span>
            </button>
          </div>
        </div>

        {/* CLIENT DASHBOARD VIEW */}
        {viewMode === 'client' ? (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-beast-500/20 space-y-8 animate-in fade-in duration-300">
            
            {/* User Profile Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-dark-900/80 border border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-beast-500 to-beast-amber text-black flex items-center justify-center font-black text-xl shadow-glow-gold">
                  BB
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Madurai Beast Athlete</h3>
                  <p className="text-xs text-beast-400 font-semibold mt-0.5">VIP Member · Beauty and Beast Fitness Gym</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  Active Subscription: 3 Months Pack
                </div>
                <a
                  href="tel:08428090900"
                  className="px-4 py-2 rounded-xl bg-beast-500 text-black font-extrabold text-xs shadow-glow-gold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 fill-black" />
                  <span>Renew Call</span>
                </a>
              </div>
            </div>

            {/* Metrics Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-dark-900 border border-gray-800">
                <span className="text-xs text-gray-400 font-semibold block">Workouts Logged</span>
                <span className="text-2xl font-black text-white mt-1 block">42 Sessions</span>
                <span className="text-[11px] text-emerald-400 font-medium mt-1 block">↑ 12% this month</span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-900 border border-gray-800">
                <span className="text-xs text-gray-400 font-semibold block">Current Body Weight</span>
                <span className="text-2xl font-black text-beast-400 mt-1 block">76.2 kg</span>
                <span className="text-[11px] text-emerald-400 font-medium mt-1 block">↓ 3.8 kg Fat Lost</span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-900 border border-gray-800">
                <span className="text-xs text-gray-400 font-semibold block">Personal Best (Bench)</span>
                <span className="text-2xl font-black text-white mt-1 block">95 kg</span>
                <span className="text-[11px] text-beast-400 font-medium mt-1 block">New PR Achieved!</span>
              </div>
              <div className="p-4 rounded-2xl bg-dark-900 border border-gray-800">
                <span className="text-xs text-gray-400 font-semibold block">Attendance Streak</span>
                <span className="text-2xl font-black text-amber-400 mt-1 block">14 Days 🔥</span>
                <span className="text-[11px] text-gray-400 font-medium mt-1 block">Perfect Consistency</span>
              </div>
            </div>

            {/* Workout Tracker Form & List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Plus className="w-5 h-5 text-beast-400" />
                  <span>Log New Workout Session</span>
                </h4>
                <form onSubmit={handleAddLog} className="space-y-3">
                  <input
                    type="text"
                    placeholder="e.g., Incline Dumbbell Press 32kg x 10"
                    value={newExercise}
                    onChange={(e) => setNewExercise(e.target.value)}
                    className="w-full bg-dark-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-beast-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-beast-500 text-black font-extrabold text-sm shadow-glow-gold hover:opacity-90"
                  >
                    Add Workout Entry
                  </button>
                </form>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center justify-between">
                  <span>Recent Activity Log</span>
                  <span className="text-xs text-beast-400 font-medium">{workoutLog.length} Records</span>
                </h4>

                <div className="space-y-3">
                  {workoutLog.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-dark-900/90 border border-gray-800 flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-semibold text-beast-400">{item.date}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs font-bold text-emerald-400">{item.weight}</span>
                        </div>
                        <p className="text-sm font-bold text-white mt-1">{item.workout}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* ADMIN DASHBOARD VIEW */
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/20 space-y-8 animate-in fade-in duration-300">
            
            {/* Admin Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-dark-900 border border-emerald-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Active Members</span>
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-3xl font-black text-white mt-2 block">148 Athletes</span>
                <span className="text-xs text-gray-400 mt-1 block">Beauty & Beast Gym Madurai</span>
              </div>

              <div className="p-6 rounded-2xl bg-dark-900 border border-beast-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-beast-400 uppercase tracking-wider">New Inquiries</span>
                  <Phone className="w-5 h-5 text-beast-400" />
                </div>
                <span className="text-3xl font-black text-white mt-2 block">28 Leads</span>
                <span className="text-xs text-gray-400 mt-1 block">Ready for Callback</span>
              </div>

              <div className="p-6 rounded-2xl bg-dark-900 border border-amber-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Gym Status</span>
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-3xl font-black text-white mt-2 block">5.0 ★ Rating</span>
                <span className="text-xs text-gray-400 mt-1 block">40+ Verified Reviews</span>
              </div>
            </div>

            {/* Member Call Leads Roster */}
            <div>
              <h3 className="text-xl font-extrabold text-white mb-4">Pending Client Call Requests</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="bg-dark-900 text-xs font-bold text-beast-400 uppercase border-b border-gray-800">
                    <tr>
                      <th className="p-4">Lead Name</th>
                      <th className="p-4">Target Goal</th>
                      <th className="p-4">Preferred Time</th>
                      <th className="p-4">Phone Number</th>
                      <th className="p-4">Direct Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      { name: 'Karthik Raja', goal: 'Fat Loss & Strength', time: 'Morning 7 AM', phone: '084280 90900' },
                      { name: 'Priya Sundaram', goal: 'Personal Training', time: 'Evening 6 PM', phone: '084280 90900' },
                      { name: 'Vignesh Kumar', goal: 'Powerlifting Split', time: 'Immediate Call', phone: '084280 90900' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-dark-900/60">
                        <td className="p-4 font-bold text-white">{row.name}</td>
                        <td className="p-4 text-xs font-semibold text-emerald-400">{row.goal}</td>
                        <td className="p-4 text-xs text-gray-400">{row.time}</td>
                        <td className="p-4 font-mono font-bold text-beast-400">{row.phone}</td>
                        <td className="p-4">
                          <a
                            href="tel:08428090900"
                            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-beast-500 text-black font-extrabold text-xs shadow-glow-gold hover:opacity-90"
                          >
                            <Phone className="w-3 h-3 fill-black" />
                            <span>Call 084280 90900</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
