import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK } from "../../data/content";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const CATEGORIES = ["All", "UI/UX Design", "Development", "Research"];

export const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = WORK.filter((project) => {
    if (activeCategory === "All") return true;
    return project.deliverables.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="work" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-ly-tertiary" />
              <span className="font-gilroy text-xs md:text-sm uppercase tracking-[0.2em] text-ly-tertiary font-bold">
                Selected Case Studies
              </span>
            </div>
            <h2 className="font-gilroy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ly-black tracking-tight leading-[1.12]">
              Crafted with intention
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-ly-black text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={project.name}
                className="group flex flex-col rounded-3xl bg-gray-50/60 border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-gray-200"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Status Overlay Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 text-xs font-semibold">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.status === "LIVE" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                      }`}
                    />
                    <span className="text-gray-800 text-[11px] uppercase tracking-wider">
                      {project.status}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-[11px]">{project.engagement}</span>
                  </div>

                  {/* Corner Hover Arrow */}
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-ly-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-gilroy text-2xl sm:text-3xl font-bold text-ly-black mb-2 group-hover:text-ly-tertiary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Deliverables pill tags */}
                  <div className="pt-4 border-t border-gray-200/60 flex flex-wrap gap-2 items-center">
                    {project.deliverables.split(", ").map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white text-gray-600 border border-gray-200/80 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;

