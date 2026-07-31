import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles, Users, Award, Play } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface HeroProps {
  onRegisterClick: () => void;
  onViewAgendaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onViewAgendaClick }) => {
  // Countdown Timer state to August 18, 2026
  const targetDate = new Date('2026-08-18T10:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  const seatsLeft = Math.max(0, EVENT_DETAILS.capacity - registered);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    };

    function setDays(d: number) { setTimeLeft(prev => ({ ...prev, days: d })); }
    function setHours(h: number) { setTimeLeft(prev => ({ ...prev, hours: h })); }
    function setMinutes(m: number) { setTimeLeft(prev => ({ ...prev, minutes: m })); }
    function setSeconds(s: number) { setTimeLeft(prev => ({ ...prev, seconds: s })); }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-slate-50 text-[#0F172A] overflow-hidden border-b border-slate-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container */}
        <div className="bg-white p-8 sm:p-12 border border-slate-200 rounded-xl shadow-sm max-w-5xl mx-auto text-center space-y-8">
          
          {/* Eyebrow Pill */}
          <div>
            <span className="text-[#F97316] font-bold text-xs uppercase tracking-widest bg-orange-50 border border-orange-100 px-3 py-1 rounded">
              India's Premier Startup Event
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Where Students Meet{' '}
            <span className="text-[#F97316]">
              Startup Leaders.
            </span>
          </h1>

          {/* Tagline & Intro */}
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Join 400+ student innovators, 12 active startup founders, top venture capitalists, and ecosystem mentors at Dr. Sarvapalli Radhakrishnan Auditorium, ABES Engineering College, Ghaziabad on August 18th for a day of networking, funding, and high-impact mentorship.
          </p>

          {/* Event Quick Meta Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
            <div className="bg-slate-50 p-4 rounded border border-slate-100 text-left flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#F97316] shrink-0" />
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">Aug 18</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">2026 • Tuesday</div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-slate-100 text-left flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#F97316] shrink-0" />
              <div>
                <div className="text-sm font-bold text-[#0F172A] leading-tight">Dr. S. Radhakrishnan Auditorium</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">ABES Engg College, Ghaziabad</div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-slate-100 text-left flex items-center gap-3">
              <Clock className="h-5 w-5 text-[#F97316] shrink-0" />
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">₹199</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Entry Pass Fee</div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="pt-2">
            <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-3">
              Event Starts In
            </p>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded text-center shadow-sm"
                >
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F172A] block">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded transition-all shadow-sm flex items-center justify-center gap-3 text-xs tracking-wider uppercase cursor-pointer"
            >
              <span>SECURE SEAT FOR ₹199</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#agenda"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-[#0F172A] font-semibold px-6 py-3.5 rounded transition-colors flex items-center justify-center gap-2 text-xs tracking-wider uppercase"
            >
              <Play className="h-3.5 w-3.5 text-[#F97316] fill-[#F97316]" />
              <span>View Agenda & Schedule</span>
            </a>
          </div>

          {/* Live Progress Bar Indicator */}
          <div className="pt-4 max-w-xl mx-auto bg-slate-50 border border-slate-200 p-4 rounded text-left">
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="text-slate-700 flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-[#F97316]" />
                <span>{registered} / {EVENT_DETAILS.capacity} Seats Claimed</span>
              </span>
              <span className="text-[#F97316] bg-orange-100 px-2 py-0.5 rounded font-bold text-[10px]">
                {seatsLeft} SEATS LEFT
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-[#F97316] h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${(registered / EVENT_DETAILS.capacity) * 100}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-center uppercase font-bold tracking-wider">
              Over 82% filled • Registrations close at 400 capacity
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
