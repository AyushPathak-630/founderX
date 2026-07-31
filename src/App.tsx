import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { RegistrationProgress } from './components/RegistrationProgress';
import { RegistrationAnalytics } from './components/RegistrationAnalytics';
import { RecentRegistrations } from './components/RecentRegistrations';
import { AboutSection } from './components/AboutSection';
import { WhyAttend } from './components/WhyAttend';
import { GuestSpeakers } from './components/GuestSpeakers';
import { EventTimeline } from './components/EventTimeline';
import { StartupCompetition } from './components/StartupCompetition';
import { RegistrationForm } from './components/RegistrationForm';
import { PaymentSection } from './components/PaymentSection';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Sponsors } from './components/Sponsors';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';
import { RegistrationFormData } from './types';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './lib/firebase';

export default function App() {
  const [currentStep, setCurrentStep] = useState<'form' | 'payment'>('form');
  const [registeredData, setRegisteredData] = useState<RegistrationFormData | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const handleRegisterClick = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAgendaClick = () => {
    const el = document.getElementById('agenda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmitSuccess = (data: RegistrationFormData) => {
    setRegisteredData(data);
    setCurrentStep('payment');
    const el = document.getElementById('payment-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePaymentSuccess = async (txId: string) => {
    setTransactionId(txId);
    
    try {
      if (registeredData) {
        await addDoc(collection(db, 'registrations'), {
          ...registeredData,
          transactionId: txId,
          paymentStatus: 'completed',
          createdAt: serverTimestamp(),
        });
      }
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error saving registration:', error);
      alert('An error occurred while saving your registration. Please try again or contact support.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* 1. Professional Sticky Navbar */}
      <Navbar onRegisterClick={handleRegisterClick} />

      {/* 2. Premium Hero Section */}
      <Hero
        onRegisterClick={handleRegisterClick}
        onViewAgendaClick={handleViewAgendaClick}
      />

      {/* 3. Animated Statistics */}
      <StatsSection />

      {/* 4. Registration Progress */}
      <RegistrationProgress />

      {/* 5. Registration Analytics */}
      <RegistrationAnalytics />

      {/* 6. Recent Registrations Feed */}
      <RecentRegistrations />

      {/* 7. About FounderX */}
      <AboutSection />

      {/* 8. Why Attend Interactive Cards */}
      <WhyAttend />

      {/* 9. Guest Speakers & VC Jury */}
      <GuestSpeakers />

      {/* 10. Event Timeline Schedule */}
      <EventTimeline />

      {/* 11. Startup Competition (Pitch Arena) */}
      <StartupCompetition onRegisterToPitchClick={handleRegisterClick} />

      {/* Anchor for scroll navigation */}
      <div id="payment-anchor"></div>

      {/* 12 & 13. Registration Form & Payment Flow */}
      {currentStep === 'form' ? (
        <RegistrationForm onFormSubmitSuccess={handleFormSubmitSuccess} />
      ) : (
        registeredData && (
          <PaymentSection
            formData={registeredData}
            onPaymentSuccess={handlePaymentSuccess}
            onBackToForm={() => setCurrentStep('form')}
          />
        )
      )}

      {/* 14. FAQ Accordion */}
      <FAQ />

      {/* 15. Testimonials */}
      <Testimonials />

      {/* 16. Sponsors & Partners */}
      <Sponsors />

      {/* 17. Newsletter */}
      <Newsletter />

      {/* 19. Contact */}
      <Contact />

      {/* 20. Professional Footer */}
      <Footer />

      {/* Success Modal Ticket Pass */}
      {showSuccessModal && registeredData && (
        <SuccessModal
          formData={registeredData}
          transactionId={transactionId}
          onClose={() => {
            setShowSuccessModal(false);
            setCurrentStep('form');
          }}
        />
      )}
    </div>
  );
}
