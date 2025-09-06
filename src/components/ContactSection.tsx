import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deepak.bansal@email.com",
      href: "mailto:deepak.bansal@email.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/deepak-bansal",
      href: "https://linkedin.com/in/deepak-bansal"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/deepakbansal",
      href: "https://github.com/deepakbansal"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-2">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm always excited to discuss new opportunities, innovative projects, or just have a conversation about technology and development. Feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div 
                        key={item.label}
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200"
                      >
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{item.label}</p>
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Availability Status */}
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                        <Badge variant="outline" className="border-success text-success">
                          Available for Work
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      Currently seeking full-time Software Engineer opportunities
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Send className="w-6 h-6 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Prefer a quick chat?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="hover-glow">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button variant="outline" size="lg" className="hover-glow">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;