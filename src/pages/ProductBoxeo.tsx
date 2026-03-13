import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Target, BarChart3, Wifi, Battery, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Zap, title: "Potencia de Golpeo", desc: "Mide la fuerza de cada puñetazo en newtons." },
  { icon: Target, title: "Velocidad del Golpe", desc: "Detecta la velocidad de cada impacto en m/s." },
  { icon: BarChart3, title: "Frecuencia de Golpeo", desc: "Registra combinaciones y cadencia de golpes." },
  { icon: Wifi, title: "Conectividad Inalámbrica", desc: "Bluetooth 5.0 para sincronización instantánea." },
  { icon: Battery, title: "Batería de Larga Duración", desc: "Hasta 15 horas de entrenamiento continuo." },
  { icon: Smartphone, title: "App Integrada", desc: "Visualiza tus estadísticas en la app Kynetik." },
];

const ProductBoxeo = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">Nuevo Producto</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">BoxTech</h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              El sensor inteligente para guantes de boxeo que analiza cada golpe. Potencia, velocidad y precisión al alcance de tu mano.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">Comprar Ahora</Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#features">Ver Características</a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="w-full aspect-square bg-card border border-border rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary" size={48} />
              </div>
              <p className="text-muted-foreground text-sm">Imagen del producto próximamente</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Características</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Potencia Bajo Control</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Especificaciones Técnicas</h2>
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              ["Peso", "12 g"], ["Dimensiones", "35 × 20 × 8 mm"], ["Batería", "15 h"], ["Carga", "USB-C (1h)"],
              ["Conectividad", "Bluetooth 5.0"], ["Sensores", "Acelerómetro + Giroscopio + Presión"], ["Resistencia", "IP65"], ["Compatibilidad", "Guantes estándar"],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{k}</p>
                <p className="font-display font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ProductBoxeo;
