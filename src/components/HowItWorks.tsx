import { CalendarDays, Sparkles, Armchair } from "lucide-react";
import { motion } from "motion/react";

interface HowItWorksProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function HowItWorks({ onQuoteClick, onCallClick }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      icon: <CalendarDays className="h-6 w-6 text-emerald-600" />,
      title: "Schedule Your Service",
      desc: "Select your sofa size or carpet room count and choose a convenient time slot online.",
    },
    {
      num: "02",
      icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
      title: "Deep Steam Extraction",
      desc: "Our master technicians pre-treat stains and extract deep-seated dirt with non-toxic botanical solutions.",
    },
    {
      num: "03",
      icon: <Armchair className="h-6 w-6 text-emerald-600" />,
      title: "Enjoy Fresh Furniture",
      desc: "Relax on clean, restored sofas and soft allergen-free carpets with fast 2-hour dry times.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Simple 3-Step Process
          </span>
        </motion.div>

        <motion.h2 
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Revitalize Your Living Space <span className="text-emerald-600 font-serif">In 3 Easy Steps</span>
        </motion.h2>
        
        <motion.p 
          className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Upgrading your home's upholstery and carpets is seamless with our certified technicians.
        </motion.p>

        {/* Steps container grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto mb-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Subtle line background for steps in desktop */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Step Icon & Badge */}
              <div className="h-14 w-14 rounded-full bg-slate-50 border border-slate-100 text-emerald-600 flex items-center justify-center shadow-sm mb-6 group-hover:border-emerald-300 group-hover:bg-emerald-50/20 transition-all duration-300">
                {step.icon}
              </div>

              <span className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2 block">
                Step {step.num}
              </span>
              
              <h3 className="font-sans font-bold text-slate-800 text-lg mb-2">
                {step.title}
              </h3>
              
              <p className="font-sans text-slate-500 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer hover:scale-102 active:scale-98"
          >
            Get a Free Estimate
          </button>
          <button
            onClick={onCallClick}
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer hover:scale-102 active:scale-98"
          >
            Call Now
          </button>
        </motion.div>

      </div>
    </section>
  );
}
