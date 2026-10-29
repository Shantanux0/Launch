import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqsData } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Accordion & Headings */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-2">
                Questions &amp; Answers
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
                A few things you might be wondering.
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Clear, honest answers about our technical engagement model, project timelines, and how we collaborate.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3" role="tablist" aria-label="Frequently Asked Questions">
              {faqsData.map((item, index) => {
                const isOpen = openId === item.id;
                const headingId = `faq-heading-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-charcoal-card border border-charcoal-border hover:border-charcoal-surface transition-colors overflow-hidden"
                  >
                    <h3>
                      <button
                        type="button"
                        id={headingId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-heading font-semibold text-base sm:text-lg text-white hover:text-coral transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                      >
                        <span className="leading-snug">{item.question}</span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'bg-coral text-white rotate-180' : 'bg-charcoal-surface text-stone-300'
                          }`}
                        >
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={headingId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-300 leading-relaxed border-t border-charcoal-border/50">
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

          {/* Right Side: Hand-drawn Puzzled Character Illustration */}
          <div className="lg:col-span-5 relative flex justify-center items-center pt-4 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md"
            >
              <picture>
                <source srcSet="/assets/illustrations/faq-puzzled.webp" type="image/webp" />
                <img
                  src="/assets/illustrations/faq-puzzled.png"
                  alt="Sketched character contemplating ideas surrounded by doodle speech bubbles and question marks"
                  className="w-full h-auto object-contain drop-shadow-md select-none"
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
              </picture>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
