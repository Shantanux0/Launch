import React from "react";
import { STATS, COLLAB_IMG } from "../../data/content";
import { CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export const CollabSpotlight = ({ onContact }) => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Main 2-column feature block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Illustration */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <img
                src={COLLAB_IMG}
                alt="Humstack team collaborative sprint with snail mascot"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Soft decorative badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-gilroy text-xs sm:text-sm font-semibold text-ly-black">
                Active sprints & retainerships
              </span>
            </div>
          </div>

          {/* Right: Pitch & Differentiators */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-ly-tertiary" />
              <span className="font-gilroy text-xs md:text-sm uppercase tracking-[0.2em] text-ly-tertiary font-bold">
                Why Humstack
              </span>
            </div>
            <h2 className="font-gilroy text-3xl sm:text-4xl md:text-5xl font-normal text-ly-black tracking-tight leading-[1.15] mb-6">
              Personal attention to detail. Designed, never rushed.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Every design is checked carefully for usability before it ships, and every client engagement gets the same meticulous care — designed specifically according to requirement, with zero template shortcuts.
            </p>

            {/* Differentiator bullets */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-ly-yellow/30 text-ly-black flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-ly-black" />
                </div>
                <div>
                  <h4 className="font-gilroy text-base font-bold text-ly-black">End-to-End Ownership</h4>
                  <p className="text-sm text-gray-500">From early user interviews to engineering delivery and continuous release support.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-ly-yellow/30 text-ly-black flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-ly-black" />
                </div>
                <div>
                  <h4 className="font-gilroy text-base font-bold text-ly-black">Zero-Compromise Usability</h4>
                  <p className="text-sm text-gray-500">Rigorous usability testing, accessibility benchmarks, and micro-interaction polish.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-ly-yellow/30 text-ly-black flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-ly-black" />
                </div>
                <div>
                  <h4 className="font-gilroy text-base font-bold text-ly-black">Transparent Partnership</h4>
                  <p className="text-sm text-gray-500">Weekly sprint demos, shared Figma workspaces, and direct access to design leads.</p>
                </div>
              </div>
            </div>

            {/* Overall Stats Banner */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-gilroy text-2xl sm:text-3xl font-extrabold text-ly-black tracking-tight leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollabSpotlight;

