import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "../assets/images/prime_carpet_logo_1784887824407.jpg";

interface HeaderProps {
  onBookClick: () => void;
  onContactClick: () => void;
  onServicesClick: () => void;
}

export default function Header({ onBookClick, onContactClick, onServicesClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-800" : "bg-slate-900/90 py-4 border-b border-slate-800/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Emblem Image */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img 
              src={logoImg} 
              alt="Prime Carpet Solution LLC Logo" 
              className="h-11 w-11 rounded-full object-cover border-2 border-blue-500 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-base sm:text-lg leading-tight tracking-tight text-white flex items-center gap-1.5">
                PRIME <span className="text-blue-400">CARPET</span> <span className="text-lime-400 text-xs sm:text-sm">LLC</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-lime-400 font-semibold leading-none mt-0.5">
                Cleaner • Healthier • Better
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-sans text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={onServicesClick}
              className="font-sans text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={onContactClick}
              className="font-sans text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right side CTA actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:2409181700"
              className="flex items-center gap-2 font-sans text-sm font-semibold text-white hover:text-blue-400 transition-colors"
            >
              <div className="p-1.5 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-400">
                <Phone className="h-3.5 w-3.5" />
              </div>
              (240) 918-1700
            </a>
            <button
              onClick={onBookClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-full font-sans text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 border border-blue-400/30"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:2409181700"
              className="p-2 text-blue-400 hover:text-white transition-colors"
              aria-label="Call Prime Carpet Solution LLC"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-200 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-b border-slate-800 absolute top-full left-0 right-0 py-4 px-4 shadow-xl flex flex-col gap-3 animate-fade-in text-white">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => {
              onServicesClick();
              setIsOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => {
              onContactClick();
              setIsOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800 font-medium transition-colors"
          >
            Contact
          </button>
          <hr className="border-slate-800" />
          <div className="flex flex-col gap-3 px-3">
            <a
              href="tel:2409181700"
              className="flex items-center gap-2 font-sans text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-blue-400" />
              (240) 918-1700
            </a>
            <button
              onClick={() => {
                onBookClick();
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-xl font-sans text-sm font-semibold text-center transition-all duration-200 shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
