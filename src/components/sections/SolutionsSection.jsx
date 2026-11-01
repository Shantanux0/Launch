import React, { useState } from "react";
import { motion } from "framer-motion";
import { SOLUTIONS } from "../../data/content";
import { Compass, Palette, Code2, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";

const SOLUTION_DETAILS = [
  {
    icon: Compass,
    deliverables: ["User Research", "Market Strategy", "Design Audits", "CX Workshops"],
    accent: "#FAE100",
    bgClass: "from-amber-500/10 to-transparent",
  },
  {
    icon: Palette,
    deliverables: ["UI/UX Design", "Design Systems", "Prototyping", "Micro-interactions"],
    accent: "#35C487",
    bgClass: "from-emerald-500/10 to-transparent",
  },
  {
    icon: Code2,
    deliverables: ["Web & Mobile Apps", "Scalable Architecture", "API Integration", "QA & Testing"],
    accent: "#7FD3FB",
    bgClass: "from-sky-500/10 to-transparent",
  },
  {
    icon: TrendingUp,
    deliverables: ["Technical SEO", "Growth Experiments", "Brand Storytelling", "Conversion UX"],
    accent: "#F28C1E",
    bgClass: "from-orange-500/10 to-transparent",
  },
];

export const SolutionsSection = ({ onContact }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="solutions" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-ly-yellow" />
              <span className="font-gilroy text-xs md:text-sm uppercase tracking-[0.2em] text-ly-tertiary font-bold">
                Services & Capabilities
              </span>
            </div>
            <h2 className="font-gilroy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ly-black tracking-tight leading-[1.12]">
              We design digital happiness
            </h2>
          </div>
          <p className="font-gilroy text-gray-600 max-w-md text-base sm:text-lg leading-relaxed">
            From deep-dive research to delightful pixel-level engineering, we craft end-to-end digital experiences tailored for users.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SOLUTIONS.map((sol, index) => {
            const detail = SOLUTION_DETAILS[index] || SOLUTION_DETAILS[0];
            const Icon = detail.icon;
            const isHovered = hoveredIdx === index;

            return (
              <motion.div
                key={sol.title}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative rounded-3xl p-7 sm:p-8 bg-gray-50/70 border border-gray-100 hover:border-ly-yellow hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background decorative tint on hover */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${detail.bgClass} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold text-gray-400 group-hover:text-ly-black transition-colors">
                      0{index + 1}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-ly-black group-hover:bg-ly-yellow group-hover:border-ly-yellow transition-all duration-300 group-hover:rotate-6">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-gilroy text-2xl font-bold text-ly-black mb-3 group-hover:text-ly-tertiary transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  {/* Deliverable Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {detail.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white text-gray-600 border border-gray-100 group-hover:border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
                  <button
                    onClick={onContact}
                    className="font-gilroy text-xs font-semibold uppercase tracking-wider text-gray-600 group-hover:text-ly-black transition-colors"
                  >
                    Start Project
                  </button>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-ly-black group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

