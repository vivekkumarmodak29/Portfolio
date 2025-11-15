import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/3D_AI_engineer_character_36d19d52.png";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const name = "VIVEK KUMAR MODAK";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background opacity-50"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 space-y-8"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.p 
              className="text-primary text-sm md:text-base font-medium tracking-widest uppercase"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.p>
            
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {name.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${letter === ' ' ? 'w-4' : ''} text-glow text-foreground`}
                    data-testid={`hero-letter-${i}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
              variants={itemVariants}
              data-testid="hero-title"
            >
              AI Engineer | ML Specialist | Data Analyst
            </motion.h2>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
              variants={itemVariants}
              data-testid="hero-description"
            >
              Passionate about building innovative AI/ML solutions. Specializing in NLP, 
              Retrieval-Augmented Generation (RAG), and creating real-time AI applications 
              that solve meaningful problems.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="neon-border group"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-view-projects"
            >
              View Projects
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            <Button 
              size="icon" 
              variant="outline"
              onClick={() => window.open('https://linkedin.com/in/vivekkumarmodak29', '_blank')}
              className="hover-elevate"
              data-testid="button-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              variant="outline"
              onClick={() => window.open('https://github.com/vivekkumarmodak', '_blank')}
              className="hover-elevate"
              data-testid="button-github"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              variant="outline"
              onClick={() => window.open('mailto:vivekkumarmodak13@gmail.com', '_blank')}
              className="hover-elevate"
              data-testid="button-email"
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              variant="outline"
              onClick={() => window.open('tel:+918969790825', '_blank')}
              className="hover-elevate"
              data-testid="button-phone"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateY: 0,
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            delay: 0.5
          }}
        >
          <motion.div
            className="relative"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Vivek Kumar Modak - AI Engineer" 
              className="relative z-10 w-full max-w-md h-auto drop-shadow-2xl"
              data-testid="hero-image"
            />
            <motion.div
              className="absolute -inset-4 border-2 border-primary/30 rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
