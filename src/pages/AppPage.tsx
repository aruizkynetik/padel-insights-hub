import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart3, Activity, TrendingUp, Users, Bell, Shield, Smartphone } from "lucide-react";

const dataPoints = [
  { icon: BarChart3, title: "Dashboard de Rendimiento", desc: "Vista general con métricas clave: golpes totales, potencia media, mejora semanal y puntuación global." },
  { icon: Activity, title: "Análisis por Sesión", desc: "Desglose detallado de cada entrenamiento: duración, intensidad, tipos de golpe y zonas de impacto." },
  { icon: TrendingUp, title: "Progreso Histórico", desc: "Gráficos de evolución a lo largo del tiempo. Compara semanas, meses y temporadas." },
  { icon: Users, title: "Comparativa Social", desc: "Compárate con otros jugadores de tu nivel y descubre áreas de mejora." },
  { icon: Bell, title: "Alertas Inteligentes", desc: "Notificaciones personalizadas sobre objetivos alcanzados, rachas y recomendaciones." },
  { icon: Shield, title: "Datos Seguros", desc: "Tu información encriptada y protegida. Cumplimiento RGPD garantizado." },
];

const AppPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4">Aplicación Móvil</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">Tu Entrenador en el Bolsillo</h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              La app Kynetik transforma los datos de tus sensores en información visual y accionable. Disponible para iOS y Android.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            <div className="w-full aspect-[9/16] max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-card via-primary/5 to-card flex items-center justify-center border border-border">
              <Smartphone className="w-16 h-16 text-primary/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data points */}
      <section className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Funcionalidades</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Todo lo que Necesitas</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataPoints.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Download */}
      <section className="section-padding">
        <div className="max-w-xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Smartphone className="text-primary mx-auto mb-6" size={48} />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Descarga la App</h2>
            <p className="text-muted-foreground mb-8">Escanea el código QR con tu teléfono para descargar la aplicación.</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-40 h-40 bg-foreground rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <div className="w-36 h-36 bg-background rounded-lg grid grid-cols-5 grid-rows-5 gap-0.5 p-2">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className={`rounded-sm ${[0,1,2,4,5,6,10,12,14,18,19,20,22,23,24].includes(i) ? "bg-foreground" : "bg-background"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold">Android</p>
                <p className="text-xs text-muted-foreground">Google Play Store</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-40 h-40 bg-foreground rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <div className="w-36 h-36 bg-background rounded-lg grid grid-cols-5 grid-rows-5 gap-0.5 p-2">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className={`rounded-sm ${[0,2,4,5,7,9,10,11,12,14,15,17,19,20,22,24].includes(i) ? "bg-foreground" : "bg-background"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold">iOS</p>
                <p className="text-xs text-muted-foreground">Apple App Store</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AppPage;
