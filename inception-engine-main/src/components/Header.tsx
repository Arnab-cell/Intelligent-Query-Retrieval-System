import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDocumentation = () => {
    toast({
      title: "Documentation",
      description: "Documentation feature coming soon!",
    });
  };

  const handleGetStarted = () => {
    scrollToSection('upload');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">IntelliQuery</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Analysis</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('upload')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Upload
            </button>
            <button 
              onClick={() => scrollToSection('query')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Query
            </button>
            <button 
              onClick={() => scrollToSection('architecture')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Architecture
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Results
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" onClick={handleDocumentation}>
              Documentation
            </Button>
            <Button variant="hero" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4 mb-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('upload')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Upload
              </button>
              <button
                onClick={() => scrollToSection('query')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Query
              </button>
              <button
                onClick={() => scrollToSection('architecture')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Architecture
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-foreground hover:text-primary transition-colors py-2 text-left"
              >
                Results
              </button>
            </nav>
            
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full" onClick={handleDocumentation}>
                Documentation
              </Button>
              <Button variant="hero" className="w-full" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;