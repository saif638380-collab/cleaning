import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import upholsteryCleaningImg from "../assets/images/upholstery_cleaning_1784816907791.jpg";
import ScrollZoomImage from "./ScrollZoomImage";

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const services = [
    {
      num: "01",
      title: "Sofa & Upholstery Steam Clean",
      desc: "Deep hot water steam extraction for couches, sectionals, armchairs, and dining chairs.",
    },
    {
      num: "02",
      title: "Wall-to-Wall Carpet Extraction",
      desc: "Revitalize high-traffic home and office carpets with deep fiber soil removal.",
    },
    {
      num: "03",
      title: "Pet Stain & Odor Treatment",
      desc: "Enzymatic deep neutralization that eliminates stubborn organic stains and pet smells.",
    },
    {
      num: "04",
      title: "Fine Area Rug & Wool Care",
      desc: "Gentle yet deep cleansing tailored for delicate wool, Persian, and silk area rugs.",
    },
  ];

  // Grid container stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <motion.div 
          className="flex justify-center md:justify-start mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-900 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-blue-200">
            Specialized Services
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Image & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <ScrollZoomImage
                src={upholsteryCleaningImg}
                alt="Hot water steam extraction sofa cleaning specialist"
                imgClassName="h-[350px] sm:h-[450px] md:h-[500px]"
              />
              
              {/* Badges overlaid on image */}
              <div className="absolute top-4 left-4 bg-blue-950/90 text-white text-[10px] font-mono tracking-wider uppercase font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-sm z-10 border border-blue-500/30">
                Advanced Steam Extraction
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/95 text-slate-900 text-[10px] font-mono tracking-wider uppercase font-bold px-4 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-1.5 backdrop-blur-sm z-10">
                <span className="inline-block w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                Certified Technicians
              </div>
            </div>
          </div>

          {/* Right Column: Title & Services Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5 text-center md:text-left">
                Expert Carpet & Upholstery Care <br />
                <span className="text-blue-600 font-serif">Deep Cleaned & Restored.</span>
              </h2>
              
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-10 text-center md:text-left max-w-2xl">
                We remove years of trapped dust, allergen buildup, tough food spills, and pet dander from your sofas and carpets without harsh chemical residues.
              </p>
            </motion.div>

            {/* Grid of service cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((srv) => (
                <motion.div
                  key={srv.num}
                  variants={cardVariants}
                  onClick={() => onServiceSelect(srv.title)}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:scale-[1.01]"
                >
                  <div>
                    {/* Number badge */}
                    <span className="font-mono text-blue-600 text-xs font-semibold tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                      {srv.num}
                    </span>
                    <h3 className="font-sans font-bold text-slate-800 text-lg mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:translate-x-1.5 transition-transform">
                    <span>Select Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Call to Action */}
            <motion.div 
              className="mt-10 flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => onServiceSelect("Sofa & Upholstery Steam Clean")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-102 active:scale-98"
              >
                Estimate Your Price
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
