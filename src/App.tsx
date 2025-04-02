
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/layout";
import HomePage from "@/pages/HomePage";
import ExercisesPage from "@/pages/ExercisesPage";
import ProblemPage from "@/pages/ProblemPage";
import CompetitionsPage from "@/pages/CompetitionsPage";
import ProgressPage from "@/pages/ProgressPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/problem/:id" element={<ProblemPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
