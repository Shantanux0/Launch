import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

// Fake browser card showcasing a project/work style
const ProjectCard: React.FC<{
  bg: string;
  label: string;
  tag: string;
  delay: number;
  rotate: string;
}> = ({ bg, label, tag, delay, rotate }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: rotate }}
    animate={{ opacity: 1, y: 0, rotate: rotate }}
    transition={{ duration: 0.7, delay }}
    className="rounded-2xl overflow-hidden shadow-soft-lg border border-gray-100 select-none"
    style={{ background: bg }}
  >
    {/* Browser Bar */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/30 backdrop-blur-sm border-b border-white/20">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
      <div className="ml-2 flex-1 bg-white/40 rounded-full h-4 text-[9px] flex items-center px-2 text-gray-600 font-mono overflow-hidden">
        humstack.in/{tag}
      </div>
    </div>
    {/* Card Content */}
    <div className="p-5 min-h-[130px] flex flex-col justify-between">
      <div className="text-white/90 text-xs font-semibold uppercase tracking-wider opacity-80">{tag}</div>
      <div className="text-white font-heading font-bold text-xl leading-tight">{label}</div>
    </div>
  </motion.div>
);

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative pt-28 md:pt-36 pb-0 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f4ff 0%, #ffffff 55%, #fafaff 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Hero Text Block */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Boutique Engineering Studio
          </motion.div>

          {/* Giant Headline — Wix style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-6"
          >
            You bring the idea.
            <br />
            <span className="text-[#F34F79]">We make it real.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            From your first idea to a product in the real world — we design, build, launch, and grow with technology that actually works.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onStartProject}
              className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-gray-900 text-white hover:bg-black font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-medium text-base transition-all duration-200 bg-white/60 hover:bg-white"
            >
              See What We Do
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-gray-400 font-medium"
          >
            {['Modern React & Cloud Stack', 'Zero Outsourced Code', 'Production-Ready in Weeks'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-indigo-400" />
                <span>{t}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Project Preview Cards Row — Wix style scrollable showcase */}
        <motion.div style={{ y }} className="mt-16 pb-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            <ProjectCard
              bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              label="SaaS Dashboard"
              tag="web-app"
              delay={0.35}
              rotate="-1deg"
            />
            <ProjectCard
              bg="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              label="E-Commerce Store"
              tag="ecommerce"
              delay={0.45}
              rotate="1deg"
            />
            <ProjectCard
              bg="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              label="Mobile App"
              tag="mobile"
              delay={0.55}
              rotate="-0.5deg"
            />
            <ProjectCard
              bg="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
              label="AI Integration"
              tag="automation"
              delay={0.65}
              rotate="1.5deg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
