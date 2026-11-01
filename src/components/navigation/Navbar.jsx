import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo, SnailMark } from "../common/SnailLogo";
import { NAV_LINKS } from "../../data/content";
import { scrollToTarget } from "./shared";

const Burger = ({ open }) => (
  <span className="relative block w-6 h-4">
    <span
      className={`absolute left-0 h-[1.5px] w-6 bg-ly-black transition-transform duration-300 ${
        open ? "top-2 rotate-45" : "top-0"
      }`}
    />
    <span
      className={`absolute left-0 top-2 h-[1.5px] w-6 bg-ly-black transition-opacity duration-300 ${
        open ? "opacity-0" : ""
      }`}
    />
    <span
      className={`absolute left-0 h-[1.5px] w-6 bg-ly-black transition-transform duration-300 ${
        open ? "top-2 -rotate-45" : "top-4"
      }`}
    />
  </span>
);

export const Navbar = ({ onContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (t) => {
    setMenuOpen(false);
    scrollToTarget(t, onContact);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[5000] bg-white/95 backdrop-blur-md transition-all duration-300">
      <nav className="border-b border-gray-100" data-testid="navbar">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-14 h-16 md:h-20">
          {/* Brand Logo */}
          <button
            onClick={() => go("top")}
            className="flex items-center text-left"
            data-testid="nav-logo-link"
            aria-label="Humstack Home"
          >
            <BrandLogo />
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 h-20">
            {NAV_LINKS.map((l) => (
              <li key={l.label} className="nav-item relative h-20 flex items-center px-3.5">
                <button
                  onClick={() => go(l.target)}
                  className="font-gilroy text-[16px] font-medium text-ly-black transition-colors duration-200 hover:text-ly-tertiary"
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </button>
                <span className="nav-line absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-ly-black rounded-t-full" />
              </li>
            ))}
          </ul>

          {/* Right Action buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onContact}
              data-testid="speak-with-us-btn"
              className="font-gilroy text-[13px] md:text-[15px] h-9 md:h-11 px-5 md:px-7 rounded-full border border-ly-black font-medium text-ly-black flex items-center justify-center transition-all duration-300 hover:bg-ly-yellow hover:border-ly-yellow shadow-sm"
            >
              Speak With Us
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              data-testid="hamburger-btn"
              aria-label="Menu"
            >
              <Burger open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Slide-out Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-16 md:top-20 z-[4900] bg-white overflow-y-auto"
            data-testid="menu-overlay"
          >
            <div className="max-w-[1440px] mx-auto px-6 md:px-14 py-12 md:py-16 flex flex-col lg:flex-row gap-12 lg:justify-between">
              <ul className="flex flex-col gap-4 md:gap-6">
                {[{ label: "Home", target: "top" }, ...NAV_LINKS, { label: "FAQs", target: "faq" }].map(
                  (l, i) => (
                    <motion.li
                      key={l.label + i}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <button
                        onClick={() => go(l.target)}
                        className="font-gilroy font-light text-4xl md:text-6xl text-ly-black hover:text-ly-tertiary transition-colors duration-300"
                        data-testid={`menu-link-${l.label.toLowerCase()}`}
                      >
                        {l.label}
                      </button>
                    </motion.li>
                  )
                )}
              </ul>
              <div className="flex flex-col items-start gap-6 max-w-sm pt-4">
                <SnailMark className="h-16 w-16 md:h-20 md:w-20 snail-mark-wiggle cursor-pointer" />
                <p className="font-pen text-3xl md:text-4xl text-ly-black leading-snug">
                  Slow down. Let's make something lovely.
                </p>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onContact();
                  }}
                  className="font-gilroy text-base md:text-lg font-medium rounded-full bg-ly-black text-white px-8 py-3.5 hover:bg-ly-yellow hover:text-ly-black transition-colors duration-300 shadow-md"
                  data-testid="menu-contact-btn"
                >
                  Send us a message
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

