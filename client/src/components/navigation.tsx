import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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

  const isHomePage = location === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/70" : "bg-background/80"
      } backdrop-blur-md `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
             <img src="logo-home.png" alt="Logo" className="h-10 w-10" />
              <span className="text-lg font-bold">Adobe Technologies</span>
            </div>
          </Link>

          {/*
  <div className="hidden md:flex space-x-8">
    {isHomePage ? (
      <>
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
      </>
    ) : (
      <>
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
          Home
        </Link>
        <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </Link>
        <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
          Careers
        </Link>
      </>
    )}
  </div>
*/}

          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                data-testid="button-contact"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
