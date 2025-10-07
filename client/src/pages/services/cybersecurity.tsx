import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Cybersecurity() {
  const benefits = [
    {
      icon: Shield,
      title: "Threat Prevention",
      description: "Advanced security measures to prevent cyberattacks before they happen."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of your systems for suspicious activity."
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Comprehensive encryption and security protocols for sensitive information."
    },
    {
      icon: ShieldCheck,
      title: "Compliance",
      description: "Meet regulatory requirements and industry security standards."
    }
  ];

  const services = [
    "Security assessment and audits",
    "Penetration testing",
    "Vulnerability management",
    "Firewall and network security",
    "Endpoint protection",
    "Security awareness training",
    "Incident response planning",
    "Data encryption solutions"
  ];

  const threats = [
    {
      title: "Ransomware",
      description: "Protect your business from devastating ransomware attacks that can lock you out of critical systems.",
      icon: AlertTriangle
    },
    {
      title: "Data Breaches",
      description: "Prevent unauthorized access to sensitive customer and business data.",
      icon: Lock
    },
    {
      title: "Phishing Attacks",
      description: "Train your team to identify and avoid sophisticated social engineering attempts.",
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-red-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security solutions to protect your business from evolving cyber threats.
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
                src="/cybersecurity.jpg"
                alt="Cybersecurity"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect What Matters Most
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Cyber threats are evolving faster than ever, and no business is too small to be targeted.
                Our cybersecurity services provide multiple layers of protection to safeguard your data,
                systems, and reputation from malicious actors.
              </p>
              <p className="text-lg text-muted-foreground">
                From proactive threat detection to rapid incident response, we ensure your business
                stays secure in an increasingly dangerous digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive protection for your digital assets
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
                className="p-6 rounded-xl bg-card border border-border hover:border-red-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-red-500" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Threats We Protect Against</h2>
            <p className="text-lg text-muted-foreground">
              Stay ahead of cybercriminals with our advanced protection
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <threat.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{threat.title}</h3>
                <p className="text-muted-foreground">{threat.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Services</h2>
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
              <h3 className="text-2xl font-bold mb-4">Secure Your Business Today</h3>
              <p className="text-muted-foreground mb-6">
                Don't wait for a security breach to take action. Contact us today for a free
                security assessment and learn how we can protect your business from cyber threats.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Get Security Assessment
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
