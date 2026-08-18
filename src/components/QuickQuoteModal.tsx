import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/rjData';
import { InquiryFormData } from '../types';
import { X, CheckCircle2, Phone, Send, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import { sendInquiryEmail } from '../lib/emailjs';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    facilityType: 'Housing Society',
    areaLocality: '',
    staffCountNeeded: '1-3 Staff',
    serviceRequired: initialService || 'Society Housekeeping',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);

    const success = await sendInquiryEmail({
      form_type: 'Quick Quote Modal',
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      service: formData.serviceRequired,
      facility: formData.facilityType,
      locality: formData.areaLocality,
      staff_count: formData.staffCountNeeded,
      message: formData.message,
    });

    setSending(false);
    if (success) {
      setSubmitted(true);
    } else {
      setSendError(true);
    }
  };

  const handleWhatsAppForward = () => {
    const text = `*New Quote Request - RJ Enterprises*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Client')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `*Facility:* ${encodeURIComponent(formData.facilityType)}%0A` +
      `*Locality in Pune:* ${encodeURIComponent(formData.areaLocality)}%0A` +
      `*Service Required:* ${encodeURIComponent(formData.serviceRequired)}%0A` +
      `*Staff Count:* ${encodeURIComponent(formData.staffCountNeeded || 'Not specified')}%0A` +
      `*Notes:* ${encodeURIComponent(formData.message || 'None')}`;

    window.open(`https://wa.me/919309883691?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
          >
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-xl hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Free On-Site Inspection</span>
          </div>
          <h3 className="text-xl font-black text-white tracking-tight">
            Request a Free Quote
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            We will review your premises requirements and provide a transparent quotation.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-950">Thank You!</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                  We have received your inquiry for <strong>{formData.serviceRequired}</strong>. Haridas Landge / RJ Enterprises team will contact you shortly on <strong>{formData.phone}</strong>.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2">
                <button
                  onClick={handleWhatsAppForward}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Patil"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9309883691"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                  >
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">
                    Locality in Pune *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.areaLocality}
                    onChange={(e) => setFormData({ ...formData, areaLocality: e.target.value })}
                    placeholder="e.g. Wagholi, Kharadi, Baner"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 text-xs">
                  Facility Type
                </label>
                <select
                  value={formData.facilityType}
                  onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                >
                  <option value="Housing Society">Housing Society / Residential Complex</option>
                  <option value="Commercial Office">Commercial Office / Showroom</option>
                  <option value="Hospital / Clinic">Hospital / Clinic</option>
                  <option value="Factory / Warehouse">Factory / Warehouse</option>
                  <option value="Private Home / Bungalow">Private Home / Bungalow</option>
                  <option value="Deep Cleaning Project">One-Time Deep Cleaning Project</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 text-xs">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Number of floors, wings, or shift timings..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                />
              </div>

              {sendError && (
                  <p className="text-xs text-red-600 font-semibold bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                    ⚠️ Failed to send. Please try WhatsApp or call directly.
                  </p>
                )}

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-98"
                >
                  {sending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{sending ? 'Sending…' : 'Send Request'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppForward}
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-98"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
