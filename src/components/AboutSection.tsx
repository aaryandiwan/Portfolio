import { Code, Search, Lightbulb } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { AnimatedSection } from "./ui/animated-section";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "I write clean, efficient, and scalable code focused on performance and long-term maintainability.",
  },
  {
    icon: Search,
    title: "Data & AI Focus",
    description:
      "I enjoy working with data analytics and AI/ML to uncover insights and build intelligent solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I approach challenges with logical thinking, discipline, and a strong problem-solving mindset.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              About Me
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-foreground/75 text-center mb-16 max-w-2xl mx-auto">
              Computer Science undergraduate deeply interested in AI, Data, and Machine Learning. Throughout my college years, I’ve balanced academics and building tech with my passion for sports. I am highly adaptive, always finding my way through complex problems and diverse groups of people, and I listen carefully to build trust through my actions. Most importantly, I am someone who shows up. I believe that while everyone does the work, bringing the same focused mindset and intensity every single day is rare and that is exactly the standard I bring to the table.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            
            {/* LEFT TEXT */}
            <AnimatedSection animation="fade-right" delay={200}>
            

              <p className="text-foreground/75 mb-6 leading-relaxed">
                I consider myself a continuous learner and a dedicated listener. Whether solving complex SQL queries or exploring emerging AI trends, I approach every challenge with focus and discipline.
              </p>

              <p className="text-foreground/75 leading-relaxed">
                When I’m not coding or working with datasets, you’ll likely find me playing sports or enjoying a good cup of coffee. I believe the discipline of an athlete and the precision of an analyst go hand in hand.
              </p>
            </AnimatedSection>

            {/* RIGHT STATS CARD */}
            <AnimatedSection animation="fade-left" delay={300}>
              <GlassCard variant="strong" className="p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  
                  <div>
                    <p className="text-3xl font-bold text-foreground">0-1</p>
                    <p className="text-sm text-foreground/70">Years Experience</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-foreground">5+</p>
                    <p className="text-sm text-foreground/70">Projects Completed</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-foreground">2+</p>
                    <p className="text-sm text-foreground/70">Research / ML Projects</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-foreground">10+</p>
                    <p className="text-sm text-foreground/70">Technologies</p>
                  </div>

                </div>
              </GlassCard>
            </AnimatedSection>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <AnimatedSection
                key={item.title}
                animation="fade-up"
                delay={100 * (index + 1)}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent border border-foreground/[0.1] mb-4">
                    <item.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {item.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
