import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Bot,
  CloudCog,
  Wrench,
  Megaphone,
  Check,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/services';

interface ServiceShowcaseProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'web-ecommerce': <Globe className="w-5 h-5 text-coral" />,
  'web-mobile-apps': <Smartphone className="w-5 h-5 text-coral" />,
  'backend-api': <Database className="w-5 h-5 text-coral" />,
  'ai-automation': <Bot className="w-5 h-5 text-coral" />,
  'cloud-deployment': <CloudCog className="w-5 h-5 text-coral" />,
  'maintenance-support': <Wrench className="w-5 h-5 text-coral" />,
  'brand-growth': <Megaphone className="w-5 h-5 text-coral" />
};

export const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Filter out 'Cloud & Infrastructure' on the Home Page only, re-indexing numbers
  const homeServices = servicesData
    .filter(
      (service) =>
        service.title !== 'Cloud & Infrastructure' &&
        service.id !== 'cloud-deployment'
    )
    .map((service, idx) => ({
      ...service,
      number: `0${idx + 1}`
    }));

  const scrollToServicesGrid = () => {
    const el = document.getElementById('services-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="pt-24 pb-20 bg-cream">
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
        <div className="relative mb-20">
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
                  We bring design, engineering, and infrastructure together to help you move from concept to launch without wasted cycles or technical debt.
                </p>

                {/* Collaborative Browser Window Doodle Artwork */}
                <div className="pt-4 relative flex justify-center lg:justify-start">
                  <picture>
                    <source srcSet="/assets/illustrations/collaboration-browser.webp" type="image/webp" />
                    <img
                      src="/assets/illustrations/collaboration-browser.png"
                      alt="Playful sketch of collaborators inside browser windows architecting digital products"
                      className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-md select-none"
                      width={1536}
                      height={1024}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>

              {/* Right Side: Overlapping Cream Feature Card */}
              <div className="lg:col-span-5 relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-cream text-primary p-8 sm:p-10 rounded-3xl border-2 border-charcoal shadow-soft-lg relative z-10"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-cream-400/80 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                    Our Commitment
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 tracking-tight">
                    Built around your business.
                  </h4>

                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-8">
                    Every project starts with your goals. We shape the right solution, choose the right tools, and build for real-world use.
                  </p>

                  <div className="space-y-3 mb-8 text-xs sm:text-sm text-secondary font-medium">
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

                  <button
                    onClick={scrollToServicesGrid}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 text-coral transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Concise Grid of Service Categories (Varied Presentation) */}
        <div id="services-grid" className="pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-1">
                Capability Matrix
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-bold text-primary tracking-tight">
                What we engineer every day.
              </h3>
            </div>
            <p className="text-secondary text-sm max-w-md">
              Click any service to view key deliverables, technical stack, or discuss your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, index) => {
              const isSelected = activeServiceId === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className={`group relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-coral shadow-soft-lg ring-2 ring-coral/20'
                      : 'bg-white/80 hover:bg-white border-cream-border hover:border-primary/30 shadow-soft-sm hover:shadow-soft'
                  }`}
                >
                  <div>
                    {/* Top row: Number and Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-heading text-xs font-bold text-coral tracking-wider px-2.5 py-1 rounded-full bg-coral-bg">
                        {service.number}
                      </span>
                      <div className="p-2.5 rounded-2xl bg-cream-300 group-hover:bg-coral-bg transition-colors duration-200">
                        {SERVICE_ICONS[service.id]}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-heading font-bold text-primary mb-3 tracking-tight group-hover:text-coral transition-colors">
                      {service.title}
                    </h4>

                    {/* Short Description */}
                    <p className="text-secondary text-sm leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Deliverables Pills */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                        Key Deliverables
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.deliverables.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-cream-300/80 text-secondary border border-cream-border/50"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded view on click */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-2 pb-4 border-t border-cream-border/60 text-xs text-secondary space-y-3 overflow-hidden"
                        >
                          <p>{service.fullDesc}</p>
                          <div className="flex items-center gap-1.5 flex-wrap pt-1">
                            <span className="font-semibold text-primary">Tech:</span>
                            {service.techStack.map((tech) => (
                              <span key={tech} className="px-2 py-0.5 rounded bg-charcoal text-white text-[10px] font-mono">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 mt-auto border-t border-cream-border/50 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveServiceId(isSelected ? null : service.id)}
                      className="text-xs font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span>{isSelected ? 'Less details' : 'Tech stack'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected ? 'rotate-90' : ''}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="text-xs font-semibold text-coral hover:text-coral-hover inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
