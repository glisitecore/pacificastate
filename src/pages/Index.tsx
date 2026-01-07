import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { NewsSection } from "@/components/NewsSection";
import { AgenciesSection } from "@/components/AgenciesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <NewsSection />
        <AgenciesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
