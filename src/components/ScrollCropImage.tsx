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

  // Margins grow from 0 to ~8% matching text content margins
  const clipInset = useTransform(scrollYProgress, [0.2, 0.7], [0, 8]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.7], [0, 24]);

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <motion.div
        className="w-full overflow-hidden relative"
        style={{
          marginLeft: useTransform(clipInset, (v) => `${v}%`),
          marginRight: useTransform(clipInset, (v) => `${v}%`),
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
