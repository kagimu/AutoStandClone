import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Megaphone, Globe, LineChart, Users, CheckCircle, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function DigitalMarketingServices() {
     useEffect(() => {
      // Scroll to the top when this component mounts
      window.scrollTo(0, 0);
    }, []);
  const benefits = [
    {
      icon: Globe,
      title: "Increased Online Visibility",
      description: "Boost your brand presence through data-driven strategies that position you where your audience spends their time."
    },
    {
      icon: LineChart,
      title: "Performance Tracking",
      description: "We provide detailed analytics and reporting to measure ROI and optimize campaigns for maximum results."
    },
    {
      icon: Users,
      title: "Targeted Audience Reach",
      description: "Connect with the right audience through precise targeting, segmentation, and behavioral insights."
    },
    {
      icon: PenTool,
      title: "Creative Campaigns",
      description: "Engaging ad creatives, captivating visuals, and compelling copy designed to convert browsers into buyers."
    }
  ];

  const services = [
    "Search Engine Optimization (SEO) – Improve visibility and rankings on Google.",
    "Social Media Marketing – Build communities and grow engagement on Facebook, Instagram, LinkedIn, and X (Twitter).",
    "Pay-Per-Click Advertising (PPC) – Get instant traffic with high-converting ad campaigns on Google and Meta Ads.",
    "Content Marketing – Develop blogs, videos, and infographics that build authority and trust.",
    "Email Marketing Automation – Personalize communication and increase repeat conversions.",
    "Brand Strategy & Creative Design – Define your identity and communicate your story visually.",
    "Influencer Marketing – Partner with trusted voices to promote your products and services.",
    "Web Analytics & Conversion Optimization – Track performance and continuously improve conversion rates."
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />

      <section
        className="relative pt-32 pb-16 h-[400px] bg-secondary bg-center bg-cover bg-no-repeat rounded-b-[50px] overflow-hidden shadow-lg shadow-gray-800/30"
        style={{
          backgroundImage: "url('/1726.webp')",
        }}
      >
        {/* Overlay (optional, if you want extra darkening) */}
       

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left text-white"
          >
            <div className="flex justify-start mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Megaphone className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              We help brands grow, connect, and convert through data-driven digital marketing strategies designed to attract, engage, and retain customers online.
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
                Grow Your Brand with Proven Digital Marketing Strategies
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team combines creativity, analytics, and technology to craft campaigns that resonate with your target audience. From social media to SEO, we ensure your brand is not only seen but remembered.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you’re looking to increase website traffic, improve conversion rates, or strengthen your brand image, we deliver measurable results through multi-channel marketing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/networking.webp"
                alt="Digital Marketing Services"
                 loading="lazy" 
                className="rounded-2xl shadow-2xl w-full h-[400px]"
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
              Why businesses choose us to power their digital growth
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
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services Include</h2>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
              <p className="text-muted-foreground mb-6">
                Partner with us to amplify your digital presence and drive measurable growth. Let’s create a strategy that aligns with your goals and delivers lasting results.
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Book a Strategy Session
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
