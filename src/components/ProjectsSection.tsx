export const ProjectsSection = () => {
  const projects = [
    {
      title: "EpiPredict",
      description: "ML-powered epidemiological prediction system for disease trend forecasting.",
      link: "https://github.com/aaryandiwan/EpiPredict-ML"
    },
    {
      title: "IPLytics",
      description: "Data analytics platform analyzing IPL datasets for performance insights.",
      link: "https://github.com/aaryandiwan/IPLytics"
    },
    {
      title: "Revenue Drive",
      description: "Revenue optimization and analytics project leveraging data-driven strategies.",
      link: "https://github.com/aaryandiwan/RevenueDrive"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
