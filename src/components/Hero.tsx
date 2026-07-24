import { Star, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import sofaCarpetHero from "../assets/images/sofa_carpet_hero_1784816891153.jpg";
import logoImg from "../assets/images/prime_carpet_logo_1784887824407.jpg";
import ScrollZoomImage from "./ScrollZoomImage";

interface HeroProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function Hero({ onQuoteClick, onCallClick }: HeroProps) {
  // Stagger container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Upwards reveal variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Visual image expansion variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 bg-slate-950 text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Brand Slogan Ribbon */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950/80 via-blue-900/90 to-blue-950/80 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full mb-6 shadow-lg shadow-blue-950/50"
          variants={itemVariants}
        >
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
          <span className="font-mono tracking-widest uppercase text-lime-400 font-bold">WE DON'T JUST CLEAN, WE CARE.</span>
        </motion.div>

        {/* Dynamic Typography Title */}
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
            Prime Carpet Solution LLC
          </span>
          <span className="block text-slate-200 text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold mt-3">
            Professional Carpet & Upholstery Steam Cleaning
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
          variants={itemVariants}
        >
          Serving Fredericksburg, Virginia with deep steam extraction, stain & odor elimination, and pet-friendly non-toxic care.
        </motion.p>

        {/* Core Badges from Logo */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span>DEEP CLEANING</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200">
            <ShieldCheck className="h-4 w-4 text-lime-400" />
            <span>STAIN & ODOR REMOVAL</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200">
            <HeartHandshake className="h-4 w-4 text-sky-400" />
            <span>PET FRIENDLY</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-sans text-base font-bold shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] border border-blue-400/40"
          >
            Get an Instant Quote
          </button>
          <button
            onClick={onCallClick}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-sans text-base font-semibold shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span className="text-lime-400 font-bold">Call (240) 918-1700</span>
          </button>
        </motion.div>

        {/* Rating Trust Badges */}
        <motion.div 
          className="flex flex-col items-center gap-3 mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400" />
            ))}
          </div>
          <p className="font-sans text-xs md:text-sm font-medium text-slate-400">
            Rated <span className="font-bold text-white">4.9/5.0</span> in Fredericksburg, VA for premium carpet & sofa restoration
          </p>
        </motion.div>

        {/* Big Hero Banner Image representation */}
        <motion.div 
          className="max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/60 border border-blue-900/50"
          variants={imageVariants}
        >
          <ScrollZoomImage
            src={sofaCarpetHero}
            alt="Spotless steam cleaned sofa and carpet living room"
            imgClassName="h-[300px] sm:h-[400px] md:h-[500px]"
          />
        </motion.div>
      </motion.div>

      {/* Repeating Marquee banner at the bottom matching logo motto */}
      <div className="bg-blue-950 text-white py-4 mt-16 overflow-hidden border-y border-blue-800/80 select-none">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold">
            <span className="text-lime-400 font-bold">CLEANER • HEALTHIER • BETTER</span>
            <span>● Sectional & Sofa Steam Cleaning</span>
            <span>● Wall-to-Wall Carpet Deep Extraction</span>
            <span className="text-blue-300 font-bold">WE DON'T JUST CLEAN, WE CARE.</span>
            <span>● Pet Stain & Odor Elimination</span>
            <span>● Wool & Fine Area Rug Care</span>
            <span>● Fredericksburg, VA</span>
          </div>
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold" aria-hidden="true">
            <span className="text-lime-400 font-bold">CLEANER • HEALTHIER • BETTER</span>
            <span>● Sectional & Sofa Steam Cleaning</span>
            <span>● Wall-to-Wall Carpet Deep Extraction</span>
            <span className="text-blue-300 font-bold">WE DON'T JUST CLEAN, WE CARE.</span>
            <span>● Pet Stain & Odor Elimination</span>
            <span>● Wool & Fine Area Rug Care</span>
            <span>● Fredericksburg, VA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
