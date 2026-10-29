export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  illustration?: string;
  illustrationAlt?: string;
  accentColor?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-ecommerce',
    number: '01',
    title: 'Websites & E-commerce',
    shortDesc: 'Fast, responsive, high-converting digital storefronts and marketing platforms built with modern frontend frameworks.',
    fullDesc: 'We build custom websites that combine bespoke design with rock-solid frontend engineering. From headless Shopify builds to high-performance marketing engines, everything is optimized for lightning-fast load times, SEO, and smooth conversion.',
    deliverables: ['Custom Next.js & React Sites', 'Headless E-commerce', 'Interactive CMS Integration', 'SEO & Performance Audits'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Shopify', 'Sanity / Strapi']
  },
  {
    id: 'web-mobile-apps',
    number: '02',
    title: 'Web & Mobile Applications',
    shortDesc: 'Full-featured web apps, client portals, and cross-platform mobile experiences with delightful interfaces.',
    fullDesc: 'Turning product ideas into resilient applications. We craft intuitive user workflows, responsive mobile experiences, and reactive web applications engineered for scalability and high daily active user engagement.',
    deliverables: ['SaaS Platforms & Dashboards', 'iOS & Android (React Native / Flutter)', 'Progressive Web Apps (PWAs)', 'Complex Interactive State'],
    techStack: ['TypeScript', 'React', 'React Native', 'Node.js', 'Tailwind']
  },
  {
    id: 'backend-api',
    number: '03',
    title: 'Backend & API Development',
    shortDesc: 'Clean microservices, secure REST & GraphQL APIs, and reliable database architectures that handle scale gracefully.',
    fullDesc: 'The engine beneath your product. We design clean architectures, robust database schemas, secure authentication flows, and high-throughput background processing that keep your product stable as you grow.',
    deliverables: ['RESTful & GraphQL APIs', 'Database Modeling & Optimization', 'Authentication & Role Security', 'Third-Party Webhooks & Sync'],
    techStack: ['Node.js / Express', 'Go / Python', 'PostgreSQL', 'Redis', 'Prisma']
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'AI Integrations & Automation',
    shortDesc: 'Practical AI implementations, LLM workflows, and custom background bots that remove operational bottlenecks.',
    fullDesc: 'No buzzwords—just practical business automation. We integrate large language models, intelligent document extraction, customized search / RAG pipelines, and automated multi-step business logic into your existing stack.',
    deliverables: ['LLM & API Integrations', 'RAG / Vector Search Pipelines', 'Automated Workflow Pipelines', 'Custom AI Assistants & Tools'],
    techStack: ['OpenAI / Anthropic APIs', 'LangChain / LlamaIndex', 'Pinecone / pgvector', 'Python'],
    illustration: '/assets/illustrations/services-ai-engineering.webp',
    illustrationAlt: 'Human developer and cute robot companion collaborating on automated data pipelines'
  },
  {
    id: 'cloud-deployment',
    number: '05',
    title: 'Cloud & Infrastructure',
    shortDesc: 'Automated CI/CD pipelines, containerized deployments, serverless setups, and cost-efficient cloud architectures.',
    fullDesc: 'Ship with complete peace of mind. We configure reproducible cloud environments across AWS, GCP, and modern platforms like Vercel and Supabase, establishing automated deployments, security policies, and performance monitoring.',
    deliverables: ['CI/CD Pipeline Setup', 'Docker & Containerization', 'Cloud Architecture (AWS / GCP)', 'Monitoring & Error Tracking'],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'GitHub Actions', 'Terraform']
  },
  {
    id: 'maintenance-support',
    number: '06',
    title: 'Maintenance & Ongoing Support',
    shortDesc: 'Dedicated technical partnership to keep your systems fast, patched, monitored, and continuously evolving.',
    fullDesc: 'Launch day is just the starting line. We act as your on-call engineering team, providing regular dependency updates, security patches, proactive uptime monitoring, and iterative feature development as your business expands.',
    deliverables: ['24/7 Uptime Monitoring', 'Security & Dependency Updates', 'Feature Iterations & Sprints', 'Performance Optimization'],
    techStack: ['Sentry', 'Datadog', 'Automated Backups', 'SLA Support']
  },
  {
    id: 'brand-growth',
    number: '07',
    title: 'Brand Identity & Digital Growth',
    shortDesc: 'Complete visual identity, social media systems, marketing launch assets, and conversion strategies to scale your audience.',
    fullDesc: 'Great technology deserves an engaged audience. We build memorable visual brand identities, scalable social media design templates, engaging launch campaigns, and analytics funnels that drive real customer acquisition.',
    deliverables: ['Visual Identity & Logo Guidelines', 'Social Media Kits & Growth Templates', 'Product Launch Campaign Assets', 'Funnel Analytics & Conversion Tracking'],
    techStack: ['Figma', 'Motion Design', 'PostHog', 'Social Content Systems', 'Google Analytics']
  }
];
