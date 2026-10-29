import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Cpu, Cloud, LifeBuoy } from 'lucide-react';
import { capabilitiesData } from '../data/capabilities';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  LifeBuoy: <LifeBuoy className="w-5 h-5" />
};

export const CapabilitiesStrip: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="bg-charcoal text-white rounded-3xl border border-charcoal-border shadow-charcoal p-6 sm:p-10 relative overflow-hidden"
      >
        {/* Subtle decorative background pattern */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-coral/5 rounded-full filter blur-3xl pointer-events-none" />

        {/* Capabilities Grid */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {capabilitiesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-4 rounded-2xl bg-charcoal-dark border border-charcoal-surface hover:border-coral/50 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-9 h-9 rounded-xl bg-charcoal-surface text-coral flex items-center justify-center mb-3 group-hover:bg-coral group-hover:text-white transition-colors duration-200">
                {ICON_MAP[item.iconName]}
              </div>
              <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-coral transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

