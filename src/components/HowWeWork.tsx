import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    num: '1.',
    title: 'Map out your goals.',
    desc: "Nail down the product's purpose, target users, core features, and measurable launch milestones.",
  },
  {
    num: '2.',
    title: 'Architect & design.',
    desc: 'Craft intuitive user flows, high-fidelity wireframes, and scalable system architecture before coding.',
  },
  {
    num: '3.',
    title: 'Clean, modular engineering.',
    desc: 'Build production-ready frontends and typed backend APIs with zero messy shortcuts or bloat.',
  },
  {
    num: '4.',
    title: 'Integrate AI & automation.',
    desc: 'Embed intelligent workflows and third-party tools to automate manual operations effortlessly.',
  },
  {
    num: '5.',
    title: 'QA, test & launch.',
    desc: 'Perform end-to-end testing, security audits, and deploy to ultra-reliable cloud infrastructure.',
  },
  {
    num: '6.',
    title: 'Iterate & scale.',
    desc: 'Monitor production telemetry, optimize performance, and ship weekly updates alongside your team.',
  },
];

const SHOWCASE_ITEMS = [
  { title: 'Fintech Dashboard', tag: 'Web Platform', color: 'from-blue-600 to-indigo-800' },
  { title: 'Aura Lifestyle', tag: 'E-Commerce', color: 'from-purple-600 to-pink-600' },
  { title: 'Vanguard AI', tag: 'Machine Learning', color: 'from-emerald-500 to-teal-700' },
  { title: 'Studio Horizon', tag: 'Brand & Creative', color: 'from-amber-500 to-orange-700' },
];

export const HowWeWork: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wix-Style Numbered Steps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24">
          {/* Left Column: Big Headline & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.08]">
              How we build your product
            </h2>
            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-md">
              Follow our disciplined sprint process from first conversation to global production rollout.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white hover:bg-gray-800 font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-gray-900 font-semibold text-base hover:underline group"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Numbered List with Dividing Lines */}
          <div className="lg:col-span-7 divide-y divide-gray-200">
            {STEPS.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group"
              >
                <span className="font-mono text-sm sm:text-base font-semibold text-gray-400 group-hover:text-black transition-colors w-8">
                  {s.num}
                </span>
                <div className="space-y-1">
                  <span className="text-base sm:text-lg font-bold text-gray-900 pr-2">
                    {s.title}
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {s.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wix-Style "Designed & Built on HumStack" Lavender Showcase Strip */}
        <div className="mt-8 rounded-[2.5rem] bg-[#EEF1FF] p-8 sm:p-14 border border-[#DCE4FF]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h3 className="text-4xl sm:text-6xl font-heading font-extrabold text-gray-900 tracking-tight">
                Built with HumStack
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-xl">
                Explore real products and platforms engineered with our precision stack.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-black text-white hover:bg-gray-800 font-semibold text-sm transition-all duration-200 self-start md:self-auto"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SHOWCASE_ITEMS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className={`h-40 bg-gradient-to-br ${item.color} p-5 flex flex-col justify-end text-white relative`}>
                  <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">Full-stack web application</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
