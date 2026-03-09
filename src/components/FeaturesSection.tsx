import { motion } from "framer-motion";
import { Zap, RotateCcw, Crosshair, Hash, Activity, Smartphone } from "lucide-react";

const features = [
  { icon: Zap, title: "Potencia de Golpe", desc: "Mide la fuerza detrás de cada smash, volea y bandeja." },
  { icon: RotateCcw, title: "Detección de Efecto", desc: "Comprende tus efectos — plano, cortado o liftado." },
  { icon: Crosshair, title: "Punto de Impacto", desc: "Visualiza exactamente dónde golpea la bola en la pala." },
  { icon: Hash, title: "Conteo e Intensidad", desc: "Registra el volumen y esfuerzo en partidos y entrenamientos." },
  { icon: Activity, title: "Analítica de Partidos", desc: "Desgloses completos con tendencias a lo largo del tiempo." },
  { icon: Smartphone, title: "Integración con App", desc: "Todos los datos se sincronizan con tu móvil." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Características</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Todo lo que Necesitas para <span className="gradient-text">Subir de Nivel</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
