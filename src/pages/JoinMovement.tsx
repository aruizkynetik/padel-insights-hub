import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, Rocket, CalendarDays, Gift } from "lucide-react";

const benefits = [
  { icon: Mail, title: "Newsletter Exclusiva", desc: "Recibe contenido exclusivo sobre tecnología deportiva, consejos de entrenamiento y novedades de Kynetik directamente en tu correo." },
  { icon: Rocket, title: "Acceso Anticipado", desc: "Sé el primero en probar nuevos productos y funcionalidades antes de su lanzamiento oficial al público." },
  { icon: CalendarDays, title: "Invitaciones a Eventos", desc: "Accede a eventos exclusivos, torneos patrocinados y sesiones de demostración de productos Kynetik." },
  { icon: Gift, title: "Descuentos Exclusivos", desc: "Disfruta de ofertas especiales y descuentos en productos y suscripciones solo para miembros de la comunidad." },
];

const JoinMovement = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("¡Bienvenido al movimiento Kynetik!");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Comunidad</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Únete al Movimiento</h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">Forma parte de la revolución tecnológica en el deporte. Ventajas exclusivas para miembros de la comunidad Kynetik.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {benefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold mb-2">Suscríbete a la Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-6">Introduce tu email y empieza a recibir contenido exclusivo.</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button type="submit" variant="hero">Unirme</Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JoinMovement;
