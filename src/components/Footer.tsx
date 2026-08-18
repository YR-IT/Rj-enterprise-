import React from 'react';
import { motion } from 'motion/react';
import { PageTab } from '../types';
import { COMPANY_INFO, CORE_SERVICES, SERVICE_AREAS_SUMMARY } from '../data/rjData';
import { RJLogo } from './RJLogo';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuickQuote: (serviceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenQuickQuote,
}) => {
  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Main 4-Column Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10"
        >

          {/* Col 1: Brand Info */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <RJLogo variant="white-text" size="md" />
            </button>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              RJ Enterprises is Pune's dedicated facility management and housekeeping contractor. We provide police-verified, uniformed staff with active supervisory auditing across residential housing societies, corporate offices, and hospitality centers.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-pink-400 border border-slate-800 flex items-center justify-center transition-colors"
                title="Instagram: @rj.enterprises.777"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 flex items-center justify-center transition-colors"
                title="Facebook: RJ Enterprises"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors"
                title="WhatsApp RJ Enterprises"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Registration badges */}
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5 text-slate-200 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Maharashtra Shop Act & MSME Registered</span>
              </p>
              <p>Proprietor: <strong>Haridas Sundar Landge</strong></p>
            </div>
          </motion.div>

          {/* Col 2: Services Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      handleNavClick('services');
                    }}
                    className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Service Areas in Pune */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Coverage Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICE_AREAS_SUMMARY.slice(0, 6).map((area, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Registered Office & Direct Call */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Office & Inquiries
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>104, Tupe Building, Baif Road, Sambhaji Nagar, Wagholi, Pune – 412207</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-white hover:text-amber-400 font-bold">
                  +91 {COMPANY_INFO.primaryPhone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white truncate">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuickQuote()}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors text-center cursor-pointer active:scale-98"
              >
                Request Free Site Inspection
              </button>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center">
          <div className="flex-1 lg:text-left">
            <p>© {new Date().getFullYear()} RJ Enterprises. All rights reserved. Clean Spaces, Better Places.</p>
          </div>

          <div className="flex-1">
            <span>
              Made by <a href="https://www.yritsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-medium">YR IT Solutions</a>
            </span>
          </div>

          <div className="flex-1 flex flex-wrap justify-center lg:justify-end items-center gap-2 sm:gap-3">
            <span>Pune Municipal Zone</span>
            <span className="hidden sm:inline">•</span>
            <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              Instagram
            </a>
            <span className="hidden sm:inline">•</span>
            <a href={COMPANY_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Facebook
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
