import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, ArrowRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [collegeLogo] = useState<string | null>(() => {
    return localStorage.getItem('founderx_college_logo');
  });
  const [ecellLogo] = useState<string | null>(() => {
    return localStorage.getItem('founderx_ecell_logo');
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Attend', href: '#why-attend' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Pitch Arena', href: '#competition' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs py-3'
          : 'bg-white text-slate-900 py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Branding Logo Area */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              {/* E-Cell Logo / Icon */}
              {ecellLogo ? (
                <img
                  src={ecellLogo}
                  alt="E-Cell ABES Logo"
                  className="h-8 w-auto object-contain max-w-[40px] rounded"
                />
              ) : (
                <div className="w-8 h-8 bg-[#0F172A] rounded flex items-center justify-center text-white font-bold text-lg shadow-xs group-hover:bg-slate-800 transition-colors">
                  X
                </div>
              )}

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-[#0F172A]">
                    FounderX <span className="text-[#F97316]">2026</span>
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase flex items-center gap-1">
                  <span>E-CELL ABESEC</span>
                </div>
              </div>
            </a>

            {/* ABES College Logo Badge / Display */}
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-200">
              {collegeLogo ? (
                <img
                  src={collegeLogo}
                  alt="ABES College Logo"
                  className="h-7 w-auto object-contain max-w-[100px]"
                />
              ) : (
                <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-[11px] font-bold text-slate-700">
                  <Building2 className="h-3.5 w-3.5 text-[#F97316]" />
                  <span>ABES ENGG COLLEGE</span>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 text-sm font-medium text-slate-500">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#0F172A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onRegisterClick}
              className="bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs tracking-wide px-4 py-2.5 rounded transition-all shadow-xs flex items-center gap-2 group cursor-pointer"
            >
              <span>REGISTER NOW</span>
              <span className="text-[10px] bg-[#F97316] px-1.5 py-0.5 rounded text-white font-bold">₹199</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onRegisterClick}
              className="sm:hidden bg-[#0F172A] text-white text-xs font-semibold px-3 py-1.5 rounded cursor-pointer"
            >
              ₹199 Pass
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded bg-slate-50 border border-slate-200 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-600 hover:text-[#0F172A] bg-slate-50 hover:bg-slate-100 rounded text-center font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onRegisterClick();
            }}
            className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-semibold py-3 rounded transition-all text-center flex items-center justify-center gap-2 shadow-xs text-xs uppercase tracking-wider cursor-pointer"
          >
            <span>Register for FounderX 2026 (₹199)</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  );
};
