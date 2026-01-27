import { Home, Layers, Radio, Shield, Sprout, Users } from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Works Without the Internet",
    description: "Messages move directly between nearby devices. No towers, no SIM cards, no central servers.",
  },
  {
    icon: Layers,
    title: "Local Coordination Layer",
    description: "Communities exist as shared state on people’s phones. Nothing lives on a central system that can be shut down.",
  },
  {
    icon: Users,
    title: "All Roles Count",
    description: "People contribute skills, tools, and availability. What a community can do emerges from who is present.",
  },
  {
    icon: Shield,
    title: "Private by Construction",
    description: "No accounts. No data collection. No feeds. Messages are encrypted and only exist where they are received.",
  },
  {
    icon: Home,
    title: "Built for Physical Places",
    description: "Designed for neighborhoods, farms, campuses, protest zones, disaster sites, and anywhere people are co-located.",
  },
  {
    icon: Sprout,
    title: "Resilience Over Time",
    description: "When networks fail or are removed, coordination continues. This is infrastructure that degrades gracefully.",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider"> What Pangaea Is</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Communication <br /> as local infrastructure
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pangaea is not a social network. It is a way for people in the same place to
            communicate and coordinate without relying on systems they do not control.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
