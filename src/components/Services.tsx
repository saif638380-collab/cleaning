import { Check, ArrowRight } from "lucide-react";
import cleaningSpecialist from "../assets/images/cleaning_specialist_1782628913400.jpg";

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const services = [
    {
      num: "01",
      title: "Deep Cleaning",
      desc: "Thorough cleaning of every corner, perfect for a fresh start.",
    },
    {
      num: "02",
      title: "Move-In/Out Cleaning",
      desc: "Ensure your new or old home is spotless for the next chapter.",
    },
    {
      num: "03",
      title: "Commercial Cleaning",
      desc: "Keep your office or commercial space pristine and professional.",
    },
    {
      num: "04",
      title: "Property Management",
      desc: "Reliable cleaning partnerships for property managers.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <div className="flex justify-center md:justify-start mb-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Our Services
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Image & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
              <img
                src={cleaningSpecialist}
                alt="Eco-friendly cleaning professional"
                className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Badges overlaid on image */}
              <div className="absolute top-4 left-4 bg-emerald-900/90 text-white text-[10px] font-mono tracking-wider uppercase font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                Spotless Interior Cleaning
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/95 text-slate-900 text-[10px] font-mono tracking-wider uppercase font-bold px-4 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 backdrop-blur-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Trusted Professionals
              </div>
            </div>
          </div>

          {/* Right Column: Title & Services Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5 text-center md:text-left">
              Complete Cleaning Solutions <br />
              <span className="text-emerald-600 font-serif">for Every Need.</span>
            </h2>
            
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-10 text-center md:text-left max-w-2xl">
              From delicate residential cleaning to deep commercial standards through the convenience of online scheduling, we help homes and businesses look cleaner, brighter, and better maintained.
            </p>

            {/* Grid of service cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((srv) => (
                <div
                  key={srv.num}
                  onClick={() => onServiceSelect(srv.title)}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Number badge */}
                    <span className="font-mono text-emerald-600 text-xs font-semibold tracking-wider bg-emerald-50/50 px-2.5 py-1 rounded-md">
                      {srv.num}
                    </span>
                    <h3 className="font-sans font-bold text-slate-800 text-lg mt-4 mb-2 group-hover:text-emerald-700 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    <span>Select Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-10 flex justify-center md:justify-start">
              <button
                onClick={() => onServiceSelect("Standard Cleaning")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
              >
                Call Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
