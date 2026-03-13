import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ShoppingBag, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import kynetikLogo from "@/assets/kynetik-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const openDropdown = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const DropdownWrapper = ({ name, label, children }: { name: string; label: string; children: React.ReactNode }) => (
    <div
      className="relative"
      onMouseEnter={() => openDropdown(name)}
      onMouseLeave={closeDropdown}
    >
      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        {label} <ChevronDown size={14} className={`transition-transform ${activeDropdown === name ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {activeDropdown === name && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[200px] bg-card border border-border rounded-xl shadow-xl p-3 z-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const dropdownLink = (to: string, label: string) => (
    <Link
      key={to}
      to={to}
      onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
    >
      {label}
    </Link>
  );

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 h-16 gap-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={kynetikLogo} alt="Kynetik" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          {/* Productos */}
          <DropdownWrapper name="productos" label="Productos">
            {dropdownLink("/productos/padel", "Pádel")}
            {dropdownLink("/productos/boxeo", "Boxeo")}
            {dropdownLink("/productos/proximamente", "Próximamente")}
          </DropdownWrapper>

          <Link to="/app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">App</Link>

          {/* Suscripción */}
          <DropdownWrapper name="suscripcion" label="Suscripción">
            {dropdownLink("/suscripcion/padel", "Pádel")}
            {dropdownLink("/suscripcion/boxeo", "Boxeo")}
          </DropdownWrapper>

          <Link to="/unete" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Únete al movimiento</Link>
          <Link to="/conocenos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Conócenos</Link>
          <Link to="/soporte" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Soporte</Link>
        </div>

        {/* User & Cart icons */}
        <div className="hidden lg:flex items-center gap-2">
          {/* User dropdown */}
          <DropdownWrapper name="user" label="">
            <div className="w-[280px] p-2">
              <h3 className="font-display text-sm font-semibold text-foreground mb-3 px-2">Iniciar Sesión</h3>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground mb-2"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground mb-2"
              />
              <Link to="/recuperar-password" onClick={() => setActiveDropdown(null)} className="text-xs text-primary hover:underline block mb-3 px-1">
                ¿Has olvidado tu contraseña?
              </Link>
              <button className="w-full bg-primary text-primary-foreground rounded-lg py-2 text-sm font-semibold hover:bg-primary/90 transition-colors mb-3">
                Iniciar Sesión
              </button>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">o</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <button className="w-full border border-border rounded-lg py-2 text-sm text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continuar con Google
              </button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                ¿Nuevo en Kynetik?{" "}
                <Link to="/registro" onClick={() => setActiveDropdown(null)} className="text-primary hover:underline">Regístrate aquí</Link>
              </p>
            </div>
          </DropdownWrapper>

          {/* Cart dropdown */}
          <DropdownWrapper name="cart" label="">
            <div className="w-[280px] p-2">
              <h3 className="font-display text-sm font-semibold text-foreground mb-3 px-2">Carrito</h3>
              <p className="text-sm text-muted-foreground text-center py-6">Tu bolsa está vacía</p>
              <div className="border-t border-border pt-3 mt-2">
                <button className="w-full bg-primary text-primary-foreground rounded-lg py-2 text-sm font-semibold hover:bg-primary/90 transition-colors mb-3">
                  Iniciar Sesión
                </button>
                <p className="text-xs text-muted-foreground px-2 mb-1 font-semibold">Mi perfil</p>
                {dropdownLink("/perfil/pedidos", "Pedidos")}
                {dropdownLink("/perfil/favoritos", "Favoritos")}
                {dropdownLink("/perfil/cuenta", "Cuenta")}
              </div>
            </div>
          </DropdownWrapper>
        </div>

        {/* Replace label-less dropdown triggers with icons */}
        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground ml-auto" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 flex flex-col gap-3"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Productos</p>
          {dropdownLink("/productos/padel", "Pádel")}
          {dropdownLink("/productos/boxeo", "Boxeo")}
          {dropdownLink("/productos/proximamente", "Próximamente")}
          <Link to="/app" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground px-3 py-2">App</Link>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Suscripción</p>
          {dropdownLink("/suscripcion/padel", "Pádel")}
          {dropdownLink("/suscripcion/boxeo", "Boxeo")}
          <Link to="/unete" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground px-3 py-2">Únete al movimiento</Link>
          <Link to="/conocenos" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground px-3 py-2">Conócenos</Link>
          <Link to="/soporte" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground px-3 py-2">Soporte</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
