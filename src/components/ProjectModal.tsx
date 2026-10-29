import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ArrowRight, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  'Websites & E-commerce',
  'Web & Mobile Applications',
  'Backend & API Development',
  'AI Integrations & Automation',
  'Cloud & Deployment',
  'Maintenance & Support',
  'Brand Identity & Digital Growth'
];

const BUDGET_OPTIONS = [
  'Under $2.5k / ₹2L',
  '$2.5k - $6k / ₹2L - ₹5L',
  '$6k - $15k / ₹5L - ₹12L',
  '$15k+ / ₹12L+',
  'Flexible / Need Advice'
];

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialService || 'Websites & E-commerce');
  const [selectedBudget, setSelectedBudget] = useState<string>('Flexible / Need Advice');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F34F79', '#111111', '#FFF0DF', '#FF85A1']
      });
    } catch {
      // ignore if confetti fails
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const mailtoLink = `mailto:hello@humstack.in?subject=${encodeURIComponent(
    `Project Inquiry: ${selectedService} - ${name || 'Founder'}`
  )}&body=${encodeURIComponent(
    `Hi HumStack team,\n\nName: ${name}\nEmail: ${email}\nService: ${selectedService}\nBudget: ${selectedBudget}\n\nProject details:\n${message}\n`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-cream border-2 border-primary/20 rounded-3xl shadow-charcoal p-6 sm:p-10 z-10 my-8 text-primary overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-secondary hover:text-primary hover:bg-cream-400 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-bg text-coral text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Let's Build Something Real
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                    Start a Project with HumStack
                  </h3>
                  <p className="text-secondary text-sm sm:text-base mt-1">
                    Tell us what you're thinking. We'll review your goals and reply within 24 hours with ideas and next steps.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                      What are you looking to build?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICE_OPTIONS.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          className={`text-xs text-left px-3 py-2 rounded-xl border transition-all ${
                            selectedService === srv
                              ? 'bg-charcoal text-white border-charcoal font-medium shadow-sm'
                              : 'bg-white/80 text-secondary border-cream-border hover:border-primary/40'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                      Estimated Project Scope / Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_OPTIONS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                            selectedBudget === b
                              ? 'bg-coral text-white border-coral font-medium'
                              : 'bg-white/80 text-secondary border-cream-border hover:border-primary/40'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-border text-primary placeholder-muted focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ada@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-border text-primary placeholder-muted focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                      Brief project overview or questions
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Give us a quick glimpse of what you're building, target audience, or desired timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-border text-primary placeholder-muted focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="text-xs text-secondary hover:text-coral transition-colors flex items-center gap-1.5 order-2 sm:order-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Prefer direct email? hello@humstack.in
                    </a>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md order-1 sm:order-2"
                    >
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4 text-coral" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-coral-bg text-coral flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                  Message Received!
                </h3>
                <p className="text-secondary max-w-md mx-auto text-sm sm:text-base">
                  Thanks for reaching out, <strong className="text-primary">{name}</strong>. We're excited to learn more about your project. Shantanu and the engineering team will review your notes and reply to <strong className="text-primary">{email}</strong> within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-cream-border text-primary text-xs font-semibold hover:border-coral transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-coral" />
                    Open in Your Email Client
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-white text-xs font-semibold hover:bg-black transition-colors"
                  >
                    Done
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

