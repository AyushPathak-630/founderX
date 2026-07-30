import React from 'react';
import { Target, Eye, Compass, Award, ShieldCheck, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            ABOUT FOUNDERX 2026
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3">
            Bridging Campus Ideas & Commercial Execution
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-3 leading-relaxed">
            Organized by the Entrepreneurship Cell at ABES Engineering College, Ghaziabad, FounderX is India's flagbearer student networking summit built to turn campus prototypes into scalable venture-backed startups.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded space-y-4 hover:border-slate-300 transition-colors shadow-sm">
            <div className="h-12 w-12 rounded bg-[#0F172A] text-white flex items-center justify-center">
              <Target className="h-6 w-6 text-[#F97316]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#0F172A]">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To democratize access to seed capital, top-tier VC mentorship, and co-founder talent for student developers and creators across 50+ college campuses.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded space-y-4 hover:border-slate-300 transition-colors shadow-sm">
            <div className="h-12 w-12 rounded bg-[#0F172A] text-white flex items-center justify-center">
              <Eye className="h-6 w-6 text-[#F97316]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#0F172A]">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To incubate 100+ student-led startups that achieve product-market fit and generate real economic value before graduation day.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded space-y-4 hover:border-slate-300 transition-colors shadow-sm">
            <div className="h-12 w-12 rounded bg-[#0F172A] text-white flex items-center justify-center">
              <Compass className="h-6 w-6 text-[#F97316]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#0F172A]">Core Objectives</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Eliminate information asymmetry in early-stage fundraising, facilitate co-founder matching, and provide a direct venue for seed investment pitches.
            </p>
          </div>
        </div>

        {/* Key Pillars / Benefits Bar */}
        <div className="bg-[#0F172A] text-white rounded p-8 md:p-12 shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#F97316] font-bold text-lg font-heading">
              <Zap className="h-5 w-5" />
              <span>Real Pitches</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              No theoretical exercises. Real judges, cash prizes, and incubation term sheets on stage.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#F97316] font-bold text-lg font-heading">
              <Award className="h-5 w-5" />
              <span>₹65,000 Grants</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Non-dilutive equity grants to help student teams launch initial prototypes and hosting.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#F97316] font-bold text-lg font-heading">
              <ShieldCheck className="h-5 w-5" />
              <span>Verified Network</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with 12 active tech founders who have raised real institutional seed rounds.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#F97316] font-bold text-lg font-heading">
              <Target className="h-5 w-5" />
              <span>Career Internships</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Exclusive speed interviewing opportunities for engineering, product, and growth roles in YC startups.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
