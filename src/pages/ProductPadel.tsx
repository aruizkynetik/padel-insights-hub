import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSpecsSection from "@/components/TechSpecsSection";
import ScrollCropImage from "@/components/ScrollCropImage";
import heroImage from "@/assets/padeltech-hero.jpg";
import explodedImage from "@/assets/padeltech-exploded.jpg";
import capGolpeos from "@/assets/capability-golpeos.jpg";
import capVelocidad from "@/assets/capability-velocidad.jpg";
import capAngulo from "@/assets/capability-angulo.jpg";
import capDistancia from "@/assets/capability-distancia.jpg";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    image: capGolpeos,
    title: "Clasificación de Golpeos",
    desc: "El sistema de reconocimiento de patrones identifica y categoriza automáticamente cada tipo de golpe ejecutado — derecha, revés, bandeja, víbora, smash y voleas — proporcionando un desglose cuantitativo de la distribución técnica durante cada sesión.",
  },
  {
    image: capVelocidad,
    title: "Velocidad de Pelota",
    desc: "Mediante algoritmos de procesamiento inercial, el dispositivo calcula la velocidad estimada de salida de la pelota tras cada impacto, permitiendo evaluar la potencia efectiva de cada golpe y su evolución a lo largo del tiempo.",
  },
  {
    image: capAngulo,
    title: "Ángulo de Golpeo",
    desc: "Los sensores de fusión inercial determinan con precisión el ángulo de la pala en el momento del impacto, ofreciendo información clave sobre la orientación de la superficie de contacto y su influencia en la trayectoria de la pelota.",
  },
  {
    image: capDistancia,
    title: "Distancia Recorrida",
    desc: "El módulo de seguimiento de actividad registra la distancia total recorrida por el jugador durante el tiempo de uso activo, aportando métricas de movilidad y esfuerzo físico acumulado por sesión.",
  },
];

const explodedComponents = [
  { title: "Carcasa Superior", desc: "Silicona de grado deportivo con acabado mate negro y grabado en relieve 'Padel Tech'. Resistente a impactos y abrasión.", top: "5%" },
  { title: "Sensor IMU 9 Ejes", desc: "Acelerómetro, giroscopio y magnetómetro de alta frecuencia. Captura miles de datos por segundo para un análisis preciso del movimiento.", top: "25%" },
  { title: "Módulo Bluetooth 5.3 LE", desc: "Antena integrada de bajo consumo para transmisión de datos en tiempo real. Alcance optimizado para entornos deportivos.", top: "45%" },
  { title: "Energy Harvesting", desc: "Sistema piezoeléctrico que convierte la energía cinética del juego en electricidad. Elimina la dependencia de baterías convencionales.", top: "65%" },
  { title: "Carcasa Inferior", desc: "Base con sistema de fijación universal compatible con todas las palas de pádel estándar. Certificación IP67 contra líquidos y polvo.", top: "85%" },
];

const ExplodedViewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Arquitectura Interna</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Ingeniería de Alto Rendimiento</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Exploded image — sticky */}
          <div className="lg:sticky lg:top-24">
            <motion.img
              src={explodedImage}
              alt="Vista explosionada PadelTech"
              className="w-full rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Component descriptions */}
          <div className="space-y-24 lg:space-y-32">
            {explodedComponents.map((comp, i) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary font-display text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{comp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductPadel = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="relative w-full">
        <img src={heroImage} alt="PadelTech — Pala de pádel Kynetik" className="w-full h-[70vh] object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-display text-sm font-semibold tracking-widest uppercase mb-4 text-white/80">Producto Estrella</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4 text-white drop-shadow-lg">PadelTech</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Cada golpe cuenta. Cada dato te acerca a tu mejor versión.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">Comprar Ahora</Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#capabilities">Ver Características</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exploded View — Engineering section */}
      <ExplodedViewSection />

      {/* Capabilities — one per scroll with full-width images */}
      <section id="capabilities">
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Funcionalidades</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Datos que Transforman tu Juego</h2>
          </motion.div>
        </div>

        {capabilities.map((cap, i) => (
          <div key={cap.title}>
            <ScrollCropImage src={cap.image} alt={cap.title} className="h-[50vh]">
              <div className="absolute inset-0 bg-black/30" />
              <div className={`absolute inset-0 flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"} px-8 md:px-16`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`max-w-lg ${i % 2 !== 0 ? "text-right" : ""}`}
                >
                  <h3 className="font-display text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">{cap.title}</h3>
                  <p className="text-white/85 text-sm md:text-base leading-relaxed drop-shadow-md">{cap.desc}</p>
                </motion.div>
              </div>
            </ScrollCropImage>
            {i < capabilities.length - 1 && <div className="h-24" />}
          </div>
        ))}
      </section>

      {/* Tech Specs */}
      <TechSpecsSection />
    </main>
    <Footer />
  </>
);

export default ProductPadel;
