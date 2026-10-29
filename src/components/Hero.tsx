import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Editorial Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.08] tracking-tight mb-6"
            >
              You bring the idea.
              <br />
              <span className="inline-block mt-1">
                We make it{' '}
                <span className="relative inline-block text-coral text-[1.18em] font-black tracking-tight align-baseline">
                  real.
                  {/* Sketch Underline Squiggle */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3 sm:h-4 text-coral pointer-events-none"
                    viewBox="0 0 140 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 4 12 Q 35 4, 70 10 T 136 9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-secondary max-w-xl font-normal leading-relaxed mb-9 pt-2"
            >
              From your first idea to a product in the real world, we help you design, build, launch, and grow with technology that works.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-coral transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                onClick={handleExploreClick}
                className="group inline-flex items-center justify-center gap-2 py-3 px-2 text-base font-medium text-primary hover:text-coral transition-colors"
              >
                <span>Explore What We Do</span>
                <ArrowDownRight className="w-4 h-4 text-secondary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-coral" />
              </a>
            </motion.div>

            {/* Value Highlights Pill / Micro-signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-secondary font-medium"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                <span>Modern React &amp; Cloud Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                <span>Zero Outsourced Code</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                <span>Production-Ready in Weeks</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Runner Artwork with Floating Doodles */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Decorative Sketch Glow */}
            <div className="absolute -inset-4 bg-coral/5 rounded-full filter blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-lg lg:max-w-none"
            >
              {/* Main Artwork */}
              <picture>
                <source srcSet="/assets/illustrations/hero-runner.webp" type="image/webp" />
                <img
                  src="/assets/illustrations/hero-runner.png"
                  alt="Dynamic illustration of a creator running forward with floating code and paper doodles"
                  className="w-full h-auto object-contain drop-shadow-sm select-none"
                  width={1536}
                  height={1024}
                  loading="eager"
                />
              </picture>

              {/* Decorative Hand-Drawn Sketch Arrow Curving Downward */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 right-4 sm:-bottom-12 sm:right-10 w-20 sm:w-24 select-none pointer-events-none hidden sm:block"
              >
                <img
                  src="/assets/decorations/arrow-dulo.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto opacity-80"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

