import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90" : "bg-background/80"
      } backdrop-blur-md border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="text-primary-foreground h-4 w-4" />
            </div>
            <span className="text-xl font-bold">Autstand</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("why-industrial")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-why-industrial"
            >
              Why Industrial
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-technology"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection("examples")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-examples"
            >
              Examples
            </button>
            <button
              onClick={() => scrollToSection("excellence")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-excellence"
            >
              Excellence
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-signin"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-apply"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
