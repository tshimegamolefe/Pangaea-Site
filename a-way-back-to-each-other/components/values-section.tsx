const ValuesSection = () => {
  return (
    <section id="values" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Believe</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Our values
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Value 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              People over platforms
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology should serve human connection, not replace it. Pangaea is a tool 
              that gets out of the way so you can focus on what matters: the people around you.
            </p>
          </div>

          {/* Value 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Privacy as care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your conversations, your resources, your community—they belong to you. 
              We don&apos;t read your messages, sell your data, or track your behavior.
            </p>
          </div>

          {/* Value 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Resilience through unity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hard times don&apos;t break connected communities—they make them stronger. 
              We build tools for the world we hope for and the challenges we might face.
            </p>
          </div>

          {/* Value 4 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Everyone matters
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Children bring joy. Elders bring wisdom. Young people bring energy. 
              Every person in your community has gifts to share.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
            &quot;We don&apos;t need another app. We need each other. Pangaea just makes that easier.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
