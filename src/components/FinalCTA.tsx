import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D634C] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
          Tomorrow’s software, built with precision today.
        </h2>
        <p className="text-emerald-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us about what you're building. We'll outline architecture, timeline, and deliverables within 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-white text-gray-950 hover:bg-emerald-50 font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 font-medium text-base transition-all duration-200"
          >
            Schedule a Discovery Call
          </Link>
        </div>

        <div className="mt-12 text-xs font-mono text-emerald-200/80">
          hello@humstack.in • Fast turnaround • Global delivery
        </div>
      </div>
    </section>
  );
};
