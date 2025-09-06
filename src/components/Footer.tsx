import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/deepakbansal"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/deepak-bansal"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:deepak.bansal@email.com"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-2 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
                Deepak Kumar Bansal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Software Developer & Frontend Engineer passionate about creating scalable, 
                intuitive web applications and digital solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="hover-glow"
                    asChild
                  >
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium">Email:</span>{" "}
                  <a 
                    href="mailto:deepak.bansal@email.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    deepak.bansal@email.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Location:</span> India
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Status:</span>{" "}
                  <span className="text-success">Available for work</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>© {currentYear} Deepak Kumar Bansal. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and React</span>
              </div>

              {/* Back to Top */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="hover-glow"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;