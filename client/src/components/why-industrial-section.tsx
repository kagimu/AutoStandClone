import { motion } from "framer-motion";
import { Globe, Cpu, Rocket } from "lucide-react";

export default function WhyIndustrialSection() {
  const features = [
    {
      icon: Globe,
      title: "Real-World Impact",
      description:
        "Your code directly controls physical systems, moving from digital interfaces to tangible results that change how things are made.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverBg: "group-hover:bg-primary/20",
      borderColor: "hover:border-primary/50",
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Tech",
      description:
        "Work with PWA, Latest mobile designs, secure anti-cyber crime systems, quality tech equipment delivered and cloud solutions.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      hoverBg: "group-hover:bg-accent/20",
      borderColor: "hover:border-accent/50",
    },
    {
      icon: Rocket,
      title: "High Autonomy",
      description:
        "Lead technical decisions, architect systems, and solve complex problems with minimal bureaucracy and maximum engineering freedom.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverBg: "group-hover:bg-green-500/20",
      borderColor: "hover:border-green-500/50",
    },
  ];

  return (
    <section id="why-industrial" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose Adobe?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform from building apps, systems to building the future. Your
            code and equipment doesn't just run in browsers—it controls
            companies, optimizes factories, and shapes the physical world.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group p-8 rounded-xl bg-card border border-border ${feature.borderColor} transition-all duration-300 hover:-translate-y-2`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              data-testid={`card-feature-${index}`}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 ${feature.hoverBg} transition-colors`}
                initial={{ rotate: -15, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
              >
                <feature.icon className={`${feature.color} h-8 w-8`} />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
