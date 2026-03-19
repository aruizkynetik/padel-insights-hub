import { motion } from "framer-motion";

const specRows = [
  { label: "Peso", value: "10 gramos" },
  { label: "Dimensiones", value: "32 × 24 × 10 mm" },
  { label: "Alimentación", value: "Energy Harvesting (sin batería)" },
  { label: "Conectividad", value: "Bluetooth 5.3 LE" },
  { label: "Sensores", value: "IMU 9 ejes (acelerómetro, giroscopio, magnetómetro)" },
  { label: "Resistencia", value: "IP67 — impactos, vibraciones, líquidos" },
  { label: "Material", value: "Silicona de grado deportivo" },
  { label: "Compatibilidad", value: "Todas las palas de pádel estándar" },
  { label: "Soporte de App", value: "iOS 15+ / Android 12+" },
];

const TechSpecsSection = () => (
  <section id="specs" className="section-padding bg-card/50">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Especificaciones</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">Bajo el Capó</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-2xl overflow-hidden"
      >
        {specRows.map((s, i) => (
          <div
            key={s.label}
            className={`flex justify-between items-center px-6 py-4 ${
              i !== specRows.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-muted-foreground text-sm">{s.label}</span>
            <span className="text-foreground font-medium text-sm text-right">{s.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechSpecsSection;
