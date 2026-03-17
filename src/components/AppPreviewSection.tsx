import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const AppPreviewSection = () => (
  <section id="app" className="section-padding">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1"
      >
        <div className="w-full max-w-sm mx-auto aspect-[9/16] rounded-3xl bg-gradient-to-br from-card via-primary/5 to-card flex items-center justify-center border border-border">
          <Smartphone className="w-16 h-16 text-primary/40" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-1 lg:order-2"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">App Complementaria</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Tu Juego, <span className="gradient-text">Visualizado</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          La app de Kynetik transforma los datos del sensor en información visual y accionable.
        </p>
        <div className="space-y-4">
          {[
            "Dashboard de rendimiento con estadísticas en tiempo real",
            "Analítica sesión a sesión",
            "Seguimiento de progreso con tendencias históricas",
            "Gráficos detallados de potencia, efecto y precisión",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-secondary-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AppPreviewSection;
