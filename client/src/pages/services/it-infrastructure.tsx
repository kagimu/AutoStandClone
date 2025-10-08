import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Server, Network, HardDrive, Wifi, CheckCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ITInfrastructure() {
     useEffect(() => {
      // Scroll to the top when this component mounts
      window.scrollTo(0, 0);
    }, []);
  const benefits = [
    {
      icon: Server,
      title: "Robust Architecture",
      description: "Enterprise-grade infrastructure designed for reliability and performance."
    },
    {
      icon: Network,
      title: "Network Optimization",
      description: "High-speed, secure networks that keep your business connected."
    },
    {
      icon: HardDrive,
      title: "Scalable Storage",
      description: "Flexible storage solutions that grow with your data needs."
    },
    {
      icon: Shield,
      title: "Redundancy",
      description: "Built-in failover systems ensuring business continuity."
    }
  ];

  const services = [
    "Network design and implementation",
    "Server infrastructure setup",
    "Data center solutions",
    "Virtualization and containerization",
    "Storage area networks (SAN)",
    "Load balancing and failover",
    "Infrastructure monitoring",
    "Hardware procurement and installation"
  ];

  const components = [
    {
      icon: Server,
      title: "Server Infrastructure",
      description: "High-performance servers configured for your specific workload requirements.",
      features: ["Physical & Virtual Servers", "Blade & Rack Systems", "Redundant Power"]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Secure, high-speed networks with advanced routing and switching capabilities.",
      features: ["Switches & Routers", "Firewalls & VPN", "SD-WAN Solutions"]
    },
    {
      icon: HardDrive,
      title: "Storage Solutions",
      description: "Scalable storage systems with data protection and disaster recovery built-in.",
      features: ["NAS & SAN", "Backup Systems", "Disaster Recovery"]
    },
    {
      icon: Wifi,
      title: "Wireless Networks",
      description: "Enterprise-grade WiFi solutions for seamless connectivity across your organization.",
      features: ["High-Density WiFi", "Guest Networks", "IoT Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />

       <section
        className="relative pt-32 pb-16 bg-secondary bg-center bg-cover bg-no-repeat rounded-b-[50px] overflow-hidden shadow-lg shadow-gray-800/30"
        style={{
          backgroundImage: "url('/networking11.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-slate-500/10 rounded-2xl flex items-center justify-center">
                <Server className="w-10 h-10 text-slate-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build a solid foundation for your business with robust, scalable IT infrastructure.
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
                src="/networking-page.jpg"
                alt="IT Infrastructure"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Infrastructure That Powers Success
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your IT infrastructure is the backbone of your business operations. We design and
                implement robust, scalable infrastructure solutions that ensure your systems are
                always available, secure, and performing at their best.
              </p>
              <p className="text-lg text-muted-foreground">
                From network architecture to server deployment, we handle every aspect of your
                infrastructure with precision and expertise, ensuring optimal performance and
                long-term reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Why invest in quality infrastructure
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
                className="p-6 rounded-xl bg-card border border-border hover:border-slate-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-slate-500/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-slate-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Components</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions for every layer of your infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {components.map((component, index) => {
            // Define vibrant background colors
            const bgColors = [
              "bg-gradient-to-r from-red-900 to-pink-900",
              "bg-gradient-to-r from-blue-900 to-indigo-900",
              "bg-gradient-to-r from-green-900 to-teal-900",
              "bg-gradient-to-r from-yellow-900 to-orange-900",
            ];
            const bgColor = bgColors[index % bgColors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-xl text-white shadow-lg ${bgColor} hover:scale-105 transition-transform`}
              >
                <component.icon className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-3">{component.title}</h3>
                <p className="mb-6">{component.description}</p>
                <div className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
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
              <h3 className="text-2xl font-bold mb-4">Build Your Infrastructure</h3>
              <p className="text-muted-foreground mb-6">
                Ready to upgrade your IT infrastructure? Contact us today to discuss your requirements
                and learn how we can design and implement a robust, scalable infrastructure solution
                tailored to your business needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Get Infrastructure Assessment
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
