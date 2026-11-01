import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { SnailMascot } from "./SnailMascot";

export const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 2);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-7 right-8 z-[3900] w-14 h-14 md:w-16 md:h-16 rounded-full bg-ly-yellow flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform"
          aria-label="Back to top"
          data-testid="back-to-top-btn"
        >
          <ArrowUp className="w-6 h-6 text-ly-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/** Initial loader: the snail crawls across a white screen (used across Home, Careers and Let's Talk). */
export const Loader = ({ duration = 1200 }) => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), duration);
    return () => clearTimeout(t);
  }, [duration]);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-[9999] bg-white grid place-items-center" data-testid="page-loader">
          <motion.div className="w-[160px] md:w-[200px]" initial={{ x: -40 }} animate={{ x: 40 }} transition={{ duration: duration / 1000, ease: "easeInOut" }}>
            <SnailMascot className="w-full h-auto" trail testId="loader-snail-svg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

