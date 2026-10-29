import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const totalDuration = 2000; // Exactly 2 seconds
    const countDuration = 1850; // Reaches 100% at 1.85s, holds for 150ms
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / countDuration) * 100));
      setProgress(pct);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setProgress(100);
        setIsLoaded(true);
        onComplete?.();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream select-none px-4"
        >
          {/* Snail Mascot Centered */}
          <div className="relative w-48 sm:w-60 md:w-72 aspect-[4/3] flex items-center justify-center">
            <picture>
              <source srcSet="/assets/illustrations/snail-loading.webp" type="image/webp" />
              <source srcSet="/assets/illustrations/snail-loading.gif" type="image/gif" />
              <img
                src="/assets/illustrations/snail-loading.gif"
                alt="HumStack Snail Loading"
                className="w-full h-full object-contain pointer-events-none select-none drop-shadow-sm"
                width={350}
                height={260}
                loading="eager"
              />
            </picture>
          </div>

          {/* Small Minimalist Counting Number */}
          <div className="mt-3 text-center">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-secondary/80 tabular-nums">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
