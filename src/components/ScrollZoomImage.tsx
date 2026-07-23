import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollZoomImageProps {
  src: string | { default: string } | any;
  alt: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}

export default function ScrollZoomImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  children,
}: ScrollZoomImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const resolvedSrc = typeof src === "string" ? src : (src && src.default) ? src.default : String(src);

  // Smooth scroll-driven zoom behavior:
  // Starts slightly smaller (0.91) as it enters the bottom of screen,
  // Reaches peak zoom (1.07) at middle of screen,
  // Scales back down (0.93) as it scrolls off the top.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.91, 1.07, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.75]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div style={{ scale, opacity }} className="w-full h-full relative">
        <img
          src={resolvedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105 ${imgClassName}`}
          referrerPolicy="no-referrer"
        />
        {children}
      </motion.div>
    </div>
  );
}
