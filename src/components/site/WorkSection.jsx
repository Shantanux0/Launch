import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { WORK, META_LABELS } from "../../data/content";
import { ArrowRight } from "./shared";
import { SnailMark } from "./SnailLogo";
import { SnailMascot } from "./SnailMascot";
import { SwirlingSnailTrack } from "./SwirlingSnailTrack";

export const WorkSection = ({ onContact }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userLocked, setUserLocked] = useState(false);
  const hasStartedRef = useRef(false);
  const w = WORK[idx] || WORK[0];

  // Auto-advance slides in sync with the crawling snail:
  // 1. Starts ONLY when the section scrolls into view!
  // 2. Pauses while hovering over the section so users can comfortably read.
  // 3. When the user clicks a specific slide (e.g. slide 4), it stays locked on that slide without advancing away!
  useEffect(() => {
    if (!inView) return;
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      setIdx(0);
    }
    if (paused || userLocked) return;

    const t = setInterval(() => {
      setIdx((i) => (i + 1) % WORK.length);
    }, 1800);
    return () => clearInterval(t);
  }, [inView, paused, userLocked]);

  // When user clicks a specific step (e.g. to examine slide 4):
  const handleSelectStep = (i) => {
    setIdx(i);
    setUserLocked(true); // Firmly locks to chosen slide so it doesn't move away!
  };

  const handleRestart = () => {
    setIdx(0);
    setUserLocked(false);
  };

  return (
    <section
      id="work"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative bg-white w-full overflow-hidden select-none"
      data-testid="work-section"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 relative z-10">
        {/* Top Header Row: Snail Icon Badge, Swirling Snail Track & "Start a Project" Button */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-4 relative">
          <button
            onClick={handleRestart}
            className="cursor-pointer transition-transform hover:scale-105 active:scale-95 group/restart relative"
            title={userLocked ? "Resume snail auto-crawling" : "Reset crawl to start"}
            aria-label="Snail crawl control"
          >
            <SnailMark className="h-9 w-9 sm:h-10 sm:w-10 shrink-0" />
          </button>

          {/* Small snail swirling along the track till "Start a Project" */}
          <SwirlingSnailTrack
            currentStep={idx}
            totalSteps={WORK.length}
            onSelectStep={handleSelectStep}
            isLocked={userLocked}
            isPaused={paused}
          />

          <button
            onClick={onContact}
            className="shrink-0 group inline-flex items-center gap-2.5 bg-ly-black hover:bg-black text-white font-gilroy text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] active:scale-95 cursor-pointer"
            data-testid="work-start-project-btn"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Main Content Area: Left Details + Right Featured Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px] md:min-h-[520px]">
          {/* Left Details Column */}
          <div className="lg:col-span-6 xl:col-span-6 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={w.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                data-testid="work-active-details"
              >
                {/* Title with Arrow */}
                <button
                  onClick={onContact}
                  className="group flex items-center gap-3 text-left hover:opacity-90 transition-opacity"
                  title="Discuss your project"
                >
                  <h2 className="font-gilroy font-light text-ly-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] tracking-tight leading-[1.12]">
                    {w.name}
                  </h2>
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-ly-black font-light transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>

                {/* Description */}
                <p className="font-inter text-ly-gray text-base sm:text-lg md:text-xl font-normal mt-3 sm:mt-4 max-w-xl leading-relaxed">
                  {w.desc}
                </p>

                {/* 3-Column Metadata Row */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mt-8 sm:mt-10 md:mt-14 pt-4 border-t border-gray-100">
                  {META_LABELS.map((label, i) => (
                    <div key={label} className="flex flex-col">
                      <span className="font-inter text-xs sm:text-sm text-ly-gray font-normal">
                        {label}
                      </span>
                      <p className="font-inter text-sm sm:text-base md:text-[17px] text-ly-black font-medium mt-1 leading-snug">
                        {w.meta?.[i]}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Featured Scene Column */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] lg:max-w-[660px] aspect-[16/11] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={w.img}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="w-full h-full relative flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={w.img}
                    alt={w.name}
                    className="w-full h-full object-contain object-bottom drop-shadow-sm select-none"
                    style={{
                      maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.85) 22%, black 35%)",
                      WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.85) 22%, black 35%)",
                    }}
                    loading="lazy"
                  />
                  {/* Soft Vignette / Gradient blend into white background */}
                  <div className="absolute inset-y-0 left-0 w-28 sm:w-40 md:w-52 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-x-0 top-0 h-8 sm:h-12 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none z-10" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
