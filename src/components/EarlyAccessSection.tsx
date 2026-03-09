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
    toast.success("¡Estás en la lista! Te contactaremos pronto.");
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
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Acceso Anticipado</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Sé el Primero en <span className="gradient-text">Jugar Más Inteligente</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Únete a nuestra lista de espera y obtén acceso anticipado con precios exclusivos, oportunidades de beta testing y actualizaciones del producto.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-surface border-border h-12 text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" variant="hero" size="lg">
              Unirse
            </Button>
          </form>
          <p className="text-muted-foreground text-xs mt-4">Sin spam. Cancela cuando quieras.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
