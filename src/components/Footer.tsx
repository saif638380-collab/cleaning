import { Mail, Phone, Clock, MapPin, Shield } from "lucide-react";
import logoImg from "../assets/images/prime_carpet_logo_1784887824407.jpg";

interface FooterProps {
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onServicesClick, onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Pitch */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img 
                src={logoImg} 
                alt="Prime Carpet Solution LLC Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-blue-500 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col text-white">
                <span className="font-sans font-extrabold text-lg leading-tight tracking-tight">
                  PRIME <span className="text-blue-400">CARPET</span> <span className="text-lime-400 text-sm">LLC</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-lime-400 font-semibold leading-none mt-0.5">
                  Cleaner • Healthier • Better
                </span>
              </div>
            </div>
            
            <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Top-notch eco-friendly sofa and carpet steam extraction service in Fredericksburg, Virginia. We don't just clean, we care.
            </p>

            <div className="flex items-center gap-2.5 text-[11px] font-mono text-blue-300 font-semibold uppercase tracking-wider bg-blue-950/80 w-fit px-3 py-1.5 rounded-lg border border-blue-800/60">
              <Shield className="h-3.5 w-3.5 text-lime-400" />
              <span>Licensed, Bonded & Insured</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-bold text-white text-xs sm:text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onServicesClick}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-white text-xs sm:text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <a href="tel:2409181700" className="text-slate-300 hover:text-white transition-colors font-medium">
                  (240) 918-1700
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <a href="mailto:Primecarpetsolutionllc@gmail.com" className="text-slate-300 hover:text-white transition-colors truncate block max-w-[200px] sm:max-w-none">
                  Primecarpetsolutionllc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Mon-Sat, 8:00 AM - 5:00 PM
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Fredericksburg, Virginia
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Motto Badge */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-white text-xs sm:text-sm uppercase tracking-wider">Our Guarantee</h4>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              100% satisfaction guaranteed on all sofa, couch, sectional, area rug and carpet steam cleaning.
            </p>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono text-lime-400 font-semibold">
              "WE DON'T JUST CLEAN, WE CARE."
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-slate-800/80 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <p>© {currentYear} Prime Carpet Solution LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
