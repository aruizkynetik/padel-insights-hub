import { motion } from "framer-motion";
import { Zap, BarChart3, Smartphone } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Acopla y Olvídate",
    description: "Fija el sensor a cualquier pala de pádel en segundos. Es tan ligero que no lo notarás.",
  },
  {
    icon: BarChart3,
    title: "Registro Automático",
    description: "Cada golpe se captura automáticamente — potencia, efecto, posición de impacto y timing.",
  },
  {
    icon: Smartphone,
    title: "Analítica Instantánea",
    description: "Abre la app tras tu sesión y ve exactamente cómo has rendido con desgloses detallados.",
  },
];

const SolutionSection = () => (
  <section id="productos" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">PadelSense</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Pádel Basado en Datos, <span className="gradient-text">Por Fin</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          PadelSense cierra la brecha entre la intuición y los hechos, dándote claridad sobre cada aspecto de tu juego.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
