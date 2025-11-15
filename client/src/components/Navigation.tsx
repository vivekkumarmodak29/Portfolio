import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glassmorphic shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-xl md:text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                VKM
              </h1>
            </motion.div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button 
                variant="default" 
                size="sm"
                className="neon-border"
                onClick={() => window.open('mailto:vivekkumarmodak13@gmail.com', '_blank')}
                data-testid="button-nav-contact"
              >
                Contact
              </Button>
            </div>

            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-30 lg:hidden glassmorphic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.button>
            ))}
            <Button 
              variant="default" 
              size="lg"
              className="neon-border"
              onClick={() => {
                window.open('mailto:vivekkumarmodak13@gmail.com', '_blank');
                setIsMobileMenuOpen(false);
              }}
              data-testid="button-mobile-contact"
            >
              Contact
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
