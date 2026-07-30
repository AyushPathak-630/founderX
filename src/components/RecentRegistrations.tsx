import React, { useState, useEffect } from 'react';
import { RECENT_REGISTRATIONS } from '../data/mockData';
import { Registration } from '../types';
import { UserCheck, Sparkles, Clock, Building2, Lightbulb, CheckCircle2 } from 'lucide-react';

export const RecentRegistrations: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>(RECENT_REGISTRATIONS);
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);

  // Simulate incoming real-time registration pulse every 12 seconds
  useEffect(() => {
    if (!isLiveStreaming) return;

    const sampleNames = ['Ananya Sharma', 'Rohan Gupta', 'Devika Sen', 'Karthik Raja', 'Meera Rao', 'Yash Varma'];
    const sampleColleges = ['IIT Delhi', 'BITS Goa', 'COEP Pune', 'VJTI Mumbai', 'SRM Chennai', 'NIT Trichy'];
    const sampleBranches = ['Computer Science', 'AI & ML', 'Electronics', 'Information Tech', 'Mechanical'];
    const sampleYears = ['2nd Year', '3rd Year', '4th Year', '1st Year'];

    const interval = setInterval(() => {
      const newReg: Registration = {
        id: `r-${Date.now()}`,
        name: sampleNames[Math.floor(Math.random() * sampleNames.length)],
        college: sampleColleges[Math.floor(Math.random() * sampleColleges.length)],
        branch: sampleBranches[Math.floor(Math.random() * sampleBranches.length)],
        year: sampleYears[Math.floor(Math.random() * sampleYears.length)],
        timestamp: 'Just now',
        hasStartupIdea: Math.random() > 0.4
      };

      setRegistrations(prev => [newReg, ...prev.slice(0, 5)]);
    }, 12000);

    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  return (
    <section className="py-16 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F97316] mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
              </span>
              <span>LIVE ACTIVITY FEED</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Recent Delegate Registrations
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Students and aspiring founders joining FounderX 2026 in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLiveStreaming(!isLiveStreaming)}
              className={`text-xs px-3 py-1.5 rounded border font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
                isLiveStreaming
                  ? 'bg-slate-50 text-[#F97316] border-[#F97316]'
                  : 'bg-white text-slate-400 border-slate-200'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isLiveStreaming ? 'Live Stream Active' : 'Stream Paused'}</span>
            </button>
          </div>
        </div>

        {/* Activity Feed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {registrations.map((reg) => (
            <div
              key={reg.id}
              className="bg-slate-50 border border-slate-200 rounded p-4 hover:border-slate-300 transition-all shadow-sm group relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {reg.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-sm text-[#0F172A]">{reg.name}</h3>
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316] shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <Building2 className="h-3 w-3 text-slate-400" />
                      <span>{reg.college}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[10px] bg-white px-2 py-0.5 rounded text-slate-500 font-bold uppercase tracking-wider border border-slate-200 flex items-center gap-1">
                  <Clock className="h-2.5 w-2.5 text-[#F97316]" />
                  {reg.timestamp}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{reg.branch} • {reg.year}</span>
                {reg.hasStartupIdea ? (
                  <span className="bg-orange-50 text-[#F97316] border border-orange-200 px-2 py-0.5 rounded font-bold text-[10px] flex items-center gap-1 uppercase tracking-wider">
                    <Lightbulb className="h-3 w-3" />
                    Idea Pitcher
                  </span>
                ) : (
                  <span className="bg-slate-200/60 text-slate-600 px-2 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider">
                    Attendee
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
