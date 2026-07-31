import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/mockData';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Users, TicketCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const RegistrationProgress: React.FC = () => {
  const [registered, setRegistered] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'registrations'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setRegistered(snapshot.size);
    }, (error) => {
      console.error('Error fetching registrations count:', error);
    });
    return () => unsubscribe();
  }, []);

  const percentage = Math.round((registered / EVENT_DETAILS.capacity) * 100);
  const strokeDashoffset = 283 - (283 * percentage) / 100;
  const seatsRemaining = Math.max(0, EVENT_DETAILS.capacity - registered);

  const milestones = [
    { count: 100, label: 'Early Bird Opened', reached: registered >= 100, date: '15 July 2026' },
    { count: 200, label: '50% Capacity Crossed', reached: registered >= 200, date: '22 July 2026' },
    { count: 300, label: '75% Capacity Crossed', reached: registered >= 300, date: '28 July 2026' },
    { count: 400, label: 'Housefull (Cap Limit)', reached: registered >= 400, date: 'Target: 10 Aug' },
  ];

  return (
    <section className="py-16 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Progress Gauge Circular Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded border border-slate-200">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    className="stroke-slate-200"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    className="stroke-[#F97316] transition-all duration-1000 ease-out"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>

                {/* Inner Content */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-heading text-4xl font-extrabold text-[#0F172A]">
                    {percentage}%
                  </span>
                  <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider">
                    SEATS FILLED
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <TicketCheck className="h-4 w-4 text-[#F97316]" />
                <span>{registered} Confirmed / {EVENT_DETAILS.capacity} Maximum Capacity</span>
              </div>
            </div>

            {/* Right: Progress Details & Milestones */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F97316] mb-1">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Real-Time Registration Counter</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  {seatsRemaining} Seats Remaining Before Registration Closes
                </h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  To maintain optimal networking quality and safety, the Entrepreneurship Cell has capped physical seating at 400 attendees in Dr. Sarvapalli Radhakrishnan Auditorium, ABES Engineering College, Ghaziabad.
                </p>
              </div>

              {/* Linear Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-500 tracking-wider">
                  <span>Current Occupancy</span>
                  <span className="text-[#F97316]">{registered} / 400 Seats</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 p-0.5 border border-slate-200">
                  <div
                    className="bg-[#F97316] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Milestone Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {milestones.map((ms, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded text-xs border ${
                      ms.reached
                        ? 'bg-slate-50 border-slate-200 text-slate-800'
                        : 'bg-white border-slate-200 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold">{ms.count} Seats</span>
                      {ms.reached ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316]" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <p className="font-semibold text-[11px] truncate">{ms.label}</p>
                    <p className="text-[10px] text-slate-400">{ms.date}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
