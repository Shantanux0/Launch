import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceShowcaseProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServiceShowcase: React.FC<ServiceShowcaseProps> = () => {
  return (
    <section id="services" className="pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-400/80 border border-cream-border text-secondary text-xs font-semibold tracking-wider uppercase mb-3">
            Core Engineering &amp; Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight">
            Services crafted for real-world growth.
          </h2>
        </div>

        {/* Charcoal Showcase Panel with Overlapping Cream Feature Card */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="bg-charcoal text-white rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-charcoal-border shadow-charcoal"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Side: Statement & Collaborative Browser Illustration */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-2">
                    Studio Ethos
                  </span>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                    More than an idea.
                    <br />
                    <span className="text-stone-300">A product that works.</span>
                  </h3>
                </div>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  We bring architecture, code, and infrastructure together to help you move from concept to working software. Every system is built for longevity, scalability, and seamless user experiences.
                </p>

                {/* Hand-Drawn Browser Collaboration Illustration */}
                <div className="relative pt-4 flex justify-center lg:justify-start">
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <picture>
                      <source srcSet="/assets/illustrations/collaboration-browser.webp" type="image/webp" />
                      <img
                        src="/assets/illustrations/collaboration-browser.png"
                        alt="Collaborative browser window with team members"
                        className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-md select-none"
                        width={500}
                        height={333}
                        loading="lazy"
                      />
                    </picture>

                    {/* Subtle Circular Wave Ripple behind doodle */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-coral/20 blur-xl rounded-full pointer-events-none" />
                  </motion.div>
                </div>
              </div>

              {/* Right Side: Overlapping Feature Card (DULO Reference Inspiration) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-cream text-primary rounded-3xl p-8 sm:p-10 border border-cream-border shadow-soft-xl max-w-md w-full relative z-10"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-400 text-charcoal text-xs font-semibold tracking-wider uppercase mb-5 border border-cream-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                    <span>Approach</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary mb-4 tracking-tight leading-snug">
                    Built around your business.
                  </h4>

                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
                    Every project starts with your actual goals. We shape the right technical solution, select modern production-tested tools, and engineer for real-world reliability.
                  </p>

                  <div className="space-y-3 pt-1 pb-8 text-xs sm:text-sm font-medium text-primary">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-coral-bg text-coral flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>Tailored tech stack, zero bloated frameworks</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-coral-bg text-coral flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>Clean modular codebases you completely own</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-coral-bg text-coral flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>Transparent weekly demos and progress logs</span>
                    </div>
                  </div>

                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="w-4 h-4 text-coral transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
