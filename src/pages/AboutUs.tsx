import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart } from "lucide-react";

const mvv = [
  { icon: Target, title: "Misión", text: "Democratizar el acceso a la tecnología deportiva de alto rendimiento, ofreciendo herramientas inteligentes que permitan a cualquier deportista mejorar su técnica mediante datos objetivos y análisis avanzado." },
  { icon: Eye, title: "Visión", text: "Convertirnos en la plataforma de referencia mundial en tecnología wearable para deportes de raqueta y contacto, liderando la transformación digital del entrenamiento deportivo." },
  { icon: Heart, title: "Valores", text: "Innovación constante, accesibilidad para todos los niveles, rigor científico en el análisis de datos, compromiso con la comunidad deportiva y sostenibilidad en nuestros procesos de fabricación." },
];

const AboutUs = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Sobre Nosotros</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Conócenos</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">El Proyecto Kynetik</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Kynetik nació en 2024 de la pasión de un grupo de ingenieros y deportistas que compartían una frustración común: la falta de datos objetivos para mejorar en deportes como el pádel y el boxeo.
              </p>
              <p>
                Observamos que, mientras deportes como el ciclismo o el running contaban con dispositivos avanzados de tracking, los deportes de raqueta y contacto seguían dependiendo exclusivamente de la observación subjetiva. Decidimos cambiar eso.
              </p>
              <p>
                Nuestro equipo multidisciplinar combina expertos en ingeniería electrónica, ciencia de datos, diseño industrial y entrenamiento deportivo. Desde nuestras oficinas en España, desarrollamos sensores inteligentes que se integran de forma invisible en el equipamiento deportivo, capturando miles de datos por segundo y transformándolos en métricas comprensibles.
              </p>
              <p>
                Hoy, Kynetik cuenta con dos productos en desarrollo — PadelTech y BoxTech — y un ambicioso roadmap que incluye expansión a nuevos deportes, análisis con inteligencia artificial y una comunidad global de deportistas conectados por los datos.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mvv.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutUs;
