const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground mb-3">
            KYNE<span className="text-primary">TIK</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Tecnología inteligente que revoluciona el entrenamiento deportivo con datos y analítica avanzada.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Productos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#productos" className="hover:text-foreground transition-colors">PadelSense</a></li>
            <li><a href="#specs" className="hover:text-foreground transition-colors">Especificaciones</a></li>
            <li><a href="#app" className="hover:text-foreground transition-colors">App Móvil</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Empresa</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#conocenos" className="hover:text-foreground transition-colors">Conócenos</a></li>
            <li><a href="#soporte" className="hover:text-foreground transition-colors">Soporte</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Términos de Servicio</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Social</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Kynetik Technologies. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
