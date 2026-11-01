import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENTS } from "../../data/content";
import { SectionHeading } from "./shared";
import { SnailMark } from "./SnailLogo";
import { SnailMascot } from "./SnailMascot";
import { Sparkles } from "lucide-react";

export const ClientsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [clickedIdx, setClickedIdx] = useState(null);

  const handleMouseEnter = (i) => {
    setHoveredIdx(i);
  };

  const handleTileClick = (i) => {
    setClickedIdx(i);
    setTimeout(() => setClickedIdx(null), 1800);
  };

  return (
    <section
      id="clients"
      className="bg-white flex flex-col gap-6 md:gap-10 px-4 py-12 md:px-16 md:py-20 select-none"
      data-testid="clients-section"
    >
      <SectionHeading title="Capabilities" subtitle="Technologies, stacks and solutions we deliver" />

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-ly-line relative isolate">
        {CLIENTS.map((name, i) => {
          const isHovered = hoveredIdx === i;
          const isClicked = clickedIdx === i;

          return (
            <li
              key={name}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => handleTileClick(i)}
              className={`relative h-[90px] sm:h-[105px] md:h-[125px] border-r border-b border-ly-line flex flex-col items-center justify-center gap-2 px-3 sm:px-4 cursor-pointer transition-colors duration-200 ${
                isHovered
                  ? "bg-gradient-to-b from-[#FFFDE7] to-[#FFF9C4]/40 z-30"
                  : "bg-white"
              }`}
              data-testid={`client-logo-${i}`}
            >
              {/* 3D Pop-out Snail Mascot jumping towards the user like a game */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.3, y: 15 }}
                    animate={{
                      opacity: 1,
                      scale: [0.3, 1.45, 1.25],
                      y: [-4, -36, -26],
                      rotate: [-5, 5, -2, 0],
                    }}
                    exit={{ opacity: 0, scale: 0.3, y: 15 }}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 18,
                      mass: 0.5,
                    }}
                    className="absolute -top-7 sm:-top-9 z-50 pointer-events-none drop-shadow-2xl flex flex-col items-center"
                    style={{ perspective: 1000 }}
                  >
                    {/* Click celebratory speech bubble */}
                    {isClicked && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.7 }}
                        animate={{ opacity: 1, y: -10, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-ly-black text-white text-[11px] font-gilroy font-semibold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap mb-1 select-none"
                      >
                        We build this! 🚀
                      </motion.div>
                    )}

                    {/* Snail Mascot Graphic */}
                    <div className="w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16">
                      <SnailMascot className="w-full h-auto drop-shadow-md" animated={true} />
                    </div>

                    {/* Sparkle burst particles */}
                    <motion.span
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ scale: [0, 1.3, 0], x: 18, y: -12 }}
                      transition={{ duration: 0.45 }}
                      className="absolute top-0 right-1 text-amber-500 text-sm select-none"
                    >
                      ✨
                    </motion.span>
                    <motion.span
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ scale: [0, 1.2, 0], x: -16, y: -16 }}
                      transition={{ duration: 0.45, delay: 0.05 }}
                      className="absolute top-0 left-1 text-emerald-500 text-xs select-none"
                    >
                      ✦
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Base Tile Content */}
              <div className="flex items-center justify-center gap-2 z-10 pointer-events-none">
                <SnailMark
                  className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
                    isHovered
                      ? "scale-110 opacity-100"
                      : "opacity-40 grayscale"
                  }`}
                />
                <span
                  className={`font-gilroy font-semibold text-sm sm:text-base md:text-[18px] lg:text-[19px] tracking-tight text-center leading-snug transition-all duration-200 ${
                    isHovered
                      ? "text-ly-black font-bold scale-[1.04]"
                      : "text-ly-gray"
                  }`}
                >
                  {name}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ClientsSection;
