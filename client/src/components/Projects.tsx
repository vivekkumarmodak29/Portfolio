import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle } from "lucide-react";

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI-Powered Research Assistant with RAG & Agentic AI",
      description: "Built an intelligent research assistant combining Retrieval-Augmented Generation with multi-agent systems for context-aware responses and automated task execution.",
      features: [
        "RAG implementation with embeddings and vector databases (Pinecone/FAISS)",
        "Agentic AI layer using LangChain Agents for multi-step reasoning",
        "Real-time web application with Flask/Streamlit",
        "AI-assisted development with GitHub Copilot",
      ],
      tech: ["Python", "LangChain", "LLMs", "Flask", "Streamlit", "Pinecone", "FAISS"],
    },
    {
      title: "WhatsApp Chat Analysis System",
      description: "Comprehensive chat analytics tool that extracts meaningful insights from WhatsApp conversations using NLP and data visualization techniques.",
      features: [
        "Word frequency analysis and sentiment tracking",
        "Interactive visualizations with Matplotlib",
        "Chat trend identification and pattern recognition",
        "User behavior analytics dashboard",
      ],
      tech: ["Python", "NLTK", "Matplotlib", "Streamlit", "Pandas"],
    },
    {
      title: "Text Summarization Website",
      description: "Web-based NLP application that generates concise, meaningful summaries from large text documents using state-of-the-art transformer models.",
      features: [
        "Pre-trained NLP models from Hugging Face Transformers",
        "Optimized summarization accuracy and coherence",
        "Google Analytics integration for user tracking",
        "Clean, responsive web interface",
      ],
      tech: ["Python", "Hugging Face", "Flask", "HTML", "CSS", "Google Analytics"],
    },
    {
      title: "Multiple Disease Prediction System",
      description: "Machine learning platform for diagnosing multiple diseases from user symptoms with high accuracy across various medical datasets.",
      features: [
        "Predictive models for Diabetes, Heart Disease, and Eye conditions",
        "Flask web interface for seamless user interaction",
        "High accuracy classification models",
        "Real-time prediction engine",
      ],
      tech: ["TensorFlow", "Scikit-learn", "Flask", "Python", "Pandas"],
    },
    {
      title: "Movie Recommendation System",
      description: "Intelligent recommendation engine using collaborative filtering and machine learning to suggest personalized movie choices based on user preferences.",
      features: [
        "Collaborative filtering algorithms",
        "Data modeling with Python",
        "Personalized recommendation engine",
        "Developed during ML internship at Ardent Computech",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Science"],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow" style={{ fontFamily: 'Orbitron, sans-serif' }} data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-border"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions that demonstrate practical expertise and problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 md:p-8 glassmorphic border-primary/20 hover-elevate h-full group" data-testid={`project-card-${index}`}>
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4 space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs"
                      data-testid={`project-${index}-tech-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
