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
                  className="w-11 h-8 object-contain select-none"
                  width={44}
                  height={32}
                  loading="eager"
                />
              </picture>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-primary hover:bg-cream-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 md:hidden bg-cream border-b border-cream-border shadow-soft-lg px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = item.isRoute && location.pathname === item.path;
                return item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-heading font-semibold transition-colors py-1 ${
                      isActive ? 'text-coral' : 'text-primary hover:text-coral'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={(e) => handleItemClick(e, item)}
                    className="text-lg font-heading font-semibold text-primary hover:text-coral transition-colors py-1"
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-cream-border">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white hover:bg-black text-sm font-semibold shadow-md transition-all"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 text-coral" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
