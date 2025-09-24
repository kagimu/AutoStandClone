import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("why-industrial");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-black">
      {/* Background overlay with subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="relative z-10 w-full max-w-6xl px-2 sm:px-3 lg:px-0 mt-10 text-left">
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
          {/* Glow effect behind text */}
          <motion.div
            className="absolute -inset-20 blur-3xl rounded-full opacity-40"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Hero Title */}
          <motion.h1
            className="
              text-4xl md:text-6xl lg:text-7xl font-bold leading-tight
              bg-gradient-to-r from-[#5B7C99] via-[#3A7D77] to-[#8DAA91]
              bg-clip-text text-transparent animate-text-shiny relative
            "
            style={{
              backgroundSize: "200% auto",
              animation: "shiny 3s linear infinite",
            }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Where<span className="text-[#2C3E50]"> Tech</span>
            <br />
            Creates<span className="text-[#c5705b]"> Solutions</span>
          </motion.h1>

          {/* Paragraph */}
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

          {/* Button Section */}

          <div>
            <Link href="/contact" className="mt-10 cursor-pointer">
                    <Button
                      variant="outline"
                      size="lg"
                      data-testid="button-contact"
                      className="border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-secondary transition-all shadow-md hover:shadow-lg"
                    >
                      Book an appointment
                    </Button>
                  
             </Link>
          </div>
           

        </motion.div>
      </div>

      {/* Floating Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -8, 0], // floating motion
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>

      {/* Shiny text animation keyframes */}
      <style>
        {`
          @keyframes shiny {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
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
