import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";
import heroImage from "@/assets/hero-water.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Pure water background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 animate-float">
            <Droplets className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Abhuday Pure Drops
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Premium RO Water Solutions for Pure, Safe Drinking Water
          </p>
          
          <p className="text-lg mb-12 text-muted-foreground max-w-xl mx-auto">
            Delivering quality water bottles and water campers with advanced purification technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-water text-primary-foreground hover:shadow-hover transition-all duration-300"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-secondary transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative water drops */}
      <div className="absolute bottom-10 left-10 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Droplets className="h-16 w-16 text-primary" />
      </div>
      <div className="absolute top-20 right-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Droplets className="h-12 w-12 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
