import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CULTURE } from "../../data/content";
import { Heart, Activity, BookOpen, Sparkles } from "lucide-react";

const TAB_ICONS = [Heart, Activity, BookOpen];

export const CultureSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = CULTURE[activeTab];
  const Icon = TAB_ICONS[activeTab] || Heart;

  return (
    <section id="culture" className="py-20 md:py-28 bg-[#FDFCF7] border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-ly-yellow-dark" />
            <span className="font-gilroy text-xs md:text-sm uppercase tracking-[0.2em] text-ly-black font-bold">
              Life at Humstack
            </span>
          </div>
          <h2 className="font-gilroy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ly-black tracking-tight leading-[1.12] mb-3">
            The culture of slow, deliberate care
          </h2>
          <p className="font-pen text-2xl sm:text-3xl text-ly-tertiary">
            "Slow down. Let's make something lovely."
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
          {CULTURE.map((item, idx) => {
            const TabIcon = TAB_ICONS[idx] || Heart;
            const isSelected = activeTab === idx;

            return (
              <button
                key={item.tab}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-gilroy text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-ly-black text-white shadow-md scale-102"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isSelected ? "text-ly-yellow" : "text-gray-400"}`} />
                <span>{item.tab}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-xl">
          {/* Left Text & Big Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ly-yellow/30 text-ly-black font-gilroy text-xs font-semibold mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-ly-yellow-dark fill-ly-yellow" />
              <span>{current.word} in Action</span>
            </div>

            <motion.div
              key={current.count}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="font-gilroy text-5xl sm:text-6xl md:text-7xl font-extrabold text-ly-black tracking-tight leading-none mb-3">
                {current.count}
              </div>
              <p className="font-gilroy text-lg sm:text-xl text-gray-700 font-medium mb-6">
                {current.caption}
              </p>
            </motion.div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-6">
              {activeTab === 0 &&
                "Gratitude fuels our daily rhythm. We acknowledge every contribution, celebrate small victories, and share thoughtful reflections across teams worldwide."}
              {activeTab === 1 &&
                "A rested mind creates timeless work. Through weekly wellness sessions, mindful pacing, and walking pauses, we honor healthy digital balance."}
              {activeTab === 2 &&
                "Curiosity is our compass. Every Saturday we explore emerging design systems, creative coding, and accessibility nuances to keep evolving."}
            </p>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.img}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50"
              >
                <img
                  src={current.img}
                  alt={current.caption}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;

