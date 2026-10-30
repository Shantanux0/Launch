import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Shield, Sparkles } from 'lucide-react';

export const WhyHumStack: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Why Founders Partner With Us</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.08]">
            Built with purpose. Engineered for scale.
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl mt-4 leading-relaxed">
            No bloated agency overheads, no inexperienced junior handoffs. Just top-tier engineering direct from senior builders.
          </p>
        </div>

        {/* Wix-Style Pastel Cards Grid (Matches Wix Frames 5 & 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Lavender / Purple Pastel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] bg-[#E8E6FD] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] border border-indigo-100/60 shadow-sm"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-indigo-600 flex items-center justify-center shadow-sm mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900 tracking-tight mb-3">
                Zero Boilerplate Code
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Every line of code is written specifically for your product with typed TypeScript, clean interfaces, and full IP ownership.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs font-semibold text-indigo-700 uppercase tracking-wider">
              100% Owned By You
            </div>
          </motion.div>

          {/* Card 2: Warm Sunset Gradient (Matches Wix "Gradients" frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] bg-gradient-to-br from-[#FFD194] to-[#D1913C] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] text-gray-950 shadow-sm"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/90 text-amber-800 flex items-center justify-center shadow-sm mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-950 tracking-tight mb-3">
                Sub-Second Speed
              </h3>
              <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                Optimized asset pipelines, edge-rendered micro-frontends, and intelligent caching guarantee near-instant load times globally.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs font-semibold text-gray-950 uppercase tracking-wider">
              Sub-100ms Latency
            </div>
          </motion.div>

          {/* Card 3: Soft Butter Yellow / Mint (Matches Wix "Scroll effects" frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[2rem] bg-[#FCF3A2] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] border border-yellow-200/60 shadow-sm"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-yellow-800 flex items-center justify-center shadow-sm mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-900 tracking-tight mb-3">
                Direct Senior Builders
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Direct engineer-to-founder Slack/WhatsApp channel with transparent sprint boards and real working demos every single week.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs font-semibold text-yellow-950 uppercase tracking-wider">
              Zero Junior Handoffs
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
