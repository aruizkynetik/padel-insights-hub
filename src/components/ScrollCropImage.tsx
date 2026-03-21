import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollCropImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const ScrollCropImage = ({ src, alt, className = "", children }: ScrollCropImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // From 0% to 17% margin on each side → 100% to 66% width, centered
  const marginPercent = useTransform(scrollYProgress, [0.2, 0.7], [0, 17]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.7], [0, 24]);

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full overflow-hidden relative"
        style={{
          marginLeft: useTransform(marginPercent, (v) => `${v}%`),
          marginRight: useTransform(marginPercent, (v) => `${v}%`),
          width: useTransform(marginPercent, (v) => `${100 - v * 2}%`),
          borderRadius: useTransform(borderRadius, (v) => `${v}px`),
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollCropImage;
