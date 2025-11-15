import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Layers } from "lucide-react";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-500",
      skills: ["Python", "C", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      color: "text-purple-500",
      skills: [
        "TensorFlow",
        "Keras",
        "Scikit-Learn",
        "NLTK",
        "Hugging Face",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Flask",
        "LangChain",
        "LlamaIndex",
      ],
    },
    {
      icon: Database,
      title: "Databases & Tools",
      color: "text-green-500",
      skills: [
        "MySQL",
        "PostgreSQL",
        "VS Code",
        "Jupyter",
        "Google Colab",
        "PyCharm",
        "Streamlit",
        "Tableau",
        "Power BI",
        "Git/GitHub",
      ],
    },
    {
      icon: Wrench,
      title: "Specializations",
      color: "text-cyan-500",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "RAG Systems",
        "Agentic AI",
        "Large Language Models",
        "Data Analysis",
        "Data Visualization",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow" style={{ fontFamily: 'Orbitron, sans-serif' }} data-testid="skills-title">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-border"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building cutting-edge AI/ML solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 md:p-8 glassmorphic border-primary/20 hover-elevate h-full" data-testid={`skills-category-${categoryIndex}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm px-3 py-1 hover-elevate cursor-default"
                        data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
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
