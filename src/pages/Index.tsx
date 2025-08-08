import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DocumentUpload from "@/components/DocumentUpload";
import QueryInterface from "@/components/QueryInterface";
import SystemArchitecture from "@/components/SystemArchitecture";
import ResultsDisplay from "@/components/ResultsDisplay";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="upload">
          <DocumentUpload />
        </section>
        <section id="query">
          <QueryInterface />
        </section>
        <section id="architecture">
          <SystemArchitecture />
        </section>
        <section id="results">
          <ResultsDisplay />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
