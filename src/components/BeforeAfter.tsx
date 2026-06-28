import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";
import cleanKitchenHero from "../assets/images/clean_kitchen_hero_1782628881148.jpg";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, []);

  return (
    <section id="before-after" className="py-20 bg-slate-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-emerald-100">
            Real Results
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Before & <span className="text-emerald-600">After.</span>
        </h2>
        
        <p className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-12">
          Drag the interactive slider below to see the incredible difference of our professional botanical deep cleaning.
        </p>

        {/* Interactive Comparison Slider Container */}
        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 select-none cursor-ew-resize"
          onMouseDown={(e) => {
            isDragging.current = true;
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            isDragging.current = true;
            if (e.touches.length > 0) {
              handleMove(e.touches[0].clientX);
            }
          }}
          onMouseMove={(e) => {
            if (isDragging.current) handleMove(e.clientX);
          }}
          onTouchMove={(e) => {
            if (isDragging.current && e.touches.length > 0) {
              handleMove(e.touches[0].clientX);
            }
          }}
        >
          {/* AFTER Image (Bottom / Base Layer) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={cleanKitchenHero}
              alt="After deep cleaning spotless space"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* After Label badge */}
            <div className="absolute bottom-6 right-6 bg-emerald-600 text-white font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md z-10">
              After
            </div>
          </div>

          {/* BEFORE Image (Top / Clip Layer) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* We apply grayscale, sepia, slight blur, and contrast drops to look dusty, untidy & messy */}
            <img
              src={cleanKitchenHero}
              alt="Before cleaning messy representation"
              className="absolute inset-0 w-full h-full object-cover max-w-none grayscale saturate-75 sepia-30 brightness-75 contrast-90 filter blur-[0.7px]"
              style={{ width: containerRef.current?.getBoundingClientRect().width }}
              referrerPolicy="no-referrer"
            />
            {/* Before Label badge */}
            <div className="absolute bottom-6 left-6 bg-slate-900/90 text-white font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md z-10">
              Before
            </div>
          </div>

          {/* Slider Line Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Circular Handle button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-emerald-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all text-emerald-600">
              <ArrowLeftRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Tip */}
        <p className="font-mono text-xs text-slate-400 mt-6">
          ← Swipe / drag the divider to compare the spotless finish →
        </p>

      </div>
    </section>
  );
}
