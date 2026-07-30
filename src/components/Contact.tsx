import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 p-6 rounded space-y-4 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-[#0F172A]">Event Secretariat</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-orange-50 border border-orange-200 text-[#F97316] shrink-0 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Email Enquiries</p>
                    <p className="font-semibold text-slate-800">founderx@ecell.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-orange-50 border border-orange-200 text-[#F97316] shrink-0 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Helpline Phone</p>
                    <p className="font-semibold text-slate-800">+91 98765 43210 / +91 91234 56789</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-orange-50 border border-orange-200 text-[#F97316] shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Venue Address</p>
                    <p className="font-semibold text-slate-800">Dr. Sarvapalli Radhakrishnan Auditorium, ABES Engineering College, Ghaziabad</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase text-slate-400 mb-2">Connect with E-Cell ABESEC</p>
                <div className="flex gap-2">
                  {[
                    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/ecell_abesec/' },
                    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/ecell-abesec/' },
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
                        className="p-2.5 rounded bg-slate-50 hover:bg-[#F97316] hover:text-white text-slate-700 transition-colors border border-slate-200"
                        aria-label={s.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded shadow-sm">
            <h3 className="font-heading font-bold text-xl text-[#0F172A] mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our student coordinator team typically responds within 2-4 hours.
            </p>

            {sent ? (
              <div className="bg-orange-50 border border-orange-200 p-6 rounded text-center space-y-2">
                <CheckCircle2 className="h-10 w-10 text-[#F97316] mx-auto" />
                <h4 className="font-bold text-[#0F172A] text-lg">Message Delivered!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for writing to us. An E-Cell representative will email you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can E-Cell assist you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-sm py-3.5 rounded transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4 text-[#F97316]" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
