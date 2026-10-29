import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenProjectModal?: () => void;
}

const NAV_ITEMS = [
  { label: 'About', path: '/about', isRoute: true },
  { label: 'Services', path: '/services', isRoute: true },
  { label: 'Our Process', path: '/#process', isRoute: false },
  { label: 'FAQs', path: '/#faqs', isRoute: false },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleItemClick = (e: React.MouseEvent, item: typeof NAV_ITEMS[0]) => {
    setIsMobileMenuOpen(false);
    if (!item.isRoute) {
      e.preventDefault();
      const hash = item.path.replace('/', '');
      if (location.pathname === '/') {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + hash);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md py-3.5 border-b border-cream-border/60 shadow-soft-sm'
            : 'bg-cream/0 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              to="/"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-lg py-1"
              aria-label="HumStack Home"
            >
              <BrandLogo variant="full" theme="light" size={32} />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive = item.isRoute && location.pathname === item.path;
                return item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`relative text-sm font-medium transition-colors py-1 group ${
                      isActive ? 'text-coral font-semibold' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-coral transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={(e) => handleItemClick(e, item)}
                    className="relative text-sm font-medium text-secondary hover:text-primary transition-colors py-1 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-coral transition-all duration-200 group-hover:w-full" />
                  </a>
                );
              })}
            </div>

            {/* Desktop Right: Snail Mascot Decoration & CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              {/* Snail Mascot decoration directly on the left side of Let's Talk */}
              <div
                className="relative flex items-center select-none cursor-pointer group"
                title="Slow & steady builds what's next 🐌"
              >
                <picture>
                  <source srcSet="/assets/illustrations/snail-transparent.webp" type="image/webp" />
                  <source srcSet="/assets/illustrations/snail-transparent.gif" type="image/gif" />
                  <img
                    src="/assets/illustrations/snail-transparent.gif"
                    alt="HumStack Snail Mascot"
                    className="w-16 h-12 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5"
                    width={64}
                    height={48}
                    loading="eager"
                  />
                </picture>
              </div>

              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-white hover:bg-black text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-coral transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger & Mascot */}
            <div className="flex md:hidden items-center gap-2">
              <picture>
                <source srcSet="/assets/illustrations/snail-transparent.webp" type="image/webp" />
                <source srcSet="/assets/illustrations/snail-transparent.gif" type="image/gif" />
                <img
                  src="/assets/illustrations/snail-transparent.gif"
                  alt="HumStack Snail Mascot"
                  className="w-10 h-7 object-contain select-none"
                  width={40}
                  height={28}
                  loading="eager"
                />
              </picture>

              {/* Animated Morphing Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex flex-col items-center justify-center rounded-2xl bg-cream-400/40 hover:bg-cream-400/70 active:scale-95 transition-all text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-[2.5px] bg-primary rounded-full origin-center"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="w-full h-[2.5px] bg-primary rounded-full origin-center"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-[2.5px] bg-primary rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-charcoal/30 backdrop-blur-sm md:hidden"
            />

            {/* Floating Mobile Card Drawer */}
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-[74px] z-40 md:hidden bg-cream-100/98 backdrop-blur-xl border border-cream-border rounded-3xl shadow-soft-lg p-5 overflow-hidden max-h-[calc(100vh-92px)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = item.isRoute && location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + idx * 0.04, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.isRoute ? (
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-heading font-semibold transition-all ${
                            isActive
                              ? 'bg-white text-coral shadow-soft-sm'
                              : 'text-primary hover:bg-white/60 hover:text-coral'
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && <span className="w-2 h-2 rounded-full bg-coral" />}
                        </Link>
                      ) : (
                        <a
                          href={item.path}
                          onClick={(e) => handleItemClick(e, item)}
                          className="flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-heading font-semibold text-primary hover:bg-white/60 hover:text-coral transition-all"
                        >
                          <span>{item.label}</span>
                        </a>
                      )}
                    </motion.div>
                  );
                })}

                {/* Careers Link in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + NAV_ITEMS.length * 0.04, duration: 0.25 }}
                >
                  <Link
                    to="/careers"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-heading font-semibold transition-all ${
                      location.pathname === '/careers'
                        ? 'bg-white text-coral shadow-soft-sm'
                        : 'text-primary hover:bg-white/60 hover:text-coral'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>Careers</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-coral-bg text-coral">
                        Hiring
                      </span>
                    </div>
                  </Link>
                </motion.div>

                {/* Let's Talk CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.25 }}
                  className="pt-4 mt-2 border-t border-cream-border/70 space-y-3"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-white hover:bg-black text-sm font-semibold shadow-md active:scale-[0.99] transition-all"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight className="w-4 h-4 text-coral" />
                  </Link>

                  <div className="pt-2 flex items-center justify-between text-xs text-secondary border-t border-cream-border/40 px-1">
                    <span className="font-mono text-secondary/80">hello@humstack.in</span>
                    <span className="text-secondary/60">Boutique Studio</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
