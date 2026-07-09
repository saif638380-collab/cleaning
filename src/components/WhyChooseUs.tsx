import { ShieldCheck, Heart, Sparkles, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import cleanBathroom from "../assets/images/clean_bathroom_1782628899155.jpg";

interface WhyChooseUsProps {
  onBookClick: () => void;
}

export default function WhyChooseUs({ onBookClick }: WhyChooseUsProps) {
  const highlights = [
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-600" />,
      title: "Eco-Friendly Botanical Products",
      desc: "All-natural, plant-based essential oils. 100% safe for kids and pets.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Skilled & Certified Cleaners",
      desc: "Background checked, vetted, and trained to exceptional standards.",
    },
    {
      icon: <Heart className="h-5 w-5 text-emerald-600" />,
      title: "Social Impact & Giving Back",
      desc: "We provide free regular cleaning sessions to local cancer patients undergoing treatment.",
    },
    {
      icon: <CalendarDays className="h-5 w-5 text-emerald-600" />,
      title: "Simple Digital Scheduling",
      desc: "Book, reschedule, or communicate in under 60 seconds with our online app.",
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
              Why <span className="text-emerald-600">Ecoverde</span> Cleaning?
            </motion.h2>

            <motion.div 
              className="space-y-4 font-sans text-slate-600 text-sm sm:text-base leading-relaxed text-center md:text-left max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p>
                We have revolutionized the traditional cleaning service for the modern age, delivering impeccable cleaning standards through the convenience of online scheduling and friendly digital interactions.
              </p>
              <p>
                Finding a top-notch cleaning service in Washington D.C. can be challenging—a service that meticulously attends to every corner, beneath the furniture, and behind doors.
              </p>
              <p>
                What sets us apart is not just our dedication to a spotless home environment but our skilled technicians, our top customer support, and absolute reliability. As part of our <strong className="text-emerald-700 font-semibold">social mission</strong>, we contribute to our community by offering <span className="underline decoration-emerald-500/50 decoration-2 font-medium text-slate-800">free cleaning services to cancer patients</span>, reinforcing our commitment to not just clean homes but to also make a positive impact on lives.
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
                <p className="font-serif text-lg font-bold text-slate-900 mb-1">Call our office today. Get your time back!</p>
                <p className="font-mono text-xs text-emerald-600 font-semibold">ECOVERDE GUARANTEE ● 100% SATISFACTION</p>
              </div>
              <button
                onClick={onBookClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 shrink-0 whitespace-nowrap cursor-pointer hover:scale-102 active:scale-98"
              >
                Book Now in 60 Seconds
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual highlights list + image */}
          <div className="lg:col-span-5 space-y-8">
            {/* Display clean bathroom photo */}
            <motion.div 
              className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 max-h-[300px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={cleanBathroom}
                alt="Eco-friendly bathroom cleaning outcome"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>

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
