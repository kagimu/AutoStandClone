import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-[9999] 
                     bg-gradient-to-br from-[#4A90E2] via-[#6BB5FF] to-[#1E3A8A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating orbs (subtle, blue glow) */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,0.5), transparent 60%)`,
                }}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 1.2,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 7 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Logo animation */}
          <motion.img
            src="/Icon.png"
            alt="Loading Logo"
            className="w-28 h-28 mb-8 drop-shadow-2xl"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Text animation */}
          <motion.p
            className="text-white text-lg font-medium tracking-widest uppercase drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.7, 1] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            Preparing your experience...
          </motion.p>

          {/* Subtle glow effect behind logo */}
          <motion.div
            className="absolute w-64 h-64 bg-[#4A90E2]/40 blur-3xl rounded-full -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.9], opacity: [0.3, 0.6, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
