import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3">
            Contact Entrepreneurship Cell
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Have questions about group pass bookings, sponsorship, or pitch submissions? Reach out anytime!
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded space-y-6 shadow-sm">
          <h3 className="font-heading font-bold text-lg text-[#0F172A]">Event Secretariat</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-orange-50 border border-orange-200 text-[#F97316] shrink-0 mt-0.5">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Email Enquiries</p>
                <p className="font-semibold text-slate-800 text-base">founderx@ecell.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-orange-50 border border-orange-200 text-[#F97316] shrink-0 mt-0.5">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Helpline Phone</p>
                <p className="font-semibold text-slate-800 text-base">+91 98765 43210 / +91 91234 56789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-orange-50 border border-orange-200 text-[#F97316] shrink-0 mt-0.5">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-400">Venue Address</p>
                <p className="font-semibold text-slate-800 text-base">Dr. Sarvapalli Radhakrishnan Auditorium, ABES Engineering College, Ghaziabad</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-slate-100">
            <p className="text-xs font-bold uppercase text-slate-400 mb-3">Connect with E-Cell ABESEC</p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/ecell_abesec/' },
                { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/ecell-abes-ec/' },
                { icon: Twitter, label: 'X/Twitter', url: 'https://twitter.com/ecell_abesec' },
                { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@ecellabesec' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-slate-50 hover:bg-[#F97316] hover:text-white text-slate-700 transition-colors border border-slate-200"
                    aria-label={s.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
