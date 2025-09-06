import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Campus Pulse App",
      category: "Full Stack",
      description: "A social platform designed for students to share posts, connect with peers, and stay updated with campus activities. Built with modern web technologies for optimal user experience.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      links: {
        live: "#",
        github: "#"
      },
      highlights: ["Real-time messaging", "User authentication", "Post sharing system", "Responsive design"]
    },
    {
      title: "AskUs Foundation Website",
      category: "Frontend",
      description: "Comprehensive website showcasing foundation initiatives including PAWrangers, Women Empowerment, Little Legends, Green Squared, and other community programs.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      links: {
        live: "#",
        github: "#"
      },
      highlights: ["Initiative showcases", "Impact metrics", "Donation system", "Volunteer portal"]
    },
    {
      title: "Awadh Kesari News Portal",
      category: "Full Stack",
      description: "Complete news portal built with MERN stack featuring article management, user authentication, and admin dashboard for content management.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      links: {
        live: "#",
        github: "#"
      },
      highlights: ["Article CMS", "User roles", "Search functionality", "SEO optimized"]
    },
    {
      title: "Asmadiya AI KYC",
      category: "Frontend",
      description: "Advanced e-KYC solution integrating AWS Rekognition for facial verification and WebRTC for real-time video capture during the verification process.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      technologies: ["React", "WebRTC", "AWS Rekognition", "TypeScript"],
      links: {
        live: "#",
        github: "#"
      },
      highlights: ["Facial recognition", "Real-time verification", "Document scanning", "Secure processing"]
    },
    {
      title: "AskUs Studio Website",
      category: "WordPress",
      description: "Enhanced WordPress website with custom themes, improved performance, and modern design elements to better represent the studio's portfolio.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "MySQL"],
      links: {
        live: "#",
        github: "#"
      },
      highlights: ["Custom theme", "Performance optimization", "SEO improvements", "Mobile responsive"]
    }
  ];

  const filters = ["All", "Frontend", "Full Stack", "WordPress"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-2">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of my technical skills and creative problem-solving abilities
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card/50 border-border hover-lift overflow-hidden group transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button variant="outline" size="lg" className="hover-glow">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;