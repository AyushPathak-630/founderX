import React, { useState } from 'react';
import { Users, DollarSign, Award, Briefcase, Lightbulb, MessageSquare, Flame, Check, ArrowUpRight } from 'lucide-react';

export const WhyAttend: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(0);

  const features = [
    {
      icon: Users,
      title: 'Founder Speed Networking',
      subtitle: 'Structured 1-on-1 slots over buffet lunch',
      description: 'Break past generic LinkedIn messages. Sit down face-to-face with active startup founders, tech architects, and fellow student developers during our structured speed networking session.',
      highlight: '400+ Qualified Peers'
    },
    {
      icon: DollarSign,
      title: 'Funding & Prize Pool',
      subtitle: '₹65,000 Non-Dilutive Grant',
      description: 'Pitch your startup idea in front of active seed investors and angel syndicates. Top 3 teams take home non-dilutive equity grants + cloud credits.',
      highlight: '₹65,000 Cash Pool'
    },
    {
      icon: Award,
      title: 'Official Certificates',
      subtitle: 'Verified E-Cell Accreditation',
      description: 'Receive an official Certificate of Distinction signed by E-Cell Convener and Keynote Speakers, boosting your resume and LinkedIn credentials.',
      highlight: 'QR Verified Certificate'
    },
    {
      icon: Briefcase,
      title: 'Startup Internships',
      subtitle: 'Direct Hiring Pipeline',
      description: 'Participating YC & Seed-funded startups are hiring for Software Engineering, Product Design, Growth Marketing, and AI Research roles directly at FounderX.',
      highlight: '15+ Open Role Offers'
    },
    {
      icon: Lightbulb,
      title: 'Idea Validation Arena',
      subtitle: 'Brutally Honest Founder Feedback',
      description: 'Don\'t spend 6 months building something nobody wants. Get your concept roasted, refined, and validated by product managers in 15 minutes.',
      highlight: '1-on-1 Office Hours'
    },
    {
      icon: MessageSquare,
      title: 'VC Panel Discussions',
      subtitle: 'Unfiltered Early-Stage Insights',
      description: 'Learn how valuation works in 2026, what cap tables should look like, how to handle term sheets, and how to balance college exams with startup execution.',
      highlight: 'Interactive Q&A'
    }
  ];

  return (
    <section id="why-attend" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            WHY ATTEND FOUNDERX 2026
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3">
            Designed for Maximum Career & Startup Acceleration
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-2">
            Every minute at FounderX is engineered to deliver high-signal connections and actionable takeaways.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedCard === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedCard(idx)}
                className={`p-6 sm:p-8 rounded border transition-all duration-200 cursor-pointer relative group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                    : 'bg-white text-[#0F172A] border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-11 w-11 rounded flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#F97316] text-white'
                          : 'bg-slate-100 text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${
                        isSelected
                          ? 'bg-orange-500/20 text-[#F97316] border-orange-500/30'
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className={`font-heading text-xl font-bold mb-1 ${isSelected ? 'text-white' : 'text-[#0F172A]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isSelected ? 'text-[#F97316]' : 'text-[#F97316]'}`}>
                    {item.subtitle}
                  </p>

                  <p className={`text-sm leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${isSelected ? 'border-slate-800 text-[#F97316]' : 'border-slate-100 text-slate-400'}`}>
                  <span>Tap to inspect perks</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
