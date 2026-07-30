import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RegistrationFormData } from '../types';
import { User, Mail, Phone, GraduationCap, BookOpen, Calendar, Linkedin, Lightbulb, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian phone number'),
  college: z.string().min(3, 'College name is required'),
  branch: z.string().min(2, 'Branch/Stream is required'),
  year: z.string().min(1, 'Please select your academic year'),
  linkedin: z.string().optional(),
  hasStartupIdea: z.enum(['yes', 'no']),
  startupIdeaDetails: z.string().optional(),
  experienceLevel: z.enum(['beginner', 'intermediate', 'founder']),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms & conditions'
  })
});

type FormSchemaType = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  onFormSubmitSuccess: (data: RegistrationFormData) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onFormSubmitSuccess }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      hasStartupIdea: 'no',
      experienceLevel: 'beginner',
      termsAccepted: true
    }
  });

  const watchHasIdea = watch('hasStartupIdea');

  const onSubmit = (data: FormSchemaType) => {
    onFormSubmitSuccess(data as RegistrationFormData);
  };

  return (
    <section id="register" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#F97316] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>STEP 1 OF 2 • DELEGATE DETAILS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Register for FounderX 2026
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Fill in your details below to reserve your delegate pass. Fee: ₹199 per attendee.
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border border-slate-200 p-6 sm:p-10 rounded shadow-sm space-y-6 text-[#0F172A]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Full Name <span className="text-[#F97316]">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  {...register('fullName')}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />
              </div>
              {errors.fullName && <p className="text-[#F97316] text-xs mt-1">{errors.fullName.message}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Email Address <span className="text-[#F97316]">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="e.g. aarav@college.edu"
                  {...register('email')}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />
              </div>
              {errors.email && <p className="text-[#F97316] text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Mobile Number (WhatsApp) <span className="text-[#F97316]">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  {...register('phone')}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />
              </div>
              {errors.phone && <p className="text-[#F97316] text-xs mt-1">{errors.phone.message}</p>}
            </div>

            {/* College Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                College / University Name <span className="text-[#F97316]">*</span>
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. IIT Bombay / DTU / BITS"
                  {...register('college')}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />
              </div>
              {errors.college && <p className="text-[#F97316] text-xs mt-1">{errors.college.message}</p>}
            </div>

            {/* Branch / Department */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Branch / Stream <span className="text-[#F97316]">*</span>
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Computer Science / BBA / Electrical"
                  {...register('branch')}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
                />
              </div>
              {errors.branch && <p className="text-[#F97316] text-xs mt-1">{errors.branch.message}</p>}
            </div>

            {/* Academic Year */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Academic Year <span className="text-[#F97316]">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <select
                  {...register('year')}
                  className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#F97316] transition-colors"
                >
                  <option value="">Select Academic Year</option>
                  <option value="1st Year">1st Year (Freshman)</option>
                  <option value="2nd Year">2nd Year (Sophomore)</option>
                  <option value="3rd Year">3rd Year (Junior)</option>
                  <option value="4th Year">4th Year (Senior)</option>
                  <option value="Postgraduate / PhD">Postgraduate / PhD</option>
                  <option value="Recent Graduate">Recent Graduate / Alumni</option>
                </select>
              </div>
              {errors.year && <p className="text-[#F97316] text-xs mt-1">{errors.year.message}</p>}
            </div>

          </div>

          {/* LinkedIn Profile */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              LinkedIn Profile URL (Optional)
            </label>
            <div className="relative">
              <Linkedin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                {...register('linkedin')}
                className="w-full bg-slate-50 border border-slate-200 rounded pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] transition-colors"
              />
            </div>
            {errors.linkedin && <p className="text-[#F97316] text-xs mt-1">{errors.linkedin.message}</p>}
          </div>

          {/* Do you have a startup idea? */}
          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-[#F97316]" />
                  <span>Do you want to submit an idea for Pitch Arena?</span>
                </p>
                <p className="text-xs text-slate-500">Compete for the ₹65,000 cash prize pool</p>
              </div>

              <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    value="yes"
                    {...register('hasStartupIdea')}
                    className="accent-[#F97316] h-4 w-4"
                  />
                  <span>Yes, I want to pitch</span>
                </label>

                <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    value="no"
                    {...register('hasStartupIdea')}
                    className="accent-[#F97316] h-4 w-4"
                  />
                  <span>No, Attendee only</span>
                </label>
              </div>
            </div>

            {watchHasIdea === 'yes' && (
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <label className="block text-xs font-bold text-[#F97316]">
                  Brief Startup Concept / Title (2-3 sentences)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe the problem, your solution, and your target audience..."
                  {...register('startupIdeaDetails')}
                  className="w-full bg-white border border-slate-200 rounded p-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316]"
                ></textarea>
              </div>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('termsAccepted')}
                className="accent-[#F97316] h-4 w-4 mt-0.5"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I confirm that my details are accurate and I agree to abide by the event code of conduct set by the Entrepreneurship Cell.
              </span>
            </label>
            {errors.termsAccepted && <p className="text-[#F97316] text-xs mt-1">{errors.termsAccepted.message}</p>}
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold text-base py-3.5 rounded transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Payment (₹199)</span>
            <ArrowRight className="h-5 w-5" />
          </button>

        </form>

      </div>
    </section>
  );
};
