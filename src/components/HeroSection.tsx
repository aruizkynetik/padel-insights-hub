import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-padel.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const clipInset = useTransform(scrollYProgress, [0.2, 0.8], [0, 8]);
  const borderRadius = useTransform(clipInset, (v) => `${v * 3}px`);
  const marginX = useTransform(clipInset, (v) => `${v}%`);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          marginLeft: marginX,
          marginRight: marginX,
          borderRadius,
        }}
      >
        <img src={heroImage} alt="Jugadores de pádel en acción" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">
            Tecnología Deportiva Inteligente
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Eleva tu Juego al{" "}
            <span className="gradient-text">Siguiente Nivel</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
            Tecnología que entiende tu deporte. Datos que impulsan tu rendimiento. Entrena con inteligencia, juega con ventaja.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#descubre">Descubre Más</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/productos/padel">Ver Productos</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
