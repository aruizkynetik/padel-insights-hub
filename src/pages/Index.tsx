import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollCropImage from "@/components/ScrollCropImage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, BarChart3 } from "lucide-react";
import sportBoxing from "@/assets/sport-boxing.jpg";
import sportRunning from "@/assets/sport-running.jpg";
import sportTech from "@/assets/sport-tech.jpg";
import sportPadelAction from "@/assets/sport-padel-action.jpg";

const products = [
  { name: "PadelTech", sport: "Pádel", desc: "Sensor inteligente para tu pala. Mide potencia, spin y punto de impacto.", link: "/productos/padel", icon: Target },
  { name: "BoxTech", sport: "Boxeo", desc: "Sensor para guantes de boxeo. Analiza potencia, velocidad y combinaciones.", link: "/productos/boxeo", icon: Zap },
  { name: "Próximamente", sport: "Nuevos deportes", desc: "Estamos desarrollando tecnología para más disciplinas deportivas.", link: "/productos/proximamente", icon: BarChart3 },
];

const Index = () => (
  <>
    <Navbar />
    <HeroSection />

    {/* Sport image — Boxing */}
    <ScrollCropImage src={sportBoxing} alt="Boxeador entrenando" className="h-[60vh]">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-lg">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            La tecnología no reemplaza al atleta. Lo potencia.
          </h2>
          <p className="text-white/80 text-lg drop-shadow-md">
            Cada deporte tiene su lenguaje. Nuestros sensores aprenden a hablarlo para darte respuestas que antes solo existían en la intuición.
          </p>
        </motion.div>
      </div>
    </ScrollCropImage>

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

    {/* Sport image — Measure quote */}
    <ScrollCropImage src={sportTech} alt="Tecnología deportiva" className="h-[60vh]">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16">
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-lg text-right">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Lo que se mide, crece. Lo que no se mide, se estanca.
          </h2>
          <p className="text-white/80 text-lg drop-shadow-md">
            Los datos objetivos son el catalizador del progreso. Sin métricas, la mejora es invisible. Con ellas, cada sesión se convierte en un paso medible hacia tu mejor versión.
          </p>
        </motion.div>
      </div>
    </ScrollCropImage>

    {/* Vision section */}
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Nuestra Visión</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">El Futuro del Entrenamiento es Inteligente</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creemos en un mundo donde cada deportista, independientemente de su nivel, tiene acceso a las mismas herramientas de análisis que los profesionales. La tecnología democratiza el rendimiento.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Sport image — Running */}
    <ScrollCropImage src={sportRunning} alt="Atleta corriendo" className="h-[60vh]">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            El rendimiento no se siente. Se mide.
          </h2>
          <p className="text-white/80 text-lg drop-shadow-md">
            La diferencia entre entrenar y entrenar con propósito está en los datos. Transforma tu esfuerzo en resultados cuantificables.
          </p>
        </motion.div>
      </div>
    </ScrollCropImage>

    {/* Padel action image */}
    <ScrollCropImage src={sportPadelAction} alt="Jugador de pádel en acción" className="h-[60vh]">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-end justify-start px-8 md:px-16 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Donde la precisión se encuentra con la pasión.
          </h2>
          <p className="text-white/80 text-lg drop-shadow-md">
            Kynetik nace de la convicción de que la tecnología y el deporte son aliados naturales. Juntos, desbloquean un potencial que antes era invisible.
          </p>
        </motion.div>
      </div>
    </ScrollCropImage>

    <Footer />
  </>
);

export default Index;
