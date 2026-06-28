import { CalendarDays, Sparkles, Coffee } from "lucide-react";

interface HowItWorksProps {
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export default function HowItWorks({ onQuoteClick, onCallClick }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      icon: <CalendarDays className="h-6 w-6 text-emerald-600" />,
      title: "You Book",
      desc: "Select best day & time. We're open Monday-Saturday, 8AM-5PM.",
    },
    {
      num: "02",
      icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
      title: "We Clean",
      desc: "Our trained Cleaning Techs bring all the botanical products and tools to complete the service.",
    },
    {
      num: "03",
      icon: <Coffee className="h-6 w-6 text-emerald-600" />,
      title: "You Relax",
      desc: "Enjoy your free time doing what matters most to you. Let us handle the dust.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Ready To Start?
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          Life Is Too Short To <span className="text-emerald-600 font-serif">Spend It Cleaning</span>
        </h2>
        
        <p className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-16">
          Upgrading to a spotless home is a simple three-step process designed entirely around your schedule.
        </p>

        {/* Steps container grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto mb-16 relative">
          
          {/* Subtle line background for steps in desktop */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              {/* Step Icon & Badge */}
              <div className="h-14 w-14 rounded-full bg-slate-50 border border-slate-100 text-emerald-600 flex items-center justify-center shadow-sm mb-6 group hover:border-emerald-200 transition-all">
                {step.icon}
              </div>

              <span className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2 block">
                Step {step.num}
              </span>
              
              <h3 className="font-sans font-bold text-slate-800 text-lg mb-2">
                {step.title}
              </h3>
              
              <p className="font-sans text-slate-500 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Get a Free Quote
          </button>
          <button
            onClick={onCallClick}
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 px-8 py-3.5 rounded-full font-sans text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer"
          >
            Call Now
          </button>
        </div>

      </div>
    </section>
  );
}
