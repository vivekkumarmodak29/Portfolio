import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import sqlCert from "@assets/certificate Mysql skillup _1763213672995.pdf";
import aiForIndiaCert from "@assets/GuviCertification - p05C4vP8u61692Vc6W_1763213672996.png";
import machineTranslationCert from "@assets/Machine_Trasnlation.jpeg_1763213672996.png";
import internshipCert from "@assets/VIVEK KUMAR MODAK_1763213672998.pdf";

export function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: "AI For India 2.0",
      issuer: "Guvi / Skill India Digital",
      date: "August 15, 2023",
      description: "Completed comprehensive AI training program through Skill India initiative",
      image: aiForIndiaCert,
      type: "image",
    },
    {
      title: "Machine Translation",
      issuer: "Great Learning Academy",
      date: "November 2023",
      description: "Successfully completed free online course on Machine Translation",
      image: machineTranslationCert,
      type: "image",
    },
    {
      title: "Introduction to SQL",
      issuer: "SkillUp",
      date: "January 8, 2023",
      description: "Certificate code: 4075757",
      image: sqlCert,
      type: "pdf",
    },
    {
      title: "ML Internship Certificate",
      issuer: "Ardent Computech Pvt. Ltd",
      date: "July - August 2023",
      description: "Data Science, AI and Machine Learning internship certification",
      image: internshipCert,
      type: "pdf",
    },
    {
      title: "Power BI",
      issuer: "Microsoft / Training Provider",
      date: "2023",
      description: "Data visualization and business intelligence certification",
      image: null,
      type: "placeholder",
    },
    {
      title: "Additional Certification",
      issuer: "Professional Development",
      date: "2023",
      description: "Continuous learning in AI/ML technologies",
      image: null,
      type: "placeholder",
    },
  ];

  return (
    <section id="certificates" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow" style={{ fontFamily: 'Orbitron, sans-serif' }} data-testid="certificates-title">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-border"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in AI/ML
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {cert.image ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Card 
                      className="p-6 glassmorphic border-primary/20 hover-elevate cursor-pointer h-full group"
                      data-testid={`certificate-card-${index}`}
                    >
                      <div className="mb-4">
                        {cert.type === "image" && (
                          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-primary/20">
                            <img 
                              src={cert.image} 
                              alt={cert.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-6 h-6 text-primary" />
                          <Badge variant="default" className="text-xs">Certified</Badge>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground border-t border-border pt-3">
                        {cert.description}
                      </p>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    {cert.type === "image" ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-auto rounded-lg"
                      />
                    ) : (
                      <iframe 
                        src={cert.image} 
                        className="w-full h-[80vh]"
                        title={cert.title}
                      />
                    )}
                  </DialogContent>
                </Dialog>
              ) : (
                <Card 
                  className="p-6 glassmorphic border-primary/20 hover-elevate h-full"
                  data-testid={`certificate-card-${index}`}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-full h-48 mb-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                      <Award className="w-16 h-16 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-6 h-6 text-primary" />
                      <Badge variant="outline" className="text-xs">Certification</Badge>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground border-t border-border pt-3">
                    {cert.description}
                  </p>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
