import { Button } from "@/components/ui/button";
import { ChevronDown, Github } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("why-industrial");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Where<span className="text-primary">Code</span>{" "}
            <br />
            Controls<span className="text-accent">Reality</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Step beyond web frameworks into the future of industrial automation. Your software skills can revolutionize manufacturing, robotics, and the physical world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
              data-testid="button-apply-hero"
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-secondary transition-all"
              data-testid="button-simulation-software"
            >
              <Github className="mr-2 h-5 w-5" />
              Free Simulation Software
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
