import React from "react";
import { SnailMascot } from "../common/SnailMascot";
import { ArrowRight, MessageSquare } from "lucide-react";

export const CtaBanner = ({ onContact }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="relative rounded-3xl bg-gradient-to-br from-ly-yellow/30 via-emerald-500/10 to-sky-500/10 border border-gray-100 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-ly-yellow/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-ly-green/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Copy */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="font-gilroy text-xs md:text-sm uppercase tracking-[0.2em] text-ly-tertiary font-bold block mb-3">
                Let's Start Something Lovely
              </span>
              <h2 className="font-gilroy text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ly-black tracking-tight leading-[1.12] mb-4">
                Have an idea in mind?
              </h2>
              <p className="font-gilroy text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">
                Whether you need an MVP from scratch, a brand redesign, or a dedicated design retainership — we'd love to partner with you.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                <button
                  onClick={onContact}
                  data-testid="cta-speak-with-us-btn"
                  className="inline-flex items-center gap-2.5 bg-ly-black hover:bg-black text-white font-gilroy text-base font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg active:scale-95 group"
                >
                  <span>Speak With Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-ly-black border border-gray-200 font-gilroy text-base font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-ly-black" />
                  <span>Send a Message</span>
                </button>
              </div>
            </div>

            {/* Right Mascot */}
            <div className="w-48 sm:w-64 lg:w-72 shrink-0">
              <SnailMascot className="w-full h-auto cursor-pointer" animated={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

