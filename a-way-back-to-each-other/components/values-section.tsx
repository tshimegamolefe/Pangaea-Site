const ValuesSection = () => {
  return (
    <section id="values" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">First Principles</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            What Pangaea is built on
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Value 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              People are the network
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Pangaea does not centralize communication. There are no servers deciding
              who connects to whom. If people are present, the network exists.
            </p>
          </div>

          {/* Value 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Privacy by absence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not collect data because there is nowhere to collect it.
              Messages are not stored, indexed, or analyzed by us.
              Surveillance requires infrastructure. Pangaea removes it.
            </p>
          </div>

          {/* Value 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Failure is assumed
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Networks go down. Power fails. Governments intervene.
              Pangaea is designed for those conditions, not as an edge case,
              but as the default.
            </p>
          </div>

          {/* Value 4 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              No growth incentives
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              There are no feeds, no engagement metrics, and no mechanisms
              that reward attention over usefulness. Coordination matters
              more than scale.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
            &quot;When infrastructure fails, people are still here.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
