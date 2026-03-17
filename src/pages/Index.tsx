import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, BarChart3 } from "lucide-react";

const products = [
  { name: "PadelTech", sport: "Pádel", desc: "Sensor inteligente para tu pala. Mide potencia, spin y punto de impacto.", link: "/productos/padel", icon: Target },
  { name: "BoxTech", sport: "Boxeo", desc: "Sensor para guantes de boxeo. Analiza potencia, velocidad y combinaciones.", link: "/productos/boxeo", icon: Zap },
  { name: "Próximamente", sport: "Nuevos deportes", desc: "Estamos desarrollando tecnología para más disciplinas deportivas.", link: "/productos/proximamente", icon: BarChart3 },
];

const Index = () => (
  <>
    <Navbar />
    <HeroSection />

    {/* Products overview */}
    <section id="descubre" className="section-padding">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Nuestros Productos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Tecnología Para Cada Deporte</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Sensores inteligentes diseñados para capturar y analizar tu rendimiento deportivo.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <Link to={p.link} className="block bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="text-primary" size={28} />
                </div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{p.sport}</p>
                <h3 className="font-display text-2xl font-bold mb-3">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver más <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default Index;
