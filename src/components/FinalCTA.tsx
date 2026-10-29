import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Check, Copy } from 'lucide-react';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@humstack.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 sm:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Copy, Buttons, Waves Sketch */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-400/80 border border-cream-border text-secondary text-xs font-semibold tracking-wider uppercase">
              Start The Conversation
            </span>

            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-primary tracking-tight leading-[1.08]">
              Have an idea?
              <br />
              <span className="text-primary">Let’s make it real.</span>
            </h2>

            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Tell us what you're building, where you're stuck, or what you want to improve. We'll figure out the next step together.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-coral transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white border border-cream-border text-primary hover:border-charcoal font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span>hello@humstack.in Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-coral" />
                    <span>Contact Us</span>
                    <Copy className="w-3.5 h-3.5 text-muted ml-1 opacity-70 group-hover:opacity-100" />
                  </>
                )}
              </button>
            </div>

            {/* Hand-drawn Waves Sketch Doodle on Bottom-Left (from DULO) */}
            <div className="pt-10 select-none pointer-events-none">
              <img
                src="/assets/decorations/waves.svg"
                alt=""
                aria-hidden="true"
                className="w-28 sm:w-36 h-auto opacity-70"
              />
            </div>
          </div>

          {/* Right Column: Creative Launch Flight Artwork (Giant Pencil / Doodle Runner) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-lg"
            >
              <picture>
                <source srcSet="/assets/illustrations/cta-flight.webp" type="image/webp" />
                <img
                  src="/assets/illustrations/cta-flight.png"
                  alt="Playful character carrying a giant creative pencil running eagerly towards project takeoff"
                  className="w-full h-auto object-contain drop-shadow-sm select-none"
                  width={1241}
                  height={973}
                  loading="lazy"
                />
              </picture>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

