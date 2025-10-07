import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Careers from "@/pages/careers";
import NotFound from "@/pages/not-found";
import ITManagedService from "@/pages/services/it-managed-service";
import SoftwareDevelopment from "@/pages/services/software-development";
import ITConsultancy from "@/pages/services/it-consultancy";
import Cybersecurity from "@/pages/services/cybersecurity";
import CloudSolutions from "@/pages/services/cloud-solutions";
import ITInfrastructure from "@/pages/services/it-infrastructure";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route path="/services/it-managed-service" component={ITManagedService} />
      <Route path="/services/software-development" component={SoftwareDevelopment} />
      <Route path="/services/it-consultancy" component={ITConsultancy} />
      <Route path="/services/cybersecurity" component={Cybersecurity} />
      <Route path="/services/cloud-solutions" component={CloudSolutions} />
      <Route path="/services/it-infrastructure" component={ITInfrastructure} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
