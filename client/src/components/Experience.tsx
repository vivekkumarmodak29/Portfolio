import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = {
    company: "Ardent Computech Pvt. Ltd",
    role: "Machine Learning Engineer Intern",
    duration: "July 2023 - August 2023",
    durationText: "1.5 months",
    location: "Remote",
    achievements: [
      "Developed a Movie Recommendation System using Data Science, AI, and ML",
      "Designed and implemented data models using Python",
      "Gained hands-on experience in AI-based system development and deployment",
      "Applied collaborative filtering and machine learning algorithms",
      "Worked with real-world datasets for production-ready solutions",
    ],
    skills: ["Python", "Data Science", "Machine Learning", "AI", "Data Modeling"],
  };

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence",
      institution: "Sarala Birla University",
      duration: "2021 - 2025",
      grade: "7.98 CGPA",
      status: "Completed",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Surendranath Centenary School",
      duration: "2018 - 2020",
      grade: "80.5%",
      status: "Completed",
    },
    {
      degree: "Secondary Education",
      institution: "Sarala Birla Public School",
      duration: "2018",
      grade: "81.00%",
      status: "Completed",
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-card to-background">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 opacity-30"></div>
      
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow" style={{ fontFamily: 'Orbitron, sans-serif' }} data-testid="experience-title">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-border"></div>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-primary"
          >
            Professional Experience
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 md:p-8 glassmorphic border-primary/20 hover-elevate" data-testid="experience-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-semibold mb-2">{experience.role}</h4>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Building2 className="w-5 h-5" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.duration} ({experience.durationText})</span>
                  </div>
                </div>
                <Badge variant="default" className="self-start neon-border">
                  Internship
                </Badge>
              </div>

              <div className="mb-6 space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {experience.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-primary"
          >
            Education
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 glassmorphic border-primary/20 hover-elevate h-full" data-testid={`education-card-${index}`}>
                  <div className="mb-4">
                    {/* Color 'Completed' badges green */}
                    {(() => {
                      const isCompleted = String(edu.status).toLowerCase().includes("completed");
                      return (
                        <Badge
                          variant={isCompleted ? "default" : index === 0 ? "default" : "outline"}
                          className={
                            "mb-3 " + (isCompleted ? "bg-blue-600 text-blue-50 border-transparent" : "")
                          }
                        >
                          {edu.status}
                        </Badge>
                      );
                    })()}
                    <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.duration}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-primary">{edu.grade}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
