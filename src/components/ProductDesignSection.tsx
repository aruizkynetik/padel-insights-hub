import { motion } from "framer-motion";
import { Feather, Shield, Plug, BatteryFull, Wifi } from "lucide-react";
import productImage from "@/assets/product-detail.png";

const specs = [
  { icon: Feather, label: "Lightweight", value: "Only 8 grams" },
  { icon: Shield, label: "Durable", value: "IP67 rated" },
  { icon: Plug, label: "Easy Mount", value: "Universal clip" },
  { icon: BatteryFull, label: "Battery Life", value: "20+ hours" },
  { icon: Wifi, label: "Connectivity", value: "Bluetooth 5.3" },
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
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Product Design</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Engineered for <span className="gradient-text">Performance</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Designed to be invisible on your racket. Precision-engineered with aerospace-grade materials, PadelSense won't affect your swing or balance.
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
        <img
          src={productImage}
          alt="PadelSense sensor device close-up"
          className="w-full max-w-md mx-auto rounded-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default ProductDesignSection;
