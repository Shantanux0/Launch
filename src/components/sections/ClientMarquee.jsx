import React from "react";
import { CLIENTS } from "../../data/content";
import { SnailMark } from "../common/SnailLogo";

export const ClientMarquee = () => {
  // Duplicate for seamless infinite loop
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-12 md:py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-8 text-center">
        <p className="font-gilroy text-xs md:text-sm uppercase tracking-[0.2em] text-gray-600 font-semibold flex items-center justify-center gap-2">
          <span>Trusted by forward-thinking teams & beloved brands</span>
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden flex select-none">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 items-center gap-8 sm:gap-14 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, idx) => (
            <div
              key={`${client}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-50/80 hover:bg-ly-yellow/20 border border-gray-100 hover:border-ly-yellow transition-colors group cursor-default"
            >
              <SnailMark className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
              <span className="font-gilroy text-base sm:text-lg font-semibold tracking-wider text-gray-700 group-hover:text-ly-black">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;

