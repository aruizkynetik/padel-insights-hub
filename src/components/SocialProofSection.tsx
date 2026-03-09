import { motion } from "framer-motion";
import { Building, Brain, Users } from "lucide-react";

const items = [
  {
    icon: Building,
    title: "Academy Partnerships",
    desc: "Collaborating with top padel academies to integrate PadelSense into professional training programs.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    desc: "Upcoming AI features will provide personalized coaching tips and predict areas for improvement.",
  },
  {
    icon: Users,
    title: "Community Features",
    desc: "Compare stats with friends, join challenges, and build a community of data-driven players.",
  },
];

const SocialProofSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Vision</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          The Future of Padel
        </h2>
        <p className="text-muted-foreground text-lg">
          We're building more than a sensor — we're building the ecosystem that will redefine how padel is played and coached.
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
