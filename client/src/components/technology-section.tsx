import { motion } from "framer-motion";
import { Settings, Monitor, Wifi, Box } from "lucide-react";
import { Link } from "wouter";

export default function TechnologySection() {
  const technologies = [
    {
      icon: Settings,
      title: "Digital Marketing Service",
      image: "DIGITAL MARKETING.webp",
      alt: "Industrial automation factory floor",
      color: "text-primary",
      borderColor: "hover:border-red-500/50",
      subServices: [
       "Search Engine Optimization (SEO)",
       " Social Media Marketing (SMM), Display Advertising",
        "Pay-Per-Click Advertising (PPC)",
        "Conversion Rate Optimization (CRO)",
        "Local SEO and Marketing",
        "Analytics and Reporting"
      ],
      link: "/services/digital-marketing-service"
    },
    {
      icon: Monitor,
      title: "Web Development",
      image: "software.webp",
      alt: "Industrial control room with monitoring systems",
      color: "text-accent",
      borderColor: "hover:border-blue-500/50",
      subServices: [
       " Custom Website Design and Development",
       " E-Commerce Development",
       " Content Management Systems (CMS)",
       " Web Application Development",
       " Website Redesign",
       " Maintenance and Support"
      ],
      link: "/services/software-development"
    },
    {
      icon: Wifi,
      title: "User Experience Design",
      image: "UIUX.webp",
      alt: "IoT sensors and connected industrial devices",
      color: "text-green-500",
      borderColor: "hover:border-green-500/50",
      subServices: [
        "Intuitive Navigation and Information Architecture",
        "Responsive and Accessible Design",
        "Interactive Prototyping and Testing",
       " Content Strategy Integration",
       " Data-Driven Enhancements",
       " Supportive Error Handling",
        "Figma And Adobe XD"
      ],
      link: "/services/it-consultancy"
    },
    {
      icon: Box,
      title: "CyberSecurity",
      image: "cybersecurity.webp",
      alt: "3D digital twin modeling and visualization",
      color: "text-purple-500",
      borderColor: "hover:border-purple-500/50",
      subServices: [
      "  Threat Detection and Prevention",
      "  Vulnerability Assessments and Penetration Testing",
      "  Data Encryption and Privacy Protection",
      "  Incident Response and Recovery",
       " Employee Training and Awareness",
      "  Managed Security Services",
       " Identity and Access Management (IAM)",
      "  Compliance and Risk Management",
      ],
      link: "/services/cybersecurity"
    },
     {
      icon: Monitor,
      title: "Mobile App Development",
      image: "software.webp",
      alt: "Industrial control room with monitoring systems",
      color: "text-accent",
      borderColor: "hover:border-blue-500/50",
      subServices: [
       " Custom App Development",
       "  UI/UX Design",
          "E-commerce App Solutions",
          "Enterprise App Development",
          "App Maintenance and Upgrades",
          "Cloud-Based Mobile Apps",
          "Cross Platform Apps",
          "AWS And Firebase Authentication"
      ],
      link: "/services/software-development"
    },
    {
      icon: Box,
      title: "Cloud Solutions",
      image: "CLOUD-COMPUTING.webp",
      alt: "Cloud services infrastructure",
      color: "text-purple-500",
      borderColor: "hover:border-gray-500/50",
      subServices: [
        "Cloud Infrastructure as a Service (IaaS)",
        "Cloud Migration Services",
        "Platform as a Service (PaaS)",
        "Cloud Security Services",
        "Hybrid Cloud Solutions",
        "Data Backup and Disaster Recovery",
        "Software as a Service (SaaS) Integration",
       " Cloud Optimization",
       " Cloud Application Development",
        "24/7 Cloud Management and Support"
      ],
      link: "/services/cloud-solutions"
    },
    {
      icon: Box,
      title: "Networking Services",
      image: "INFRASTRUCTURE.webp",
      alt: "Network and infrastructure hardware",
      color: "text-purple-500",
      borderColor: "hover:border-green-500/50",
      subServices: [
        "Network Design, Upgrades and Optimization",
        "Structured Cabling Solutions",
        "Wireless Networking (Wi-Fi Solutions)",
        "Server Installation and Configuration",
        "VoIP and Unified Communications"
      ],
      link: "/services/it-infrastructure"
    },
    {
      icon: Box,
      title: "CCTV Camera",
      image: "CCTV.webp",
      alt: "Network and infrastructure hardware",
      color: "text-purple-500",
      borderColor: "hover:border-green-500/50",
      subServices: [
       "CCTV Camera Installation",
       " Standalone CCTV Systems",
       " Remote Monitoring Setup",
       " Indoor and Outdoor Surveillance",
        "Maintenance and Support",
        "Cloud Storage Solutions",
       " Motion Detection and Alerts",
        "Surveillance System Integration"
      ],
      link: "/services/cctv"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="#4A90E2">Expertise</span></h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We provide a comprehensive range of IT services that ensure your business operates smoothly and securely.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Link key={index} href={tech.link}>
              <motion.div
                className={`group p-6 rounded-xl bg-card xl:h-[390px] border border-border ${tech.borderColor} transition-all cursor-pointer hover:shadow-lg`}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
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
                    <h3 className="text-xl md:text-lg font-semibold">{tech.title}</h3>
                  </div>
                  <span className="text-sm text-primary group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </motion.div>

                {/* Image and Sub-Services List */}
                <div className="flex justify-between p-2 items-start gap-6 flex-col sm:flex-row">
                  <motion.img
                    src={tech.image}
                    alt={tech.alt}
                    className="w-full sm:w-48 h-48 object-cover rounded-lg opacity-0 transition-opacity duration-500"
                    onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.3 }}
                  />

                  <ul className="ml-4 text-muted-foreground flex-1 list-disc list-inside space-y-2">
                    {tech.subServices.map((service, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                        className="text-sm"
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
