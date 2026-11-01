import { Smartphone } from "lucide-react";
import { COLLAB_IMG } from "../../data/content";
import { ArrowRight } from "./shared";
import { SnailMascot } from "./SnailMascot";

export const CTASection = ({ onContact }) => (
  <section id="collaborate" className="relative flex justify-center items-center min-h-[520px] md:min-h-[680px] overflow-hidden" data-testid="collaborate-section">
    <img src={COLLAB_IMG} alt="Designers sketching ideas together" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-black/45" />
    <div className="relative z-10 flex flex-col items-center px-4 text-center">
      <h2 className="font-gilroy font-light text-[34px] leading-tight md:text-[60px] md:leading-[1.15] lg:text-[76px] text-white tracking-tight">Got an idea? Let’s build it, together</h2>
      <button
        type="button"
        onClick={onContact}
        className="cta-contact group relative mt-8 md:mt-10 flex items-center gap-3 rounded-full bg-ly-black text-white font-gilroy font-medium text-lg md:text-xl px-8 py-4 shadow-xl hover:bg-ly-yellow hover:text-ly-black transition-colors cursor-pointer"
        data-testid="contact-us-btn"
      >
        {/* snail peeking out on hover */}
        <span className="cta-snail absolute -top-14 -left-10 w-24 pointer-events-none" aria-hidden="true">
          <SnailMascot className="w-full h-auto" animated />
        </span>
        <span className="flex items-center gap-3 transition-transform duration-300 ease-out group-hover:-translate-x-3">
          <Smartphone className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0" strokeWidth={1.5} />
          Contact Us
        </span>
        <ArrowRight className="w-5 h-5 absolute right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="cta-message absolute left-1/2 -translate-x-1/2 top-full mt-4 whitespace-nowrap font-pen text-3xl text-white">We'll be waiting :)</span>
      </button>
    </div>
  </section>
);

export default CTASection;

