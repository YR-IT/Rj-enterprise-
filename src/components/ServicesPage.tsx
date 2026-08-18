import React from 'react';
import { motion } from 'motion/react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/rjData';
import { CheckCircle2, Phone, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuickQuote: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuickQuote }) => {
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
              <span>Comprehensive Pune Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Housekeeping & Facility Management Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We provide trained manpower, professional machinery, and structured daily cleaning schedules tailored for residential societies, commercial premises, healthcare centers, and factories across Pune.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {CORE_SERVICES.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Image Col (5 cols) */}
              <div className="lg:col-span-5 relative bg-slate-100 min-h-[260px] lg:min-h-full">
                <img
                  src={service.servicesPageImage || service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {service.category}
                </div>
              </div>

              {/* Content Col (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      {service.category}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Scope / Key Areas */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      Key Scope of Work:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {service.keyAreas.map((area, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Equipment & Ideal For */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="font-bold text-slate-900 block mb-1">Tools & Machinery:</span>
                      <span className="text-slate-600">{service.equipmentTools.join(', ')}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="font-bold text-slate-900 block mb-1">Recommended For:</span>
                      <span className="text-slate-600">{service.idealFor}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenQuickQuote(service.title)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-xs active:scale-98"
                  >
                    <span>Request Quote for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Call for Details</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        ))}
      </section>

      {/* Clean CTA footer banner */}
      <section className="bg-white border-t border-slate-200/80 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Need a Customized Cleaning Schedule or Site Inspection?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            We conduct a physical site inspection to calculate exact manpower counts, shift requirements, and machinery needed.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenQuickQuote()}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
            >
              Book Free Site Inspection
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
