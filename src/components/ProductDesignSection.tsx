import { motion } from "framer-motion";
import { Feather, Shield, Plug, BatteryFull, Wifi, Box } from "lucide-react";

const specs = [
  { icon: Feather, label: "Ultraligero", value: "Solo 8 gramos" },
  { icon: Shield, label: "Resistente", value: "IP67" },
  { icon: Plug, label: "Fácil Montaje", value: "Clip universal" },
  { icon: BatteryFull, label: "Batería", value: "20+ horas" },
  { icon: Wifi, label: "Conectividad", value: "Bluetooth 5.3" },
];

const ProductDesignSection = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Diseño del Producto</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Diseñado para el <span className="gradient-text">Rendimiento</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Diseñado para ser invisible en tu pala. Fabricado con materiales de grado aeroespacial, PadelSense no afecta tu swing ni tu equilibrio.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {specs.map((s) => (
            <div key={s.label} className="bg-surface rounded-xl p-4 border border-border">
              <s.icon className="w-5 h-5 text-primary mb-2" />
              <p className="text-foreground font-semibold text-sm">{s.value}</p>
              <p className="text-muted-foreground text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-card via-primary/5 to-card flex items-center justify-center border border-border">
          <Box className="w-20 h-20 text-primary/40" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProductDesignSection;
