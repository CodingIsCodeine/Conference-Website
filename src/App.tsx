import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Committee from "./pages/Committee";
import Speakers from "./pages/Speakers";
import Abstract from "./pages/Abstract";
import Sponsors from "./pages/Sponsors";
import Registration from "./pages/Registration";
import Programme from "./pages/Programme";
import Organising from "./pages/Organising";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/scrolltop";   // <-- add this

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/organising" element={<Organising />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ScrollToTop />   {/* <-- THIS shows on every page */}

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
