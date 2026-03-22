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

  const cropPercent = useTransform(scrollYProgress, [0.2, 0.7], [0, 17]);

  // Inward padding so overlay text doesn't get clipped
  const textPadding = useTransform(cropPercent, (v) => `${v}%`);

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <motion.div
        className="w-full h-full overflow-hidden relative"
        style={{
          clipPath: useTransform(cropPercent, (v) => `inset(0 ${v}% 0 ${v}% round ${v * 1.4}px)`),
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {children && (
          <motion.div className="absolute inset-0" style={{ paddingLeft: textPadding, paddingRight: textPadding }}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ScrollCropImage;
