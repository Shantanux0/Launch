export interface ProcessStep {
  step: string;
  badgeTitle: string;
  title: string;
  description: string;
  details: string[];
  illustration: string;
  alt: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    badgeTitle: 'Coffee Chat',
    title: 'Discover',
    description: 'We learn about your idea, your users, and the problem you want to solve.',
    details: [
      'Deep-dive consultation & requirements mapping',
      'Architecture & tech stack recommendation',
      'Lean scope definition & milestone planning'
    ],
    illustration: '/assets/illustrations/process-coffee.webp',
    alt: 'Hand-drawn coffee cup doodle representing discovery and kickoff discussion'
  },
  {
    step: '02',
    badgeTitle: 'Development',
    title: 'Build',
    description: 'We design and develop a practical solution, keeping quality, performance, and usability at the centre.',
    details: [
      'Iterative sprints with clean, typed codebases',
      'Modern, accessible user interfaces',
      'Robust backend logic, APIs & data modeling'
    ],
    illustration: '/assets/illustrations/process-code.webp',
    alt: 'Hand-drawn computer screen doodle representing software development and engineering'
  },
  {
    step: '03',
    badgeTitle: 'Delivery',
    title: 'Launch & Grow',
    description: 'We deploy your product and help you improve, maintain, and scale it over time.',
    details: [
      'Automated cloud deployment & DNS config',
      'Monitoring, telemetry & security hardening',
      'Continuous maintenance & iterative enhancements'
    ],
    illustration: '/assets/illustrations/process-delivery.webp',
    alt: 'Hand-drawn clock and delivery doodle representing on-time launch and product growth'
  }
];
