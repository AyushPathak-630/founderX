import React from 'react';
import { Rocket, ArrowUp, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-[#F97316] flex items-center justify-center text-white font-bold">
                <Rocket className="h-4 w-4" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                Founder<span className="text-[#F97316]">X</span> 2026
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              "Where Students Meet Startup Leaders." Organized by the Entrepreneurship Cell at ABES Engineering College, Ghaziabad.
            </p>
          </div>

          {/* Quick Sitemap */}
          <div>
            <p className="font-bold uppercase tracking-wider text-slate-200 mb-3 text-[11px]">Sitemap</p>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Summit</a></li>
              <li><a href="#why-attend" className="hover:text-white transition-colors">Why Attend</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Keynote Speakers</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">Day Agenda</a></li>
              <li><a href="#competition" className="hover:text-white transition-colors">Pitch Arena</a></li>
            </ul>
          </div>

          {/* Event Specs */}
          <div>
            <p className="font-bold uppercase tracking-wider text-slate-200 mb-3 text-[11px]">Event Details</p>
            <ul className="space-y-2">
              <li className="text-slate-300 font-semibold">18 August 2026 • 10:00 AM</li>
              <li>Dr. Sarvapalli Radhakrishnan Auditorium, ABES Engg. College, Ghaziabad</li>
              <li className="text-[#F97316] font-bold">Prize Pool: ₹65,000</li>
            </ul>
          </div>

          {/* Legal & Accreditation */}
          <div>
            <p className="font-bold uppercase tracking-wider text-slate-200 mb-3 text-[11px]">Accreditation</p>
            <p className="leading-relaxed mb-3">
              Official flagship summit hosted under the student governance of the Entrepreneurship Cell at ABES Engineering College, Ghaziabad.
            </p>
            <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900/80 p-2 rounded border border-slate-800">
              <ShieldCheck className="h-4 w-4 text-[#F97316]" />
              <span>Verified E-Cell Event</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 FounderX • Entrepreneurship Cell. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-white transition-colors">Privacy & Terms</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 text-[#F97316]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
