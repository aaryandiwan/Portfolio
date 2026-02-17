import { Button } from "./ui/button";

export const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
         <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Aaryan Diwan
          </h1>


                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Data Analytics & AI/ML Enthusiast
                </p>
                <div className="flex gap-6 justify-center items-center mt-8">
                    <button className="px-8 py-3 bg-white text-gray-800 font-medium rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        View My Work
                    </button>

                    <button className="px-8 py-3 bg-white text-gray-800 font-medium rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        Resume
                    </button>
                </div>

            </div>
        </section>
    );
};
