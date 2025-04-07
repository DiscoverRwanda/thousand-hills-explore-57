
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import AttractionDetails from "./pages/AttractionDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Dining from "./pages/Dining";
import DiningDetails from "./pages/DiningDetails";
import Stay from "./pages/Stay";
import StayDetails from "./pages/StayDetails";
import Plan from "./pages/Plan";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import ItineraryDetails from "./pages/ItineraryDetails";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            
            {/* Attractions */}
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/attractions/:id" element={<AttractionDetails />} />
            
            {/* Events */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            
            {/* Dining */}
            <Route path="/dining" element={<Dining />} />
            <Route path="/dining/:id" element={<DiningDetails />} />
            
            {/* Places to Stay */}
            <Route path="/stay" element={<Stay />} />
            <Route path="/stay/:id" element={<StayDetails />} />
            
            {/* Plan Your Visit */}
            <Route path="/plan" element={<Plan />} />
            <Route path="/plan/itinerary-builder" element={<ItineraryBuilder />} />
            <Route path="/plan/itinerary/:id" element={<ItineraryDetails />} />
            
            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
