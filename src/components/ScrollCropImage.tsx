import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollCropImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ScrollCropImage = ({ src, alt, className = "" }: ScrollCropImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // As user scrolls past, margins grow from 0 to ~6% on each side
  const clipInset = useTransform(scrollYProgress, [0.3, 0.7], [0, 6]);
  const borderRadius = useTransform(scrollYProgress, [0.3, 0.7], [0, 16]);

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <motion.div
        className="w-full overflow-hidden"
        style={{
          marginLeft: useTransform(clipInset, (v) => `${v}%`),
          marginRight: useTransform(clipInset, (v) => `${v}%`),
          borderRadius: useTransform(borderRadius, (v) => `${v}px`),
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

export default ScrollCropImage;
