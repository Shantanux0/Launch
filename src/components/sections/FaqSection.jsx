import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "../../data/content";
import { Plus, Minus, Star, HelpCircle } from "lucide-react";
import { SnailMark } from "../common/SnailLogo";

export const FaqSection = ({ onContact }) => {
  // Open the first two by default
  const [openIndices, setOpenIndices] = useState([1, 2]);

  const toggle = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-ly-tertiary" />
            <span className="font-gilroy text-xs md:text-sm uppercase tracking-[0.2em] text-ly-tertiary font-bold">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-gilroy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ly-black tracking-tight leading-[1.12]">
            Answers to curious minds
          </h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-ly-black shadow-md"
                    : "bg-white border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    {faq.fav && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-ly-yellow/30 text-[11px] font-bold text-ly-black uppercase tracking-wider shrink-0">
                        <Star className="w-3 h-3 fill-ly-yellow-dark text-ly-yellow-dark" />
                        Favorite
                      </span>
                    )}
                    <h3 className="font-gilroy text-lg sm:text-xl font-bold text-ly-black">
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-ly-black text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help callout */}
        <div className="text-center mt-12 text-sm text-gray-500">
          Have another question in mind?{" "}
          <button
            onClick={onContact}
            className="text-ly-black font-semibold underline underline-offset-4 hover:text-ly-tertiary"
          >
            Ask us directly →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

