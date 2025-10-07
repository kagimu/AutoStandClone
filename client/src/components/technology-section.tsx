import { motion } from "framer-motion";
import { Settings, Monitor, Wifi, Box } from "lucide-react";
import { Link } from "wouter";

export default function TechnologySection() {
  const technologies = [
    {
      icon: Settings,
      title: "IT Managed Service",
      image: "IT-SERVICE.jpg",
      alt: "Industrial automation factory floor",
      color: "text-primary",
      borderColor: "hover:border-red-500/50",
      description:
        "Provide round-the-clock monitoring, management, and support for your entire IT infrastructure.",
      link: "/services/it-managed-service"
    },
    {
      icon: Monitor,
      title: "Software Development",
      image: "software.jpg",
      alt: "Industrial control room with monitoring systems",
      color: "text-accent",
      borderColor: "hover:border-blue-500/50",
      description:
        "Build software solutions specifically designed to address the unique challenges and goals of your business.",
      link: "/services/software-development"
    },
    {
      icon: Wifi,
      title: "IT Consultancy",
      image: "consultancy.jpg",
      alt: "IoT sensors and connected industrial devices",
      color: "text-green-500",
      borderColor: "hover:border-green-500/50",
      description:
        "Provide expert advice and strategic planning to align your technology investments with your business goals.",
      link: "/services/it-consultancy"
    },
    {
      icon: Box,
      title: "CyberSecurity",
      image: "cybersecurity.jpg",
      alt: "3D digital twin modeling and visualization",
      color: "text-purple-500",
      borderColor: "hover:border-purple-500/50",
      description:
        "Protect your business with threat detection, incident response, and compliance management.",
      link: "/services/cybersecurity"
    },
    {
      icon: Box,
      title: "Cloud Solutions",
      image: "CLOUD-COMPUTING.jpg",
      alt: "Cloud services infrastructure",
      color: "text-purple-500",
      borderColor: "hover:border-gray-500/50",
      description:
        "We help you migrate to the cloud, manage your cloud infrastructure, and deploy cloud-native applications.",
      link: "/services/cloud-solutions"
    },
    {
      icon: Box,
      title: "IT Infrastructure",
      image: "INFRASTRUCTURE.jpg",
      alt: "Network and infrastructure hardware",
      color: "text-purple-500",
      borderColor: "hover:border-green-500/50",
      description:
        "Our IT Infrastructure Solutions ensure a robust, scalable design for your business growth and long-term reliability.",
      link: "/services/it-infrastructure"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We provide a comprehensive range of IT services that ensure your business operates smoothly and securely.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Link key={index} href={tech.link}>
              <motion.div
                className={`group p-6 rounded-xl bg-card border border-border ${tech.borderColor} transition-all cursor-pointer hover:shadow-lg`}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                data-testid={`card-technology-${index}`}
              >
                {/* Icon and Title */}
                <motion.div
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.25 }}
                >
                  <div className="flex items-center">
                    <tech.icon className={`${tech.color} h-6 w-6 mr-3`} />
                    <h3 className="text-xl font-semibold">{tech.title}</h3>
                  </div>
                  <span className="text-sm text-primary group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </motion.div>

                {/* Image and Description */}
                <div className="flex justify-between p-2 items-center gap-6">
                  <motion.img
                    src={tech.image}
                    alt={tech.alt}
                    className="w-72 h-48 object-cover rounded-lg opacity-0 transition-opacity duration-500"
                    onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.3 }}
                  />

                  <motion.p
                    className="text-lg ml-4 text-muted-foreground flex-1"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.35 }}
                  >
                    {tech.description}
                  </motion.p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
