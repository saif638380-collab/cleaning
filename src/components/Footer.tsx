import { Leaf, Mail, Phone, Clock, MapPin, Globe, Shield } from "lucide-react";

interface FooterProps {
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onServicesClick, onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Pitch */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <Leaf className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-sans font-bold text-lg leading-tight tracking-tight">
                  ecoverde
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-semibold leading-none">
                  cleaning
                </span>
              </div>
            </div>
            
            <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Top-notch eco-friendly cleaning service in Washington D.C. with fast response times, botanical natural ingredients, pet-safe and baby-safe formulas, and absolute spotless results.
            </p>

            <div className="flex items-center gap-2.5 text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-950/50 w-fit px-3 py-1.5 rounded-lg border border-emerald-900/40">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
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
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onServicesClick}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
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
                <Phone className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <a href="tel:9034203976" className="text-slate-400 hover:text-white transition-colors">
                  (903) 420 3976
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <a href="mailto:saif219569@gmail.com" className="text-slate-400 hover:text-white transition-colors truncate block max-w-[200px] sm:max-w-none">
                  saif219569@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Mon-Sat, 8:00 AM - 5:00 PM
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Washington D.C. Metro Area
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-white text-xs sm:text-sm uppercase tracking-wider">Social Media</h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <p>© {currentYear} Ecoverde Cleaning. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
