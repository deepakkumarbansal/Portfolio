import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpeg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real app, this would download the actual resume
    console.log("Downloading resume...");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* <div className="absolute inset-0 hero-gradient opacity-80" /> */}
      <div className="absolute inset-0 bg-[#00000094]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
              Deepak Kumar Bansal
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-muted-foreground animate-slide-up">
            AI & Full Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Passionate about building{" "}
            <span className="text-primary font-semibold">scalable</span>,{" "}
            <span className="text-primary font-semibold">intuitive</span>, and{" "}
            <span className="text-primary font-semibold">modern</span>{" "}
            web applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-bounce-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4"
            >
              <ExternalLink className="w-5 h-5" />
              View My Work
            </Button>
            <Button 
              variant="heroSecondary" 
              size="lg"
              onClick={downloadResume}
              className="px-8 py-4"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('about')}
              className="rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary"
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-purple/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-bounce" />
    </section>
  );
};

export default HeroSection;