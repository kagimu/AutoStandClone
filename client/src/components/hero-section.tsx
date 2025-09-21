import { Button } from "@/components/ui/button";
import { ChevronDown, Github } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("why-industrial");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-black">
  {/* Semi-transparent overlay (optional for glow) */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

  <div className="relative z-10 w-full max-w-6xl px-2 sm:px-3 lg:px-0 mt-10 text-left">
    <div className="space-y-8">
      <h1
        className="
          text-4xl md:text-6xl lg:text-7xl font-bold leading-tight
          bg-gradient-to-r from-[#5B7C99] via-[#3A7D77] to-[#8DAA91]
          bg-clip-text text-transparent
          animate-text-shiny
          "
        style={{
          backgroundSize: "200% auto",
          animation: "shiny 3s linear infinite",
        }}
      >
        Where<span className="text-[#2C3E50]"> Tech</span>{" "}
        <br />
        Creates<span className="text-[#c5705b]"> Solutions</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
        We provide tailored IT solutions, including Managed Services, Consultancy, Software Development, Cybersecurity, and Cloud Solutions, all designed to enhance your business. Let us help you grow and thrive in the digital world!.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
        <Link href="/contact">
        <Button
          variant="outline"
          size="lg"
          className="border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-secondary transition-all"
          data-testid="button-simulation-software"
        >
          Book an appointment
        </Button>
          </Link>
      
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

  {/* Shiny text animation keyframes in global CSS */}
  <style>
    {`
      @keyframes shiny {
        0% {
          background-position: 200% center;
        }
        100% {
          background-position: -200% center;
        }
      }

      .animate-text-shiny {
        background-size: 200% auto;
        animation: shiny 3s linear infinite;
      }
    `}
  </style>
</section>

  );
}
