import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Brain, Code, Database, Sparkles } from "lucide-react";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep experience in TensorFlow, PyTorch, and building production-ready ML models",
    },
    {
      icon: Code,
      title: "NLP & RAG",
      description: "Specialized in Natural Language Processing and Retrieval-Augmented Generation systems",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Expert in data preprocessing, visualization, and extracting actionable insights",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Passionate about leveraging AI to solve real-world problems with cutting-edge solutions",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-30"></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow" style={{ fontFamily: 'Orbitron, sans-serif' }} data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-border"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 glassmorphic border-primary/20 hover-elevate" data-testid="about-summary-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a passionate AI/ML engineer with practical experience in building and deploying machine 
                learning models using Python, TensorFlow, Hugging Face, and Flask. I enjoy creating real-time 
                AI applications and working with data through preprocessing, visualization, and NLP.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I understand concepts like collaborative filtering, classification, and deep learning well. 
                I'm looking for opportunities where I can use my skills to build useful and meaningful projects 
                that make a real impact.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 glassmorphic border-primary/20 hover-elevate" data-testid="about-stats-card">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7.98</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">Graduation</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="p-6 glassmorphic border-primary/20 hover-elevate h-full" data-testid={`about-highlight-${index}`}>
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
