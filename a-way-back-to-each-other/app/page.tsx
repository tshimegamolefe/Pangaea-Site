import CommunitySection from "@/components/community-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorksSection from "@/components/how-it-works-section";
import ValuesSection from "@/components/values-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CommunitySection />
        <HowItWorksSection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
