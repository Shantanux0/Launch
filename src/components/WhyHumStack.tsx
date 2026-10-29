import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Target, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyHumStack: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream border-t border-cream-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Ethos & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-400/80 border border-cream-border text-secondary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-coral" />
              <span>Studio Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight leading-[1.1]">
              Good technology should move your business forward.
            </h2>

            <p className="text-secondary text-base leading-relaxed">
              We started HumStack because too many founders and companies get caught between bloated agencies with huge overheads or freelancers who disappear after delivery. We offer a direct, high-caliber engineering partnership.
            </p>

            {/* Studio Values Checklist */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary font-medium">
                <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                <span>Direct engineer-to-founder communication</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary font-medium">
                <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                <span>Full source code ownership &amp; clean documentation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary font-medium">
                <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                <span>Zero vendor lock-in or proprietary traps</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Meaningful Differentiators */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {/* Differentiator 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 rounded-3xl p-7 border border-cream-border shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-coral-bg text-coral flex items-center justify-center flex-shrink-0 group-hover:bg-coral group-hover:text-white transition-colors duration-200">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2 tracking-tight">
                  Engineering-first thinking
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We don’t glue together fragile templates or rely on generic shortcuts. Every system is architected with typed code, reliable data structures, and production-tested patterns that perform smoothly under real load.
                </p>
              </div>
            </motion.div>

            {/* Differentiator 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/90 rounded-3xl p-7 border border-cream-border shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cream-400 text-charcoal flex items-center justify-center flex-shrink-0 group-hover:bg-charcoal group-hover:text-white transition-colors duration-200">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2 tracking-tight">
                  Solutions shaped around your actual needs
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We choose technologies that serve your business model, timeline, and team capabilities—never pushing unnecessary complexity just because it is trending on Twitter.
                </p>
              </div>
            </motion.div>

            {/* Differentiator 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/90 rounded-3xl p-7 border border-cream-border shadow-soft-sm hover:shadow-soft transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-coral-bg text-coral flex items-center justify-center flex-shrink-0 group-hover:bg-coral group-hover:text-white transition-colors duration-200">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2 tracking-tight">
                  Support beyond the initial launch
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Real software evolves after first contact with customers. We remain by your side to monitor performance, optimize database queries, squash edge-case bugs, and deploy new features on cadence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
