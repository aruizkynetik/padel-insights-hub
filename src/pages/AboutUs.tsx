import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollCropImage from "@/components/ScrollCropImage";
import { Linkedin } from "lucide-react";

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
import missionImg from "@/assets/about-mission.jpg";
import visionImg from "@/assets/about-vision.jpg";
import valuesImg from "@/assets/about-values.jpg";

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
      {/* Intro */}
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
        </div>
      </section>

      {/* Misión */}
      <ScrollCropImage src={missionImg} alt="Misión Kynetik" className="h-[60vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-xl">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Misión</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Democratizar la tecnología deportiva
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed drop-shadow-md">
              Nuestra misión es hacer accesible la tecnología de análisis deportivo de alto rendimiento a cualquier deportista, independientemente de su nivel. Creemos que los datos objetivos no deben ser un privilegio exclusivo de los profesionales, sino una herramienta al alcance de todos para transformar el esfuerzo en progreso medible y constante.
            </p>
          </motion.div>
        </div>
      </ScrollCropImage>

      <div className="h-24" />

      {/* Visión */}
      <ScrollCropImage src={visionImg} alt="Visión Kynetik" className="h-[60vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-xl text-right">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Visión</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Liderar la transformación digital del deporte
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed drop-shadow-md">
              Aspiramos a convertirnos en la plataforma de referencia mundial en tecnología wearable para deportes de raqueta y contacto. Visualizamos un ecosistema donde cada sesión de entrenamiento genera conocimiento, cada golpe se convierte en aprendizaje y cada deportista forma parte de una comunidad global conectada por la inteligencia de los datos.
            </p>
          </motion.div>
        </div>
      </ScrollCropImage>

      <div className="h-24" />

      {/* Valores */}
      <ScrollCropImage src={valuesImg} alt="Valores Kynetik" className="h-[60vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Valores</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Innovación, rigor y compromiso
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed drop-shadow-md">
              Innovación constante como motor de cada decisión. Rigor científico en el análisis y la interpretación de datos. Accesibilidad para todos los niveles deportivos. Compromiso genuino con la comunidad deportiva. Y sostenibilidad en nuestros procesos de diseño y fabricación, porque el futuro del deporte también depende de cómo lo construimos.
            </p>
          </motion.div>
        </div>
      </ScrollCropImage>

      <div className="h-24" />

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
