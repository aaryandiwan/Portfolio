import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSection } from "./ui/animated-section";

export function HeroSection() {

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open("/resumeeeeee.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 py-20 text-center">

        {/* Welcome Text */}
        <AnimatedSection animation="fade-up">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Welcome to my portfolio
          </p>
        </AnimatedSection>

        {/* Name */}
        <AnimatedSection animation="fade-up" delay={100}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Aaryan Diwan
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Data Analytics & AI/ML Enthusiast
          </p>
        </AnimatedSection>

        {/* Buttons */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button
              size="lg"
              onClick={openResume}
              className="text-lg"
            >
              Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>

          </div>
        </AnimatedSection>

      </div>

      {/* Scroll Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
