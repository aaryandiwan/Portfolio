import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from "./ui/glass-card";
import { AnimatedSection } from "./ui/animated-section";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "veeraaryan10@gmail.com",
    href: "mailto:veeraaryan10@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7543031621",
    href: "tel:+917543031621",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    href: "https://maps.google.com/?q=Delhi,India",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/aaryandiwan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aaryandiwan/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ft.aaryannn", label: "Instagram" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">

          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Get In Touch
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-center mb-16 max-w-2xl mx-auto text-muted-foreground">
              Interested in working together or discussing an idea? I’m always open to meaningful conversations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              <AnimatedSection animation="fade-right" delay={200}>
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-5">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 hover:opacity-80 transition"
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl border">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p>{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={300}>
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Follow Me
                  </h3>

                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-xl border hover:scale-110 transition"
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>

            </div>

            {/* RIGHT SIDE FORM */}
            <AnimatedSection animation="fade-left" delay={200}>
              <GlassCard className="p-6 h-full">
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      rows={5}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                </form>
              </GlassCard>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}
