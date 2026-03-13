import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductPadel from "./pages/ProductPadel";
import ProductBoxeo from "./pages/ProductBoxeo";
import ProductComingSoon from "./pages/ProductComingSoon";
import AppPage from "./pages/AppPage";
import SubscriptionPadel from "./pages/SubscriptionPadel";
import SubscriptionBoxeo from "./pages/SubscriptionBoxeo";
import JoinMovement from "./pages/JoinMovement";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productos/padel" element={<ProductPadel />} />
          <Route path="/productos/boxeo" element={<ProductBoxeo />} />
          <Route path="/productos/proximamente" element={<ProductComingSoon />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/suscripcion/padel" element={<SubscriptionPadel />} />
          <Route path="/suscripcion/boxeo" element={<SubscriptionBoxeo />} />
          <Route path="/unete" element={<JoinMovement />} />
          <Route path="/conocenos" element={<AboutUs />} />
          <Route path="/soporte" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
