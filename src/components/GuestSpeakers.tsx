import React from 'react';
import { SPEAKERS } from '../data/mockData';
import { Linkedin, Sparkles, Award, ExternalLink } from 'lucide-react';

export const GuestSpeakers: React.FC = () => {
  return (
    <section id="speakers" className="py-20 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#F97316] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>LEARN FROM THE BEST</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Keynote Speakers & Jury Members
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Pioneering founders, VC partners, and Shark Tank India leaders sharing unfiltered playbook strategies.
          </p>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-slate-50 border border-slate-200 rounded overflow-hidden hover:border-slate-300 transition-all duration-200 shadow-xs flex flex-col justify-between group relative"
            >
              <div>
                {/* Speaker Photo Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent" />

                  {/* LinkedIn Button */}
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-[#F97316] hover:text-white text-[#0F172A] p-2 rounded transition-colors border border-slate-200 shadow-xs cursor-pointer"
                    aria-label={`${speaker.name} LinkedIn Profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  {/* Speaker Header Info */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F97316] text-white px-2 py-0.5 rounded inline-block mb-1">
                      {speaker.company}
                    </span>
                    <h3 className="font-heading text-lg font-bold leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-slate-200 font-medium">{speaker.role}</p>
                  </div>
                </div>

                {/* Speaker Details Content */}
                <div className="p-5 space-y-4">
                  {/* Achievements Badge */}
                  <div className="bg-white p-2.5 rounded border border-slate-200 text-xs flex items-center gap-2 text-slate-700 shadow-xs">
                    <Award className="h-4 w-4 text-[#F97316] shrink-0" />
                    <span className="text-[11px] font-medium leading-tight">{speaker.achievements}</span>
                  </div>

                  {/* Keynote Session */}
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Keynote Talk</p>
                    <p className="text-xs font-bold text-[#0F172A] leading-snug">
                      "{speaker.keynoteTitle}"
                    </p>
                  </div>

                  {/* Topics Tags */}
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Expertise</p>
                    <div className="flex flex-wrap gap-1.5">
                      {speaker.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white text-slate-700 px-2 py-0.5 rounded font-semibold border border-slate-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

