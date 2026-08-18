import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/rjData';
import { ShieldCheck, Eye, Target, Users, Shirt, CheckCircle2, ArrowRight, Building, Award, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onOpenQuickQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuickQuote }) => {
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
              <span>Registered & Verified Facility Partner</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              About RJ Enterprises
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Professional housekeeping and facility management services based in Pune. We deliver dependable cleaning solutions backed by trained staff, active supervisory oversight, and verifiable statutory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Profile Story & Values */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
              Reliable Facility Operations for Pune
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              RJ Enterprises is a Pune-based facility management and housekeeping service provider led by Proprietor <strong>Haridas Sundar Landge</strong>. Operating from our central office in Wagholi, Pune, we supply trained manpower, modern cleaning machinery, and structured hygiene schedules to housing societies, commercial complexes, healthcare facilities, and manufacturing units.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our service model is built on personal accountability: daily checklist audits, dedicated field supervisors, mandatory police-verified personnel, and a 24-hour backup staff notice guarantee so your premises never face service interruption.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                Our Slogan & Promise
              </span>
              <p className="text-sm font-semibold text-slate-900 italic">
                "{COMPANY_INFO.motto1}. {COMPANY_INFO.motto3}"
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="lg:col-span-5 space-y-4"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Our Commitment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "{COMPANY_INFO.commitment}"
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <span>Our Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "{COMPANY_INFO.vision}"
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5 text-slate-950 font-bold text-base">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <span>Our Mission</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "{COMPANY_INFO.mission}"
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Workforce Standards & Grooming */}
        <div className="pt-12 border-t border-slate-200/80 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
              Workforce Standards & Grooming Policy
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Proper uniform, personal hygiene, and professional conduct are mandatory across all client sites.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <Shirt className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Dress Code & Identification</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clean, neat, and well-fitted official company uniform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mandatory visible ID card</strong> worn at all times on site</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Black footwear and neat grooming standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Required safety gear and protective PPE when handling chemicals</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Briefings & Supervision Cadence</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Daily morning attendance checks and task briefing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Regular site quality audits by dedicated field supervisors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Proactive client feedback review and resolution within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Periodic refresher training on chemical dilution and machinery handling</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Statutory Registration Details */}
        <div className="pt-12 border-t border-slate-200/80 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
              Government Registrations & Verification
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              RJ Enterprises is an officially registered enterprise under state and central regulatory authorities in Maharashtra.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                State Government Registration
              </span>
              <h3 className="text-base font-bold text-slate-950">
                Maharashtra Shops & Establishments Act
              </h3>
              <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                <p><strong>Receipt Number:</strong> 2421000318579475</p>
                <p><strong>Application ID:</strong> 1020201742403</p>
                <p><strong>Enterprise:</strong> आरजे एंटरप्रायसेस / RJ ENTERPRISES</p>
                <p><strong>Nature of Business:</strong> Housekeeping Services (हाउस कीपिंग सर्व्हिसेस)</p>
                <p><strong>Registered Office:</strong> 104, Tupe Building, Baif Road, Wagholi, Pune – 412207</p>
              </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                Central Government MSME
              </span>
              <h3 className="text-base font-bold text-slate-950">
                MSME Udyam Registration
              </h3>
              <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                <p><strong>Udyam Number:</strong> UDYAM-MH-26-0614934</p>
                <p><strong>Ministry:</strong> Ministry of Micro, Small and Medium Enterprises</p>
                <p><strong>Category:</strong> Micro Enterprise (Services)</p>
                <p><strong>NIC Classification:</strong> 96096 (General household and premises maintenance)</p>
                <p><strong>Location:</strong> Wagholi, Haveli, Pune District, Maharashtra</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Action */}
        <div className="pt-4 text-center">
          <button
            onClick={onOpenQuickQuote}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer active:scale-98"
          >
            <span>Discuss Your Facility Requirements</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </section>

    </div>
  );
};
