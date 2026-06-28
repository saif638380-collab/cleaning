import { useState, useEffect } from "react";
import { Leaf, Menu, X, Phone } from "lucide-react";

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
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-emerald-600 p-2 rounded-xl text-white">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg leading-tight tracking-tight text-slate-900">
                ecoverde
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 font-semibold leading-none">
                cleaning
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-sans text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={onServicesClick}
              className="font-sans text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={onContactClick}
              className="font-sans text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right side CTA actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:9034203976"
              className="flex items-center gap-2 font-sans text-sm font-semibold text-slate-800 hover:text-emerald-600 transition-colors"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              (903) 420 3976
            </a>
            <button
              onClick={onBookClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-sans text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:9034203976"
              className="p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label="Call Ecoverde"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-slate-100 absolute top-full left-0 right-0 py-4 px-4 shadow-lg flex flex-col gap-4 animate-fade-in">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => {
              onServicesClick();
              setIsOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => {
              onContactClick();
              setIsOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            Contact
          </button>
          <hr className="border-slate-100" />
          <div className="flex flex-col gap-3 px-3">
            <a
              href="tel:9034203976"
              className="flex items-center gap-2 font-sans text-sm font-semibold text-slate-800"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              (903) 420 3976
            </a>
            <button
              onClick={() => {
                onBookClick();
                setIsOpen(false);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-sans text-sm font-semibold text-center transition-all duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
