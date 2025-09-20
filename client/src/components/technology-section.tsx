import { Settings, Monitor, Wifi, Box, Play } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      icon: Settings,
      title: "PLC Programming meets Modern Software Engineering",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Industrial automation factory floor",
      color: "text-primary",
      borderColor: "hover:border-primary/50"
    },
    {
      icon: Monitor,
      title: "SCADA Systems using Web Technologies",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Industrial control room with monitoring systems",
      color: "text-accent",
      borderColor: "hover:border-accent/50"
    },
    {
      icon: Wifi,
      title: "Industrial IoT using modern libraries and Real-time Data",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "IoT sensors and connected industrial devices",
      color: "text-green-500",
      borderColor: "hover:border-green-500/50"
    },
    {
      icon: Box,
      title: "Digital Twins using 3D Graphics and Open Source Technologies",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "3D digital twin modeling and visualization",
      color: "text-purple-500",
      borderColor: "hover:border-purple-500/50"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">From Abstract to Physical</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Stop building another CRUD app. Start building systems where your algorithms control robotic arms, your data structures optimize supply chains, and your code directly impacts the physical world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-card border border-border ${tech.borderColor} transition-all`}
              data-testid={`card-technology-${index}`}
            >
              <div className="flex items-center mb-4">
                <tech.icon className={`${tech.color} h-6 w-6 mr-3`} />
                <h3 className="text-xl font-semibold">{tech.title}</h3>
              </div>
              <img
                src={tech.image}
                alt={tech.alt}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Real Industrial Automation</h3>
              <p className="text-muted-foreground mb-8">Where your code controls reality</p>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center" data-testid="video-placeholder">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mb-4 mx-auto" />
                  <p className="text-muted-foreground">Your browser does not support the video tag.</p>
                  <p className="text-sm text-muted-foreground mt-2">Industrial automation demonstration video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
