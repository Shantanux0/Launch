import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Websites & E-commerce');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-primary flex flex-col selection:bg-coral selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenProjectModal={() => handleOpenModal()} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenProjectModal={handleOpenModal} />} />
            <Route path="/about" element={<AboutPage onOpenProjectModal={() => handleOpenModal()} />} />
            <Route path="/services" element={<ServicesPage onSelectService={(srv) => handleOpenModal(srv)} />} />
            <Route path="/contact" element={<ContactPage onOpenProjectModal={() => handleOpenModal()} />} />
            <Route path="/lets-talk" element={<ContactPage onOpenProjectModal={() => handleOpenModal()} />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Visually Distinctive Footer */}
        <Footer
          onSelectService={(srv) => handleOpenModal(srv)}
          onOpenProjectModal={() => handleOpenModal()}
        />

        {/* Interactive Project Inquiry Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialService={selectedService}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
