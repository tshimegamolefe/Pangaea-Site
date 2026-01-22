import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-linear-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Start reconnecting today
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Download Pangaea and take the first step toward building the 
            community you&apos;ve always wanted. It&apos;s free, private, and made with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="xl" asChild>
              <a href="https://apps.apple.com/us/app/bitchat-mesh/id6748219622">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Android coming soon • Free forever
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
