import { Link } from "react-router-dom";
import kynetikLogo from "@/assets/kynetik-logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <Link to="/" className="inline-block mb-3">
            <img src={kynetikLogo} alt="Kynetik" className="h-8 w-auto" />
          </Link>
          <p className="text-muted-foreground text-sm">
            Tecnología inteligente que revoluciona el entrenamiento deportivo con datos y analítica avanzada.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Productos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/productos/padel" className="hover:text-foreground transition-colors">PadelTech</Link></li>
            <li><Link to="/productos/boxeo" className="hover:text-foreground transition-colors">BoxTech</Link></li>
            <li><Link to="/productos/proximamente" className="hover:text-foreground transition-colors">Próximamente</Link></li>
            <li><Link to="/app" className="hover:text-foreground transition-colors">App Móvil</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Empresa</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/conocenos" className="hover:text-foreground transition-colors">Conócenos</Link></li>
            <li><Link to="/unete" className="hover:text-foreground transition-colors">Únete al movimiento</Link></li>
            <li><Link to="/soporte" className="hover:text-foreground transition-colors">Soporte</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidad</a></li>
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
