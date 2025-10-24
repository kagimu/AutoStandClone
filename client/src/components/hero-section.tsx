import { Button } from "@/components/ui/button";
import { ChevronDown, Server, Cloud, Cpu, Code, Database } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("why-industrial");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Floating icons with different colors
  const floatingIcons = [
    { icon: Server, color: "#4ade80" },     // green
    { icon: Cloud, color: "#60a5fa" },      // blue
    { icon: Cpu, color: "#facc15" },        // yellow
    { icon: Code, color: "#f472b6" },       // pink
    { icon: Database, color: "#a78bfa" },   // purple
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/AI-IMAGE.jpeg')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl px-2 sm:px-3 lg:px-0 xl:mt-10 xl:text-left text-center md:p-4">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <motion.h1
            className="
              text-4xl md:text-6xl lg:text-7xl font-bold leading-tight
              bg-gradient-to-r from-[#4A90E2] via-[#E2E2E2] to-[#a78bfa]
              bg-clip-text text-transparent animate-text-shiny relative
            "
            style={{ backgroundSize: "200% auto", animation: "shiny 3s linear infinite" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Smart<span className="text-[#4A90E2]"> Tech</span>
            <br />
            Better<span className="text-[#7A5AF0]"> Solutions</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
            }}
          >
            We provide tailored IT solutions, including Managed Services, Consultancy,
            Software Development, Cybersecurity, and Cloud Solutions — all designed
            to enhance your business. Let us help you grow and thrive in the digital world!
          </motion.p>

          <div>
            <Link href="/contact" className="mt-10 cursor-pointer">
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-[#4A90E2] transition-all shadow-md hover:shadow-lg"
              >
                Book a free Assessment
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Random Floating IT Icons */}
    {floatingIcons.map((item, index) => {
  const Icon = item.icon;
  const randomX = Math.random() * 35 + 60; // 60% to 95% horizontally (right side)
  const randomY = Math.random() * 70 + 10; // 10% to 80% vertically
  const floatDistance = Math.random() * 20 + 10; // vertical floating distance

  return (
    <motion.div
      key={index}
      className="absolute"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        fontSize: `${2 + Math.random() * 2.5}rem`,
        color: item.color,
      }}
      animate={{
        y: [0, floatDistance, 0],
        x: [0, floatDistance / 4, 0], // slight horizontal movement
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
    >
      <Icon />
    </motion.div>
  );
})}

      {/* Floating Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>

      <style>
        {`
          @keyframes shiny {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          .animate-text-shiny {
            background-size: 200% auto;
            animation: shiny 3s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
