import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/rjData';
import { RJLogo } from './RJLogo';
import { Phone, Menu, X, MessageSquare, ArrowRight, Instagram, Facebook, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenQuickQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuickQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Map' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="sticky top-0 z-40 w-full transition-all"
    >
      {/* Top micro bar with contact info & trust highlights */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-slate-300 text-[11px] sm:text-xs">
              <strong className="text-white font-semibold">Pune</strong> • Wagholi Registered Office
            </p>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium ml-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Shop Act & MSME Verified</span>
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-2 border-r border-slate-800 pr-3 sm:pr-4">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors p-0.5"
                title="Follow RJ Enterprises on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors p-0.5"
                title="Follow RJ Enterprises on Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone */}
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-400 font-semibold text-xs transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 {COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main modern navigation with frosted glass effect */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus:outline-none py-1 group cursor-pointer min-w-0 shrink pr-2"
              id="brand-logo-btn"
            >
              <RJLogo size="lg" />
            </button>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/60" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'text-slate-900 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-white rounded-lg shadow-xs border border-slate-200/60"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                id="header-whatsapp-btn"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuickQuote}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow-md cursor-pointer group"
                id="header-quote-btn"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 md:hidden shrink-0">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="p-2.5 text-slate-900 bg-slate-100 rounded-xl hover:bg-slate-200 active:scale-95 transition-transform"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-800 hover:text-slate-950 bg-slate-100 rounded-xl hover:bg-slate-200 focus:outline-none transition-colors"
                aria-label="Toggle menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    activeTab === item.id
                      ? 'bg-slate-900 text-white font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Socials inside mobile menu */}
            <div className="flex items-center justify-center gap-4 py-3 border-y border-slate-100 text-xs text-slate-600">
              <span className="font-medium">Connect:</span>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-800 font-semibold hover:text-pink-600"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-800 font-semibold hover:text-blue-600"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickQuote();
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm text-center shadow-sm active:scale-[0.99] transition-transform"
              >
                Request Free Site Inspection
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
