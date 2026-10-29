import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  MapPin,
  Check,
  Copy,
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onOpenProjectModal?: () => void;
}

const PROJECT_TYPES = [
  'Web & Mobile App',
  'Backend & APIs',
  'AI & Automation',
  'Brand & Digital Growth',
  'Maintenance & Support',
  'Other / Scoping'
];

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedType, setSelectedType] = useState('Web & Mobile App');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@humstack.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link as direct fallback
    const subject = encodeURIComponent(`Project Inquiry: ${name} (${selectedType})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${selectedType}\n\nProject Details:\n${message}`
    );
    const mailtoUrl = `mailto:hello@humstack.in?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="pt-28 pb-24 bg-cream min-h-screen text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary tracking-tight leading-[1.05] mb-6">
            Let’s talk about
            <br />
            <span className="text-coral">what’s next.</span>
          </h1>

          <p className="text-secondary text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
            Have an idea to build, a product to ship, or an existing system that needs engineering rigour? You’ll speak directly with engineers—never an aggressive sales rep.
          </p>
        </div>

        {/* Main Grid: Form on Left, Studio Context on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Minimalist Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-cream-border shadow-soft-sm">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-coral-bg text-coral mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary">
                  Message drafted &amp; ready!
                </h3>
                <p className="text-secondary text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-primary">{name}</strong>. Your default email client has been opened to finalize sending. We review inquiries within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-full bg-cream text-charcoal hover:bg-cream-400 text-xs font-semibold tracking-wide transition-colors border border-cream-border"
                  >
                    Send another note
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-1">
                    Tell us about your project
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm">
                    Fill in what you know; we’ll figure out the rest together.
                  </p>
                </div>

                {/* 1. Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Maya Patel"
                      className="w-full px-4 py-3 rounded-2xl bg-cream/40 border border-cream-border focus:border-coral focus:bg-white focus:outline-none text-sm text-primary transition-all placeholder:text-secondary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maya@startup.com"
                      className="w-full px-4 py-3 rounded-2xl bg-cream/40 border border-cream-border focus:border-coral focus:bg-white focus:outline-none text-sm text-primary transition-all placeholder:text-secondary/40"
                    />
                  </div>
                </div>

                {/* 2. Project Type Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2.5">
                    What are you looking to build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = selectedType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`text-xs px-3.5 py-2 rounded-full border transition-all font-medium ${
                            isSelected
                              ? 'bg-charcoal text-white border-charcoal shadow-sm'
                              : 'bg-cream/40 text-secondary border-cream-border hover:border-charcoal/30 hover:bg-cream'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Message / Project Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                    Project Overview &amp; Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you want to achieve, any timeline constraints, or current blockers..."
                    className="w-full px-4 py-3 rounded-2xl bg-cream/40 border border-cream-border focus:border-coral focus:bg-white focus:outline-none text-sm text-primary transition-all placeholder:text-secondary/40 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-charcoal hover:bg-black text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70 group"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-4 h-4 text-coral transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Studio Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Conversation Doodle Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden bg-white/70 border border-cream-border p-4 shadow-soft-sm"
            >
              <picture>
                <source srcSet="/assets/illustrations/contact-conversation.webp" type="image/webp" />
                <img
                  src="/assets/illustrations/contact-conversation.png"
                  alt="Friendly developer sending a message"
                  className="w-full h-auto object-contain rounded-2xl select-none"
                  width={900}
                  height={600}
                  loading="eager"
                />
              </picture>
            </motion.div>

            {/* Direct Email Card */}
            <div className="p-7 rounded-3xl bg-white border border-cream-border shadow-soft-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-coral block mb-2">
                Direct Contact
              </span>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                Prefer a simple email?
              </h3>
              <p className="text-secondary text-sm mb-5 leading-relaxed">
                Skip the form entirely. Send your scope, RFC, or pitch directly to our engineering inbox:
              </p>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-cream/60 border border-cream-border">
                <a
                  href="mailto:hello@humstack.in"
                  className="font-mono text-sm font-bold text-primary hover:text-coral transition-colors"
                >
                  hello@humstack.in
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-secondary hover:text-primary border border-cream-border transition-colors shadow-2xs"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-coral" />
                      <span className="text-coral">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="p-7 rounded-3xl bg-charcoal text-white border border-charcoal-border shadow-charcoal space-y-5">
              <h4 className="text-lg font-heading font-bold text-white tracking-tight">
                What happens after you reach out?
              </h4>

              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-charcoal-card text-coral mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Fast 24-Hour Review</strong>
                    We review your note and respond with initial technical feedback or clarifying questions.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-charcoal-card text-coral mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">30-Min Scoping Call</strong>
                    A relaxed video call to map architecture, timelines, and pragmatic milestones.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-charcoal-card text-coral mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Mutual NDA &amp; Transparent Proposal</strong>
                    Detailed line-item scope, fixed weekly sprints, and zero hidden costs.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-charcoal-border/80 flex items-center gap-2 text-xs text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-coral flex-shrink-0" />
                <span>Remote Studio, India (IST) • Partnering Globally (US, UK, APAC)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
