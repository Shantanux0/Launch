import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SnailLogo, HumStackMark } from "./SnailLogo";
import { NAV_LINKS } from "../../data/content";
import { scrollToTarget } from "./shared";

const Burger = ({ open }) => (
  <span className="relative block w-6 h-4">
    <span className={`absolute left-0 h-[1.5px] w-6 bg-ly-black transition-transform duration-300 ${open ? "top-2 rotate-45" : "top-0"}`} />
    <span className={`absolute left-0 top-2 h-[1.5px] w-6 bg-ly-black transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
    <span className={`absolute left-0 h-[1.5px] w-6 bg-ly-black transition-transform duration-300 ${open ? "top-2 -rotate-45" : "top-4"}`} />
  </span>
);

export const Navbar = ({ onContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  const go = (t) => {
    setMenuOpen(false);
    scrollToTarget(t, onContact);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-[5000] bg-white py-2 md:py-0 border-b border-gray-100/80" data-testid="navbar">
        <div className="flex pr-4 pl-4 md:px-8 lg:px-[60px] items-center md:h-20">
          <button onClick={() => go("/")} className="lg:flex-1 flex cursor-pointer" data-testid="nav-logo-link" aria-label="humstack home">
            <SnailLogo />
          </button>
          <ul className="hidden lg:flex lg:flex-1 justify-center gap-4 h-20">
            {NAV_LINKS.map((l) => {
              const active = l.target.startsWith("/") && currentPath === l.target;
              return (
                <li key={l.label} className="nav-item relative h-20 flex items-center px-3">
                  <button
                    onClick={() => go(l.target)}
                    className={`font-gilroy text-lg font-medium transition-colors duration-300 hover:text-ly-tertiary cursor-pointer ${
                      active ? "text-ly-black font-semibold" : "text-ly-black"
                    }`}
                    data-testid={`nav-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </button>
                  <span className={`nav-line absolute bottom-0 left-0 w-full h-[2px] bg-ly-black rounded-t-full ${active ? "opacity-100 scale-x-100" : ""}`} />
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-end gap-5 md:gap-8 flex-1">
            <button
              onClick={() => go("/talk")}
              data-testid="speak-with-us-btn"
              className="font-gilroy text-[12px] h-8 px-[17px] md:text-[18px] md:h-12 md:px-[30px] rounded-full border border-ly-black flex items-center transition-colors duration-300 hover:bg-ly-yellow cursor-pointer"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden h-8 w-8 md:h-10 md:w-10 flex items-center justify-center cursor-pointer"
              data-testid="hamburger-btn"
              aria-label="Menu"
            >
              <Burger open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 top-14 md:top-20 z-[4900] bg-white overflow-y-auto"
            data-testid="menu-overlay"
          >
            <div className="px-6 md:px-16 py-10 md:py-16 flex flex-col lg:flex-row gap-12 lg:justify-between">
              <ul className="flex flex-col gap-4 md:gap-6">
                {[{ label: "Home", target: "/" }, ...NAV_LINKS, { label: "FAQs", target: "faq" }].map((l, i) => (
                  <motion.li key={l.label + i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <button onClick={() => go(l.target)} className="font-gilroy font-light text-4xl md:text-6xl text-ly-black hover:text-ly-tertiary transition-colors duration-300" data-testid={`menu-link-${l.label.toLowerCase()}`}>
                      {l.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col items-start gap-6 max-w-sm">
                <HumStackMark className="h-20 w-20 snail-mark-wiggle" ring />
                <p className="font-pen text-3xl text-ly-black">Got an idea? Let's turn it into working technology.</p>
                <button onClick={() => { setMenuOpen(false); go("/talk"); }} className="font-gilroy text-lg rounded-full bg-ly-black text-white px-8 py-3 hover:bg-ly-yellow hover:text-ly-black transition-colors duration-300" data-testid="menu-contact-btn">
                  Let's Talk
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
