import { useState } from "react";
import { ChevronDown, Phone, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take for sofas and carpets to dry after steam extraction?",
      a: "Thanks to our high-powered moisture extraction technology, most carpets and upholstery dry in approximately 2 to 4 hours. Good airflow or ceiling fans can accelerate dry times even further.",
    },
    {
      q: "Are your cleaning solutions safe for delicate fabrics like wool, velvet, or leather?",
      a: "Yes! Our master technicians pre-inspect fabric codes (W, S, WS, X) before selecting the appropriate botanical pH-balanced cleaning approach, ensuring delicate wool rugs, velvet sectionals, and leather furniture are treated safely.",
    },
    {
      q: "Can you completely eliminate stubborn pet stains and urine odors?",
      a: "Absolutely. We use deep enzymatic pre-treatments that break down organic uric acid salts trapped deep inside carpet fibers and sofa foam, neutralizing odors permanently at the source rather than just masking them.",
    },
    {
      q: "How often should sofas and carpets be deep steam cleaned?",
      a: "We recommend professional deep steam extraction every 6 to 12 months for active households, or every 3 to 6 months for homes with pets or allergy sufferers to remove trapped dust mites and pet dander.",
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
            className="lg:col-span-5 bg-slate-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-blue-950 text-blue-300 text-[10px] font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-blue-800/60">
                Got Questions? We've Got Answers
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Common <br />
                <span className="text-lime-400 font-serif">Questions.</span>
              </h2>
              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                We're open and transparent about how we work. If you have any additional questions about our process, staff, or botanical supplies, please call our support team directly.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="font-sans text-xs text-blue-400 font-semibold mb-2 uppercase tracking-wider">Direct Hotline</p>
              <a
                href="tel:2409181700"
                className="inline-flex items-center gap-2.5 font-sans text-lg sm:text-xl font-bold text-white hover:text-lime-400 transition-colors"
              >
                <Phone className="h-5 w-5 text-lime-400 animate-bounce" />
                (240) 918-1700
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
                  className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "transform rotate-180 text-blue-600" : ""
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
                        <div className="px-6 pb-6 pt-1 border-t border-slate-100 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
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
