import React from 'react';
import { Trophy, Briefcase, GraduationCap, Star } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Trophy,
      label: 'Prize Pool',
      value: 65,
      prefix: '₹',
      suffix: ',000',
      description: 'Cash rewards for Top 3 Pitch Finalists'
    },
    {
      icon: Briefcase,
      label: 'Startup Founders',
      value: EVENT_DETAILS.founders,
      suffix: '+',
      description: 'Active founders & seed stage mentors'
    },
    {
      icon: GraduationCap,
      label: 'Colleges',
      value: EVENT_DETAILS.colleges,
      suffix: '+',
      description: 'Top tech & management institutes'
    },
    {
      icon: Star,
      label: 'Past Event Rating',
      value: EVENT_DETAILS.rating,
      suffix: ' / 5',
      isDecimal: true,
      description: 'Based on 500+ past delegate reviews'
    }
  ];

  return (
    <section className="py-16 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-2">
            Key Figures & Impact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            FounderX 2026 at a Glance
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Real-time numbers driving India's fastest-growing student entrepreneurship community.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded border transition-all duration-200 bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded bg-slate-100 text-[#0F172A]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight flex items-baseline">
                    {stat.prefix}
                    <span>{stat.isDecimal ? stat.value.toFixed(1) : stat.value}</span>
                    <span className="text-[#F97316]">{stat.suffix}</span>
                  </div>
                  <h3 className="text-xs font-bold uppercase text-slate-700 tracking-wider">{stat.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
