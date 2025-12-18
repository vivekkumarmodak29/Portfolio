import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "vivekkumarmodak13@gmail.com",
      href: "mailto:vivekkumarmodak13@gmail.com",
    },
    {
      icon: Phone,
      label: "+91 8987720317",
      href: "tel:+918969790825",
    },
    {
      icon: MapPin,
      label: "Ranchi, Jharkhand, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vivekkumarmodak29",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vivekkumarmodak29",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card py-16 px-4 border-t border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              VKM
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate AI/ML Engineer building innovative solutions with cutting-edge technology. 
              Let's create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="outline"
                  onClick={() => window.open(social.href, '_blank')}
                  className="hover-elevate"
                  data-testid={`footer-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid={`footer-contact-${index}`}
                    >
                      <contact.icon className="w-4 h-4 flex-shrink-0" />
                      <span>{contact.label}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <contact.icon className="w-4 h-4 flex-shrink-0" />
                      <span>{contact.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Vivek Kumar Modak. Crafted with <Heart className="w-4 h-4 text-primary fill-primary" /> and AI
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
