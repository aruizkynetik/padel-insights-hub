import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-product.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32">
    {/* Glow background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">
          Next-Gen Padel Technology
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
          Unlock Your{" "}
          <span className="gradient-text">Full Potential</span>{" "}
          on the Court
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
          The smart sensor that attaches to your padel racket and turns every shot into actionable data. Train smarter. Play better.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#early-access">Join Early Access</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#solution">Learn More</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative"
      >
        <img
          src={heroImage}
          alt="PadelSense smart sensor attached to a padel racket"
          className="w-full rounded-2xl animate-float"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
