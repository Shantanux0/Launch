import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Check,
  ArrowRight,
  Terminal,
  Layers,
  Cpu,
  Compass,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Role {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

const ROLES: Role[] = [
  {
    id: 'fullstack-ts',
    title: 'Full-Stack TypeScript Engineer',
    type: 'Full-time / Contract',
    location: 'Remote (India / Global overlap)',
    description: 'Build fast, accessible, resilient web applications and APIs using modern React, Node, and typed cloud systems.',
    responsibilities: [
      'Architect and build full-lifecycle web products from frontend UI down to database schemas',
      'Write clean, typed TypeScript with strict linting, component isolation, and test coverage',
      'Collaborate directly with founders and studio leads to shape features and technical direction'
    ],
    techStack: ['TypeScript', 'React 18', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Vite']
  },
  {
    id: 'systems-cloud',
    title: 'Systems & Cloud Infrastructure Engineer',
    type: 'Full-time / Contract',
    location: 'Remote (India / Global overlap)',
    description: 'Design, automate, and maintain rock-solid CI/CD pipelines, containerized environments, and cloud architectures.',
    responsibilities: [
      'Provision scalable infrastructure on AWS and Google Cloud with Terraform or Pulumi',
      'Build automated CI/CD deployment pipelines with zero-downtime releases',
      'Configure production monitoring, alerting, error tracking, and database failovers'
    ],
    techStack: ['Docker', 'AWS', 'Google Cloud', 'GitHub Actions', 'Terraform', 'PostgreSQL']
  },
  {
    id: 'product-designer',
    title: 'Product & UI/UX Designer',
    type: 'Full-time / Contract',
    location: 'Remote (India / Global overlap)',
    description: 'Design editorial web experiences, design systems, and delightful digital interfaces that balance utility and character.',
    responsibilities: [
      'Design comprehensive Figma UI kits, responsive layouts, and interactive prototypes',
      'Collaborate closely with engineers on motion curves, component states, and accessibility',
      'Bring character, playful doodles, and refined typography hierarchy into digital products'
    ],
    techStack: ['Figma', 'Design Systems', 'Micro-interactions', 'Information Architecture']
  }
];

const CULTURE_POINTS = [
  {
    icon: <Terminal className="w-5 h-5 text-coral" />,
    title: 'Deep Work Over Meetings',
    description: 'We communicate asynchronously by default. No 9 AM daily standups or calendar congestion. We protect uninterrupted coding and design flow.'
  },
  {
    icon: <Layers className="w-5 h-5 text-coral" />,
    title: 'Small Pods, High Autonomy',
    description: 'You will work in 2-to-3 person pods directly with clients and founders. Every line of code and design decision genuinely matters.'
  },
  {
    icon: <Cpu className="w-5 h-5 text-coral" />,
    title: 'Craft Over Hype',
    description: 'We don’t chase shiny frameworks for internet clout. We prioritize reliable type systems, sub-second load times, and maintainable software.'
  },
  {
    icon: <Compass className="w-5 h-5 text-coral" />,
    title: 'Honest Boundaries',
    description: 'No weekend ping culture or false emergencies. We ship with calm velocity, respect personal downtime, and build sustainable careers.'
  }
];

export const CareersPage: React.FC = () => {
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>('fullstack-ts');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleRole = (id: string) => {
    setExpandedRoleId(expandedRoleId === id ? null : id);
  };

  const handleApplyClick = (roleTitle: string) => {
    const subject = encodeURIComponent(`Application: ${roleTitle}`);
    const body = encodeURIComponent(
      `Hi HumStack team,\n\nI'm applying for the ${roleTitle} role.\n\nName: \nGitHub / Portfolio: \n`
    );
    window.location.href = `mailto:humstackin@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Open Track Application: ${name}`);
    const body = encodeURIComponent(
      `Hi HumStack team,\n\nI would love to explore opportunities with HumStack.\n\nName: ${name}\nEmail: ${email}\nPortfolio / Work Link: ${portfolioLink}\n`
    );
    window.location.href = `mailto:humstackin@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="pt-28 pb-24 bg-cream min-h-screen text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Editorial Header with Workshop Doodle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-400/80 border border-cream-border text-secondary text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-coral" />
              <span>Studio Talent &amp; Craft</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary tracking-tight leading-[1.05] mb-6">
              Build what’s next
              <br />
              <span className="text-coral">with HumStack.</span>
            </h1>

            <p className="text-secondary text-base sm:text-xl font-normal leading-relaxed">
              We are an engineering-first studio. No ticket factories, no middle management bloat, and no corporate theater. Just pure, deliberate digital craftsmanship.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md bg-white rounded-3xl p-4 border border-cream-border shadow-soft-sm"
            >
              <picture>
                <source srcSet="/assets/illustrations/careers-workbench.webp" type="image/webp" />
                <img
                  src="/assets/illustrations/careers-workbench.png"
                  alt="Developer working at craft workbench"
                  className="w-full h-auto object-contain rounded-2xl select-none"
                  width={900}
                  height={600}
                  loading="eager"
                />
              </picture>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Studio Culture Grid */}
        <div className="mb-24">
          <div className="mb-10">
            <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-1">
              Our Operating Ethos
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-primary tracking-tight">
              How we work together.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CULTURE_POINTS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-cream-border shadow-soft-sm hover:shadow-soft transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-coral-bg flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Open Positions Accordions */}
        <div className="mb-24">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-1">
                Open Roles
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-primary tracking-tight">
                Current studio tracks.
              </h2>
            </div>
            <p className="text-secondary text-sm max-w-md">
              Don’t fit an exact title? We always consider exceptional engineers and designers on the Open Track below.
            </p>
          </div>

          <div className="space-y-4">
            {ROLES.map((role) => {
              const isExpanded = expandedRoleId === role.id;
              return (
                <div
                  key={role.id}
                  className="rounded-3xl bg-white border border-cream-border overflow-hidden shadow-soft-sm transition-all"
                >
                  <button
                    onClick={() => toggleRole(role.id)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-coral-bg text-coral font-semibold">
                          {role.type}
                        </span>
                        <span className="text-xs text-secondary/60">•</span>
                        <span className="text-xs text-secondary font-medium">
                          {role.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                        {role.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-primary flex-shrink-0 ml-4">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 sm:px-8 pb-8 pt-2 border-t border-cream-border/60"
                      >
                        <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
                          {role.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                              What you will do:
                            </h4>
                            <ul className="space-y-2 text-sm text-secondary">
                              {role.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                              Primary Tech Stack:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {role.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs font-mono px-3 py-1 rounded-xl bg-cream/70 border border-cream-border text-primary font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleApplyClick(role.title)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-charcoal hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
                        >
                          <span>Apply for this track</span>
                          <ArrowRight className="w-3.5 h-3.5 text-coral" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Ultra-Simple Open Application for Unlisted Roles */}
        <div id="apply-form" className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-soft-sm">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-coral block mb-1">
                Open Track
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary tracking-tight">
                Don’t see your role?
              </h2>
              <p className="text-secondary text-sm mt-1">
                Drop your link below. We don’t need a cover letter—just show us what you've built.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-coral-bg text-coral mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary">
                  Email Draft Opened!
                </h3>
                <p className="text-secondary text-sm max-w-sm mx-auto leading-relaxed">
                  Your mail app opened with your details prefilled for <strong className="text-primary font-mono">humstackin@gmail.com</strong>. Just press send in your email client!
                </p>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPortfolioLink('');
                    }}
                    className="text-xs text-secondary hover:text-coral transition-colors underline underline-offset-4"
                  >
                    Send another application
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-secondary mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/40 border border-cream-border focus:border-coral focus:bg-white focus:outline-none text-sm text-primary transition-all placeholder:text-secondary/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-secondary mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/40 border border-cream-border focus:border-coral focus:bg-white focus:outline-none text-sm text-primary transition-all placeholder:text-secondary/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-secondary mb-1">
                    Link to your work
                  </label>
                  <input
                    type="url"
                    required
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    placeholder="https://github.com/yourhandle or portfolio URL"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/40 border border-cream-border focus:border-coral focus:bg-white focus:outline-none text-sm text-primary transition-all placeholder:text-secondary/40"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-charcoal hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow group disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Opening Mail...' : 'Send Application'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-coral transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href="mailto:humstackin@gmail.com"
                    className="text-xs text-secondary hover:text-coral transition-colors text-center sm:text-right"
                  >
                    or write directly to <span className="font-mono text-primary font-medium">humstackin@gmail.com</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
