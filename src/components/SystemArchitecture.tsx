import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Brain, 
  Search, 
  GitBranch, 
  Cpu, 
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const SystemArchitecture = () => {
  const components = [
    {
      id: 1,
      title: "Input Documents",
      description: "PDF Blob URL",
      icon: FileText,
      details: ["PDF Processing", "DOCX Support", "Email Integration"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "LLM Parser",
      description: "Extract structured query",
      icon: Brain,
      details: ["Natural Language Processing", "GPT-4 Integration", "Query Understanding"],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Embedding Search",
      description: "FAISS/Pinecone retrieval",
      icon: Search,
      details: ["Vector Embeddings", "Semantic Search", "Fast Retrieval"],
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Clause Matching",
      description: "Semantic similarity",
      icon: GitBranch,
      details: ["Similarity Scoring", "Contextual Matching", "Relevance Ranking"],
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Logic Evaluation",
      description: "Decision processing",
      icon: Cpu,
      details: ["Rule Engine", "Context Analysis", "Decision Trees"],
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "JSON Output",
      description: "Structured response",
      icon: Database,
      details: ["Formatted Results", "API Response", "Data Export"],
      color: "bg-indigo-500"
    }
  ];

  const techStack = [
    { name: "FastAPI", category: "Backend", color: "bg-green-600" },
    { name: "GPT-4", category: "LLM", color: "bg-purple-600" },
    { name: "Pinecone", category: "Vector DB", color: "bg-blue-600" },
    { name: "PostgreSQL", category: "Database", color: "bg-blue-800" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              System Architecture & Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A sophisticated pipeline that transforms document queries into intelligent, contextual responses
            </p>
          </div>

          {/* Architecture Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {components.map((component, index) => {
              const Icon = component.icon;
              const isLast = index === components.length - 1;
              
              return (
                <div key={component.id} className="relative">
                  <Card className="p-6 bg-gradient-card hover:shadow-elevated transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full ${component.color} flex items-center justify-center text-white font-bold text-lg`}>
                        {component.id}
                      </div>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {component.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {component.description}
                    </p>
                    
                    <div className="space-y-2">
                      {component.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  {/* Arrow for desktop */}
                  {!isLast && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-primary" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Recommended Tech Stack
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-elevated transition-all duration-300 text-center">
                  <div className={`w-16 h-16 rounded-lg ${tech.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-lg">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{tech.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {tech.category}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* API Information */}
          <Card className="mt-16 p-8 bg-gradient-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              API Documentation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Base URL (Local Development)</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  http://localhost:8000/api/v1
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Authentication</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  Authorization: Bearer [token]
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-semibold text-foreground mb-3">Main Endpoint</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-green-600 text-white">POST</Badge>
                    <span className="font-mono">/hackrx/run</span>
                  </div>
                  <p className="text-gray-300 text-sm">Run Submissions - Process document queries and return structured responses</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;