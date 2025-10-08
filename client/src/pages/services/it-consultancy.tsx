import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MousePointer, Palette, Users, Lightbulb, CheckCircle, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function UXDesign() {
   useEffect(() => {
    // Scroll to the top when this component mounts
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    {
      icon: Lightbulb,
      title: "User-Centered Strategy",
      description: "We craft every experience around the real needs, emotions, and behaviors of your users."
    },
    {
      icon: Palette,
      title: "Intuitive & Engaging Design",
      description: "Our designs are visually appealing, easy to navigate, and optimized for accessibility."
    },
    {
      icon: BarChart,
      title: "Data-Driven Insights",
      description: "We use user analytics, A/B testing, and heatmaps to continually refine user journeys."
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "We involve your stakeholders and end users in every step to ensure the final product truly resonates."
    }
  ];

  const services = [
    "User research and persona development",
    "Information architecture and user flow mapping",
    "Wireframing and prototyping",
    "UX/UI design for web and mobile platforms",
    "Usability testing and accessibility optimization",
    "Interaction and motion design",
    "Design systems and component libraries",
    "Conversion rate optimization (CRO)"
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery",
      description: "We conduct user research, interviews, and competitor analysis to understand goals and pain points."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We define user journeys, map experiences, and establish the design direction aligned with your brand."
    },
    {
      step: "03",
      title: "Design",
      description: "We translate strategy into beautiful, functional interfaces using modern design tools and standards."
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "We validate designs with real users, gather feedback, and iterate for optimal usability and engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />

      {/* Hero Section */}
     <section
        className="relative pt-32 pb-16 bg-secondary bg-center bg-cover bg-no-repeat rounded-b-[50px] overflow-hidden shadow-lg shadow-gray-800/30"
        style={{
          backgroundImage: "url('/5741174.jpg')",
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
                <MousePointer className="w-10 h-10 text-blue-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              User Experience <br/> (UX) Design
            </h1>
           
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
                Design That Puts People First
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Exceptional design is more than aesthetics — it’s about understanding human behavior and
                creating meaningful interactions. Our UX design services focus on usability, accessibility,
                and emotion-driven engagement that builds trust and loyalty.
              </p>
              <p className="text-lg text-muted-foreground">
                We help you translate user insights into intuitive interfaces that not only delight users but
                also meet your business goals, ensuring every click, scroll, and interaction feels effortless.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/5809503.jpg"
                alt="User Experience Design"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-muted-foreground">
              How great UX transforms user satisfaction and business outcomes
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

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground">
              A collaborative, research-driven approach to crafting exceptional digital experiences
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
                <div className="text-6xl font-bold text-blue-500/80 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our UX Design Services</h2>
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
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
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
              <h3 className="text-2xl font-bold mb-4">Let’s Design Better Experiences</h3>
              <p className="text-muted-foreground mb-6">
                Ready to improve your user experience? Schedule a free consultation to explore how our
                UX design process can elevate your product’s usability, engagement, and performance.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Get in Touch
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
