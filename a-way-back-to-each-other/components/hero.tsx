import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={"/a-way-back.png"} 
          alt="Community gathering together" 
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-[1.5px] rounded-full px-4 py-2 mb-8 shadow-none border-none">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Building bridges, not walls</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
            Pangaea
          </h1>
          
          {/* Slogan */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground/90 mb-4 italic">
            A way back to each other
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed text-balance">
            When the world feels divided, we find strength in coming together. 
            Pangaea connects neighbors, families, and communities to work as one.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 mt-44 md:mt-72">
             <Button variant="warm" size="xl"  asChild>
              <a href="https://apps.apple.com/us/app/bitchat-mesh/id6748219622">
                <Users className="w-5 h-5 mr-2" />
                Join Your Community
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how-it-works">Learn How It Works</a>
            </Button>
           
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Works offline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Private & secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Free to use</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
