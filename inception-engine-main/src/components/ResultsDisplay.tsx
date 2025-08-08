import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Download, 
  Copy,
  TrendingUp,
  Clock,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResultsDisplay = () => {
  const { toast } = useToast();

  // Sample result data
  const sampleResult = {
    query: "Does this policy cover knee surgery, and what are the conditions?",
    confidence: 92,
    processingTime: "2.3s",
    decision: "COVERED",
    summary: "Knee surgery is covered under this policy with specific conditions and requirements.",
    details: {
      coverage: "Yes - Covered under surgical procedures",
      conditions: [
        "Prior authorization required from primary care physician",
        "Must be deemed medically necessary",
        "Minimum 6 months of documented conservative treatment",
        "Pre-existing condition waiting period applies if applicable"
      ],
      limitations: [
        "Maximum coverage: $50,000 per incident",
        "Deductible: $2,500 applies",
        "In-network providers required for full coverage"
      ],
      exclusions: [
        "Cosmetic or elective procedures",
        "Experimental treatments",
        "Surgery due to sports injuries (separate coverage needed)"
      ]
    },
    sources: [
      { document: "Health_Policy_2024.pdf", page: 23, relevance: 95 },
      { document: "Surgical_Coverage_Guide.pdf", page: 8, relevance: 88 },
      { document: "Prior_Auth_Requirements.pdf", page: 12, relevance: 82 }
    ]
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Result has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const exportResults = () => {
    try {
      const timestamp = new Date().toISOString().split('T')[0];
      const jsonData = JSON.stringify(sampleResult, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `query_results_${timestamp}.json`;
      a.click();
      URL.revokeObjectURL(url);
      
      toast({
        title: "Results exported",
        description: "Query results downloaded as JSON file.",
      });
    } catch (error) {
      toast({
        title: "Export failed",
        description: "Failed to export results. Please try again.",
        variant: "destructive",
      });
    }
  };

  const viewDocument = (documentName: string, page: number) => {
    toast({
      title: "Document Viewer",
      description: `Opening ${documentName} at page ${page}...`,
    });
    // Here you would typically open a document viewer modal or navigate to a document view
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Analysis Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Intelligent insights extracted from your documents
            </p>
          </div>

          {/* Query Summary */}
          <Card className="p-8 mb-8 bg-gradient-card shadow-elevated">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Query</h3>
                <p className="text-lg text-muted-foreground italic">"{sampleResult.query}"</p>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(JSON.stringify(sampleResult, null, 2))}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportResults}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">{sampleResult.confidence}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Confidence</p>
              </div>
              
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">{sampleResult.processingTime}</span>
                </div>
                <p className="text-sm text-muted-foreground">Processing Time</p>
              </div>
              
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <Badge 
                    className={`text-lg px-4 py-1 ${
                      sampleResult.decision === 'COVERED' ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'
                    }`}
                  >
                    {sampleResult.decision}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Decision</p>
              </div>
            </div>

            {/* Summary */}
            <div className="p-6 bg-accent/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Summary
              </h4>
              <p className="text-foreground">{sampleResult.summary}</p>
            </div>
          </Card>

          {/* Detailed Results */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Coverage Details */}
            <Card className="p-6 bg-gradient-card">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                Coverage Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Coverage Status</h4>
                  <p className="text-muted-foreground">{sampleResult.details.coverage}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Conditions</h4>
                  <ul className="space-y-2">
                    {sampleResult.details.conditions.map((condition, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Limitations & Exclusions */}
            <Card className="p-6 bg-gradient-card">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Limitations & Exclusions
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Limitations</h4>
                  <ul className="space-y-2">
                    {sampleResult.details.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Exclusions</h4>
                  <ul className="space-y-2">
                    {sampleResult.details.exclusions.map((exclusion, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Source Documents */}
          <Card className="p-6 bg-gradient-card">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Source Documents
            </h3>
            
            <div className="space-y-3">
              {sampleResult.sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{source.document}</p>
                      <p className="text-sm text-muted-foreground">Page {source.page}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm">
                      {source.relevance}% relevant
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => viewDocument(source.document, source.page)}
                    >
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsDisplay;