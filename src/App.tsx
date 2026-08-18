import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [initialServiceForModal, setInitialServiceForModal] = useState<string>('');

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setInitialServiceForModal(serviceTitle);
    } else {
      setInitialServiceForModal('Society Housekeeping');
    }
    setIsQuoteModalOpen(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }
      if (e.key === '1') {
        setActiveTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === '2') {
        setActiveTab('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === '3') {
        setActiveTab('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === '4') {
        setActiveTab('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased pb-14 md:pb-0 overflow-x-hidden">
      
      {/* 1. Main Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickQuote={() => handleOpenQuote()}
      />

      {/* 2. Main Page Content with smooth page transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <HomePage
                setActiveTab={setActiveTab}
                onOpenQuickQuote={handleOpenQuote}
              />
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ServicesPage
                onOpenQuickQuote={handleOpenQuote}
              />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <AboutPage
                onOpenQuickQuote={() => handleOpenQuote()}
              />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuickQuote={() => handleOpenQuote()}
      />

      {/* 4. Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={initialServiceForModal}
      />

      {/* 5. Mobile Sticky CTA Bar */}
      <StickyMobileCta
        onOpenQuickQuote={() => handleOpenQuote()}
      />

    </div>
  );
}
