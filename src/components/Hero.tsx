import { Star } from "lucide-react";
import { motion } from "motion/react";
import sofaCarpetHero from "../assets/images/sofa_carpet_hero_1784816891153.jpg";
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
    <section id="hero" className="relative pt-32 pb-16 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Experience Badge */}
        <motion.div 
          className="inline-flex items-center gap-1.5 bg-emerald-100/60 text-emerald-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-8"
          variants={itemVariants}
        >
          <span>🍃</span>
          <span className="uppercase tracking-wider">Botanical Sofa & Carpet Steam Care</span>
        </motion.div>

        {/* Dynamic Typography Title */}
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1] mb-6"
          variants={itemVariants}
        >
          <span className="text-emerald-600">Restored Sofas & Carpets</span> for Healthy Homes,{" "}
          <span className="text-amber-600 block sm:inline">100% Non-Toxic.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="font-sans text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
          variants={itemVariants}
        >
          Revitalize your furniture and carpets with hot water steam extraction, pet stain neutralization, and allergen-free organic botanical formulas.
        </motion.p>

        {/* Action CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-sans text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Get an Instant Quote
          </button>
          <button
            onClick={onCallClick}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-sans text-base font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Call Now
          </button>
        </motion.div>

        {/* Rating Trust Badges */}
        <motion.div 
          className="flex flex-col items-center gap-3 mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-500" />
            ))}
          </div>
          <p className="font-sans text-xs md:text-sm font-medium text-slate-500">
            Homeowners rate our sofa & carpet cleaning <span className="font-bold text-slate-800">4.9/5.0</span> based on <span className="font-bold text-slate-800">2,437 reviews</span>
          </p>
          <div className="flex items-center gap-8 mt-2 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-sans text-sm font-bold tracking-tight text-slate-600">yelp</span>
            <span className="font-sans text-sm font-bold tracking-tight text-slate-600">Thumbtack</span>
            <span className="font-sans text-sm font-bold tracking-tight text-slate-600">Google</span>
          </div>
        </motion.div>

        {/* Big Hero Banner Image representation */}
        <motion.div 
          className="max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100"
          variants={imageVariants}
        >
          <ScrollZoomImage
            src={sofaCarpetHero}
            alt="Spotless steam cleaned sofa and carpet living room"
            imgClassName="h-[300px] sm:h-[400px] md:h-[500px]"
          />
        </motion.div>
      </motion.div>

      {/* Repeating Marquee banner at the bottom */}
      <div className="bg-emerald-900 text-emerald-100 py-5 mt-16 overflow-hidden border-y border-emerald-800 select-none">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold">
            <span>● Sectional & Sofa Steam Cleaning</span>
            <span>● Wall-to-Wall Carpet Deep Extraction</span>
            <span>● Pet Stain & Odor Elimination</span>
            <span>● Wool & Fine Area Rug Care</span>
            <span>● Quick 2-Hour Dry Time</span>
            <span>● Botanical Non-Toxic Formulas</span>
          </div>
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold" aria-hidden="true">
            <span>● Sectional & Sofa Steam Cleaning</span>
            <span>● Wall-to-Wall Carpet Deep Extraction</span>
            <span>● Pet Stain & Odor Elimination</span>
            <span>● Wool & Fine Area Rug Care</span>
            <span>● Quick 2-Hour Dry Time</span>
            <span>● Botanical Non-Toxic Formulas</span>
          </div>
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold" aria-hidden="true">
            <span>● Sectional & Sofa Steam Cleaning</span>
            <span>● Wall-to-Wall Carpet Deep Extraction</span>
            <span>● Pet Stain & Odor Elimination</span>
            <span>● Wool & Fine Area Rug Care</span>
            <span>● Quick 2-Hour Dry Time</span>
            <span>● Botanical Non-Toxic Formulas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
