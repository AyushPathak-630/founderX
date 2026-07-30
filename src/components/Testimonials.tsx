import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Building2, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            DELEGATE FEEDBACK
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3">
            Loved by 500+ Past Attendees
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            See how FounderX helped student developers find co-founders, secure angel investment, and launch real companies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200 rounded p-8 shadow-sm flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-200" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User Profile */}
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h3 className="font-bold text-sm text-[#0F172A] flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316]" />
                  </h3>
                  <p className="text-xs text-[#F97316] font-medium">{item.role}</p>
                  <p className="text-[11px] text-slate-500">{item.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
