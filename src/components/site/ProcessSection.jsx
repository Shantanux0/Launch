import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PROCESS } from "../../data/content";
import { ProcessIcon } from "./ProcessIcon";
import { SnailMascot } from "./SnailMascot";

const ACCENT_POS = [
  "left-[2%] top-[8%] w-14 sm:w-16",
  "left-[10%] bottom-[12%] w-16 sm:w-20",
  "right-[4%] bottom-[14%] w-16 sm:w-20",
  "right-[2%] top-[26%] w-14 sm:w-16",
  "left-[38%] top-[2%] w-12 sm:w-14",
  "right-[20%] top-[4%] w-14 sm:w-16",
];

const Garden = ({ step }) => (
  <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square mx-auto" data-testid="process-garden">
    {/* big leaf base */}
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="leafBase" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B7D334" />
          <stop offset="100%" stopColor="#0D7A57" />
        </linearGradient>
      </defs>
      <path d="M40 330 C 40 180, 180 60, 370 70 C 380 250, 250 360, 40 330 Z" fill="url(#leafBase)" />
      <path d="M60 320 C 160 250, 260 170, 350 85" stroke="#E8F5C8" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
    <div className="absolute left-[8%] right-[6%] bottom-[28%] snail-hover">
      <SnailMascot className="w-full h-auto" testId="process-snail-svg" />
    </div>
    <AnimatePresence>
      {PROCESS.map((s, i) =>
        i <= step ? (
          <motion.div
            key={s.key}
            className={`absolute ${ACCENT_POS[i]}`}
            initial={{ opacity: 0, scale: 0.4, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
          >
            <div className="float-soft" style={{ animationDelay: `${i * 0.35}s` }}>
              <ProcessIcon name={s.key} className="w-full h-auto" />
            </div>
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  </div>
);

export const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.25 });
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => setStep((s) => (s + 1) % PROCESS.length), 3800);
    return () => clearInterval(t);
  }, [inView, paused]);

  const active = PROCESS[step] || PROCESS[0];

  return (
    <section id="process" ref={ref} className="bg-ly-ivory w-full py-12 md:py-20 select-none overflow-hidden" data-testid="process-section">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-gilroy font-light text-[38px] sm:text-[46px] md:text-[56px] leading-[1.15] text-ly-black tracking-tight">
            The <span className="font-bold">Sn<span className="bg-ly-yellow px-1 rounded-sm">AI</span>l</span> process
          </h2>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center mt-2 max-w-2xl">
            <p className="font-inter text-ly-gray text-sm sm:text-base md:text-lg whitespace-nowrap">
              Our proven approach, evolved with AI &amp; personal care
            </p>
            <span className="h-px w-full bg-ly-grey opacity-50" />
          </div>
        </div>

        {/* Step Navigation Track */}
        <div
          className="overflow-x-auto pb-4 no-scrollbar"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-6 min-w-[760px] gap-2 md:gap-4">
            {PROCESS.map((s, i) => {
              const isActive = i === step;
              const isDone = i < step;
              return (
                <button
                  key={s.key}
                  onClick={() => setStep(i)}
                  className="text-left group cursor-pointer transition-all p-2 rounded-xl hover:bg-white/40"
                  data-testid={`process-step-${s.label.toLowerCase()}`}
                  aria-label={`Step ${i + 1}: ${s.label}`}
                >
                  <div className={`h-16 sm:h-20 flex items-end pb-2 transition-all duration-300 ${isDone ? "opacity-90" : isActive ? "opacity-100 -translate-y-1" : "opacity-45"}`}>
                    <ProcessIcon name={s.key} className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                  {/* Progress Line */}
                  <div className="relative h-1 bg-ly-grey/30 rounded-full overflow-hidden">
                    <span
                      className={`absolute inset-y-0 left-0 bg-ly-yellow transition-all duration-500 rounded-full ${
                        isActive ? "w-full" : isDone ? "w-full bg-[#1E9A45]" : "w-0"
                      }`}
                    />
                  </div>
                  <p className={`font-gilroy font-semibold text-sm sm:text-base mt-3 transition-colors duration-300 ${isActive ? "text-ly-black" : isDone ? "text-ly-gray" : "text-ly-tertiary"}`}>
                    {s.label}
                  </p>
                  <p className={`font-inter text-xs sm:text-sm mt-1 leading-snug transition-colors duration-300 ${isActive ? "text-ly-black" : "text-ly-gray/70"}`}>
                    {s.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Feature Box: Fills the previously empty area with rich, engaging content */}
        <div className="mt-8 md:mt-10 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Detailed Step Overview */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-3">
                    <span className="font-gilroy font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-ly-yellow text-ly-black">
                      Step {step + 1}
                    </span>
                  </div>

                  <h3 className="font-gilroy font-semibold text-2xl sm:text-3xl md:text-4xl text-ly-black tracking-tight">
                    {active.label}: {active.desc}
                  </h3>

                  <p className="font-inter text-ly-gray text-base sm:text-lg mt-3 md:mt-4 leading-relaxed max-w-xl">
                    {active.detail}
                  </p>

                  {/* Deliverables / Focus Tags */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-2 items-center">
                    <span className="font-inter text-xs text-ly-gray mr-1">Deliverables:</span>
                    {active.deliverables?.map((tag) => (
                      <span
                        key={tag}
                        className="font-inter text-xs font-medium px-3 py-1 rounded-full bg-ly-ivory text-ly-black border border-gray-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Playful Pen Accent Quote */}
                  <p className="font-pen text-xl sm:text-2xl text-ly-black/80 mt-4">
                    "{active.quote}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Garden Leaf with peeking Snail & Floating Accents */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Garden step={step} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
