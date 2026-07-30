import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { HelpCircle, ChevronDown, Search, MessageSquare } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General Info' },
    { id: 'competition', label: 'Pitch Competition' },
    { id: 'payment', label: 'Payment & Fee' },
    { id: 'logistics', label: 'Venue & Logistics' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Everything you need to know about registering, pitching, and attending FounderX 2026.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. pitch rules, certificates, refund)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded pl-12 pr-4 py-3 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#F97316] shadow-xs"
            />
          </div>

          <div className="flex justify-center overflow-x-auto pb-2">
            <div className="bg-white p-1 rounded border border-slate-200 inline-flex gap-1 shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded border border-slate-200 text-slate-500 text-sm">
              No matching questions found. Contact E-Cell support directly below!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-[#0F172A] text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded text-slate-500 bg-slate-100 transition-transform ${isOpen ? 'rotate-180 bg-orange-50 text-[#F97316]' : ''}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
