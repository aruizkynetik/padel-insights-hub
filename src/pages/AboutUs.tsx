import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Linkedin } from "lucide-react";

import aitorImg from "@/assets/team/aitor.jpg";
import carlosPImg from "@/assets/team/carlos-p.jpg";
import carlosQImg from "@/assets/team/carlos-q.jpg";
import alanImg from "@/assets/team/alan.jpg";
import ivanImg from "@/assets/team/ivan.jpg";
import joseImg from "@/assets/team/jose.jpg";
import diegoImg from "@/assets/team/diego.jpg";
import angelImg from "@/assets/team/angel.jpg";
import alexImg from "@/assets/team/alex.jpg";
import arnauImg from "@/assets/team/arnau.jpg";

const mvv = [
  { icon: Target, title: "Misión", text: "Democratizar el acceso a la tecnología deportiva de alto rendimiento, ofreciendo herramientas inteligentes que permitan a cualquier deportista mejorar su técnica mediante datos objetivos y análisis avanzado." },
  { icon: Eye, title: "Visión", text: "Convertirnos en la plataforma de referencia mundial en tecnología wearable para deportes de raqueta y contacto, liderando la transformación digital del entrenamiento deportivo." },
  { icon: Heart, title: "Valores", text: "Innovación constante, accesibilidad para todos los niveles, rigor científico en el análisis de datos, compromiso con la comunidad deportiva y sostenibilidad en nuestros procesos de fabricación." },
];

const team = [
  { name: "Aitor Turegano", role: "CEO & Co-Founder", desc: "Lidera la visión estratégica y el crecimiento de Kynetik.", img: aitorImg, linkedin: "#" },
  { name: "Carlos Peña", role: "CTO", desc: "Arquitecto del ecosistema tecnológico y desarrollo de firmware.", img: carlosPImg, linkedin: "#" },
  { name: "Carlos Quinto", role: "Head of Product", desc: "Define la hoja de ruta de producto y la experiencia de usuario.", img: carlosQImg, linkedin: "#" },
  { name: "Alan Aguilera", role: "Hardware Engineer", desc: "Diseño electrónico y optimización del sistema de sensores.", img: alanImg, linkedin: "#" },
  { name: "Ivan Zambrana", role: "Data Scientist", desc: "Modelos de IA para clasificación de golpeos y análisis predictivo.", img: ivanImg, linkedin: "#" },
  { name: "Jose Lamas", role: "Backend Engineer", desc: "Infraestructura cloud y procesamiento de datos en tiempo real.", img: joseImg, linkedin: "#" },
  { name: "Diego Rodriguez", role: "Mobile Developer", desc: "Desarrollo de la app Kynetik para iOS y Android.", img: diegoImg, linkedin: "#" },
  { name: "Angel Morales", role: "Industrial Designer", desc: "Diseño ergonómico y selección de materiales del dispositivo.", img: angelImg, linkedin: "#" },
  { name: "Alex Sanchez", role: "Marketing Lead", desc: "Estrategia de marca, comunicación y comunidad deportiva.", img: alexImg, linkedin: "#" },
  { name: "Arnau Ruiz", role: "Sports Analyst", desc: "Metodología de entrenamiento y validación de métricas deportivas.", img: arnauImg, linkedin: "#" },
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
              <p>Kynetik nació en 2024 de la pasión de un grupo de ingenieros y deportistas que compartían una frustración común: la falta de datos objetivos para mejorar en deportes como el pádel y el boxeo.</p>
              <p>Observamos que, mientras deportes como el ciclismo o el running contaban con dispositivos avanzados de tracking, los deportes de raqueta y contacto seguían dependiendo exclusivamente de la observación subjetiva. Decidimos cambiar eso.</p>
              <p>Nuestro equipo multidisciplinar combina expertos en ingeniería electrónica, ciencia de datos, diseño industrial y entrenamiento deportivo. Desde nuestras oficinas en España, desarrollamos sensores inteligentes que se integran de forma invisible en el equipamiento deportivo, capturando miles de datos por segundo y transformándolos en métricas comprensibles.</p>
              <p>Hoy, Kynetik cuenta con dos productos en desarrollo — PadelTech y BoxTech — y un ambicioso roadmap que incluye expansión a nuevos deportes, análisis con inteligencia artificial y una comunidad global de deportistas conectados por los datos.</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
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

      {/* Team section */}
      <section className="section-padding bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Equipo</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Las Personas Detrás de Kynetik</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/30 transition-colors group"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-border group-hover:border-primary/50 transition-colors"
                />
                <h3 className="font-display text-sm font-bold mb-0.5">{member.name}</h3>
                <p className="text-primary text-xs font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-3">{member.desc}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
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
