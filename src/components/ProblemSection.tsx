import { motion } from "framer-motion";
import { Eye, TrendingUp, Target } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Sin Datos Objetivos",
    description: "Los jugadores se basan en sensaciones en lugar de métricas medibles para evaluar su juego.",
  },
  {
    icon: TrendingUp,
    title: "Difícil Medir el Progreso",
    description: "Sin datos, es casi imposible ver mejoras incrementales o identificar debilidades.",
  },
  {
    icon: Target,
    title: "Puntos Ciegos del Entrenador",
    description: "Los entrenadores dependen solo de la observación visual, perdiendo patrones sutiles en técnica y consistencia.",
  },
];

const ProblemSection = () => (
  <section id="problem" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">El Problema</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          El Entrenamiento de Pádel Va a Ciegas
        </h2>
        <p className="text-muted-foreground text-lg">
          La mayoría de jugadores de pádel no tienen visibilidad sobre lo que realmente pasa con sus golpes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
