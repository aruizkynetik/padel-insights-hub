import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSpecsSection from "@/components/TechSpecsSection";
import heroImage from "@/assets/padeltech-hero.jpg";
import renderImage from "@/assets/padeltech-render.png";
import { Zap, Bluetooth, Shield, Feather, Crosshair, Gauge, TriangleRight, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollCropImage from "@/components/ScrollCropImage";

const features = [
  {
    icon: Zap,
    title: "Energy Harvesting",
    desc: "Sistema de autoalimentación mediante recolección de energía cinética. El dispositivo se recarga con el movimiento natural del juego, eliminando la necesidad de baterías convencionales.",
  },
  {
    icon: Bluetooth,
    title: "Conectividad Bluetooth",
    desc: "Transmisión de datos en tiempo real mediante protocolo Bluetooth 5.3 LE de bajo consumo. Sincronización instantánea con la aplicación móvil Kynetik para iOS y Android.",
  },
  {
    icon: Shield,
    title: "Resistencia Extrema",
    desc: "Diseñado para soportar impactos de alta intensidad, vibraciones constantes, exposición a líquidos y las condiciones más exigentes del juego. Certificación IP67.",
  },
  {
    icon: Feather,
    title: "Ultraligero — 10 g",
    desc: "Con un peso total de tan solo 10 gramos, su influencia sobre el centro de masas de la pala es prácticamente nula, garantizando una jugabilidad inalterada.",
  },
];

const capabilities = [
  {
    icon: Crosshair,
    title: "Clasificación de Golpeos",
    desc: "El sistema de reconocimiento de patrones identifica y categoriza automáticamente cada tipo de golpe ejecutado — derecha, revés, bandeja, víbora, smash y voleas — proporcionando un desglose cuantitativo de la distribución técnica durante cada sesión.",
  },
  {
    icon: Gauge,
    title: "Velocidad de Pelota",
    desc: "Mediante algoritmos de procesamiento inercial, el dispositivo calcula la velocidad estimada de salida de la pelota tras cada impacto, permitiendo evaluar la potencia efectiva de cada golpe y su evolución a lo largo del tiempo.",
  },
  {
    icon: TriangleRight,
    title: "Ángulo de Golpeo",
    desc: "Los sensores de fusión inercial determinan con precisión el ángulo de la pala en el momento del impacto, ofreciendo información clave sobre la orientación de la superficie de contacto y su influencia en la trayectoria de la pelota.",
  },
  {
    icon: Footprints,
    title: "Distancia Recorrida",
    desc: "El módulo de seguimiento de actividad registra la distancia total recorrida por el jugador durante el tiempo de uso activo, aportando métricas de movilidad y esfuerzo físico acumulado por sesión.",
  },
];

const ProductPadel = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero — full width image with text overlay */}
      <section className="relative w-full">
        <img src={heroImage} alt="PadelTech — Pala de pádel Kynetik" className="w-full h-[70vh] object-cover" />
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
                <a href="#features">Ver Características</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features — 4 cards */}
      <section id="features" className="section-padding bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Características</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Ingeniería de Alto Rendimiento</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product render image */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img src={renderImage} alt="PadelTech render del dispositivo" className="w-full max-w-md mx-auto" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Diseñado para Desaparecer</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fabricado en silicona de grado deportivo, el PadelTech se integra de forma discreta en tu pala. Su acabado totalmente negro con grabado en relieve "Padel Tech" refleja una estética minimalista y profesional.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Carcasa de silicona negra mate resistente a impactos.</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Peso ultraligero de 10 g sin afectar al centro de masas.</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Sistema de fijación universal compatible con todas las palas.</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Sin batería: autoalimentado por energy harvesting.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Capabilities / Funcionalidades */}
      <section className="section-padding bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Funcionalidades</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Datos que Transforman tu Juego</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <TechSpecsSection />
    </main>
    <Footer />
  </>
);

export default ProductPadel;
