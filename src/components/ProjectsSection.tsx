import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";
import { AnimatedSection } from "./ui/animated-section";

const projects = [
  {
    title: "EpiPredict",
    description:
      "ML-powered epidemiological prediction system for disease trend forecasting.",
    tags: ["Machine Learning", "Python", "Data Analysis"],
    image: "/projects/epipredict.jpg",
    githubUrl: "https://github.com/aaryandiwan/EpiPredict-ML",
  },
  {
    title: "IPLytics",
    description:
      "Data analytics platform analyzing IPL datasets for performance insights.",
    tags: ["Python", "Pandas", "Data Analytics"],
    image: "/projects/iplytics.jpg",
    githubUrl: "https://github.com/aaryandiwan/IPLytics",
  },
  {
    title: "Revenue Drive",
    description:
      "Revenue optimization and analytics project leveraging data-driven strategies.",
    tags: ["SQL", "Power BI", "Analytics"],
    image: "/projects/revenue.jpg",
    githubUrl: "https://github.com/aaryandiwan/RevenueDrive",
  },
  {
    title: "UPI Pulse",
    description:
      "Analyzing UPI transaction data to uncover spending patterns, detect fraudulent activity, using Python and interactive charts.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
     image: "/projects/UPISALES.jpg",
     githubUrl: "https://github.com/aaryandiwan/UPI-Pulse",
   },
  {
    title: "Paisa-Track",
    description:
      "Interactive UPI transaction dashboard built with React & Recharts, visualizing spending patterns, fraud detection, and payment insights in real-time.",
    tags: ["React", "Vite", "Fraud-Detection", " Data-Visualization"],
     image: "/projects/transactiondash.jpg",
     githubUrl: "https://github.com/aaryandiwan/Paisa-Track",
     liveUrl: "https://upi-dashboard-three.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center drop-shadow-md">
              Featured Projects
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-foreground/75 text-center mb-16 max-w-2xl mx-auto drop-shadow-sm">
              A selection of my recent work showcasing different technologies and
              problem-solving approaches.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                animation="fade-up"
                delay={150 * (index + 1)}
              >
                <GlassCard
                  variant="default"
                  className="group overflow-hidden h-full"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 drop-shadow-sm">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs bg-gradient-to-br from-foreground/[0.1] to-foreground/[0.05] backdrop-blur-sm text-foreground/80 rounded-lg border border-foreground/[0.1] shadow-[0_1px_4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.1)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="glass" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-foreground/8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
