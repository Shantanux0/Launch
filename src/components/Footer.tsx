import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectService?: (serviceTitle: string) => void;
  onOpenProjectModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wix-Style Multi-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 pb-16 border-b border-gray-100">
          
          {/* Column 1: Capabilities */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-tight">Capabilities</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/services" onClick={() => onSelectService?.('Websites & E-commerce')} className="hover:text-black transition-colors">Web Applications</Link></li>
              <li><Link to="/services" onClick={() => onSelectService?.('Web & Mobile Applications')} className="hover:text-black transition-colors">Mobile Platforms</Link></li>
              <li><Link to="/services" onClick={() => onSelectService?.('Backend & API Development')} className="hover:text-black transition-colors">Backend APIs</Link></li>
              <li><Link to="/services" onClick={() => onSelectService?.('AI Integrations & Automation')} className="hover:text-black transition-colors">AI Engineering</Link></li>
              <li><Link to="/services" onClick={() => onSelectService?.('Cloud & Deployment')} className="hover:text-black transition-colors">Cloud Architecture</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-tight">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/services" className="hover:text-black transition-colors">Early-Stage MVPs</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">SaaS Scaling</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Internal Tooling</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Automated Workflows</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Performance Audits</Link></li>
            </ul>
          </div>

          {/* Column 3: Studio */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-tight">Studio</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/#process" className="hover:text-black transition-colors">Methodology</Link></li>
              <li><Link to="/careers" className="hover:text-black transition-colors flex items-center gap-1.5">
                <span>Careers</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">Hiring</span>
              </Link></li>
              <li><Link to="/#faqs" className="hover:text-black transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-tight">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="mailto:hello@humstack.in" className="hover:text-black transition-colors font-mono">hello@humstack.in</a></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Let's Talk</Link></li>
              <li><Link to="/careers" className="hover:text-black transition-colors">Open Positions</Link></li>
            </ul>
          </div>

          {/* Column 5 & 6: Big Brand Right Column (Matches Wix Frame 9) */}
          <div className="col-span-2 lg:pl-6 space-y-4">
            <Link to="/" className="inline-block py-1">
              <BrandLogo variant="full" theme="light" size={32} />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              HumStack is an engineering and digital product studio. We partner with founders and companies to design, build, and scale resilient software platforms with modern architecture.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-sm font-bold text-gray-900">
              <Link to="/about" className="hover:underline">About Studio</Link>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Matches Wix Frame 9) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">X</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:underline">Terms of Use</Link>
            <Link to="/contact" className="hover:underline">Privacy Policy</Link>
            <span>© 2024–{currentYear} HumStack.in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
