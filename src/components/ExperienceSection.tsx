import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "SDE 1",
      company: "Asmadiya Technologies",
      type: "Full-time",
      duration: "July 2025 - Present",
      icon: Building,
      description: "Developing and maintaining frontend applications using React and modern web technologies.",
      highlights: [
        "Built responsive user interfaces with React and Tailwind CSS",
        "Collaborated with design team to implement pixel-perfect designs",
        "Optimized application performance and user experience"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git"]
    },
    {
      role: "Frontend Developer",
      company: "AskUs Studio",
      type: "Full-time",
      duration: "Aug 2024 - March 2025",
      icon: Briefcase,
      description: "Worked on MERN stack projects and WordPress development during summer internship.",
      highlights: [
        "Developed full-stack applications using MERN stack",
        "Created custom WordPress themes and plugins",
        "Gained hands-on experience with MongoDB and Express.js"
      ],
      technologies: ["MERN Stack", "WordPress", "MongoDB", "Express.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-2">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building expertise through diverse roles in software development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={`${exp.company}-${exp.role}`}
                className="bg-card/50 border-border hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Role & Company */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <exp.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Right Column - Description & Details */}
                    <div className="lg:col-span-2">
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li 
                              key={highlightIndex}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Goals */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-tech-purple/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
                  Career Goals
                </h3>
                <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  As a 2025 graduate, I'm actively seeking <span className="text-primary font-semibold">Software Engineer roles</span> where I can contribute to building scalable solutions and continue growing into full-stack development roles. My goal is to work with innovative teams that value clean code, user experience, and continuous learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
