import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function AnimatedChatbot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const yPosition = Math.min(scrollPercent * 80, 80);
      setPosition({ x: 0, y: yPosition });
    };

    window.addEventListener('scroll', handleScroll);
    
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(waveInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 cursor-pointer group pointer-events-auto"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: `${position.y}vh`
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        y: { type: "spring", stiffness: 50, damping: 20 }
      }}
      data-testid="chatbot-widget"
    >
      <motion.div
        className="relative"
        animate={isWaving ? { rotate: [0, -15, 15, -15, 0] } : { y: [0, -10, 0] }}
        transition={
          isWaving 
            ? { duration: 0.5, ease: "easeInOut" }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="relative">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glassmorphic neon-border flex items-center justify-center">
            <div className="relative">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
            </div>
          </div>
          
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary animate-pulse-glow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </div>

        <motion.div
          className="absolute bottom-full right-0 mb-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          <div className="bg-card border border-primary/30 rounded-lg px-4 py-2 shadow-lg">
            <p className="text-sm font-medium text-card-foreground">
              Chat coming soon! 💬
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
