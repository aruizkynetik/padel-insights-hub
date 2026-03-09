import { motion } from "framer-motion";

const specRows = [
  { label: "Weight", value: "8 grams" },
  { label: "Dimensions", value: "32 × 24 × 10 mm" },
  { label: "Connectivity", value: "Bluetooth 5.3 LE" },
  { label: "Battery", value: "Rechargeable Li-Po, 20+ hours" },
  { label: "Charging", value: "USB-C, 1hr full charge" },
  { label: "Sensors", value: "9-axis IMU (accelerometer, gyroscope, magnetometer)" },
  { label: "Water Resistance", value: "IP67" },
  { label: "Compatibility", value: "All standard padel rackets" },
  { label: "App Support", value: "iOS 15+ / Android 12+" },
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
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Tech Specs</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Under the Hood
        </h2>
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
