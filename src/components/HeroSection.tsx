import { ArrowDown } from "lucide-react";
import { AnimatedSection } from "./ui/animated-section";

export function HeroSection() {

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          {/* TOP SMALL TEXT */}
          <AnimatedSection animation="fade-up">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Welcome to my portfolio
            </p>
          </AnimatedSection>

          {/* BIG NAME */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Aaryan Diwan
            </h1>
          </AnimatedSection>

          {/* SUBTITLE */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground">
              Data Analytics & AI/ML Enthusiast
            </p>
          </AnimatedSection>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>

    </section>
  );
}
