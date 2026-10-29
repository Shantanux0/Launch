import React from 'react';
import { Hero } from '../components/Hero';
import { CapabilitiesStrip } from '../components/CapabilitiesStrip';
import { ServiceShowcase } from '../components/ServiceShowcase';
import { HowWeWork } from '../components/HowWeWork';
import { WhyHumStack } from '../components/WhyHumStack';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onOpenProjectModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenProjectModal }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero onStartProject={() => onOpenProjectModal()} />

      {/* Capabilities Overlapping Strip */}
      <CapabilitiesStrip />

      {/* Services & Feature Showcase */}
      <ServiceShowcase onSelectService={(srv) => onOpenProjectModal(srv)} />

      {/* How We Work (3-Step Process) */}
      <HowWeWork />

      {/* Why HumStack */}
      <WhyHumStack />

      {/* Popular FAQ Section */}
      <FAQSection />

      {/* Final Call to Action */}
      <FinalCTA onStartProject={() => onOpenProjectModal()} />
    </>
  );
};

