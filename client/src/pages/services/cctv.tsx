import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Camera,
  Eye,
  ShieldCheck,
  Server,
  Monitor,
  CheckCircle,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CCTV() {
       useEffect(() => {
        // Scroll to the top when this component mounts
        window.scrollTo(0, 0);
      }, []);
  const benefits = [
    {
      icon: Eye,
      title: "24/7 Surveillance",
      description:
        "Round-the-clock monitoring with crystal-clear video feeds to ensure safety and security.",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security",
      description:
        "Protect your premises with intelligent motion detection, alerts, and secure video storage.",
    },
    {
      icon: Wifi,
      title: "Remote Access",
      description:
        "Monitor your home, office, or facility from anywhere through mobile or web access.",
    },
    {
      icon: Server,
      title: "Central Control System",
      description:
        "Manage multiple cameras and systems from one powerful command workstation.",
    },
  ];

  const services = [
    "CCTV Camera Installation (Indoor & Outdoor)",
    "Central Monitoring Room Setup",
    "Video Storage & Backup Systems",
    "IP & Analog Camera Configuration",
    "Network Video Recorder (NVR/DVR) Setup",
    "Remote Viewing via Mobile & Web",
    "Access Control System Integration",
    "Alarm & Motion Sensor Integration",
  ];

  const components = [
    {
      icon: Camera,
      title: "Camera Installation",
      description:
        "High-definition cameras with night vision, wide-angle coverage, and smart analytics.",
      features: [
        "Indoor & Outdoor CCTV Cameras",
        "Dome, Bullet & PTZ Cameras",
        "4K & Night Vision Support",
      ],
    },
    {
      icon: Monitor,
      title: "Control Room Setup",
      description:
        "Command centers with large display walls and real-time multi-camera feeds.",
      features: [
        "Multi-screen Display Systems",
        "Ergonomic Workstations",
        "Integrated Monitoring Software",
      ],
    },
    {
      icon: Server,
      title: "Recording & Storage",
      description:
        "Secure video archiving with redundant backup and scalable cloud storage options.",
      features: [
        "NVR/DVR Systems",
        "Cloud-based Storage",
        "Redundant Power & Backup",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Security Integration",
      description:
        "Combine CCTV with access control, alarms, and intrusion detection for full protection.",
      features: [
        "Access Control Systems",
        "Fire & Motion Sensors",
        "Real-time Alerts",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

       <section
        className="relative pt-32 pb-16 bg-secondary bg-center bg-cover bg-no-repeat rounded-b-[40px] overflow-hidden shadow-lg shadow-gray-800/30"
        style={{
          backgroundImage: "url('/cctv.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="flex justify-start mb-6">
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                <Camera className="w-10 h-10 text-blue-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CCTV & Surveillance<br/> Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Experience next-generation security with professional CCTV
              installation, intelligent monitoring systems, and central control
              workstation setups for total safety.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/cctv2.jpg"
                alt="CCTV Installation"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
                Reliable Security, Smart Surveillance
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our CCTV systems are engineered to safeguard homes, businesses,
                and organizations. From simple home setups to enterprise-level
                surveillance networks, we provide seamless, high-resolution
                monitoring with secure storage and central management.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you need a single camera installation or a nationwide
                security control center, our experts deliver precision,
                reliability, and peace of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
              Why Choose Our CCTV Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern security designed for clarity, control, and confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
              Our Key Components
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced systems for reliable security infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <component.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-blue-600">
                  {component.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {component.description}
                </p>
                <div className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
                Our Services
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Secure Your Space Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Let’s design a smart, reliable CCTV system for your home,
                office, or industrial facility. Talk to our experts for a free
                on-site assessment and quote.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Request a Free Site Survey
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
