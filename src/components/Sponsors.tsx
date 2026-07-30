import React from 'react';
import { SPONSORS } from '../data/mockData';
import { Building2, ExternalLink } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <section className="py-20 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            OUR ECOSYSTEM PARTNERS
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-[#0F172A] mt-3">
            Supported by Industry Leaders & Venture Funds
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Backing student entrepreneurship with cloud grants, seed funding pipelines, and global media reach.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SPONSORS.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all flex flex-col items-center justify-center text-center group cursor-pointer shadow-xs"
            >
              <span className="font-heading font-extrabold text-[#0F172A] text-sm sm:text-base group-hover:text-[#F97316] transition-colors tracking-tight">
                {sponsor.logoText}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-500 mt-1">
                {sponsor.category}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
