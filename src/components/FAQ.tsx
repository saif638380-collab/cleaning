import { useState } from "react";
import { ChevronDown, Phone, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is your Great Clean Guarantee?",
      a: "If you are not 100% satisfied with your cleaning, let us know within 24 hours and we will send our team back to reclean any areas of concern free of charge. Your absolute peace of mind is our highest priority.",
    },
    {
      q: "Do you bring your own supplies and equipment?",
      a: "Yes! We bring our own premium, eco-friendly, plant-based botanical formulas, certified HEPA vacuums, and clean microfiber towels. You don't need to provide a thing. Everything is entirely non-toxic and biodegradable.",
    },
    {
      q: "Do I need to be home for the cleaning appointment?",
      a: "No! Most of our clients prefer to leave a key, garage code, or lockbox code. We take security extremely seriously, and all client keys are fully coded and locked securely in our office safes when not in active use.",
    },
    {
      q: "How do you calculate your pricing?",
      a: "Our pricing is transparent and depends on the estimated square footage, service selected (standard vs deep clean), and current condition of the property. There are absolutely no hidden fees or surprise upcharges.",
    },
  ];

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="faq-section" className="py-20 bg-slate-50/50 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Call out card */}
          <motion.div 
            className="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-8 sm:p-10 rounded-3xl border border-emerald-800 shadow-xl flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-emerald-700/60 text-emerald-200 text-[10px] font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-600/50">
                Got Questions? We've Got Answers
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Common <br />
                <span className="text-amber-400 font-serif">Questions.</span>
              </h2>
              <p className="font-sans text-sm text-emerald-100/80 leading-relaxed">
                We're open and transparent about how we work. If you have any additional questions about our process, staff, or botanical supplies, please call our support team directly.
              </p>
            </div>

            <div className="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-800/50">
              <p className="font-sans text-xs text-emerald-300 font-semibold mb-2 uppercase tracking-wider">Direct Hotline</p>
              <a
                href="tel:9034203976"
                className="inline-flex items-center gap-2.5 font-sans text-lg sm:text-xl font-bold text-white hover:text-amber-300 transition-colors"
              >
                <Phone className="h-5 w-5 text-amber-400 animate-bounce" />
                (903) 420-3976
              </a>
            </div>
          </motion.div>

          {/* Right Column: Accordion Lists */}
          <motion.div 
            className="lg:col-span-7 space-y-4"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={listItemVariants}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "transform rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-50 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
