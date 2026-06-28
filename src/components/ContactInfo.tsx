import { Phone, Mail, MapPin, Clock } from "lucide-react";
import cleaningStaff from "../assets/images/cleaning_specialist_1782628913400.jpg";

interface ContactInfoProps {
  onCallClick: () => void;
  onMessageClick: () => void;
}

export default function ContactInfo({ onCallClick, onMessageClick }: ContactInfoProps) {
  const contacts = [
    {
      icon: <Phone className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Phone",
      val: "(903) 420 3976",
      href: "tel:9034203976",
    },
    {
      icon: <Mail className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Email",
      val: "saif219569@gmail.com",
      href: "mailto:saif219569@gmail.com",
    },
    {
      icon: <MapPin className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Location",
      val: "Washington D.C. Area",
      href: null,
    },
    {
      icon: <Clock className="h-4.5 w-4.5 text-emerald-600" />,
      title: "Working Hours",
      val: "Mon-Sat, 8:00 AM - 5:00 PM",
      href: null,
    },
  ];

  return (
    <section id="contact-section" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Contact Us
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & 2x2 grids */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5 text-center md:text-left">
              Need Help With Your <span className="text-emerald-600">Property?</span>
            </h2>
            
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-10 text-center md:text-left max-w-2xl">
              Tell us what needs cleaning, and our team will help you choose the right botanical cleaning service for your home or business.
            </p>

            {/* 2x2 Grid details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {contacts.map((c, idx) => (
                <div key={idx} className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100/80 hover:bg-emerald-50/10 hover:border-emerald-100/40 transition-all duration-300">
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
                </div>
              ))}
            </div>

            {/* Bottom Call Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="tel:9034203976"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold text-center shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                Call Now
              </a>
              <button
                onClick={onMessageClick}
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer"
              >
                Send a Message
              </button>
            </div>
          </div>

          {/* Right Column: Visual photo with quick badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
              <img
                src={cleaningStaff}
                alt="Friendly botanical cleaner"
                className="w-full h-[320px] sm:h-[400px] md:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-emerald-900/95 text-white text-[10px] font-mono tracking-wider uppercase font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                Replies in under 5 min
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-[10px] font-mono tracking-wider uppercase font-bold px-4 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 backdrop-blur-sm">
                ⭐ Real local experts
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
