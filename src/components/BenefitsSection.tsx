import { motion } from "framer-motion";
import { Users, GraduationCap, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Para Jugadores",
    items: ["Mejora más rápido con datos reales", "Sigue tu progreso semana a semana", "Identifica y corrige debilidades"],
  },
  {
    icon: GraduationCap,
    title: "Para Entrenadores",
    items: ["Análisis objetivo del rendimiento", "Planes de entrenamiento basados en datos", "Monitoriza múltiples jugadores"],
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Basado en Datos",
    items: ["Establece objetivos medibles", "Compara sesiones y partidos", "Entiende los patrones de tu juego"],
  },
];

const BenefitsSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Beneficios</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Diseñado para Todos en la Pista
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">{b.title}</h3>
            <ul className="space-y-3">
              {b.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
