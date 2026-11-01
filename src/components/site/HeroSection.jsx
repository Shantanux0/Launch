import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { NatureLandscape } from "./NatureLandscape";
import { SnailMascot } from "./SnailMascot";
import { STATS, SOLUTIONS } from "../../data/content";
import { PillButton, SectionHeading, scrollToTarget } from "./shared";

const HERO_BG = "radial-gradient(67.36% 168.45% at 50% 5.82%, #f2f2f2 23.51%, #fffefc 100%)";

const useIsDesktop = () => {
  const [d, setD] = useState(typeof window !== "undefined" ? window.innerWidth >= 1024 : true);
  useEffect(() => {
    const on = () => setD(window.innerWidth >= 1024);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return d;
};

const GREETINGS = ["नमस्ते!", "नमस्कार!", "Hello!", "வணக்கம்!", "నమస్కారం!"];

const HeroCopy = () => {
  const [greetIdx, setGreetIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setGreetIdx((i) => (i + 1) % GREETINGS.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="flex items-center gap-2 mb-2 md:mb-3 justify-center md:justify-start h-8">
        <AnimatePresence mode="wait">
          <motion.span
            key={GREETINGS[greetIdx]}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="font-pen text-2xl sm:text-3xl text-ly-black font-normal inline-block"
          >
            {GREETINGS[greetIdx]}
          </motion.span>
        </AnimatePresence>
        <span className="font-inter text-sm sm:text-base text-ly-gray font-normal">We are a...</span>
      </div>
      <h1 className="font-gilroy font-light text-ly-black text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px] leading-[1.08] tracking-[-0.02em]" data-testid="hero-heading">
        Creative technology company
      </h1>
      <p className="font-inter text-ly-gray mt-2 md:mt-3 text-base sm:text-lg md:text-[20px] lg:text-[22px] font-normal leading-[1.4]">
        Turning ideas into working technology
      </p>
      <div className="flex gap-5 sm:gap-7 md:gap-9 items-center mt-6 md:mt-8 justify-center md:justify-start" data-testid="hero-stats">
        {STATS.map((s, i) => (
          <div key={s.label} className="flex items-center gap-5 sm:gap-7 md:gap-9">
            {i > 0 && <span className="h-10 w-px bg-ly-line" />}
            <div className="text-left">
              <div className="font-gilroy font-bold text-[32px] sm:text-[38px] md:text-[44px] leading-none text-ly-black">{s.value}</div>
              <div className="font-inter text-ly-gray text-xs sm:text-sm font-normal mt-1.5 max-w-[130px] leading-tight">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const SolutionsPanel = ({ interactive, onContact }) => (
  <div className="relative z-10 px-4 md:px-0 md:pl-16 pt-20 md:pt-28 lg:pt-24 w-full lg:w-[48rem] xl:w-[60rem]" id="solutions-panel">
    <SectionHeading title="Services" subtitle="What we do, from idea to growth" />
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-5 md:gap-y-8 md:gap-x-[30px] mt-6 md:mt-10">
      {SOLUTIONS.map((s, i) => (
        <motion.div
          key={s.title}
          className="solution-card"
          data-testid={`solution-card-${i}`}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="font-gilroy font-semibold text-ly-black text-lg leading-tight md:text-[24px] md:leading-[32px]">{s.title}</div>
          <p className="hidden md:block md:w-[250px] text-sm pt-2 text-ly-gray font-inter font-normal leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
    <PillButton
      className="mt-8 md:mt-12 font-gilroy font-medium cursor-pointer"
      onClick={onContact}
      testId="explore-solutions-btn"
    >
      Start Your Project
    </PillButton>
  </div>
);

export const HeroSection = ({ onContact }) => {
  const ref = useRef(null);
  const desktop = useIsDesktop();
  const [solutionsOn, setSolutionsOn] = useState(false);
  const [snailCheer, setSnailCheer] = useState(false);
  const [extraOffset, setExtraOffset] = useState(0);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const snailLeft = useTransform(p, [0, 0.45], desktop ? ["48%", "110%"] : ["10%", "125%"]);
  const heroOpacity = useTransform(p, [0.04, 0.22], [1, 0]);
  const landY = useTransform(p, [0.3, 0.6], ["0vh", "100vh"]);
  const solOpacity = useTransform(p, [0.3, 0.5], [0, 1]);
  const bigSnailX = useTransform(p, [0.3, 0.75], desktop ? ["60%", "0%"] : ["15%", "0%"]);

  useMotionValueEvent(p, "change", (v) => setSolutionsOn(v > 0.4));

  const handleSnailClick = () => {
    setSnailCheer(true);
    setExtraOffset((prev) => (prev > 100 ? 0 : prev + 30));
    setTimeout(() => setSnailCheer(false), 2600);
  };

  return (
    <section id="hero-scroll" ref={ref} className="relative" style={{ height: "calc(100vh + 2500px)" }} data-testid="hero-section">
      <div id="top" className="sticky top-0 h-screen overflow-hidden isolate" style={{ background: HERO_BG }}>
        {/* landscape */}
        <motion.div className="absolute inset-x-0 bottom-0 h-[62vh] md:h-[68vh] lg:h-[72vh] z-0" style={{ y: landY }}>
          <NatureLandscape className="w-full h-full" />
          {/* hero snail on the field */}
          <motion.div
            className="absolute bottom-[2%] md:bottom-[3%] lg:bottom-[4%] w-[220px] md:w-[380px] lg:w-[460px] xl:w-[500px] z-10 cursor-pointer select-none"
            style={{ left: snailLeft }}
            data-testid="hero-snail"
            onClick={handleSnailClick}
            animate={{
              x: extraOffset,
              scale: snailCheer ? [1, 1.06, 0.96, 1.04, 1] : 1,
              rotate: snailCheer ? [0, -3, 3, -1, 0] : 0,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            title="Click me!"
          >
            {/* Cheer speech bubble on click */}
            {snailCheer && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: -20, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-12 right-6 md:right-12 bg-white/95 backdrop-blur-md border border-ly-yellow shadow-xl rounded-2xl px-4 py-2 font-gilroy font-semibold text-sm md:text-base text-ly-black whitespace-nowrap z-30"
              >
                ✨ Slow &amp; steady builds greatness!
              </motion.div>
            )}

            <motion.div initial={{ x: -120, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}>
              <div className="snail-hover">
                <SnailMascot className="w-full h-auto" trail={extraOffset > 0 || desktop} testId="hero-snail-svg" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* hero copy */}
        <motion.div
          className="absolute z-20 top-0 left-0 w-full mt-[85px] sm:mt-[110px] md:mt-[135px] lg:mt-[115px] px-6 sm:px-8 md:pl-[50px] lg:pl-[64px] text-center md:text-left"
          style={{ opacity: heroOpacity, pointerEvents: solutionsOn ? "none" : "auto" }}
        >
          <HeroCopy />
          <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
            <PillButton onClick={() => scrollToTarget("solutions")} testId="see-our-work-btn">
              See Our Services
            </PillButton>
          </div>
        </motion.div>


        {/* solutions overlay */}
        <motion.div
          id="solutions"
          className="absolute inset-0 z-30"
          style={{ opacity: solOpacity, background: HERO_BG, pointerEvents: solutionsOn ? "auto" : "none" }}
          data-testid="solutions-section"
        >
          <SolutionsPanel interactive={solutionsOn} onContact={onContact} />
          <motion.div
            className="absolute bottom-2 sm:bottom-4 md:bottom-[-8%] right-2 sm:right-4 md:right-[-6%] lg:right-[1%] w-[210px] sm:w-[270px] md:w-[70vw] lg:w-[42vw] xl:w-[38vw] max-w-[900px] pointer-events-none z-0"
            style={{ x: bigSnailX }}
          >
            <SnailMascot className="w-full h-auto" testId="solutions-snail-svg" animated={true} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
