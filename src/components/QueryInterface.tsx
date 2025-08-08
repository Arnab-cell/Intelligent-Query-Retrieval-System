import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, Lightbulb, Clock, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QueryInterface = () => {
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const sampleQueries = [
    "Does this policy cover knee surgery, and what are the conditions?",
    "What are the compliance requirements for data handling?",
    "Are there any exclusions for pre-existing conditions?",
    "What is the maximum coverage limit for emergency procedures?",
    "What documentation is required for claim approval?"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: "Empty Query",
        description: "Please enter a query before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call
    toast({
      title: "Processing Query",
      description: "Analyzing documents and generating response...",
    });

    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Analysis Complete",
        description: `Query: "${query.slice(0, 50)}${query.length > 50 ? '...' : ''}" processed successfully.`,
      });
      
      // Scroll to results section after processing
      setTimeout(() => {
        const resultsSection = document.getElementById('results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }, 3000);
  };

  const handleSampleQuery = (sampleQuery: string) => {
    setQuery(sampleQuery);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ask Your Question
            </h2>
            <p className="text-xl text-muted-foreground">
              Enter your query and get intelligent insights from your documents
            </p>
          </div>

          <Card className="p-8 bg-gradient-card shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="query" className="block text-lg font-semibold text-foreground mb-3">
                  Your Query
                </label>
                <Textarea
                  id="query"
                  placeholder="e.g., Does this policy cover knee surgery, and what are the conditions?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-32 text-lg resize-none border-2 focus:border-primary transition-all duration-300"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={!query.trim() || isProcessing}
                  className="flex-1"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Analyze Documents
                    </>
                  )}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setQuery("");
                    toast({
                      title: "Query Cleared",
                      description: "Query input has been cleared.",
                    });
                  }}
                  disabled={isProcessing}
                >
                  Clear
                </Button>
              </div>
            </form>

            {/* Sample Queries */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Sample Queries
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {sampleQueries.map((sampleQuery, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 p-3 text-sm"
                    onClick={() => handleSampleQuery(sampleQuery)}
                  >
                    {sampleQuery}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Search className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">&lt;5s</span>
                </div>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Queries Processed</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QueryInterface;