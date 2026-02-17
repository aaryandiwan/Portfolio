import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="text-primary">Aaryan Diwan</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Computer Science & Engineering Undergraduate at Galgotias University
          with a passion for Data Analytics and AI/ML.
        </p>
        <Button asChild>
          <a href="#projects">View My Work</a>
        </Button>
        <Button
                                size="lg"
                                onClick={() => {
                                    const link = document.createElement("a");
                                    link.href = "/resumeeeeee.pdf";
                                    link.download = "resumeeeeee.pdf";
                                    link.click();
                                }}
                                className="text-lg text-center"
                            >
                                Resume
                            </Button>
      </div>
    </section>
  );
};
