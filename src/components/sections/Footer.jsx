import React from "react";
import { BrandLogo, SnailMark } from "../common/SnailLogo";
import { FOOTER_LINKS_A, FOOTER_LINKS_B } from "../../data/content";
import { scrollToTarget } from "../navigation/shared";
import { ArrowUp, Heart } from "lucide-react";

export const Footer = ({ onContact }) => {
  const go = (target) => {
    scrollToTarget(target, onContact);
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-gray-100">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <button onClick={() => go("top")} className="text-left mb-4 block" aria-label="Humstack Home">
              <BrandLogo />
            </button>
            <p className="font-pen text-2xl text-ly-black mb-3">
              Slow down. Let's make something lovely.
            </p>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-6">
              Humstack is an independent creative technology & product design studio. We partner with ambitious founders to build soulful digital products.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <SnailMark className="h-4 w-4" />
              <span>Designed with patience & purpose</span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-gilroy text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS_A.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.target)}
                    className="text-sm font-medium text-gray-700 hover:text-ly-tertiary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-gilroy text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS_B.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.target)}
                    className="text-sm font-medium text-gray-700 hover:text-ly-tertiary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onContact}
                  className="text-sm font-semibold text-ly-black hover:text-ly-tertiary transition-colors"
                >
                  Speak With Us →
                </button>
              </li>
            </ul>
          </div>

          {/* Social / Connect Column */}
          <div>
            <h4 className="font-gilroy text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-700">
              <li>
                <a href="mailto:hello@humstack.in" className="hover:text-ly-black transition-colors">
                  hello@humstack.in
                </a>
              </li>
              <li>
                <span className="text-gray-400 block text-xs">Bengaluru • Mumbai • Worldwide</span>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-ly-yellow hover:text-ly-black flex items-center justify-center text-xs font-bold transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-ly-yellow hover:text-ly-black flex items-center justify-center text-xs font-bold transition-colors"
                    aria-label="Twitter / X"
                  >
                    𝕏
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-ly-yellow hover:text-ly-black flex items-center justify-center text-xs font-bold transition-colors"
                    aria-label="GitHub"
                  >
                    gh
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Humstack Technologies Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> & slow coffee
            </span>
            <button
              onClick={() => go("top")}
              className="flex items-center gap-1.5 text-ly-black font-semibold hover:text-ly-tertiary transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

