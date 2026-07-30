import React, { useState } from 'react';
import { TIMELINE } from '../data/mockData';
import { Clock, MapPin, User, Calendar, Sparkles, Filter } from 'lucide-react';

export const EventTimeline: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Full Schedule' },
    { id: 'keynote', label: 'Keynotes & Panel' },
    { id: 'competition', label: 'Pitch Arena' },
    { id: 'networking', label: 'Networking' },
    { id: 'break', label: 'Lunch & Breaks' },
  ];

  const filteredItems = filter === 'all'
    ? TIMELINE
    : TIMELINE.filter(item => item.category === filter);

  return (
    <section id="agenda" className="py-20 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            EVENT TIMELINE • 18 AUGUST 2026
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3">
            Day Schedule & Program Agenda
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            8 action-packed hours designed to maximize knowledge transfer, pitch visibility, and strategic networking.
          </p>
        </div>

        {/* Schedule Filter Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="bg-slate-50 p-1 rounded border border-slate-200 inline-flex gap-1 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white border-4 border-[#F97316] group-hover:bg-[#F97316] transition-colors shadow-xs" />

              {/* Event Content Card */}
              <div className="bg-slate-50 border border-slate-200 rounded p-6 hover:border-slate-300 hover:shadow-sm transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded w-fit">
                    <Clock className="h-3.5 w-3.5 text-[#F97316]" />
                    <span>{item.time}</span>
                  </div>

                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>

                {item.speaker && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-2 bg-white border border-slate-200 p-2 rounded w-fit">
                    <User className="h-3.5 w-3.5 text-[#F97316]" />
                    <span>Featured Speaker: {item.speaker}</span>
                  </div>
                )}

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
