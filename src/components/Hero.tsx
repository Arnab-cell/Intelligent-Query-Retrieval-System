import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, FileSearch, Zap, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-purple-900/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            LLM-Powered
            <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Intelligence System
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced document retrieval and contextual decision-making for insurance, legal, HR, and compliance domains
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Start Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 text-white border-white/30 hover:bg-white/10">
              View Documentation
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <Brain className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">AI Processing</h3>
              <p className="text-blue-100 text-sm">Advanced LLM analysis</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <FileSearch className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Smart Retrieval</h3>
              <p className="text-blue-100 text-sm">Semantic document search</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <Zap className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Fast Processing</h3>
              <p className="text-blue-100 text-sm">Real-time analysis</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <Shield className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-blue-100 text-sm">Secure & compliant</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;