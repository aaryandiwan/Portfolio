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
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Projects
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                animation="fade-up"
                delay={index * 100}
              >
                <GlassCard className="group overflow-hidden h-full">

                  {/* IMAGE */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-lg bg-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Button demo*/}
                    {project.liveUrl && (
                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo 🚀
                        </a>
                          )}
                    {/* GITHUB BUTTON */}
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>

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
