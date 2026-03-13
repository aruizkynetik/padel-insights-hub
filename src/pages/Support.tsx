import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const Support = () => {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.trim() || !form.message.trim()) return;
    toast.success("¡Mensaje enviado! Te responderemos pronto.");
    setForm({ email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding min-h-[80vh] flex items-center">
          <div className="max-w-xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary" size={32} />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Soporte</h1>
              <p className="text-muted-foreground">¿Tienes alguna duda o problema? Escríbenos y te ayudaremos lo antes posible.</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                className="bg-muted border-border h-12 text-foreground placeholder:text-muted-foreground"
              />
              <Textarea
                placeholder="Describe tu consulta o problema..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                maxLength={2000}
                rows={6}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
              />
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Support;
