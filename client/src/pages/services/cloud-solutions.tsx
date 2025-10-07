import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cloud, Zap, TrendingUp, DollarSign, CheckCircle, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function CloudSolutions() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Easily scale resources up or down based on your business needs."
    },
    {
      icon: DollarSign,
      title: "Cost Efficient",
      description: "Pay only for what you use, reducing infrastructure costs significantly."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast performance with global infrastructure and CDN support."
    },
    {
      icon: Server,
      title: "Reliability",
      description: "99.9% uptime SLA with automatic failover and disaster recovery."
    }
  ];

  const services = [
    "Cloud migration and strategy",
    "AWS, Azure, Google Cloud deployment",
    "Cloud infrastructure management",
    "Serverless architecture design",
    "Container orchestration (Kubernetes)",
    "Cloud security and compliance",
    "Multi-cloud and hybrid solutions",
    "Cloud cost optimization"
  ];

  const platforms = [
    {
      name: "Amazon Web Services (AWS)",
      description: "The most comprehensive cloud platform with 200+ services.",
      features: ["EC2, S3, Lambda", "RDS, DynamoDB", "CloudFront, Route 53"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud services with seamless Microsoft integration.",
      features: ["Virtual Machines", "Azure SQL, Cosmos DB", "App Services, Functions"]
    },
    {
      name: "Google Cloud Platform",
      description: "Advanced cloud infrastructure powered by Google's technology.",
      features: ["Compute Engine", "Cloud Storage, BigQuery", "Kubernetes Engine"]
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
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-blue-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Migrate, manage, and optimize your infrastructure with enterprise-grade cloud solutions.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Embrace the Power of the Cloud
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Cloud computing has revolutionized how businesses operate, offering unprecedented
                flexibility, scalability, and cost efficiency. Our cloud solutions help you harness
                this power to accelerate innovation and drive growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're migrating existing applications or building cloud-native solutions,
                we provide end-to-end support to ensure a smooth transition and optimal performance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/CLOUD-COMPUTING.jpg"
                alt="Cloud Solutions"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Why businesses are moving to the cloud
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Platforms We Support</h2>
            <p className="text-lg text-muted-foreground">
              Choose the right platform for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cloud Services</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready for the Cloud?</h3>
              <p className="text-muted-foreground mb-6">
                Start your cloud journey today. Schedule a consultation to discuss your requirements
                and learn how we can help you migrate and optimize your infrastructure for the cloud.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Start Cloud Migration
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
