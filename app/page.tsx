import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EcosystemReveal from "@/components/sections/EcosystemReveal";
import WorkflowAnimation from "@/components/sections/WorkflowAnimation";
import ProductSpotlight from "@/components/sections/ProductSpotlight";
import ClosingSection from "@/components/sections/ClosingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-carbon-950">
      <Nav />
      <Hero />
      <EcosystemReveal />
      <WorkflowAnimation />
      <ProductSpotlight />
      <ClosingSection />
      <Footer />
    </main>
  );
}
