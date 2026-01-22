import { Smartphone, Users, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download the app",
    description: "Get Pangaea on your phone. It's free and takes just a minute to set up.",
  },
  {
    number: "02",
    icon: Users,
    title: "Form or join a cell",
    description: "Connect with 5-12 people you trust—neighbors, family, friends. Your inner circle.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Coordinate together",
    description: "Share skills, resources, and help each other out. Even when the internet's down.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Build something real",
    description: "Watch your community grow stronger, more resilient, more connected.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Simple & Practical</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            How Pangaea works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No complicated setup. No learning curve. Just download, connect, and start building your community.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-card rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                {/* Step Number */}
                <span className="absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </span>
                
                <div className="flex items-start gap-4 mt-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offline Note */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="font-serif font-semibold text-foreground mb-2">Works without internet</h3>
            <p className="text-muted-foreground">
              Pangaea uses mesh networking to connect nearby devices directly. 
              When the WiFi goes out, your community stays connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
