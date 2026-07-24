import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      initial: "S",
      text: "Our cream velvet sectional sofa had multiple dark coffee and pet stains. Prime Carpet Solution LLC brought it back to brand-new condition in under two hours! Amazing steam extraction.",
    },
    {
      name: "Jason T.",
      initial: "J",
      text: "We had red wine spilled on our wool living room carpet during a dinner party. Prime Carpet Solution LLC came out the next day and completely lifted the stain with zero chemical smell. Highly recommend!",
    },
    {
      name: "Emily R.",
      initial: "E",
      text: "Best carpet and sofa cleaning service in Fredericksburg! They eliminated persistent pet odor from our rugs and left our living room smelling so fresh and clean. Safe for my toddlers too!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-900 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-blue-200">
            Our Reputation
          </span>
        </motion.div>

        <motion.h2 
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          See What Your <span className="text-blue-600">Neighbors Are Saying</span>
        </motion.h2>
        
        <motion.p 
          className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Read real reviews from satisfied Fredericksburg homeowners who upgraded to non-toxic, deep sofa and carpet restoration.
        </motion.p>

        {/* Testimonials cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-slate-50/50 p-8 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative group"
            >
              <div>
                {/* Review Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="font-sans text-slate-600 italic text-sm sm:text-base leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* User profile */}
              <div className="flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className="h-10 w-10 rounded-full bg-blue-600 text-white font-sans font-bold flex items-center justify-center text-sm shadow-sm">
                  {rev.initial}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm">{rev.name}</h4>
                  <p className="font-sans text-[10px] text-blue-600 font-semibold tracking-wider uppercase leading-none">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
