import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Nivel 1",
    price: "0",
    period: "Gratis",
    features: ["Estadísticas básicas de golpeo", "Contador de golpes por sesión", "Resumen post-entrenamiento", "1 perfil de boxeador"],
    cta: "Empezar Gratis",
    highlighted: false,
  },
  {
    name: "Nivel 2",
    price: "3,99",
    period: "/mes",
    features: ["Todo lo de Nivel 1", "Análisis de potencia por tipo de golpe", "Velocidad y frecuencia detallada", "Historial ilimitado", "Comparativa con otros boxeadores", "Exportar datos CSV"],
    cta: "Suscribirme",
    highlighted: true,
  },
  {
    name: "Nivel 3",
    price: "4,99",
    period: "/mes",
    features: ["Todo lo de Nivel 2", "Recomendaciones IA personalizadas", "Análisis de combinaciones", "Modo entrenador (hasta 10 alumnos)", "Soporte prioritario", "Acceso anticipado a nuevas funciones"],
    cta: "Suscribirme",
    highlighted: false,
  },
];

const SubscriptionBoxeo = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Suscripción Boxeo</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Elige tu Plan</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Desbloquea todo el potencial de tu BoxTech con el plan que mejor se adapte a ti.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                className={`relative bg-card border rounded-2xl p-8 flex flex-col ${plan.highlighted ? "border-primary box-glow" : "border-border"}`}>
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">Popular</span>
                )}
                <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "hero" : "heroOutline"} size="lg" className="w-full">{plan.cta}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default SubscriptionBoxeo;
