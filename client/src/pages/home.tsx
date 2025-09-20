import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhyIndustrialSection from "@/components/why-industrial-section";
import TechnologySection from "@/components/technology-section";
import CodeExamplesSection from "@/components/code-examples-section";
import EngineeringExcellenceSection from "@/components/engineering-excellence-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <WhyIndustrialSection />
      <TechnologySection />
      <CodeExamplesSection />
      <EngineeringExcellenceSection />
      <Footer />
    </div>
  );
}
