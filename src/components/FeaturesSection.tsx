import { motion } from "framer-motion";
import { Zap, RotateCcw, Crosshair, Hash, Activity, Smartphone } from "lucide-react";

const features = [
  { icon: Zap, title: "Shot Power Tracking", desc: "Measure the force behind every smash, volley and bandeja." },
  { icon: RotateCcw, title: "Spin Detection", desc: "Understand your spin rates — flat, slice, or topspin." },
  { icon: Crosshair, title: "Impact Point Analysis", desc: "See exactly where the ball hits the racket face." },
  { icon: Hash, title: "Shot Count & Intensity", desc: "Track volume and effort across matches and training." },
  { icon: Activity, title: "Match Analytics", desc: "Full session breakdowns with trends over time." },
  { icon: Smartphone, title: "Mobile App Integration", desc: "All data syncs seamlessly to your phone." },
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
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Features</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Everything You Need to <span className="gradient-text">Level Up</span>
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
