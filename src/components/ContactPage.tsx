import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/rjData';
import { InquiryFormData } from '../types';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Instagram, Facebook, ArrowRight, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import { sendInquiryEmail } from '../lib/emailjs';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    facilityType: 'Housing Society',
    areaLocality: '',
    staffCountNeeded: '1-3 Staff',
    serviceRequired: 'Society Housekeeping',
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
      form_type: 'Contact Page Inquiry',
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
    const text = `*New Facility Inquiry - RJ Enterprises*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Client')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `*Facility Type:* ${encodeURIComponent(formData.facilityType)}%0A` +
      `*Premises Locality:* ${encodeURIComponent(formData.areaLocality)}%0A` +
      `*Service Required:* ${encodeURIComponent(formData.serviceRequired)}%0A` +
      `*Staff Requirement:* ${encodeURIComponent(formData.staffCountNeeded || 'Not specified')}%0A` +
      `*Client Notes:* ${encodeURIComponent(formData.message || 'None')}`;

    window.open(`https://wa.me/919309883691?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-3"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Inquiries & Site Audits</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Contact RJ Enterprises & Book a Site Inspection
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We provide free on-site inspections and customized housekeeping proposals across Pune and PCMC. Connect directly with Proprietor Haridas Landge or send us your requirements below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Details + Form + Google Map */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Info Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {/* Phone Card */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
              <Phone className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Call Directly</span>
            <div className="text-sm font-bold text-slate-900 space-y-1">
              <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="block text-slate-950 hover:text-emerald-600 font-bold transition-colors">
                +91 {COMPANY_INFO.primaryPhone}
              </a>
              <a href={`tel:${COMPANY_INFO.alternatePhone}`} className="block text-slate-600 hover:text-emerald-600 text-xs transition-colors">
                +91 {COMPANY_INFO.alternatePhone}
              </a>
            </div>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:underline pt-1"
            >
              <span>Click to Call</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>

          {/* WhatsApp & Instant Chat */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/60">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Instant WhatsApp</span>
            <p className="text-xs text-slate-600">
              Get immediate quotation and send site photos on WhatsApp.
            </p>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline pt-1"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Email & Registered Office */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Official Email</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-xs font-semibold text-slate-900 hover:underline block break-all"
            >
              {COMPANY_INFO.email}
            </a>
            <span className="text-[11px] text-slate-500 block">
              Official tenders & society RFPs
            </span>
          </motion.div>

          {/* Social Profiles */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-pink-600" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Social Channels</span>
            <div className="space-y-1.5 pt-1">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-pink-600"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram: @rj.enterprises.777</span>
              </a>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-blue-600"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-600" />
                <span>Facebook Page</span>
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* 2 Column: Form & Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs"
          >
            <h2 className="text-xl font-bold text-slate-950 mb-1">
              Send an Inquiry / Request a Quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Complete the form below to receive a customized facility quotation and book your free site audit.
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Inquiry Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. RJ Enterprises has received your request for <strong>{formData.serviceRequired}</strong> in <strong>{formData.areaLocality}</strong>. Our team will contact you on <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppForward}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open & Forward via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sanjay Deshmukh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9309883691"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                    >
                      {CORE_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Premises Locality in Pune *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.areaLocality}
                      onChange={(e) => setFormData({ ...formData, areaLocality: e.target.value })}
                      placeholder="e.g. Wagholi, Kharadi, Hinjawadi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Facility Type
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                    >
                      <option value="Housing Society">Housing Society / Residential Complex</option>
                      <option value="Commercial Office">Commercial Office / Showroom</option>
                      <option value="Restaurant & Hospitality">Restaurant / Lounge / Cafe</option>
                      <option value="Hospital / Healthcare">Hospital / Diagnostic Clinic</option>
                      <option value="Factory / Industrial">Factory / Warehouse</option>
                      <option value="Private Home / Villa">Private Home / Villa</option>
                      <option value="One-Time Deep Cleaning">One-Time Deep Cleaning Overhaul</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Staff Count Needed
                    </label>
                    <select
                      value={formData.staffCountNeeded}
                      onChange={(e) => setFormData({ ...formData, staffCountNeeded: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                    >
                      <option value="1-2 Staff">1-2 Staff</option>
                      <option value="3-5 Staff">3-5 Staff</option>
                      <option value="6-10 Staff + Supervisor">6-10 Staff + Supervisor</option>
                      <option value="10+ Commercial Deployment">10+ Commercial Deployment</option>
                      <option value="One-Time Deep Cleaning Team">One-Time Deep Cleaning Team</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Site Details / Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details such as number of wings, carpet area sq.ft, floor types, or shift requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                  />
                </div>

                {sendError && (
                  <p className="text-xs text-red-600 font-semibold bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5">
                    ⚠️ Failed to send email. Please try WhatsApp or call us directly.
                  </p>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-98"
                  >
                    {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    <span>{sending ? 'Sending…' : 'Submit Inquiry'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppForward}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Direct WhatsApp Chat</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Google Maps Embed & Office Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5"
          >
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                Office Location
              </span>
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>RJ Enterprises Registered Office</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                104, Tupe Building, Baif Road, Sambhaji Nagar, Wagholi, Pune – 412207, Maharashtra
              </p>
            </div>

            {/* Live Responsive Google Maps Iframe */}
            <div className="w-full h-72 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                title="RJ Enterprises Wagholi Pune Google Maps Location"
                src="https://maps.google.com/maps?q=104,%20Tupe%20Building,%20Baif%20Road,%20Wagholi,%20Pune,%20Maharashtra%20412207&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Quick Details Box */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-700 shrink-0" />
                <span><strong>Office Hours:</strong> Monday – Saturday (8:00 AM – 7:00 PM)</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Emergency Replacements:</strong> 24/7 Field Supervisor Hotline</span>
              </p>
            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};
