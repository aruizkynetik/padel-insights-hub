import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-product.png";
import productDetail from "@/assets/product-detail.png";
import { Zap, Target, BarChart3, Wifi, Battery, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Zap, title: "Potencia de Golpeo", desc: "Mide la fuerza de cada golpe en tiempo real." },
  { icon: Target, title: "Punto de Impacto", desc: "Detecta dónde impacta la bola en la pala." },
  { icon: BarChart3, title: "Análisis de Spin", desc: "Cuantifica el efecto aplicado a cada golpe." },
  { icon: Wifi, title: "Conectividad Inalámbrica", desc: "Bluetooth 5.0 para sincronización instantánea." },
  { icon: Battery, title: "Batería de Larga Duración", desc: "Hasta 20 horas de uso continuo." },
  { icon: Smartphone, title: "App Integrada", desc: "Visualiza tus estadísticas en la app Kynetik." },
];

const ProductPadel = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">Producto Estrella</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">PadelTech</h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              El sensor inteligente que se acopla a tu pala de pádel y convierte cada golpe en datos accionables. Entrena mejor, juega más inteligente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">Comprar Ahora</Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#features">Ver Características</a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            <img src={heroImage} alt="PadelTech sensor" className="w-full rounded-2xl animate-float" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Características</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Tecnología de Alto Rendimiento</h2>
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

      {/* Product detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} src={productDetail} alt="PadelTech detalle" className="w-full rounded-2xl" />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Diseñado para el Rendimiento</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Peso ultraligero de solo 8g que no afecta tu juego.</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Resistente al sudor y a impactos (IP67).</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Sistema de fijación universal compatible con todas las palas.</li>
              <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />Carga rápida USB-C: 1 hora para carga completa.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Especificaciones Técnicas</h2>
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              ["Peso", "8 g"], ["Dimensiones", "30 × 15 × 5 mm"], ["Batería", "20 h"], ["Carga", "USB-C (1h)"],
              ["Conectividad", "Bluetooth 5.0"], ["Sensores", "Acelerómetro + Giroscopio"], ["Resistencia", "IP67"], ["Compatibilidad", "Todas las palas"],
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

export default ProductPadel;
