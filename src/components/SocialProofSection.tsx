import { motion } from "framer-motion";
import { Building, Brain, Users } from "lucide-react";

const items = [
  {
    icon: Building,
    title: "Academias Asociadas",
    desc: "Colaborando con las mejores academias de pádel para integrar PadelSense en programas de entrenamiento profesional.",
  },
  {
    icon: Brain,
    title: "Análisis con IA",
    desc: "Próximas funciones de IA que ofrecerán consejos personalizados y predicción de áreas de mejora.",
  },
  {
    icon: Users,
    title: "Comunidad",
    desc: "Compara estadísticas con amigos, participa en retos y forma parte de una comunidad de jugadores data-driven.",
  },
];

const SocialProofSection = () => (
  <section id="conocenos" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Visión</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          El Futuro del Pádel
        </h2>
        <p className="text-muted-foreground text-lg">
          Estamos construyendo más que un sensor — estamos creando el ecosistema que redefinirá cómo se juega y se entrena el pádel.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
