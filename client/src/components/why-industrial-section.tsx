import { motion } from "framer-motion";
import { Globe, Cpu, Rocket, X } from "lucide-react";
import { useState } from "react";

export default function WhyIndustrialSection() {
   const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  const features = [
    {
      icon: Globe,
      title: "Real-World Impact",
      description:
        "Your code directly controls physical systems, moving from digital interfaces to tangible results that change how things are made.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverBg: "group-hover:bg-blue-500/20",
      borderColor: "hover:border-blue-500/50",
      image: "/HUAWEI.png", // Example image path
      alt: "Industrial Automation"
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Tech",
      description:
        "Work with PWA, Latest mobile designs, secure anti-cyber crime systems, quality tech equipment delivered and cloud solutions.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      hoverBg: "group-hover:bg-[#ffb940]/20",
      borderColor: "hover:border-[#ffb940]/50",
      image: "/lenovo-1.png", 
      alt: "Advanced Technology"
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
      image: "/lenovo-2.png",
      alt: "Engineering Freedom"
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
            Why <span className="text-[#4A90E2]">Choose</span> Adobe?
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
              <div className="flex mx-3 items-center text-center">
                {/* Icon */}
              <motion.div
                className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 ${feature.hoverBg} transition-colors`}
                initial={{ rotate: -15, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
              >
                <feature.icon className={`${feature.color} h-4 w-4`} />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-lg font-bold mb-4 ml-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
              >
                {feature.title}
              </motion.h3>

              </div>
            
           {/* Clickable animated image */}
      <motion.img
        src={feature.image}
        alt={feature.alt || "Feature image"}
        className="w-[100%] h-[70%] object-cover rounded-lg cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
        onClick={openModal} // <-- Open fullscreen modal
      />

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Animated fullscreen image */}
            <motion.img
              src={feature.image}
              alt={feature.alt || "Fullscreen feature image"}
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
