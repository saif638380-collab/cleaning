import { Star } from "lucide-react";
import cleanKitchenHero from "../assets/images/clean_kitchen_hero_1782628881148.jpg";

interface HeroProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function Hero({ onQuoteClick, onCallClick }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-16 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Experience Badge */}
        <div className="inline-flex items-center gap-1.5 bg-emerald-100/60 text-emerald-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span>🍃</span>
          <span className="uppercase tracking-wider">Experience Botanical Purity</span>
        </div>

        {/* Dynamic Typography Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1] mb-6">
          <span className="text-emerald-600">Spotless Homes</span> for Modern Families,{" "}
          <span className="text-amber-600 block sm:inline">Rooted in Nature.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          We change the way you think about cleaning. Experience a spotless botanical home in just 60 seconds with our certified green specialists.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-sans text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Get a Free Quote
          </button>
          <button
            onClick={onCallClick}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-sans text-base font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Call Now
          </button>
        </div>

        {/* Rating Trust Badges */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-500" />
            ))}
          </div>
          <p className="font-sans text-xs md:text-sm font-medium text-slate-500">
            Customers rate us <span className="font-bold text-slate-800">4.9/5.0</span> based on <span className="font-bold text-slate-800">2,437 reviews</span>
          </p>
          <div className="flex items-center gap-8 mt-2 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-sans text-sm font-bold tracking-tight text-slate-600">yelp</span>
            <span className="font-sans text-sm font-bold tracking-tight text-slate-600">Thumbtack</span>
            <span className="font-sans text-sm font-bold tracking-tight text-slate-600">Google</span>
          </div>
        </div>

        {/* Big Hero Banner Image representation */}
        <div className="max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up">
          <img
            src={cleanKitchenHero}
            alt="Spotless clean kitchen"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover hover:scale-102 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Repeating Marquee banner at the bottom */}
      <div className="bg-emerald-900 text-emerald-100 py-5 mt-16 overflow-hidden border-y border-emerald-800 select-none">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold">
            <span>● Standard Cleaning</span>
            <span>● Deep Cleaning</span>
            <span>● Move-In / Move-Out</span>
            <span>● Post-Construction</span>
            <span>● Eco-Friendly Botanical Products</span>
          </div>
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold" aria-hidden="true">
            <span>● Standard Cleaning</span>
            <span>● Deep Cleaning</span>
            <span>● Move-In / Move-Out</span>
            <span>● Post-Construction</span>
            <span>● Eco-Friendly Botanical Products</span>
          </div>
          <div className="flex items-center gap-12 text-xs md:text-sm font-mono tracking-widest uppercase font-semibold" aria-hidden="true">
            <span>● Standard Cleaning</span>
            <span>● Deep Cleaning</span>
            <span>● Move-In / Move-Out</span>
            <span>● Post-Construction</span>
            <span>● Eco-Friendly Botanical Products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
