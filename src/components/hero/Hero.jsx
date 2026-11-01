import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { NatureLandscape } from "./NatureLandscape";
import { SnailMascot } from "../common/SnailMascot";
import { HERO_DATA } from "../../data/content";
import { scrollToTarget } from "../navigation/shared";

export const Hero = ({ onContact }) => {
  const [snailCheer, setSnailCheer] = useState(false);
  const [crawlOffset, setCrawlOffset] = useState(0);

  const handleSnailClick = () => {
    setSnailCheer(true);
    setCrawlOffset((prev) => (prev > 120 ? -40 : prev + 35));
    setTimeout(() => setSnailCheer(false), 2400);
  };

  const handleServicesClick = () => {
    scrollToTarget(HERO_DATA.ctaTarget, onContact);
  };

  return (
    <section
      id="top"
      className="relative min-h-[720px] lg:min-h-[860px] w-full pt-24 sm:pt-28 md:pt-32 pb-0 flex flex-col justify-between overflow-hidden bg-white select-none"
    >
      {/* Main Content Area */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-14 relative z-20">
        <div className="max-w-2xl lg:max-w-3xl pt-2 sm:pt-4">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3 sm:mb-4"
          >
            <span className="font-hindi text-base sm:text-lg text-gray-800 font-medium tracking-normal">
              {HERO_DATA.taglineHindi}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-gilroy text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal text-ly-black tracking-[-0.02em] leading-[1.08] mb-3 sm:mb-4"
          >
            {HERO_DATA.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-gilroy text-lg sm:text-xl md:text-2xl text-gray-700 font-normal leading-relaxed mb-8 sm:mb-10"
          >
            {HERO_DATA.subtitle}
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-stretch gap-6 sm:gap-8 md:gap-10 pb-6 sm:pb-8"
          >
            {HERO_DATA.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-start ${
                  i < HERO_DATA.stats.length - 1 ? "pr-6 sm:pr-8 md:pr-10 border-r border-gray-300" : ""
                }`}
              >
                <span className="font-gilroy text-3xl sm:text-4xl md:text-[42px] font-bold text-ly-black tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="font-gilroy text-xs sm:text-sm text-gray-500 font-normal mt-1.5 leading-snug max-w-[130px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2"
          >
            <button
              onClick={handleServicesClick}
              data-testid="see-our-services-btn"
              className="group inline-flex items-center gap-2.5 bg-ly-black hover:bg-black text-white font-gilroy text-[15px] sm:text-base font-medium px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <span>{HERO_DATA.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Visual Layer: Landscape Backdrop & Snail Mascot */}
      <div className="relative w-full mt-6 sm:mt-10 lg:mt-0 z-10 leading-none">
        {/* SVG Nature Landscape Backdrop */}
        <div className="w-full relative">
          <NatureLandscape className="w-full h-auto min-h-[300px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[460px] max-h-[560px]" />

          {/* Positioned Snail Mascot sitting on the lawn */}
          <motion.div
            className="absolute bottom-[2%] sm:bottom-[3%] md:bottom-[4%] lg:bottom-[5%] left-[45%] sm:left-[48%] md:left-[50%] lg:left-[52%] -translate-x-1/2 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[390px] cursor-pointer"
            animate={{
              x: crawlOffset,
              scale: snailCheer ? [1, 1.08, 0.96, 1.04, 1] : 1,
              rotate: snailCheer ? [0, -3, 3, -1, 0] : 0,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleSnailClick}
            title="Click me!"
          >
            {/* Cheer speech bubble on click */}
            {snailCheer && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: -20, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-10 right-4 bg-white/95 backdrop-blur-sm border border-ly-yellow shadow-lg rounded-2xl px-3.5 py-1.5 text-xs font-pen text-2xl text-ly-black whitespace-nowrap z-30"
              >
                ✨ Slow and steady wins!
              </motion.div>
            )}

            <SnailMascot className="w-full h-auto" animated={true} trail={crawlOffset > 0} />
          </motion.div>

          {/* Mini Preview Card in Bottom-Right (as seen in screenshot 3 & 4) */}
          <div className="hidden md:flex absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-xl p-2.5 shadow-md items-center gap-2.5 text-left z-20 transition-all hover:bg-white hover:shadow-lg">
            <div className="w-14 h-9 bg-gradient-to-br from-ly-sky/30 to-ly-green/30 rounded border border-gray-200/50 flex items-center justify-center relative overflow-hidden">
              <SnailMascot className="w-8 h-8" animated={false} />
            </div>
            <div className="flex flex-col pr-1">
              <span className="font-gilroy text-[11px] font-semibold text-ly-black tracking-wide flex items-center gap-1">
                Humby <Sparkles className="w-2.5 h-2.5 text-ly-yellow-dark fill-ly-yellow" />
              </span>
              <span className="font-gilroy text-[9px] text-gray-500">Tap snail to crawl</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

