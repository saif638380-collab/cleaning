import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import sofaCarpetHero from "../assets/images/sofa_carpet_hero_1784816891153.jpg";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.91, 1.06, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.75]);

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
    <section id="before-after" className="py-20 bg-slate-50/50 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-900 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-blue-200">
            Real Results
          </span>
        </motion.div>

        <motion.h2 
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Sofa & Carpet Restoration <span className="text-blue-600">Before & After.</span>
        </motion.h2>
        
        <motion.p 
          className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Drag the interactive slider below to see how our hot water extraction removes set-in stains, food grease, and dirt from deep fabric fibers.
        </motion.p>

        {/* Interactive Comparison Slider Container with Scroll Zoom */}
        <div ref={scrollRef} className="max-w-4xl mx-auto overflow-hidden">
          <motion.div
            ref={containerRef}
            style={{ scale, opacity }}
            className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 select-none cursor-ew-resize"
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
              src={sofaCarpetHero}
              alt="After deep hot water steam extraction"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* After Label badge */}
            <div className="absolute bottom-6 right-6 bg-blue-600 text-white font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md z-10">
              After (Clean & Restored)
            </div>
          </div>

          {/* BEFORE Image (Top / Clip Layer) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Grayscale, sepia, slight blur, and contrast drops to look stained and dirty */}
            <img
              src={sofaCarpetHero}
              alt="Before sofa & carpet cleaning"
              className="absolute inset-0 w-full h-full object-cover max-w-none grayscale saturate-75 sepia-50 brightness-65 contrast-110 filter blur-[0.8px]"
              style={{ width: containerRef.current?.getBoundingClientRect().width }}
              referrerPolicy="no-referrer"
            />
            {/* Before Label badge */}
            <div className="absolute bottom-6 left-6 bg-slate-900/90 text-white font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md z-10">
              Before (Dull & Stained)
            </div>
          </div>

          {/* Slider Line Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Circular Handle button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all text-blue-600">
              <ArrowLeftRight className="h-4 w-4" />
            </div>
          </div>
        </motion.div>
        </div>

        {/* Tip */}
        <motion.p 
          className="font-mono text-xs text-slate-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          ← Drag the divider to see the deep fiber steam extraction finish →
        </motion.p>

      </div>
    </section>
  );
}
