import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/process';

export const HowWeWork: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Sketch Mark */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="text-coral text-xs font-semibold tracking-wider uppercase">
              Proven Methodology
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight">
              How we work
            </h2>
            {/* Sketch-style squiggle / scribble doodle next to heading like in DULO */}
            <img
              src="/assets/decorations/scribble-box.svg"
              alt=""
              aria-hidden="true"
              className="w-7 h-7 sm:w-8 sm:h-8 select-none pointer-events-none"
            />
          </div>
          <p className="text-secondary text-sm sm:text-base mt-4 leading-relaxed">
            A transparent, low-friction path from initial consultation to continuous production growth.
          </p>
        </div>

        {/* Three Step Process Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 relative">
          {/* Subtle Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[70px] left-[18%] right-[18%] h-[2px] bg-cream-border/70 border-dashed border-t-2 border-stone-300 -z-0" />

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Circular Coral Illustration Badge */}
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-cream-100 border-2 border-primary/10 shadow-soft flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105 group-hover:border-coral/40">
                  <picture>
                    <source srcSet={step.illustration} type="image/webp" />
                    <img
                      src={step.illustration.replace('.webp', '.png')}
                      alt={step.alt}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-sm select-none"
                      width={480}
                      height={480}
                      loading="lazy"
                    />
                  </picture>
                </div>

                {/* Step Number Badge */}
                <div className="absolute -bottom-2 right-2 w-8 h-8 rounded-full bg-charcoal text-white text-xs font-mono font-bold flex items-center justify-center border-2 border-cream shadow-sm">
                  {step.step}
                </div>
              </div>

              {/* Badge Label (e.g., Coffee Chat, Development, Delivery) */}
              <div className="text-xs font-bold uppercase tracking-wider text-coral mb-2">
                {step.badgeTitle}
              </div>

              {/* Step Title (Discover, Build, Launch & Grow) */}
              <h3 className="text-2xl font-heading font-bold text-primary mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Main Step Description */}
              <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-sm mb-6">
                {step.description}
              </p>

              {/* Step Details Bullet Box */}
              <div className="w-full max-w-xs bg-white/60 rounded-2xl p-4 border border-cream-border text-left space-y-2 text-xs text-secondary mt-auto">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                    <span className="leading-tight">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

