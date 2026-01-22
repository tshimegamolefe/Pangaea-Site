import { Users, Heart, HandHeart, Sprout, Shield, Home } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "All Generations Together",
    description: "Young and old, parents and children, neighbors and friends. Everyone has something to offer, everyone has a place.",
  },
  {
    icon: HandHeart,
    title: "Share Skills & Resources",
    description: "Maybe you fix cars. Maybe she bakes bread. Maybe he teaches music. Together, your community has everything it needs.",
  },
  {
    icon: Shield,
    title: "Safe & Private",
    description: "Your conversations stay between your group. No data harvesting, no ads, no algorithms deciding what you see.",
  },
  {
    icon: Home,
    title: "Hyperlocal Focus",
    description: "Built for real neighborhoods and real communities. The people you can actually reach out and help.",
  },
  {
    icon: Sprout,
    title: "Grow Resilience",
    description: "When hard times come, connected communities survive. Build those bonds now, before you need them.",
  },
  {
    icon: Heart,
    title: "Lead with Kindness",
    description: "No social scores, no popularity contests. Just people helping people, the way it should be.",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Heart of Pangaea</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Community is our strength
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a world that keeps pulling us apart, Pangaea brings us back together. 
            Not through likes or followers, but through genuine connection and mutual aid.
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
