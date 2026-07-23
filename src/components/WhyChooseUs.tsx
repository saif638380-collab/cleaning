import { ShieldCheck, Heart, Sparkles, Clock } from "lucide-react";
import { motion } from "motion/react";
import cleanCarpetRug from "../assets/images/clean_carpet_rug_1784816921458.jpg";
import ScrollZoomImage from "./ScrollZoomImage";

interface WhyChooseUsProps {
  onBookClick: () => void;
}

export default function WhyChooseUs({ onBookClick }: WhyChooseUsProps) {
  const highlights = [
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-600" />,
      title: "Botanical Non-Toxic Cleanser",
      desc: "Plant-derived biodegradable solutions free from harsh chemical detergents. 100% safe for toddlers and pets.",
    },
    {
      icon: <Clock className="h-5 w-5 text-emerald-600" />,
      title: "Fast 2-Hour Accelerated Drying",
      desc: "Our industrial moisture extraction technology leaves carpets and sofas pleasantly fresh and dry in hours, not days.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Master Certified Technicians",
      desc: "Trained IICRC certified upholstery & carpet specialists vetted for fine fabrics, wool, velvet, and leather.",
    },
    {
      icon: <Heart className="h-5 w-5 text-emerald-600" />,
      title: "Deep Allergen & Bacteria Elimination",
      desc: "Hot water steam extraction sanitizes fibers, removing 99.2% of dust mites, pollen, and trapped pet allergens.",
    },
  ];

  // Stagger configurations
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Pitch */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Badge */}
            <motion.div 
              className="flex justify-center md:justify-start mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Why <span className="text-emerald-600">Prime Carpet Solution</span>?
            </motion.h2>

            <motion.div 
              className="space-y-4 font-sans text-slate-600 text-sm sm:text-base leading-relaxed text-center md:text-left max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p>
                Standard vacuuming only cleans the surface layer. Over time, your sofas and wall-to-wall carpets collect deep-seated dust, body oils, pet dander, and food spills deep inside the fibers.
              </p>
              <p>
                At Prime Carpet Solution in Fredericksburg, Virginia, we use state-of-the-art steam extraction equipment combined with botanical non-toxic formulas. We clean without soapy residues that attract dirt back, ensuring your living room looks brand new and stays clean far longer.
              </p>
              <p>
                Whether you need a sectional sofa restored before a family gathering or stubborn pet stains lifted from your wool carpet, our certified technicians treat your furniture with precision and care.
              </p>
            </motion.div>

            <motion.div 
              className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center sm:text-left">
                <p className="font-serif text-lg font-bold text-slate-900 mb-1">Schedule your sofa or carpet revival today!</p>
                <p className="font-mono text-xs text-emerald-600 font-semibold">PRIME CARPET GUARANTEE ● 100% SATISFACTION</p>
              </div>
              <button
                onClick={onBookClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 shrink-0 whitespace-nowrap cursor-pointer hover:scale-102 active:scale-98"
              >
                Book Online in 60 Seconds
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual highlights list + image */}
          <div className="lg:col-span-5 space-y-8">
            {/* Display clean carpet photo */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-[280px]">
              <ScrollZoomImage
                src={cleanCarpetRug}
                alt="Immaculate clean carpet and plush sofa"
                imgClassName="h-full"
              />
            </div>

            {/* Structured highlight boxes */}
            <motion.div 
              className="space-y-4"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {highlights.map((hl, idx) => (
                <motion.div 
                  key={idx} 
                  variants={listItemVariants}
                  className="flex gap-4 p-4 rounded-xl border border-slate-50 bg-slate-50/30 hover:bg-emerald-50/10 hover:border-emerald-100/50 transition-all duration-300"
                >
                  <div className="bg-emerald-50 p-2.5 rounded-lg h-fit text-emerald-600">
                    {hl.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-slate-800 text-sm leading-tight mb-1">
                      {hl.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 leading-normal">
                      {hl.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
