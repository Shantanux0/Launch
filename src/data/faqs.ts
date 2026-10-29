export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What kind of projects does HumStack take on?',
    answer: 'We focus on end-to-end digital product development: modern marketing websites, full-stack SaaS web applications, mobile apps, custom APIs, AI automation workflows, and cloud infrastructure setups. Whether you are building a greenfield MVP or modernizing an existing system, we architect and ship solutions built for long-term reliability.'
  },
  {
    id: 'faq-2',
    question: 'Can you help if I only have an idea?',
    answer: 'Absolutely. Many of our strongest client partnerships began with a rough napkin sketch or a pitch deck. We collaborate closely during our Discover phase to unpack your concept, identify the core feature set for a lean MVP, choose the right technology stack, and map out a clear technical roadmap before writing the first line of code.'
  },
  {
    id: 'faq-3',
    question: 'Do you work with early-stage startups?',
    answer: 'Yes, early-stage founders are a core part of what we do. We understand that speed-to-market, budget discipline, and agile feedback loops are vital. We help you cut through complexity, build a polished, production-grade product quickly, and get it in front of real users to validate traction.'
  },
  {
    id: 'faq-4',
    question: 'Can you deploy and maintain the product after launch?',
    answer: 'Yes, we stay with you beyond launch. We set up automated deployment pipelines, cloud monitoring, error tracking, and regular backups. Afterward, we offer flexible ongoing maintenance and technical support retainers to handle feature improvements, dependency updates, and infrastructure scaling.'
  },
  {
    id: 'faq-5',
    question: 'How does the project pricing work?',
    answer: 'We believe in transparent, predictable pricing. For well-scoped projects like MVPs, marketing sites, or specific features, we provide a fixed-scope milestone-based quote. For ongoing product evolution, dedicated engineering support, or iterative builds, we offer monthly studio retainers with clear deliverables.'
  },
  {
    id: 'faq-6',
    question: 'How do we get started?',
    answer: 'Getting started is straightforward. Click "Start a Project" or drop us an email at hello@humstack.in. We will schedule a focused 30-minute discovery call to discuss your goals, timeline, and technical requirements, followed by a clear proposal and timeline within 48 hours.'
  }
];

