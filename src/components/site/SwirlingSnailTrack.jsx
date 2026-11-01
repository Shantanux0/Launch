import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK } from "../../data/content";

/**
 * Small animated snail mascot with yellow dome shell,
 * crawling and swirling along the path towards "Start a Project".
 */
const MiniSnail = ({ isCrawling = false, atEnd = false, isPaused = false }) => (
  <motion.div
    className="relative w-9 h-7 sm:w-11 sm:h-8 select-none cursor-pointer"
    animate={
      atEnd
        ? {
            scale: [1, 1.15, 0.95, 1.1, 1],
            rotate: [0, -6, 6, -3, 0],
            y: [0, -4, 0],
          }
        : isCrawling && !isPaused
        ? {
            y: [0, -3, 1, -2, 0],
            scaleX: [1, 1.08, 0.96, 1.04, 1],
            rotate: [-2, 2, -1, 1, 0],
          }
        : {
            y: [0, -1, 0],
            scaleX: 1,
            rotate: 0,
          }
    }
    transition={
      atEnd
        ? { duration: 1.2, repeat: Infinity, repeatDelay: 2.5 }
        : isCrawling && !isPaused
        ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
        : { duration: 0.4 }
    }
  >
    <svg viewBox="0 0 120 85" className="w-full h-full drop-shadow-xs" aria-hidden="true">
      <defs>
        {/* Yellow Dome Shell Gradient */}
        <linearGradient id="miniShellGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF59D" />
          <stop offset="40%" stopColor="#FAE100" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
        {/* Snail Foot Body */}
        <linearGradient id="miniFootGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFEDD5" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
      </defs>

      {/* Snail Foot / Belly */}
      <path
        d="M 6 68 C 6 60, 20 62, 38 62 L 85 62 C 98 62, 108 55, 108 44 C 108 36, 104 32, 98 32 C 92 32, 88 38, 88 44 C 88 54, 76 68, 60 68 Z"
        fill="url(#miniFootGrad)"
      />

      {/* Eye stalks */}
      <path d="M 98 36 L 95 18 M 105 38 L 109 20" stroke="#FDBA74" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="95" cy="16" r="4.5" fill="#1E293B" />
      <circle cx="93.5" cy="14.5" r="1.5" fill="#fff" />
      <circle cx="109" cy="18" r="4.5" fill="#1E293B" />
      <circle cx="107.5" cy="16.5" r="1.5" fill="#fff" />

      {/* Cute Smile & Blush */}
      <circle cx="104" cy="46" r="3" fill="#FCA5A5" opacity="0.8" />
      <path d="M 98 48 Q 103 52 107 48" stroke="#7C2D12" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Yellow Dome Shell */}
      <ellipse cx="48" cy="42" rx="34" ry="30" fill="url(#miniShellGrad)" />
      {/* Shell Inner Spiral Swirl */}
      <path
        d="M 48 42 m -20 0 a 20 20 0 1 0 40 0 a 14 14 0 1 0 -28 0 a 8 8 0 1 0 16 0"
        fill="none"
        stroke="#CA8A04"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>

    {/* Sparkle star indicator */}
    <span className="absolute -top-1 -right-1 text-[11px] select-none pointer-events-none animate-pulse">
      ✨
    </span>
  </motion.div>
);

export const SwirlingSnailTrack = ({
  currentStep = 0,
  totalSteps = 6,
  onSelectStep,
  isLocked = false,
  isPaused = false,
}) => {
  const [hoveredStep, setHoveredStep] = useState(null);

  // Percentage position of current step: 0% to 100%
  const progressPercent = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 0;
  const isAtEnd = currentStep === totalSteps - 1;

  return (
    <div
      className="flex-1 relative h-10 sm:h-12 flex items-center px-2 sm:px-4 mx-2 sm:mx-6 overflow-visible select-none"
      data-testid="swirling-snail-track"
    >
      {/* Responsive SVG Swirling Path */}
      <svg
        className="absolute inset-x-2 sm:inset-x-4 inset-y-0 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] h-full overflow-visible pointer-events-none"
        viewBox="0 0 1000 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="swirlTrailGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FAE100" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FAE100" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="swirlGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Base playful wavy dashed path */}
        <path
          d="M 10 24 C 100 8, 160 40, 240 24 C 280 16, 320 8, 360 24 C 440 40, 520 8, 600 24 C 680 40, 740 10, 820 24 C 880 34, 940 16, 990 24"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="2.5"
          strokeDasharray="5 7"
          strokeLinecap="round"
        />

        {/* Active glowing slime swirl trail */}
        <motion.path
          d="M 10 24 C 100 8, 160 40, 240 24 C 280 16, 320 8, 360 24 C 440 40, 520 8, 600 24 C 680 40, 740 10, 820 24 C 880 34, 940 16, 990 24"
          fill="none"
          stroke="url(#swirlTrailGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#swirlGlow)"
          initial={false}
          animate={{
            pathLength: progressPercent / 100,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 18,
          }}
        />

        {/* Decorative Swirl Loops along the path */}
        <g stroke="#FDE047" strokeWidth="1.5" fill="none" opacity="0.75">
          {/* Swirl 1 around 20% */}
          <path d="M 230 20 C 235 12, 248 10, 252 18 C 255 26, 244 30, 238 24" strokeDasharray="2 3" />
          {/* Swirl 2 around 60% */}
          <path d="M 590 20 C 595 12, 608 10, 612 18 C 615 26, 604 30, 598 24" strokeDasharray="2 3" />
          {/* Swirl 3 around 82% */}
          <path d="M 810 20 C 815 12, 828 10, 832 18 C 835 26, 824 30, 818 24" strokeDasharray="2 3" />
        </g>
      </svg>

      {/* 6 Waypoint Step Dots along the track */}
      <div className="absolute inset-x-2 sm:inset-x-4 inset-y-0 flex items-center justify-between pointer-events-none">
        {WORK.map((item, i) => {
          const isPassed = i <= currentStep;
          const isCurrent = i === currentStep;
          return (
            <div
              key={item.name}
              className="relative pointer-events-auto p-2.5 -m-2.5 cursor-pointer flex items-center justify-center group/dot"
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onSelectStep?.(i)}
            >
              <button
                type="button"
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  isCurrent
                    ? "bg-ly-yellow ring-4 ring-ly-yellow/35 scale-125 shadow-xs"
                    : isPassed
                    ? "bg-[#10B981] group-hover/dot:scale-115"
                    : "bg-gray-200 group-hover/dot:bg-gray-300 group-hover/dot:scale-110"
                }`}
                title={`Slide ${i + 1}: ${item.name}`}
                aria-label={`Jump to slide ${i + 1}: ${item.name}`}
              />

              {/* Hover Tooltip with category name */}
              <AnimatePresence>
                {hoveredStep === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ly-black text-white text-[10px] sm:text-[11px] font-gilroy font-semibold px-2.5 py-1 rounded-md shadow-md whitespace-nowrap z-30 pointer-events-none"
                  >
                    {i + 1}. {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Swirling Snail Mascot moving along the track */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none"
        initial={false}
        animate={{
          left: `calc(${progressPercent}% - ${progressPercent * 0.36}px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 18,
        }}
      >
        <MiniSnail isCrawling={true} atEnd={isAtEnd} isPaused={isPaused || isLocked} />

        {/* Playful encouragement bubble when reaching the 'Start a Project' end */}
        {isAtEnd && !isLocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -top-6 -left-3 bg-white/95 backdrop-blur-xs border border-amber-300 text-ly-black font-pen text-xs px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap"
          >
            Almost there! 🎯
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SwirlingSnailTrack;

