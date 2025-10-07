import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Wifi, Target, BarChart, Users, CheckCircle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function ITConsultancy() {
  const benefits = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Align your technology roadmap with your business objectives for maximum impact."
    },
    {
      icon: Lightbulb,
      title: "Expert Guidance",
      description: "Access to seasoned IT professionals with decades of combined experience."
    },
    {
      icon: BarChart,
      title: "Cost Optimization",
      description: "Identify opportunities to reduce IT costs while improving efficiency."
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Smooth technology transitions with minimal disruption to your operations."
    }
  ];

  const services = [
    "IT strategy and roadmap development",
    "Technology assessment and audits",
    "Digital transformation consulting",
    "Cloud migration planning",
    "IT budget optimization",
    "Vendor selection and management",
    "IT governance and compliance",
    "Business process optimization"
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your current IT landscape, business goals, and challenges."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive IT strategy aligned with your business objectives."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We guide you through the execution of recommended solutions."
    },
    {
      step: "04",
      title: "Optimization",
      description: "We continuously monitor and refine your IT systems for peak performance."
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
              <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center">
                <Wifi className="w-10 h-10 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Consultancy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic IT guidance that transforms technology into a competitive advantage for your business.
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
                Navigate Technology with Confidence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's rapidly evolving technology landscape, making the right IT decisions is crucial
                for business success. Our consultancy services provide you with expert insights and strategic
                guidance to maximize your technology investments.
              </p>
              <p className="text-lg text-muted-foreground">
                We help you identify opportunities, mitigate risks, and develop a technology strategy that
                drives innovation and growth while optimizing costs and improving operational efficiency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/consultancy.jpg"
                alt="IT Consultancy"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-muted-foreground">
              How our consultancy drives business value
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
                className="p-6 rounded-xl bg-card border border-border hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-500" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology for IT transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-green-500/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Consultancy Services</h2>
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
              <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Ready to optimize your IT strategy? Book a free consultation with our experts to
                discuss your business goals and discover how we can help you achieve them through
                strategic technology planning.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Book Your Consultation
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
