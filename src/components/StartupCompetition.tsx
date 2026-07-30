import React, { useState } from 'react';
import { COMPETITION_PRIZES } from '../data/mockData';
import { Trophy, Award, CheckCircle2, FileText, Target, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface CompetitionProps {
  onRegisterToPitchClick: () => void;
}

export const StartupCompetition: React.FC<CompetitionProps> = ({ onRegisterToPitchClick }) => {
  const [activeTab, setActiveTab] = useState<'prizes' | 'rules' | 'judging'>('prizes');

  const judgingCriteria = [
    { title: 'Problem Clarity & Need', weight: '30%', desc: 'How well defined is the pain point? Is it a real market problem backed by customer validation?' },
    { title: 'Founder Execution & Team', weight: '25%', desc: 'Does the student team possess technical capability, speed, and domain insight to execute?' },
    { title: 'Innovation & Product Tech', weight: '25%', desc: 'Uniqueness of the solution, technical feasibility, IP defensibility, or smart engineering.' },
    { title: 'Market Opportunity & Scale', weight: '20%', desc: 'Total Addressable Market (TAM), monetization model, and clear path to ₹1 Cr ARR.' }
  ];

  const rules = [
    'Open to all currently enrolled college students across any academic institution in India.',
    'Team size can range from 1 member (Solo Founder) to 4 co-founders max.',
    'Ideas at all stages are welcome: Concept Stage, Wireframes/MVP, or Early Revenue Startups (< ₹5L Raised).',
    'Pitch deck must be submitted in PDF format (Max 10 slides) prior to August 14, 2026.',
    'Selected Top 10 finalists get 3 minutes live stage pitch + 2 minutes VC jury Q&A.'
  ];

  return (
    <section id="competition" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#F97316] mb-3">
            <Trophy className="h-3.5 w-3.5 text-[#F97316]" />
            <span>FOUNDERX PITCH ARENA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            ₹65,000 Student Startup Competition
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Pitch your startup concept live on stage in front of active venture capitalists, angel investors, and incubators.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded border border-slate-200 shadow-sm inline-flex gap-1">
            <button
              onClick={() => setActiveTab('prizes')}
              className={`px-5 py-2 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'prizes'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              Prize Distribution
            </button>
            <button
              onClick={() => setActiveTab('judging')}
              className={`px-5 py-2 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'judging'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              Judging Criteria
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-5 py-2 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'rules'
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              Rules & Eligibility
            </button>
          </div>
        </div>

        {/* Tab 1: Prizes */}
        {activeTab === 'prizes' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPETITION_PRIZES.map((prize, idx) => (
              <div
                key={idx}
                className={`p-8 rounded border flex flex-col justify-between relative overflow-hidden transition-all ${
                  idx === 0
                    ? 'bg-white border-2 border-[#F97316] shadow-md'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {idx === 0 && (
                  <div className="absolute top-0 right-0 bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl">
                    GRAND WINNER
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded ${idx === 0 ? 'bg-[#0F172A] text-white' : 'bg-slate-100 text-[#0F172A]'}`}>
                      <Trophy className="h-6 w-6 text-[#F97316]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#0F172A]">{prize.position}</h3>
                      <p className="text-2xl font-extrabold text-[#F97316]">{prize.amount}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Included Perks</p>
                    {prize.perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onRegisterToPitchClick}
                  className={`mt-8 w-full py-3 rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    idx === 0
                      ? 'bg-[#F97316] hover:bg-orange-600 text-white shadow-xs'
                      : 'bg-[#0F172A] hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Pitch Your Idea</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Judging Criteria */}
        {activeTab === 'judging' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white border border-slate-200 p-8 rounded shadow-sm">
            {judgingCriteria.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-[#0F172A]">{item.title}</h3>
                  <span className="bg-orange-50 text-[#F97316] border border-orange-200 px-2.5 py-0.5 rounded text-xs font-bold">
                    {item.weight}
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Rules & Eligibility */}
        {activeTab === 'rules' && (
          <div className="bg-white border border-slate-200 p-8 rounded shadow-sm space-y-4 max-w-3xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#F97316]" />
              <span>Official Pitch Guidelines</span>
            </h3>
            {rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-[#F97316] shrink-0">{idx + 1}.</span>
                <p>{rule}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
