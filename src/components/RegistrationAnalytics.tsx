import React, { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import {
  DAILY_REGISTRATION_DATA,
  CATEGORY_DISTRIBUTION,
  COLLEGE_PARTICIPATION,
  EVENT_DETAILS
} from '../data/mockData';
import { TrendingUp, PieChart as PieIcon, BarChart3, ShieldCheck } from 'lucide-react';

export const RegistrationAnalytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'categories' | 'colleges'>('daily');

  return (
    <section id="analytics" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-xs font-semibold text-[#F97316] mb-3">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>TRANSPARENT DEMOGRAPHICS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Registration Analytics & Trends
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Explore real-time delegate velocity, academic background distribution, and university participation.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded border border-slate-200 shadow-sm inline-flex gap-1">
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'daily'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>Daily Growth</span>
            </button>

            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'categories'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              <PieIcon className="h-4 w-4" />
              <span>Student Streams</span>
            </button>

            <button
              onClick={() => setActiveTab('colleges')}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'colleges'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>College Breakdown</span>
            </button>
          </div>
        </div>

        {/* Analytics Main Display Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
          
          {activeTab === 'daily' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A]">Daily Registration Velocity</h3>
                  <p className="text-slate-500 text-xs">Accumulated delegate check-ins over the past 10 days</p>
                </div>
                <div className="text-right bg-slate-50 px-3 py-1.5 rounded border border-slate-200 text-xs">
                  <span className="text-slate-500">Average Velocity: </span>
                  <span className="text-[#F97316] font-bold">~46 registrations/day</span>
                </div>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DAILY_REGISTRATION_DATA}>
                    <defs>
                      <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="day" stroke="#64748B" fontSize={12} />
                    <YAxis stroke="#64748B" fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="accumulated" stroke="#F97316" strokeWidth={3} fillOpacity={1} fill="url(#colorReg)" name="Total Registrations" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A]">Academic Background Breakdown</h3>
                  <p className="text-slate-500 text-xs">Percentage distribution of delegates by major field of study</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={CATEGORY_DISTRIBUTION}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {CATEGORY_DISTRIBUTION.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 1 ? '#F97316' : index === 0 ? '#0F172A' : index === 2 ? '#64748B' : '#CBD5E1'} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-3">
                  {CATEGORY_DISTRIBUTION.map((cat, idx) => {
                    const colors = ['#0F172A', '#F97316', '#64748B', '#CBD5E1'];
                    return (
                      <div key={idx} className="flex items-center justify-between p-3 rounded bg-slate-50 border border-slate-200 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: colors[idx] }} />
                          <span className="font-semibold text-slate-700">{cat.name}</span>
                        </div>
                        <span className="font-bold text-[#0F172A] bg-white border border-slate-200 px-2.5 py-1 rounded">
                          {cat.value}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'colleges' && (
            <div>
              <div className="mb-6">
                <h3 className="font-heading text-lg font-bold text-[#0F172A]">Participating University Groups</h3>
                <p className="text-slate-500 text-xs">18 top colleges represented across India</p>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={COLLEGE_PARTICIPATION}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="college" stroke="#64748B" fontSize={11} />
                    <YAxis stroke="#64748B" fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="count" fill="#F97316" radius={[4, 4, 0, 0]} name="Delegates" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Quick Stats Banner */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
              <span className="text-slate-500 block mb-0.5">Total Capacity</span>
              <span className="font-bold text-[#0F172A] text-base">400 Delegates</span>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
              <span className="text-slate-500 block mb-0.5">Verified Students</span>
              <span className="font-bold text-[#F97316] text-base">{EVENT_DETAILS.registered} Confirmed</span>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
              <span className="text-slate-500 block mb-0.5">Startup Ideas Submitted</span>
              <span className="font-bold text-[#0F172A] text-base">142 Pitch Entries</span>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
              <span className="text-slate-500 block mb-0.5">Female Representation</span>
              <span className="font-bold text-[#0F172A] text-base">38% Delegates</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
