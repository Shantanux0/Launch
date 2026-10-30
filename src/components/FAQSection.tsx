import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqsData } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wix-Style Dark Banner Above FAQs (Matches Wix Frame 8) */}
        <Link
          to="/contact"
          className="group block rounded-2xl bg-[#0C1938] p-6 sm:p-8 text-white hover:bg-[#13234A] transition-all duration-300 mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-indigo-200 transition-colors">
                Get answers
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                Have technical requirements or custom questions? Speak directly with our lead engineer.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center self-end sm:self-auto group-hover:bg-white group-hover:text-gray-900 text-white transition-all">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Wix-Style Clean FAQ Section */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-gray-900 tracking-tight mb-8">
            FAQs
          </h2>

          <div className="border-t border-gray-900 divide-y divide-gray-200">
            {faqsData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="py-6 sm:py-8">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between gap-6 text-left focus:outline-none group"
                  >
                    <span className="text-lg sm:text-2xl font-heading font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-900 flex-shrink-0">
                      {isOpen ? (
                        <X className="w-6 h-6 stroke-[1.5]" />
                      ) : (
                        <Plus className="w-6 h-6 stroke-[1.5]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
