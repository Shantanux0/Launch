import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Bot,
  CloudCog,
  Wrench,
  Megaphone,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesPageProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'web-ecommerce': <Globe className="w-6 h-6 text-coral" />,
  'web-mobile-apps': <Smartphone className="w-6 h-6 text-coral" />,
  'backend-api': <Database className="w-6 h-6 text-coral" />,
  'ai-automation': <Bot className="w-6 h-6 text-coral" />,
  'cloud-deployment': <CloudCog className="w-6 h-6 text-coral" />,
  'maintenance-support': <Wrench className="w-6 h-6 text-coral" />,
  'brand-growth': <Megaphone className="w-6 h-6 text-coral" />
};

const TECH_MATRIX = [
  { category: 'Frontend', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'] },
  { category: 'Mobile', tech: ['React Native', 'Expo', 'iOS & Android PWAs', 'Native Modules'] },
  { category: 'Backend & APIs', tech: ['Node.js', 'Express', 'Go', 'Python', 'GraphQL', 'RESTful APIs', 'Prisma'] },
  { category: 'Databases & Cache', tech: ['PostgreSQL', 'Redis', 'Supabase', 'MongoDB', 'pgvector'] },
  { category: 'AI & Automation', tech: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Pinecone'] },
  { category: 'Cloud & DevOps', tech: ['AWS', 'Google Cloud', 'Docker', 'GitHub Actions', 'Vercel', 'Terraform'] },
  { category: 'Brand & Growth', tech: ['Figma', 'Motion Design', 'PostHog', 'Social Content Systems', 'Google Analytics'] }
];

const ENGAGEMENT_MODELS = [
  {
    title: 'MVP Sprint',
    badge: 'Fixed Scope & Timeline',
    idealFor: 'Founders launching greenfield products or testing new business hypotheses.',
    timeline: '4 to 8 Weeks',
    features: [
      'Full product discovery & technical specification',
      'End-to-end design & typed codebase development',
      'Cloud setup, database modeling & production deployment',
      'Handover documentation with complete source code IP'
    ]
  },
  {
    title: 'Monthly Studio Retainer',
    badge: 'Dedicated Engineering Capacity',
    idealFor: 'Startups and growing brands needing consistent, senior developer velocity.',
    timeline: 'Flexible Monthly Cadence',
    features: [
      'Dedicated weekly engineering sprints and deliverables',
      'Direct developer access via Slack / Discord',
      'Continuous feature delivery and UI/UX enhancements',
      'Proactive performance tuning and architectural reviews'
    ]
  },
  {
    title: 'Infrastructure Hardening',
    badge: 'Targeted Deep-Dive Sprint',
    idealFor: 'Products experiencing traffic spikes or preparing for compliance audits.',
    timeline: '1 to 2 Weeks',
    features: [
      'Cloud infrastructure audit and cost optimization',
      'CI/CD pipeline automation and zero-downtime releases',
      'Database indexing, caching strategy and latency reduction',
      'Comprehensive security hardening and backup protocols'
    ]
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      {/* 1. Services Hero Section */}
      <section className="pt-8 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-7 space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-heading font-extrabold text-primary tracking-tight leading-[1.08]"
              >
                End-to-end engineering &amp; brand growth for every stage.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl text-secondary leading-relaxed max-w-xl font-normal"
              >
                From responsive web applications and high-throughput backend APIs to autonomous AI integrations, cloud infrastructure, and brand visibility—we build systems engineered for speed, reliability, and business impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2"
              >
                <button
                  onClick={() => onSelectService('Websites & E-commerce')}
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Start a Project Consultation</span>
                  <ArrowRight className="w-4 h-4 text-coral transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Services Workshop Hero Illustration */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-lg"
              >
                <picture>
                  <source srcSet="/assets/illustrations/services-workshop-hero.webp" type="image/webp" />
                  <img
                    src="/assets/illustrations/services-workshop-hero.png"
                    alt="Creative engineer surrounded by floating digital tools including browser windows, mobile app frames, database cylinders, cloud icons, and doodle sparks"
                    className="w-full h-auto object-contain drop-shadow-sm select-none"
                    width={1264}
                    height={848}
                    loading="eager"
                  />
                </picture>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive Into the Core Services */}
      <section className="py-20 bg-cream border-t border-cream-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight">
              Detailed Service Breakdown
            </h2>
            <p className="text-secondary text-sm sm:text-base mt-3 leading-relaxed">
              Every project is staffed with senior full-stack engineers and delivered with clean documentation.
            </p>
          </div>

          <div className="space-y-12">
            {servicesData.map((service) => {
              const hasIllustration = Boolean(service.illustration);
              const isDarkCard = service.id === 'ai-automation';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className={`rounded-3xl p-8 sm:p-12 border transition-all duration-300 ${
                    isDarkCard
                      ? 'bg-charcoal text-white border-charcoal-border shadow-charcoal'
                      : 'bg-white text-primary border-cream-border shadow-soft'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Number, Title, Description, Deliverables */}
                    <div className={hasIllustration ? 'lg:col-span-7' : 'lg:col-span-8'}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-heading font-bold text-xs px-3 py-1 rounded-full bg-coral text-white tracking-wider">
                          SERVICE {service.number}
                        </span>
                        <div className={`p-2 rounded-xl ${isDarkCard ? 'bg-charcoal-card' : 'bg-cream-300'}`}>
                          {SERVICE_ICONS[service.id]}
                        </div>
                      </div>

                      <h3 className={`text-2xl sm:text-4xl font-heading font-bold mb-4 tracking-tight ${isDarkCard ? 'text-white' : 'text-primary'}`}>
                        {service.title}
                      </h3>

                      <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDarkCard ? 'text-stone-300' : 'text-secondary'}`}>
                        {service.fullDesc}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="mb-6">
                        <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDarkCard ? 'text-coral' : 'text-secondary'}`}>
                          What We Deliver:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                              <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0" />
                              <span className={isDarkCard ? 'text-stone-200' : 'text-primary'}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-cream-border/50">
                        <span className={`text-xs font-semibold ${isDarkCard ? 'text-stone-400' : 'text-secondary'}`}>
                          Tech:
                        </span>
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-2.5 py-1 rounded-lg font-mono ${
                              isDarkCard
                                ? 'bg-charcoal-card text-stone-200 border border-charcoal-border'
                                : 'bg-cream-300 text-primary border border-cream-border'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Mobile action button for illustrated cards */}
                      {hasIllustration && (
                        <div className="pt-6">
                          <button
                            onClick={() => onSelectService(service.title)}
                            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-[1.02] ${
                              isDarkCard
                                ? 'bg-coral text-white hover:bg-coral-hover'
                                : 'bg-charcoal text-white hover:bg-black'
                            }`}
                          >
                            <span>Inquire for {service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Illustration Feature OR Action Box */}
                    <div className={hasIllustration ? 'lg:col-span-5' : 'lg:col-span-4'}>
                      {hasIllustration && service.illustration ? (
                        <div className={`rounded-2xl p-4 border shadow-inner ${isDarkCard ? 'bg-charcoal-card border-charcoal-border' : 'bg-cream-100 border-cream-border'}`}>
                          <picture>
                            <source srcSet={service.illustration} type="image/webp" />
                            <img
                              src={service.illustration.replace('.webp', '.png')}
                              alt={service.illustrationAlt || service.title}
                              className="w-full h-auto object-contain select-none"
                              width={1264}
                              height={848}
                              loading="lazy"
                            />
                          </picture>
                          <div className={`text-center pt-3 text-xs font-medium ${isDarkCard ? 'text-stone-400' : 'text-secondary'}`}>
                            {service.title} — Engineered for Production
                          </div>
                        </div>
                      ) : (
                        <div className="bg-cream-200/80 rounded-2xl p-6 border border-cream-border flex flex-col justify-between h-full">
                          <div className="space-y-3 mb-6">
                            <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
                              Ready to scope?
                            </div>
                            <div className="text-sm text-secondary">
                              We offer transparent fixed-price quotes and weekly milestone plans.
                            </div>
                          </div>
                          <button
                            onClick={() => onSelectService(service.title)}
                            className="w-full py-3 px-4 rounded-xl bg-charcoal text-white hover:bg-black font-semibold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-sm"
                          >
                            <span>Inquire for {service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-coral" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Matrix */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-2">
              Technology Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Tools we trust in production
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
              We choose battle-tested, high-performance open-source tools with active developer ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_MATRIX.map((stack) => (
              <div
                key={stack.category}
                className="p-6 rounded-3xl bg-charcoal-card border border-charcoal-border hover:border-coral/40 transition-colors"
              >
                <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center justify-between">
                  <span>{stack.category}</span>
                  <span className="w-2 h-2 rounded-full bg-coral" />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-charcoal-surface text-stone-200 text-xs font-mono border border-charcoal-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Transparent Engagement Models */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-coral text-xs font-semibold tracking-wider uppercase block mb-2">
              Engagement Models
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight">
              Predictable, flexible partnership
            </h2>
            <p className="text-secondary text-sm sm:text-base mt-3 leading-relaxed">
              No hidden fees, hourly padding, or surprise change-orders. Choose the model that fits your stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className="rounded-3xl p-8 bg-white border border-cream-border shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-coral-bg text-coral text-xs font-bold uppercase tracking-wider mb-4">
                    {model.badge}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    {model.title}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-secondary mb-4">
                    Timeline: {model.timeline}
                  </div>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-6">
                    {model.idealFor}
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-cream-border/60">
                    {model.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-secondary leading-tight">
                        <CheckCircle2 className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(model.title)}
                  className="w-full py-3 rounded-full bg-charcoal text-white hover:bg-black font-semibold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <span>Select {model.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-coral" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Banner */}
      <section className="py-16 bg-cream border-t border-cream-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-charcoal text-white shadow-charcoal">
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mb-4">
              Need a custom engineering or brand growth scope?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Tell us what technical or market challenges you're facing. We'll provide architectural feedback and a clear project proposal within 48 hours.
            </p>
            <button
              onClick={() => onSelectService('Brand Identity & Digital Growth')}
              className="px-8 py-3.5 rounded-full bg-coral hover:bg-coral-hover text-white font-semibold text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
