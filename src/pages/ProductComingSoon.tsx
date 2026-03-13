import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ProductComingSoon = () => {
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    toast.success("¡Gracias por tu sugerencia! La tendremos en cuenta.");
    setSuggestion("");
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding min-h-[80vh] flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Rocket className="text-primary" size={40} />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Próximamente</h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
                Estamos trabajando en nuevos dispositivos inteligentes para más deportes. Nuestro equipo de I+D está desarrollando sensores adaptados a las necesidades de cada disciplina.
              </p>
              <p className="text-muted-foreground mb-12">
                Tenis, golf, running, ciclismo... ¿Qué deporte te gustaría ver? Tu opinión nos importa.
              </p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="max-w-md mx-auto bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Sugiere un deporte</h3>
                <p className="text-sm text-muted-foreground mb-4">Inicia sesión para enviar tu propuesta y ser el primero en enterarte cuando lancemos.</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Textarea
                    placeholder="¿Qué deporte te gustaría que cubriera Kynetik? Describe cómo te ayudaría..."
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    required
                    maxLength={500}
                    rows={4}
                    className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                  <Button type="submit" variant="hero" className="w-full gap-2">
                    <Send size={16} /> Enviar Sugerencia
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductComingSoon;
