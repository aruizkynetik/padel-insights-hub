import { motion } from "framer-motion";
import { Paperclip, Play, Database, BarChart } from "lucide-react";

const steps = [
  { icon: Paperclip, step: "01", title: "Attach", desc: "Clip PadelSense to the base of your racket." },
  { icon: Play, step: "02", title: "Play", desc: "Play your game normally — no distractions." },
  { icon: Database, step: "03", title: "Record", desc: "Every shot is captured with precision sensors." },
  { icon: BarChart, step: "04", title: "Analyze", desc: "Review your data in the companion app." },
];

const HowItWorksSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Simple as 1-2-3-4
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative text-center"
          >
            <span className="font-display text-6xl font-bold text-primary/10">{s.step}</span>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 -mt-6 relative z-10">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
