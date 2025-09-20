import { Globe, Cpu, Rocket } from "lucide-react";

export default function WhyIndustrialSection() {
  const features = [
    {
      icon: Globe,
      title: "Real-World Impact",
      description: "Your code directly controls physical systems, moving from digital interfaces to tangible results that change how things are made.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverBg: "group-hover:bg-primary/20",
      borderColor: "hover:border-primary/50"
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Tech",
      description: "Work with IoT, edge computing, real-time systems, and digital twins—the most advanced technologies in industry.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      hoverBg: "group-hover:bg-accent/20",
      borderColor: "hover:border-accent/50"
    },
    {
      icon: Rocket,
      title: "High Autonomy",
      description: "Lead technical decisions, architect systems, and solve complex problems with minimal bureaucracy and maximum engineering freedom.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverBg: "group-hover:bg-green-500/20",
      borderColor: "hover:border-green-500/50"
    }
  ];

  return (
    <section id="why-industrial" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Industrial Tech?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform from building apps to building the future. Your code doesn't just run in browsers—it controls robots, optimizes factories, and shapes the physical world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-xl bg-card border border-border ${feature.borderColor} transition-all duration-300 hover:-translate-y-2`}
              data-testid={`card-feature-${index}`}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 ${feature.hoverBg} transition-colors`}>
                <feature.icon className={`${feature.color} h-8 w-8`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
