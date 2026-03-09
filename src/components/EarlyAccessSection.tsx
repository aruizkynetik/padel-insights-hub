import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EarlyAccessSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section id="early-access" className="section-padding bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Early Access</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Be the First to <span className="gradient-text">Play Smarter</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our waitlist and get exclusive early access pricing, beta testing opportunities, and product updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-surface border-border h-12 text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" variant="hero" size="lg">
              Join Waitlist
            </Button>
          </form>
          <p className="text-muted-foreground text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
