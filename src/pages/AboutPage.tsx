import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Lock,
  Zap,
  Terminal,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onOpenProjectModal: () => void;
}

const PRINCIPLES = [
  {
    icon: <Terminal className="w-5 h-5 text-coral" />,
    title: 'Engineering-First Thinking',
    description: 'We prioritize clean type systems, modular architectures, and testable code over disposable shortcuts and bloated no-code glue.'
  },
  {
    icon: <Lock className="w-5 h-5 text-coral" />,
    title: 'Complete IP & Code Ownership',
    description: 'You own 100% of your source code, CI/CD pipelines, documentation, and cloud infrastructure from commit one. Zero vendor lock-in.'
  },
  {
    icon: <Zap className="w-5 h-5 text-coral" />,
    title: 'Weekly Production Previews',
    description: 'No month-long black boxes. You receive weekly staging builds and demo walkthroughs so you experience actual working software.'
  },
  {
    icon: <Compass className="w-5 h-5 text-coral" />,
    title: 'Pragmatic Tech Selection',
    description: 'We recommend proven, battle-tested tools that fit your business model and budget, rather than chasing fleeting hype that adds friction.'
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenProjectModal }) => {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-8 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-heading font-extrabold text-primary tracking-tight leading-[1.08]"
              >
                We engineer digital products that move businesses forward.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl text-secondary leading-relaxed max-w-xl font-normal"
              >
                HumStack was founded on a simple principle: ambitious entrepreneurs and companies need a direct, high-caliber engineering partner—not an oversized agency with endless account managers, nor unvetted freelancers who vanish after deployment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-wrap gap-4"
              >
                <button
                  onClick={onOpenProjectModal}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4 text-coral transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-cream-border text-primary hover:border-charcoal font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <span>Explore What We Build</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: About Hero Illustration */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-lg"
              >
                <picture>
                  <source srcSet="/assets/illustrations/about-team-collaboration.webp" type="image/webp" />
                  <img
                    src="/assets/illustrations/about-team-collaboration.png"
                    alt="Creative tech engineers collaborating over blueprints, code screens, coffee, and paper airplanes"
                    className="w-full h-auto object-contain drop-shadow-sm select-none"
                    width={1264}
                    height={848}
                    loading="eager"
                  />
                </picture>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Three Pillars Section (Brand Architecture) */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Side: Mission & Values Illustration */}
            <div className="lg:col-span-5 relative flex justify-center items-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-white rounded-3xl p-4 border border-charcoal-border shadow-charcoal"
              >
                <picture>
                  <source srcSet="/assets/illustrations/about-mission-values.webp" type="image/webp" />
                  <img
                    src="/assets/illustrations/about-mission-values.png"
                    alt="Illustration showing the construction of three architectural pillars for Build, Launch, and Grow beneath the rising sun arch"
                    className="w-full h-auto object-contain select-none"
                    width={1200}
                    height={896}
                    loading="lazy"
                  />
                </picture>
                <div className="text-center pt-3 pb-1 text-xs font-semibold text-charcoal">
                  The HumStack Philosophy: Three Pillars of Digital Resilience
                </div>
              </motion.div>
            </div>

            {/* Right Side: Three Pillars Explanation */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-coral text-xs font-semibold tracking-wider uppercase block">
                The Anatomy of Our Name
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                Build. Launch. Grow.
                <br />
                <span className="text-stone-300">The three pillars of our craft.</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                The three pillars in the HumStack logo represent the structural foundation of every digital product we ship. Under the red arch of innovation, each pillar plays an essential role:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-charcoal-card border border-charcoal-border hover:border-coral/40 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-coral text-white">
                      PILLAR 01
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white">Build with Precision</h3>
                  </div>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    Crafting clean, typed frontend architectures, robust backend microservices, and reactive user interfaces that perform smoothly from day one.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-charcoal-card border border-charcoal-border hover:border-coral/40 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-coral text-white">
                      PILLAR 02
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white">Launch with Confidence</h3>
                  </div>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    Automating deployment pipelines, zero-downtime releases, cloud scaling, and real-time error tracking across production environments.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-charcoal-card border border-charcoal-border hover:border-coral/40 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-coral text-white">
                      PILLAR 03
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white">Grow with Stewardship</h3>
                  </div>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    Ongoing engineering support, database index tuning, automated dependency upgrades, and iterative feature development as your traffic scales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Studio Principles Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-2">
              How We Operate
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-secondary text-sm sm:text-base mt-3 leading-relaxed">
              We hold ourselves to uncompromising standards of craftsmanship, direct accountability, and technical transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PRINCIPLES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-cream-border shadow-soft-sm hover:shadow-soft transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-coral-bg flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Studio Values / Direct Promise Banner */}
      <section className="py-16 bg-cream border-t border-cream-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-charcoal text-white relative overflow-hidden shadow-charcoal">
            <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-3">
              Direct Partnership
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mb-4">
              Have a product in mind? Let's build it together.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Whether you need a lean MVP in 4 weeks, an API redesign, or ongoing technical leadership, we are ready to partner with you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenProjectModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-coral hover:bg-coral-hover text-white font-semibold text-sm transition-all shadow-md hover:scale-[1.02]"
              >
                Start a Conversation
              </button>
              <Link
                to="/services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-charcoal-surface border border-charcoal-border hover:bg-charcoal-light text-white font-semibold text-sm transition-all"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
