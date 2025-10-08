import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Monitor, Code, Smartphone, Globe, CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SoftwareDevelopment() {
     useEffect(() => {
      // Scroll to the top when this component mounts
      window.scrollTo(0, 0);
    }, []);
  const benefits = [
    {
      icon: Code,
      title: "Custom Solutions",
      description: "Tailored software built specifically for your business needs and workflows."
    },
    {
      icon: Zap,
      title: "Agile Development",
      description: "Rapid iteration and continuous delivery to bring your ideas to life faster."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Applications that work seamlessly across web, mobile, and desktop platforms."
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased load effortlessly."
    }
  ];

  const services = [
    "Web application development",
    "Mobile app development (iOS & Android)",
    "Progressive Web Apps (PWA)",
    "API development and integration",
    "Database design and optimization",
    "Legacy system modernization",
    "E-commerce platforms",
    "Custom enterprise software"
  ];

  const technologies = [
    "React, Vue.js, Angular",
    "Node.js, laravel, Python, Java",
    "iOS (react, flutter), Android (react, flutter)",
    "MySql, PostgreSQL, MongoDB",
    "AWS, Azure, Google Cloud, etc",
    "Docker, Kubernetes"
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />

       <section
        className="relative pt-32 pb-16 bg-secondary bg-center bg-cover bg-no-repeat rounded-b-[50px] overflow-hidden shadow-lg shadow-gray-800/30"
        style={{
          backgroundImage: "url('/1687.jpg')",
        }}
      >
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left "
          >
            <div className="flex justify-start mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Monitor className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software Development
            </h1>
            <p className="text-xl max-w-3xl sm-mx-auto">
              Custom software solutions that transform your business processes and drive innovation.
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
                src="/software.jpg"
                alt="Software Development"
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
                Turn Your Vision Into Reality
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We build software that solves real problems. Our development team combines technical
                expertise with business understanding to create solutions that not only work flawlessly
                but also deliver measurable value to your organization.
              </p>
              <p className="text-lg text-muted-foreground">
                From initial concept to deployment and beyond, we partner with you throughout the
                entire development lifecycle, ensuring your software meets your exact specifications
                and exceeds your expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Development Services</h2>
            <p className="text-lg text-muted-foreground">
              Building software that makes a difference
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
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
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
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Development Services</h2>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-12 border border-border text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Start Your Project Today</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a software idea? Let's discuss how we can bring it to life. Schedule a free
              consultation to explore your requirements and learn how we can help.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
