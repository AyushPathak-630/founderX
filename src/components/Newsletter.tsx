import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-16 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded p-8 sm:p-12 text-center space-y-6 shadow-xs relative overflow-hidden">
          
          <div className="max-w-xl mx-auto space-y-3">
            <div className="h-12 w-12 rounded bg-white text-[#F97316] border border-slate-200 flex items-center justify-center mx-auto shadow-xs">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Stay Updated on Campus VC Deals & Events
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Subscribe to the weekly E-Cell Dispatch for founder interviews, pitch deadlines, and cloud credit giveaways.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-orange-50 border border-orange-200 p-4 rounded max-w-md mx-auto text-[#F97316] text-sm font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>You're subscribed! Check your inbox for E-Cell updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your college email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-slate-200 rounded px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316]"
              />
              <button
                type="submit"
                className="bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400">Zero spam. Unsubscribe anytime in 1-click.</p>

        </div>
      </div>
    </section>
  );
};
