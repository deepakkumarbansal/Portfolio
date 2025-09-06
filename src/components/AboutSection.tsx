import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Users } from "lucide-react";
import deepakProfile from "@/assets/deepak-profile.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-2">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <span className="text-primary font-semibold">Software Engineer</span> passionate about 
              crafting scalable, efficient, and user-focused digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card hover-lift">
                  <img 
                    src={deepakProfile} 
                    alt="Deepak Kumar Bansal - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tech-purple/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Hello! I'm Deepak Kumar Bansal
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently working as an <span className="text-primary font-semibold">SDE-1</span> at 
                  <span className="text-primary font-semibold"> Asmadiya Technologies</span>.  
                  Skilled in <span className="text-primary font-semibold">Frontend</span>, 
                  <span className="text-primary font-semibold"> Backend</span>, 
                  <span className="text-primary font-semibold"> Machine Learning</span>, 
                  <span className="text-primary font-semibold"> Deep Learning</span>, and 
                  <span className="text-primary font-semibold"> Generative AI</span>.  
                  I love solving problems with clean, maintainable code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’ve also worked with <span className="text-primary font-semibold">AskUs Studio </span>  
                  and built impactful projects like 
                  <span className="text-primary font-semibold"> Awadh Kesari</span> and 
                  <span className="text-primary font-semibold"> Career Explorer</span>.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid gap-6">
                <Card className="bg-card/50 border-border hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Frontend Expertise</h4>
                        <p className="text-muted-foreground">React, JavaScript, Tailwind CSS</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-success/20 rounded-lg">
                        <Users className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">2025 Graduate</h4>
                        <p className="text-muted-foreground">Software Engineer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-tech-purple/20 rounded-lg">
                        <Rocket className="w-6 h-6 text-tech-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Projects</h4>
                        <p className="text-muted-foreground">
                          Campus Pulse, Awadh Kesari, Career Explorer
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
