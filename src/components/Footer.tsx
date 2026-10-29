import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Check, Copy } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenProjectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenProjectModal }) => {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@humstack.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white border-t border-charcoal-border pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-charcoal-border">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-lg py-1"
              aria-label="HumStack Home"
            >
              <BrandLogo variant="full" theme="dark" size={34} />
            </Link>

            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              A technology and digital growth studio. We design, engineer, launch, and scale resilient web platforms, backend systems, and AI automation for founders and forward-thinking businesses.
            </p>

            {/* Email Contact Card */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 p-2.5 rounded-2xl bg-charcoal-dark border border-charcoal-border text-xs sm:text-sm">
                <a
                  href="mailto:hello@humstack.in"
                  className="inline-flex items-center gap-2 text-white hover:text-coral transition-colors pl-1"
                >
                  <Mail className="w-4 h-4 text-coral" />
                  <span className="font-mono">hello@humstack.in</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-charcoal-surface hover:bg-charcoal-light text-stone-300 hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-coral">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors inline-block"
                >
                  About Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors inline-block"
                >
                  Services &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link
                  to="/#process"
                  className="hover:text-white transition-colors inline-block"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-white transition-colors inline-block"
                >
                  Careers &amp; Culture
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors inline-block"
                >
                  Let's Talk
                </Link>
              </li>
              <li>
                <Link
                  to="/#faqs"
                  className="hover:text-white transition-colors inline-block"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenProjectModal}
                  className="text-coral hover:text-coral-light transition-colors font-semibold"
                >
                  Start a Project →
                </button>
              </li>
            </ul>
          </div>

          {/* Service Specializations (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-coral">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              {[
                'Websites & E-commerce',
                'Web & Mobile Applications',
                'Backend & API Development',
                'AI Integrations & Automation',
                'Cloud & Deployment',
                'Maintenance & Technical Support',
                'Brand Identity & Digital Growth'
              ].map((srv) => (
                <li key={srv}>
                  <Link
                    to="/services"
                    onClick={() => onSelectService(srv)}
                    className="hover:text-white transition-colors text-left inline-block"
                  >
                    {srv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <span>© {currentYear} HumStack.in. All rights reserved.</span>
            <span className="text-charcoal-border">•</span>
            <span className="text-stone-300">Build. Launch. Grow.</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-dark border border-charcoal-border hover:border-coral/50 text-stone-300 hover:text-white transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-coral transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
