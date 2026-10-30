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
    <section className="relative z-20 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 sm:p-8"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilitiesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group p-4 rounded-2xl bg-gray-50/80 hover:bg-indigo-50/50 border border-gray-100 hover:border-indigo-200 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-gray-900 group-hover:text-indigo-600 flex items-center justify-center mb-3 shadow-sm border border-gray-100 transition-colors">
                {ICON_MAP[item.iconName]}
              </div>
              <h3 className="text-sm font-bold text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
