const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground mb-3">
            PADEL<span className="text-primary">SENSE</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            The smart sensor revolutionizing padel training with data-driven insights.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#specs" className="hover:text-foreground transition-colors">Tech Specs</a></li>
            <li><a href="#app" className="hover:text-foreground transition-colors">Mobile App</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
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
        © {new Date().getFullYear()} PadelSense Technologies. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
