import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RegistrationFormData } from '../types';
import { CheckCircle2, Ticket, QrCode, Download, Calendar, MapPin, Sparkles, X, Share2 } from 'lucide-react';

interface SuccessModalProps {
  formData: RegistrationFormData;
  transactionId: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  formData,
  transactionId,
  onClose
}) => {
  const ticketId = `FX26-${Math.floor(1000 + Math.random() * 9000)}`;

  useEffect(() => {
    // Launch celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl animate-subtle-pulse my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 border border-slate-700 cursor-pointer"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Success Icon */}
        <div className="text-center space-y-2 mb-6">
          <div className="h-14 w-14 bg-orange-500/20 text-orange-400 border border-orange-500/40 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            REGISTRATION CONFIRMED
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-white">
            Welcome to FounderX 2026!
          </h2>
          <p className="text-xs text-slate-300">
            Your seat is reserved. Bring this digital ticket pass for check-in on August 18, 2026.
          </p>
        </div>

        {/* Digital Ticket Pass Card */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-5 space-y-4 shadow-xl relative overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <div className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-orange-400" />
              <span className="font-heading font-bold text-sm tracking-tight text-white">FOUNDERX 2026 DELEGATE PASS</span>
            </div>
            <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded text-[11px] font-mono font-bold">
              {ticketId}
            </span>
          </div>

          {/* Pass Body */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-semibold">Delegate Name</p>
              <p className="font-bold text-white text-sm truncate">{formData.fullName}</p>
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase font-semibold">College</p>
              <p className="font-semibold text-slate-200 truncate">{formData.college}</p>
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase font-semibold">Event Date & Time</p>
              <p className="font-semibold text-slate-200">18 Aug 2026 • 10:00 AM</p>
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase font-semibold">Venue</p>
              <p className="font-semibold text-slate-200">College Auditorium</p>
            </div>
          </div>

          {/* QR Code Pass Section */}
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-orange-400">ENTRY CHECK-IN QR</p>
              <p className="text-xs text-slate-300">Scan at Auditorium Gate 2</p>
              <p className="text-[10px] text-slate-500 font-mono">UTR: {transactionId}</p>
            </div>

            {/* Simulated Ticket QR */}
            <div className="bg-white p-1.5 rounded-lg shrink-0">
              <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="white"/>
                <rect x="5" y="5" width="25" height="25" fill="#0F172A"/>
                <rect x="10" y="10" width="15" height="15" fill="white"/>
                <rect x="70" y="5" width="25" height="25" fill="#0F172A"/>
                <rect x="75" y="10" width="15" height="15" fill="white"/>
                <rect x="5" y="70" width="25" height="25" fill="#0F172A"/>
                <rect x="10" y="75" width="15" height="15" fill="white"/>
                <rect x="35" y="35" width="30" height="30" fill="#F97316"/>
                <rect x="70" y="70" width="25" height="25" fill="#0F172A"/>
              </svg>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => window.print()}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF Delegate Pass</span>
          </button>

          <button
            onClick={onClose}
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-3 rounded-xl text-xs font-semibold cursor-pointer"
          >
            Return to FounderX Homepage
          </button>
        </div>

      </div>
    </div>
  );
};
