import { Settings, Monitor, Wifi, Box, Play } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      icon: Settings,
      title: "IT Managed Service",
      image: "IT-SERVICE.jpg",
      alt: "Industrial automation factory floor",
      color: "text-primary",
      borderColor: "hover:border-red-500/50",
      description: "Provide round-the-clock monitoring, management, and support for your entire IT infrastructure."
    },
    {
      icon: Monitor,
      title: "Software Development",
      image: "software.jpg",
      alt: "Industrial control room with monitoring systems",
      color: "text-accent",
      borderColor: "hover:border-blue-500/50",
        description: "Build software solutions specifically designed to address the unique challenges and goals of your business."
    },
    {
      icon: Wifi,
      title: "IT Consultancy",
      image: "consultancy.jpg",
      alt: "IoT sensors and connected industrial devices",
      color: "text-green-500",
      borderColor: "hover:border-green-500/50",
        description: "provide expert advice and strategic planning to align your technology investments with your business goals.."
    },
    {
      icon: Box,
      title: "CyberSecurity",
      image: "cybersecurity.jpg",
      alt: "3D digital twin modeling and visualization",
      color: "text-purple-500",
      borderColor: "hover:border-purple-500/50",
        description: "Protect your business with threat detection, incident response, and compliance management."
    },
     {
      icon: Box,
      title: "Cloud Solutions",
      image: "CLOUD-COMPUTING.jpg",
      alt: "3D digital twin modeling and visualization",
      color: "text-purple-500",
      borderColor: "hover:border-gray-500/50",
        description: "We help you migrate to the cloud, manage your cloud infrastructure, and deploy cloud-native applications."
    },
     {
      icon: Box,
      title: "IT Infrastructure",
      image: "INFRASTRUCTURE.jpg",
      alt: "3D digital twin modeling and visualization",
      color: "text-purple-500",
      borderColor: "hover:bordeR-green-500/50",
        description: "Our IT Infrastructure Solutions ensure a robust, scalable design for your business growth and long-term reliability.."
    }
  ];

  return (
    <section id="technology" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We provide a comprehensive range of IT services that ensure your business operates smoothly and securely.
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
              <div className="flex justify-between p-2 items-center">
              <img
                src={tech.image}
                alt={tech.alt}
                className="w-72 h-48 object-cover rounded-lg"
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
              />
              <h1 className="text-lg ml-10">{tech.description}</h1>
              </div>
             
            </div>
          ))}
        </div>

        {/* Video Section */}
     {}   {/*<div className="text-center">
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
        </div>*/}
      </div>
    </section>
  );
}
