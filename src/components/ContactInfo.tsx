import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";
import upholsteryCleaning from "../assets/images/upholstery_cleaning_1784816907791.jpg";
import ScrollZoomImage from "./ScrollZoomImage";

interface ContactInfoProps {
  onCallClick: () => void;
  onMessageClick: () => void;
}

export default function ContactInfo({ onCallClick, onMessageClick }: ContactInfoProps) {
  const contacts = [
    {
      icon: <Phone className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Phone",
      val: "(240) 918-1700",
      href: "tel:2409181700",
    },
    {
      icon: <Mail className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Email",
      val: "Primecarpetsolutionllc@gmail.com",
      href: "mailto:Primecarpetsolutionllc@gmail.com",
    },
    {
      icon: <MapPin className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Location",
      val: "Fredericksburg, Virginia",
      href: null,
    },
    {
      icon: <Clock className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Working Hours",
      val: "Mon-Sat, 8:00 AM - 5:00 PM",
      href: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact-section" className="py-20 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Contact Us
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & 2x2 grids */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Need Help With Your <span className="text-emerald-600">Sofas or Carpets?</span>
            </motion.h2>
            
            <motion.p 
              className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-10 text-center md:text-left max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tell us what needs steam cleaning, and our master technicians will help you choose the ideal botanical restoration package.
            </motion.p>

            {/* 2x2 Grid details */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {contacts.map((c, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-emerald-50/10 hover:border-emerald-100/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-2.5 rounded-xl h-fit text-emerald-600 mt-1">
                      {c.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {c.title}
                      </span>
                      {c.href ? (
                        <a href={c.href} className="font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-emerald-600 transition-colors block">
                          {c.val}
                        </a>
                      ) : (
                        <span className="font-sans font-bold text-slate-800 text-sm sm:text-base block">
                          {c.val}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Call Action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="tel:2409181700"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold text-center shadow-sm hover:shadow transition-all duration-200 cursor-pointer hover:scale-102 active:scale-98"
              >
                Call Now
              </a>
              <button
                onClick={onMessageClick}
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer hover:scale-102 active:scale-98"
              >
                Send a Message
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual photo with quick badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white group">
              <ScrollZoomImage
                src={upholsteryCleaning}
                alt="Master upholstery technician steam cleaning sofa"
                imgClassName="h-[320px] sm:h-[400px] md:h-[450px]"
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-emerald-900/95 text-white text-[10px] font-mono tracking-wider uppercase font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-sm z-10">
                Replies in under 5 min
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-[10px] font-mono tracking-wider uppercase font-bold px-4 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 backdrop-blur-sm z-10">
                ⭐ Certified Upholstery Specialists
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
