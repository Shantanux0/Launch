import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROCESS } from "../../data/content";
import { SnailMascot } from "../common/SnailMascot";
import { Droplets, Sprout, Footprints, Clover, Disc, Flower2, Sparkles } from "lucide-react";

const STEP_ICONS = {
  dew: Droplets,
  sprout: Sprout,
  mushroom: Footprints, // Garden step
  clover: Clover,
  shell: Disc, // Spiral shell
  flower: Flower2,
  sparkle: Sparkles,
};

const STEP_DETAILS = {
  dew: "We begin with empathetic user research, stakeholder interviews, and benchmark analysis to uncover deep insights.",
  sprout: "We formulate a crystal-clear product strategy, user journey architectures, and north-star digital goals.",
  mushroom: "We define information architecture, wireframes, and design system foundations that guarantee long-term stability.",
  clover: "We explore rapid interactive prototypes, test diverse interaction paradigms, and validate directly with real users.",
  shell: "We craft high-fidelity pixel-perfect UI, seamless micro-interactions, and engaging responsive layouts.",
  flower: "We obsess over motion curves, accessibility standards, typographic harmony, and emotional user delight.",
  sparkle: "We measure real metrics, perform conversion audits, and continuously optimize with each scheduled release.",
};

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative background subtle trail curve */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ly-yellow/30 border border-ly-yellow/50 mb-3">
            <span className="w-2 h-2 rounded-full bg-ly-yellow-dark animate-ping" />
            <span className="font-gilroy text-xs uppercase tracking-[0.2em] text-ly-black font-bold">
              The Snail Garden Trail
            </span>
          </div>
          <h2 className="font-gilroy text-3xl sm:text-4xl md:text-5xl font-normal text-ly-black tracking-tight leading-[1.15] mb-4">
            A thoughtful 7-step journey
          </h2>
          <p className="font-gilroy text-gray-600 text-base sm:text-lg">
            No rushing, no shortcuts. Every digital product is nurtured through a proven, human-centered roadmap.
          </p>
        </div>

        {/* Interactive Garden Trail Bar */}
        <div className="relative mb-12 hidden md:block">
          {/* Shimmering connecting line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-4 h-1 bg-gradient-to-r from-ly-yellow to-ly-green -translate-y-1/2 rounded-full"
            initial={false}
            animate={{
              width: `${(activeStep / (PROCESS.length - 1)) * 95}%`,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          />

          {/* Stepper buttons along the trail */}
          <div className="relative flex justify-between items-center z-10">
            {PROCESS.map((p, idx) => {
              const Icon = STEP_ICONS[p.key] || Sparkles;
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;

              return (
                <button
                  key={p.key}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-col items-center focus:outline-none transition-transform duration-200 ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                  aria-label={`Step ${idx + 1}: ${p.label}`}
                >
                  {/* Snail Mascot moving over the active step */}
                  {isActive && (
                    <motion.div
                      layoutId="trailSnail"
                      className="absolute -top-14 w-12 h-12"
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    >
                      <SnailMascot className="w-full h-full" animated={true} />
                    </motion.div>
                  )}

                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-ly-yellow border-ly-black text-ly-black shadow-md scale-110"
                        : isPassed
                        ? "bg-white border-ly-tertiary text-ly-tertiary"
                        : "bg-white border-gray-300 text-gray-400 group-hover:border-gray-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-semibold mt-2 tracking-wide transition-colors ${
                      isActive ? "text-ly-black font-bold" : "text-gray-500"
                    }`}
                  >
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card Showcase */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl max-w-4xl mx-auto mb-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-ly-tertiary uppercase tracking-wider bg-ly-green/10 px-3 py-1 rounded-full">
                Phase 0{activeStep + 1}
              </span>
              <span className="font-gilroy text-xs font-medium text-gray-400">
                {PROCESS[activeStep].desc}
              </span>
            </div>
            <h3 className="font-gilroy text-2xl sm:text-3xl font-bold text-ly-black mb-3">
              {PROCESS[activeStep].label}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {STEP_DETAILS[PROCESS[activeStep].key]}
            </p>
          </div>

          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-ly-yellow/20 border border-ly-yellow/40 flex items-center justify-center p-2 shrink-0">
            <SnailMascot className="w-full h-full" animated={true} />
          </div>
        </motion.div>

        {/* 7 Cards Grid for Mobile & Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4">
          {PROCESS.map((p, idx) => {
            const Icon = STEP_ICONS[p.key] || Sparkles;
            const isSelected = activeStep === idx;

            return (
              <div
                key={p.key}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white border-ly-black shadow-lg scale-102"
                    : "bg-white/80 border-gray-200/70 hover:border-ly-yellow hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-gray-400">0{idx + 1}</span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-ly-tertiary" : "text-gray-400"}`} />
                </div>
                <h4 className="font-gilroy text-sm font-bold text-ly-black text-left">{p.label}</h4>
                <p className="text-[11px] text-gray-500 text-left mt-1 leading-snug line-clamp-2">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

