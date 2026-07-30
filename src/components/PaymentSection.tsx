import React, { useState } from 'react';
import { RegistrationFormData } from '../types';
import { QrCode, Copy, Check, Upload, ShieldCheck, CreditCard, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';

interface PaymentSectionProps {
  formData: RegistrationFormData;
  onPaymentSuccess: (transactionId: string) => void;
  onBackToForm: () => void;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  formData,
  onPaymentSuccess,
  onBackToForm
}) => {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [screenshotUploaded, setScreenshotUploaded] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const upiId = 'founderx@upi';

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId || transactionId.trim().length < 8) {
      setErrorMsg('Please enter a valid 12-digit UPI UTR or Transaction ID.');
      return;
    }

    setErrorMsg('');
    setIsVerifying(true);

    // Simulate instant secure verification
    setTimeout(() => {
      setIsVerifying(false);
      onPaymentSuccess(transactionId);
    }, 1500);
  };

  return (
    <section id="payment" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <button
            onClick={onBackToForm}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0F172A] mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Edit Delegate Information</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#F97316] mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>STEP 2 OF 2 • FEE VERIFICATION</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Complete Registration Payment
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Scan the UPI QR Code below or transfer ₹199 to claim your FounderX 2026 delegate pass.
          </p>
        </div>

        {/* Main Payment Card */}
        <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded shadow-sm space-y-8">
          
          {/* Delegate Summary Box */}
          <div className="bg-slate-50 p-4 rounded border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
            <div>
              <p className="text-slate-500 font-medium">Delegate Name</p>
              <p className="font-bold text-[#0F172A] text-sm">{formData.fullName}</p>
              <p className="text-slate-500">{formData.college} • {formData.year}</p>
            </div>
            <div className="text-left sm:text-right bg-white p-2.5 rounded border border-slate-200">
              <p className="text-slate-500 font-medium">Registration Fee</p>
              <p className="font-extrabold text-[#F97316] text-lg">₹199 INR</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Simulated QR Code */}
            <div className="bg-white p-6 rounded border border-slate-200 text-[#0F172A] text-center space-y-3 shadow-xs flex flex-col items-center justify-center">
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                {/* SVG Mock QR Code */}
                <svg className="w-44 h-44 mx-auto" viewBox="0 0 200 200" fill="none">
                  <rect width="200" height="200" fill="white"/>
                  {/* Position squares */}
                  <rect x="10" y="10" width="50" height="50" fill="#0F172A"/>
                  <rect x="20" y="20" width="30" height="30" fill="white"/>
                  <rect x="25" y="25" width="20" height="20" fill="#F97316"/>

                  <rect x="140" y="10" width="50" height="50" fill="#0F172A"/>
                  <rect x="150" y="20" width="30" height="30" fill="white"/>
                  <rect x="155" y="25" width="20" height="20" fill="#F97316"/>

                  <rect x="10" y="140" width="50" height="50" fill="#0F172A"/>
                  <rect x="20" y="150" width="30" height="30" fill="white"/>
                  <rect x="25" y="155" width="20" height="20" fill="#F97316"/>

                  {/* QR Data Dots */}
                  <rect x="70" y="10" width="15" height="15" fill="#0F172A"/>
                  <rect x="95" y="10" width="15" height="15" fill="#0F172A"/>
                  <rect x="70" y="35" width="30" height="15" fill="#F97316"/>
                  <rect x="70" y="70" width="60" height="15" fill="#0F172A"/>
                  <rect x="10" y="70" width="50" height="15" fill="#0F172A"/>
                  <rect x="140" y="70" width="50" height="15" fill="#F97316"/>
                  <rect x="70" y="95" width="15" height="40" fill="#0F172A"/>
                  <rect x="95" y="95" width="45" height="15" fill="#0F172A"/>
                  <rect x="150" y="95" width="40" height="40" fill="#0F172A"/>
                  <rect x="70" y="150" width="45" height="40" fill="#F97316"/>
                  <rect x="125" y="150" width="65" height="20" fill="#0F172A"/>
                </svg>
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-slate-700 tracking-wider">Scan with GPay / PhonePe / Paytm / BHIM</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Official E-Cell Merchant Account</p>
              </div>

              {/* Copy UPI Button */}
              <div className="w-full pt-2">
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold py-2.5 px-3 rounded border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <CreditCard className="h-4 w-4 text-[#F97316]" />
                  <span>UPI ID: {upiId}</span>
                  {copiedUpi ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
                </button>
              </div>
            </div>

            {/* Right: Verification Inputs */}
            <form onSubmit={handleVerify} className="space-y-5">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  12-Digit UPI UTR / Transaction ID <span className="text-[#F97316]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 423891029384"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] font-mono tracking-wider"
                />
                <p className="text-[11px] text-slate-500 mt-1">Found in your payment app under transaction details.</p>
              </div>

              {/* Upload Screenshot Simulator */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Upload Payment Screenshot (Optional)
                </label>
                <div
                  onClick={() => setScreenshotUploaded(true)}
                  className={`border-2 border-dashed rounded p-4 text-center cursor-pointer transition-colors ${
                    screenshotUploaded
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-500'
                  }`}
                >
                  <Upload className="h-5 w-5 mx-auto mb-1 text-[#F97316]" />
                  <span className="text-xs font-medium block">
                    {screenshotUploaded ? '✓ Screenshot Attached (rec.png)' : 'Click to attach payment receipt'}
                  </span>
                </div>
              </div>

              {errorMsg && (
                <div className="bg-orange-50 border border-orange-200 p-3 rounded flex items-center gap-2 text-xs text-[#F97316]">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit Verification */}
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold text-sm py-3.5 rounded transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                {isVerifying ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Verifying UTR Transaction...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-5 w-5" />
                    <span>Verify UTR & Issue Ticket Pass</span>
                  </>
                )}
              </button>

            </form>

          </div>

          {/* Payment Instructions Footnote */}
          <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Payment Security Notice:</p>
            <p>1. Transferred fees go directly to the Entrepreneurship Cell event account.</p>
            <p>2. Once verified, your digital delegate pass with QR code will be generated instantly.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
