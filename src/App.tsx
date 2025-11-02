import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Themes from "./pages/Themes";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Categories from "./pages/Categories";
import Merchants from "./pages/Merchants";
import RecurringBills from "./pages/RecurringBills";
import KreativeLicense from "./pages/KreativeLicense";
import SysfontLicense from "./pages/SysfontLicense";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/themes" element={<Layout><Themes /></Layout>} />
            <Route path="/transactions" element={<Layout><Transactions /></Layout>} />
            <Route path="/reports" element={<Layout><Reports /></Layout>} />
            <Route path="/categories" element={<Layout><Categories /></Layout>} />
            <Route path="/merchants" element={<Layout><Merchants /></Layout>} />
            <Route path="/licenses/kreativekorp-license" element={<Layout><KreativeLicense /></Layout>} />
            <Route path="/licenses/sysfont-license" element={<Layout><SysfontLicense /></Layout>} />
            <Route path="/bills" element={<Layout><RecurringBills /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
