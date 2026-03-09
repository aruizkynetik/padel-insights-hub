import { motion } from "framer-motion";
import appPreview from "@/assets/app-preview.png";

const AppPreviewSection = () => (
  <section id="app" className="section-padding">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1"
      >
        <img
          src={appPreview}
          alt="PadelSense companion mobile app showing performance dashboard"
          className="w-full max-w-sm mx-auto rounded-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-1 lg:order-2"
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Companion App</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Your Game, <span className="gradient-text">Visualized</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          The PadelSense app transforms raw sensor data into beautiful, actionable insights.
        </p>
        <div className="space-y-4">
          {[
            "Performance dashboard with real-time stats",
            "Session-by-session analytics",
            "Progress tracking with historical trends",
            "Detailed graphs for power, spin, and accuracy",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-secondary-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AppPreviewSection;
