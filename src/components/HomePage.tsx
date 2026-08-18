import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { COMPANY_INFO, CORE_SERVICES, TESTIMONIALS, REAL_PROJECTS_GALLERY } from '../data/rjData';
import { OurWorksCarousel } from './OurWorksCarousel';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Clock, 
  Award, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  Quote, 
  Building2, 
  CheckCircle, 
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Layers,
  Sparkle
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuickQuote: (serviceTitle?: string) => void;
}

// Full-width Hero slides with clean curated media
const HERO_SLIDES = [
  {
    id: 'slide-1',
    tag: 'Leading Facility Partner in Pune & PCMC',
    title: 'Spotless Cleanliness & Reliable Facility Care for Your Premises',
    description: 'Supplying police-verified, uniformed, and disciplined housekeeping personnel with active supervisory audits for residential societies and corporate offices.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=85',
    badge: 'Society & Corporate AMC'
  },
  {
    id: 'slide-2',
    tag: 'Advanced Floor & Machinery Operations',
    title: 'Deep Scrubbing, Buffing & Specialized Machinery Maintenance',
    description: 'High-power single-disc scrubbing, carpet vacuuming, jet pressure washing, and stainless-steel lift restoration across Wagholi, Kharadi, and PCMC.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=85',
    badge: 'Industrial Scrubbers & Jets'
  },
  {
    id: 'slide-3',
    tag: 'Hospitality & Commercial Hygiene',
    title: 'Flawless Daily Maintenance for Restaurants, Clinics & Retail',
    description: 'Ensuring pristine dining halls, sterile medical clinics, executive boardrooms, and sanitized washrooms with hospital-grade eco disinfectants.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1920&q=85',
    badge: 'Hygienic Commercial Care'
  },
  {
    id: 'slide-4',
    tag: 'Residential Towers & Township Care',
    title: 'Comprehensive Society Lobbies, Podiums & Clubhouse Upkeep',
    description: 'Dedicated morning shift crews managing garbage segregation, entrance foyers, clubhouse hygiene, and basement parking sweepers.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1920&q=85',
    badge: 'Gated Townships & Towers'
  }
];

const AnimatedValue: React.FC<{ value: string }> = ({ value }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const match = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!match || !ref.current) return;
    
    const [, prefix, numStr, suffix] = match;
    const endValue = parseInt(numStr, 10);
    const duration = 3500; 
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * endValue);
      
      if (ref.current) {
        ref.current.innerText = `${prefix}${current}${suffix}`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (ref.current) {
        ref.current.innerText = value;
      }
    };
    
    requestAnimationFrame(animate);
  };

  return <span ref={ref}>{value}</span>;
};

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenQuickQuote,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-rotate hero slides
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      
      {/* 1. Modern Hero Section */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center bg-slate-950 overflow-hidden text-white">
        
        {/* Background Image Carousel with Smooth Fade */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={HERO_SLIDES[currentSlide].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Clean Modern Overlays for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl space-y-6">
            
            {/* Tag Badge */}
            <motion.div 
              key={`pill-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{HERO_SLIDES[currentSlide].tag}</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-200 uppercase px-2.5 py-1 rounded-full bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                {HERO_SLIDES[currentSlide].badge}
              </span>
            </motion.div>

            {/* Dynamic Headline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  {HERO_SLIDES[currentSlide].title}
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
                  {HERO_SLIDES[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* High-conversion Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenQuickQuote()}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-98"
                id="hero-quote-btn"
              >
                <span>Request Free Site Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-emerald-600/20 active:scale-98"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all inline-flex items-center gap-2 backdrop-blur-md active:scale-98"
                id="hero-phone-btn"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Shop Act & MSME Registered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Police-Verified Personnel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Supervisor Audits</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Slide Controls */}
        <div className="absolute bottom-6 right-4 sm:right-8 lg:right-12 z-30 flex items-center gap-2">
          {/* Pause / Play button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors"
            title={isPlaying ? "Pause slide rotation" : "Play slide rotation"}
            aria-label="Toggle carousel autoplay"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Prev Arrow */}
          <button
            onClick={handlePrevSlide}
            className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Slide Dots Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full ${
                  currentSlide === idx 
                    ? 'w-6 h-1.5 bg-amber-400' 
                    : 'w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNextSlide}
            className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

      {/* 2. Clean Metric Highlights Strip */}
      <section className="bg-white border-b border-slate-200/80 py-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
          >
            {[
              { val: '100+', label: 'Societies & Commercial Clients' },
              { val: '70+', label: 'Police-Verified Staff' },
              { val: '100%', label: 'Shop Act & MSME Compliant', color: 'text-emerald-600' },
              { val: '< 24h', label: 'Absentee Backup Guarantee' }
            ].map((metric, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-1 p-3 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className={`text-3xl sm:text-4xl font-black tracking-tight ${metric.color || 'text-slate-900'}`}>
                  <AnimatedValue value={metric.val} />
                </div>
                <div className="text-xs font-semibold text-slate-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
              Professional Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Our Housekeeping & Facility Services
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Comprehensive maintenance schedules, mechanized floor scrubbing, and trained staff for properties across Pune & PCMC.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 inline-flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
          >
            <span>View All Service Scopes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {CORE_SERVICES.map((service) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -5 }}
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide block">
                      Scope Includes:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {service.keyAreas.slice(0, 3).map((area, areaIdx) => (
                        <li key={areaIdx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuickQuote(service.title)}
                  className="text-xs font-bold text-slate-950 hover:text-emerald-600 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </button>
                <span className="text-[11px] text-slate-500 font-medium">
                  Daily / Monthly AMC
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. The 4 Trust Pillars (Why Choose Us) */}
      <section className="bg-white border-y border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              The RJ Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Why Housing Societies & Businesses Choose RJ Enterprises
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We focus on staff training, transparent billing, and dedicated supervisory oversight.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: '100% Police-Verified Staff',
                desc: 'All personnel undergo strict background checks, dress in official company uniforms, and carry mandatory photo identification.',
                bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200/60'
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: 'Active Field Supervision',
                desc: 'Dedicated supervisors conduct daily morning briefings, inspect cleaning checklists, and enforce strict attendance.',
                bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200/60'
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: 'Guaranteed Backup Staff',
                desc: 'Prompt staff replacement within 24 hours in case of absenteeism, guaranteeing zero operational downtime.',
                bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200/60'
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: 'Statutory Compliances',
                desc: 'Registered under Maharashtra Shop Act and MSME Udyam for hassle-free committee auditing and vendor onboarding.',
                bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200/60'
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all space-y-3 shadow-2xs hover:shadow-md"
              >
                <div className={`w-10 h-10 rounded-xl ${pillar.bg} ${pillar.text} flex items-center justify-center border ${pillar.border}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Works Carousel Section */}
      <OurWorksCarousel />

      {/* 5. Real On-site Work & Operations Highlights */}
      <section className="bg-slate-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Real Quality Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                On-Site Standards & Dedicated Workforce
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                See our trained staff in action across luxury dining lounges, housing society clubhouses, and corporate facilities.
              </p>
            </div>

            <button
              onClick={() => onOpenQuickQuote()}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Schedule Free Site Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Operational Showcase Grid */}
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
            {REAL_PROJECTS_GALLERY.map((item) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
                key={item.id}
                className="bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between transition-all hover:border-slate-700 group"
              >
                <div>
                  <div className="relative h-44 bg-slate-950 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-4 space-y-1.5">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center justify-center gap-1">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Client Reviews & Feedback</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Trusted by Housing Societies & Businesses Across Pune
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read how RJ Enterprises delivers consistent cleanliness and supervisory reliability.
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
            {TESTIMONIALS.map((t) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Service Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                      {t.serviceCategory}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{t.reviewText}"
                    </p>
                  </div>
                </div>

                {/* Client Bio */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-950">
                      {t.clientName}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {t.designation} • <span className="text-slate-700 font-semibold">{t.organization}</span>
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{t.location}</span>
                  </span>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 7. Service Coverage & Direct Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Pune Service Network</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                Ready to Upgrade Your Society or Commercial Facility?
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We conduct free on-site inspections in Wagholi, Kharadi, Viman Nagar, Koregaon Park, Kalyani Nagar, Hadapsar, and Solapur Road.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400 font-medium">
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">Wagholi</span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">Kharadi</span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">Viman Nagar</span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">Koregaon Park</span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">Kalyani Nagar</span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">Hadapsar</span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">Solapur Road</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenQuickQuote()}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm text-center transition-all shadow-md cursor-pointer active:scale-98"
                id="banner-inspection-btn"
              >
                Request Free Site Inspection & Quote
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {COMPANY_INFO.primaryPhone}</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
};
