import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "bg-blue-500/30 text-blue-400",
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "CSS3", "HTML5", "Responsive Design"]
    },
    {
      title: "Backend & Database",
      color: "bg-purple-500/30 text-purple-400",
      skills: ["MongoDB", "Node.js", "Express.js", "REST APIs", "Database Design", "Mongoose"]
    },
    {
      title: "Real-time Communication",
      color: "bg-pink-500/30 text-pink-400",
      skills: ["WebRTC", "Socket.IO"]
    },
    {
      title: "Development Tools",
      color: "bg-green-500/30 text-green-400",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite"]
    },
    {
      title: "Cloud & Services",
      color: "bg-yellow-400/30 text-yellow-400",
      skills: ["AWS Rekognition", "Appwrite", "Vercel", "WordPress"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-2">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="bg-card/50 border-border hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-foreground text-2xl">
                      {category.title}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-tech-purple rounded-full" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className={`${category.color} border-0 text-base hover:scale-105 transition-transform duration-200`}
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Highlight */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Primary Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["TypeScript", "Tailwind CSS","Git", "React","MongoDB", "Node.js", ].map((tech, index) => (
                <div 
                  key={tech}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
