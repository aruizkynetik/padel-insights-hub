import { Link } from "react-router-dom";
import kynetikLogoVertical from "@/assets/kynetik-logo-vertical.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-8 mb-10">
        {/* Logo + tagline */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block mb-3">
            <img src={kynetikLogoVertical} alt="Kynetik" className="h-20 w-auto" />
          </Link>
          <p className="text-muted-foreground text-sm text-justify">
            Tecnología inteligente que revoluciona el entrenamiento deportivo con datos y analítica avanzada.
          </p>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">EMPRESA</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/conocenos" className="hover:text-foreground transition-colors">Quiénes somos</Link></li>
            <li><Link to="/unete" className="hover:text-foreground transition-colors">Movimiento K</Link></li>
            <li><Link to="/unete" className="hover:text-foreground transition-colors">Ventajas</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Trabaja con nosotros</a></li>
            <li><Link to="/productos/padel" className="hover:text-foreground transition-colors">Tienda</Link></li>
          </ul>
        </div>

        {/* Garantías */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">GARANTÍAS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Devoluciones</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Plazos de entrega</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Métodos de pago</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Compra segura</a></li>
          </ul>
        </div>

        {/* Atención al cliente */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">ATENCIÓN AL CLIENTE</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/soporte" className="hover:text-foreground transition-colors">Ayuda</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Seguimiento de envío</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Gastos de envío</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Cambios</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Factura</a></li>
          </ul>
        </div>

        {/* Idioma */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">IDIOMA</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors flex items-center gap-2"><span className="text-base">🇬🇧</span> English</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors flex items-center gap-2"><span className="text-base">🏴</span> Català</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors flex items-center gap-2"><span className="text-base">🇮🇹</span> Italiano</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors flex items-center gap-2"><span className="text-base">🇫🇷</span> Français</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">SOCIAL</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
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
