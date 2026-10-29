export interface CapabilityItem {
  id: string;
  title: string;
  iconName: string;
}

export const capabilitiesData: CapabilityItem[] = [
  { id: 'prod-dev', title: 'Product Development', iconName: 'Layers' },
  { id: 'backend', title: 'Backend Engineering', iconName: 'Server' },
  { id: 'ai-auto', title: 'AI & Automation', iconName: 'Cpu' },
  { id: 'cloud', title: 'Cloud & Deployment', iconName: 'Cloud' },
  { id: 'support', title: 'Ongoing Support', iconName: 'LifeBuoy' }
];

