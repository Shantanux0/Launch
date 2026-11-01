import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CULTURE } from "../../data/content";
import { PillButton, scrollToTarget } from "./shared";

const DURATION = 5000;

export const CultureSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [idx, setIdx] = useState(0);
  const c = CULTURE[idx];

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % CULTURE.length), DURATION);
    return () => clearTimeout(t);
  }, [idx, inView]);

  return (
    <section id="culture" ref={ref} className="min-h-screen bg-ly-ivory flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-0" data-testid="culture-section">
      <div className="flex flex-col lg:flex-[0.7]">
        <div className="mx-4 mt-12 md:mt-20 md:mx-16 lg:mr-0">
          <h2 className="font-gilroy font-light text-[44px] md:text-[68px] leading-[1.1] text-ly-black tracking-tight">About</h2>
          <div className="flex w-full flex-col md:flex-row gap-2 md:gap-4 md:items-center mt-2">
            <p className="font-inter text-ly-gray text-base md:text-xl font-normal lg:min-w-[340px]">Our secret to success, based on a slow-and-steady philosophy</p>
            <span className="h-px w-full bg-ly-grey opacity-60" />
          </div>
        </div>
        <div className="mx-4 md:mx-16 flex flex-col md:flex-row lg:flex-col md:justify-between lg:justify-start">
          <div className="flex flex-col gap-6 mt-10 md:mt-[66px] relative">
            <span className="absolute left-[7px] top-3 bottom-3 border-l-2 border-dashed border-ly-grey" />
            {CULTURE.map((item, i) => (
              <button key={item.tab} onClick={() => setIdx(i)} className="z-[1] flex items-center text-left group" data-testid={`culture-tab-${i}`}>
                <span className={`inline-block rounded-full border border-ly-black mr-5 min-w-[15px] min-h-[15px] transition-colors duration-300 ${i === idx ? "bg-ly-yellow" : "bg-white group-hover:bg-ly-yellow/40"}`} />
                <span className={`transition-all duration-300 ${i === idx ? "font-pen text-2xl sm:text-3xl text-ly-black" : "font-gilroy font-medium text-lg md:text-xl text-ly-tertiary hover:text-ly-black"}`}>{item.tab}</span>
              </button>
            ))}
          </div>
          <PillButton className="mt-12 self-start md:self-end lg:self-start font-gilroy font-medium" onClick={() => scrollToTarget("faq")} testId="know-us-btn">Know Us</PillButton>
        </div>
      </div>

      <div className="relative h-[440px] md:h-screen w-full lg:flex-1 overflow-hidden" data-testid="culture-card">
        <AnimatePresence>
          <motion.img
            key={c.img}
            src={c.img}
            alt={c.word}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#3a3000]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />
        <div className="absolute inset-0 pt-12 md:pt-[88px] pb-8 md:pb-24 px-6 md:px-20 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.h3 key={c.word} className="text-white font-gilroy font-light text-[36px] md:text-[56px] md:leading-[64px]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}>
              {c.lead} <span className="font-gilroy font-bold">{c.word}</span>
            </motion.h3>
          </AnimatePresence>
          <div className="max-w-2xl">
            <h4 className="text-white font-gilroy font-bold text-2xl sm:text-3xl md:text-4xl leading-tight" data-testid="culture-count">{c.highlight}</h4>
            <div className="h-px relative w-2/4 bg-white/30 mt-3">
              <motion.div key={idx} className="absolute left-0 top-0 h-px bg-ly-yellow" initial={{ width: "0%" }} animate={{ width: inView ? "100%" : "0%" }} transition={{ duration: DURATION / 1000, ease: "linear" }} />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/95 font-inter font-normal mt-4 leading-relaxed">{c.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;

