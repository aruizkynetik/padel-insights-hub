import { motion } from "framer-motion";
import { Eye, TrendingUp, Target } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "No Objective Data",
    description: "Players rely on gut feeling instead of measurable performance metrics to evaluate their game.",
  },
  {
    icon: TrendingUp,
    title: "Hard to Track Progress",
    description: "Without data, it's nearly impossible to see incremental improvements or identify weaknesses.",
  },
  {
    icon: Target,
    title: "Coaching Blind Spots",
    description: "Coaches depend on visual observation alone, missing subtle patterns in technique and consistency.",
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
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">The Problem</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Padel Training Is Flying Blind
        </h2>
        <p className="text-muted-foreground text-lg">
          Most padel players have zero insight into what's actually happening with their shots.
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
