import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md py-3 border-b border-gray-100 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              to="/"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg py-1"
              aria-label="HumStack Home"
            >
              <BrandLogo variant="full" theme="light" size={32} />
            </Link>

            {/* Desktop Navigation Links — centered */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const isActive = item.isRoute && location.pathname === item.path;
                return item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`relative text-sm font-medium transition-colors py-1 group ${
                      isActive ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={(e) => handleItemClick(e, item)}
                    className="relative text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors py-1 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-900 transition-all duration-200 group-hover:w-full" />
                  </a>
                );
              })}
            </div>

            {/* Desktop Right: Snail + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Snail Mascot */}
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
                    className="w-14 h-10 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5"
                    width={56}
                    height={40}
                    loading="eager"
                  />
                </picture>
              </div>

              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-black text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile: Snail + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <picture>
                <source srcSet="/assets/illustrations/snail-transparent.webp" type="image/webp" />
                <source srcSet="/assets/illustrations/snail-transparent.gif" type="image/gif" />
                <img
                  src="/assets/illustrations/snail-transparent.gif"
                  alt="HumStack Snail Mascot"
                  className="w-9 h-7 object-contain select-none"
                  width={36}
                  height={28}
                  loading="eager"
                />
              </picture>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close-icon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.16 }}
                    >
                      <X className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu-icon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.16 }}
                    >
                      <Menu className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[62px] bottom-0 z-40 md:hidden bg-white border-t border-gray-100 overflow-y-auto px-6 py-6 flex flex-col justify-between"
          >
            {/* Navigation Links */}
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = item.isRoute && location.pathname === item.path;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 + idx * 0.04, duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.isRoute ? (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-4 px-3 rounded-2xl text-xl font-heading font-bold transition-all border-b border-gray-100 ${
                          isActive
                            ? 'text-gray-900 bg-gray-50'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-gray-900" />}
                      </Link>
                    ) : (
                      <a
                        href={item.path}
                        onClick={(e) => handleItemClick(e, item)}
                        className="flex items-center justify-between py-4 px-3 rounded-2xl text-xl font-heading font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all border-b border-gray-100"
                      >
                        <span>{item.label}</span>
                      </a>
                    )}
                  </motion.div>
                );
              })}

              {/* Careers */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 + NAV_ITEMS.length * 0.04, duration: 0.22 }}
              >
                <Link
                  to="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-4 px-3 rounded-2xl text-xl font-heading font-bold transition-all border-b border-gray-100 ${
                    location.pathname === '/careers'
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span>Careers</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
                      Hiring
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.22 }}
              className="pt-6 mt-6 border-t border-gray-100 space-y-4"
            >
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gray-900 text-white hover:bg-black font-heading font-bold text-base shadow-md active:scale-[0.99] transition-all"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between px-2 text-xs text-gray-400">
                <span className="font-mono">hello@humstack.in</span>
                <span>Boutique Studio</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
