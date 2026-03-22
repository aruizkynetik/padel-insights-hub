import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollCropImage from "@/components/ScrollCropImage";
import { motion } from "framer-motion";
import sportBoxing from "@/assets/sport-boxing.jpg";
import sportRunning from "@/assets/sport-running.jpg";
import sportTech from "@/assets/sport-tech.jpg";
import sportPadelAction from "@/assets/sport-padel-action.jpg";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />

    {/* Sport image — Boxing */}
    <div className="py-3">
      <ScrollCropImage src={sportBoxing} alt="Boxeador entrenando" className="h-[60vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-lg">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              La tecnología no reemplaza al atleta. Lo potencia.
            </h2>
            <p className="text-white/80 text-base drop-shadow-md">
              Cada deporte tiene su lenguaje. Nuestros sensores aprenden a hablarlo para darte respuestas que antes solo existían en la intuición.
            </p>
          </motion.div>
        </div>
      </ScrollCropImage>
    </div>

    {/* Products overview — no specific product names */}
    <section id="descubre" className="section-padding">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-display text-xs font-semibold tracking-widest uppercase mb-3">Nuestros Dispositivos</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">Tecnología Para Cada Deporte</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Desarrollamos dispositivos inteligentes que se integran con tu equipamiento deportivo para capturar datos de rendimiento en tiempo real. Nuestros sensores de alta precisión registran cada movimiento, impacto y métrica relevante, transformando la información en análisis accionables que te permiten identificar fortalezas, corregir debilidades y acelerar tu progreso de forma objetiva y medible.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Sport image — Measure quote */}
    <div className="py-3">
      <ScrollCropImage src={sportTech} alt="Tecnología deportiva" className="h-[60vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-lg text-right">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              Lo que se mide, crece. Lo que no se mide, se estanca.
            </h2>
            <p className="text-white/80 text-base drop-shadow-md">
              Los datos objetivos son el catalizador del progreso. Sin métricas, la mejora es invisible. Con ellas, cada sesión se convierte en un paso medible hacia tu mejor versión.
            </p>
          </motion.div>
        </div>
      </ScrollCropImage>
    </div>

    {/* Vision section */}
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary font-display text-xs font-semibold tracking-widest uppercase mb-3">Nuestra Visión</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">El Futuro del Entrenamiento es Inteligente</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Creemos en un mundo donde cada deportista, independientemente de su nivel, tiene acceso a las mismas herramientas de análisis que los profesionales. La tecnología democratiza el rendimiento.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Sport image — Running */}
    <div className="py-3">
      <ScrollCropImage src={sportRunning} alt="Atleta corriendo" className="h-[60vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              El rendimiento no se siente. Se mide.
            </h2>
            <p className="text-white/80 text-base drop-shadow-md">
              La diferencia entre entrenar y entrenar con propósito está en los datos. Transforma tu esfuerzo en resultados cuantificables.
            </p>
          </motion.div>
        </div>
      </ScrollCropImage>
    </div>

    {/* Padel action image */}
    <div className="py-3">
      <ScrollCropImage src={sportPadelAction} alt="Jugador de pádel en acción" className="h-[60vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end justify-start px-8 md:px-16 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              Donde la precisión se encuentra con la pasión.
            </h2>
            <p className="text-white/80 text-base drop-shadow-md">
              Kynetik nace de la convicción de que la tecnología y el deporte son aliados naturales. Juntos, desbloquean un potencial que antes era invisible.
            </p>
          </motion.div>
        </div>
      </ScrollCropImage>
    </div>

    <Footer />
  </>
);

export default Index;
