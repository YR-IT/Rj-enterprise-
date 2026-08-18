import React from 'react';
import { COMPANY_INFO } from '../data/rjData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenQuickQuote: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenQuickQuote }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-900 font-semibold text-xs active:scale-95 transition-transform"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-semibold text-xs active:scale-95 transition-transform shadow-xs"
          id="mobile-sticky-whatsapp-btn"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuickQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white font-semibold text-xs active:scale-95 transition-transform shadow-xs cursor-pointer"
          id="mobile-sticky-quote-btn"
        >
          <Calendar className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
};
