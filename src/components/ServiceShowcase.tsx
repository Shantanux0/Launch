import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Layers, Cpu, Globe, ShieldCheck } from 'lucide-react';

interface ServiceShowcaseProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServiceShowcase: React.FC<ServiceShowcaseProps> = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* PANEL 1: Light Lavender Section (Wix AI / Next-Gen Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-[#EEF1FF] p-8 sm:p-14 lg:p-16 border border-[#DCE4FF] overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-indigo-700 text-xs font-semibold tracking-wider uppercase border border-indigo-100 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.08]">
                Smart systems.
                <br />
                Flawless execution.
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                We combine modern frontend architecture, robust backend pipelines, and practical AI automation to turn your vision into high-performing digital reality.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gray-900 text-white hover:bg-black font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-indigo-100/80 shadow-lg relative">
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">HumStack Engine v3.0</span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                        AI
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Custom Workflows & Models</div>
                        <div className="text-xs text-gray-500">Autonomous data extraction & agents</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-white text-indigo-700 text-xs font-medium rounded-full border border-indigo-200">
                      Active
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">High-Speed Cloud Delivery</div>
                        <div className="text-xs text-gray-500">Sub-100ms global latency caching</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-white text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                      99.99%
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Enterprise Security & Auth</div>
                        <div className="text-xs text-gray-500">End-to-end encryption & RBAC</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-white text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                      Secured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PANEL 2: Deep Navy Section (Wix Dark Template Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-[#0C1938] p-8 sm:p-14 lg:p-16 text-white overflow-hidden relative"
        >
          <div className="max-w-3xl mb-12">
            <span className="text-indigo-400 text-xs font-semibold tracking-wider uppercase block mb-3">
              Full-Stack Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Engineered from the ground up for modern businesses.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              Whether you need a bespoke SaaS platform, high-converting digital storefront, or automated internal back office — we build with precision and scale in mind.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#13234A] border border-[#1E356D] p-6 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Web & Cloud Platforms</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  React, Next.js, and TypeScript frontends backed by serverless microservices and distributed databases.
                </p>
              </div>
              <div className="text-xs font-mono text-indigo-300 pt-4 border-t border-white/10">
                Next.js • React • Node • Postgres
              </div>
            </div>

            <div className="rounded-2xl bg-[#13234A] border border-[#1E356D] p-6 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">AI Systems & Agents</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Intelligent bots, automated document ingestion, and custom model integrations tailored to your pipeline.
                </p>
              </div>
              <div className="text-xs font-mono text-indigo-300 pt-4 border-t border-white/10">
                Python • LangChain • OpenAI • Fastify
              </div>
            </div>

            <div className="rounded-2xl bg-[#13234A] border border-[#1E356D] p-6 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">DevOps & Cloud Scale</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  CI/CD automation, AWS/GCP architecture, security auditing, and continuous health telemetry.
                </p>
              </div>
              <div className="text-xs font-mono text-indigo-300 pt-4 border-t border-white/10">
                AWS • Docker • Terraform • Cloudflare
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
