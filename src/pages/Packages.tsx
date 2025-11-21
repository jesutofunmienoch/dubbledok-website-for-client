import Navbar from "@/components/Navbar";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Packages = () => {
  const researchPackages = [
    {
      title: "Topic & Proposal",
      description: "Research topic generation, literature review, and proposal writing",
      price: "$100-300",
      category: "research" as const,
      features: [
        "Topic ideation and validation",
        "Comprehensive literature review",
        "Proposal structure and writing",
        "Research methodology design",
        "3 rounds of revisions"
      ]
    },
    {
      title: "Full Thesis Package",
      description: "Complete thesis writing from Chapter 1 to 5 with milestone delivery",
      price: "$500-2000",
      category: "research" as const,
      popular: true,
      features: [
        "All 5 chapters written",
        "Literature review and methodology",
        "Data analysis and results",
        "Milestone-based delivery",
        "Unlimited revisions",
        "Plagiarism-free guarantee"
      ]
    }
  ];

  const implementationPackages = [
    {
      title: "Implementation Package",
      description: "Coding, experiments, model training, and dataset preparation",
      price: "$300-1000",
      category: "implementation" as const,
      features: [
        "Custom code development",
        "Machine learning models",
        "Data preprocessing",
        "Experimental setup",
        "Documentation included",
        "Source code delivery"
      ]
    },
    {
      title: "Screen Recording",
      description: "Professional walkthroughs and demonstrations of your work",
      price: "$50-200",
      category: "implementation" as const,
      features: [
        "HD screen recordings",
        "Professional narration",
        "Step-by-step explanations",
        "Multiple formats (MP4, MOV)",
        "Editing and post-production"
      ]
    },
    {
      title: "Deployment Service",
      description: "Deploy web apps, APIs, and models to cloud platforms",
      price: "$100-500",
      category: "implementation" as const,
      features: [
        "Cloud platform setup",
        "CI/CD pipeline configuration",
        "Domain and SSL setup",
        "Performance optimization",
        "Documentation and handover",
        "3 months support included"
      ]
    }
  ];

  const submissionPackages = [
    {
      title: "Journal Submission",
      description: "Complete journal submission and revision management",
      price: "$200-800",
      category: "submission" as const,
      popular: true,
      features: [
        "Journal selection and targeting",
        "Manuscript formatting",
        "Submission process management",
        "Reviewer response handling",
        "Revision and resubmission",
        "Publication tracking"
      ]
    }
  ];

  const extraServices = [
    {
      title: "Editing & Proofreading",
      description: "Professional editing and language enhancement",
      price: "$50-200",
      category: "extras" as const,
      features: [
        "Grammar and language check",
        "Structure improvement",
        "Citation formatting",
        "Plagiarism check",
        "48-hour turnaround"
      ]
    },
    {
      title: "Presentation Design",
      description: "Professional slides and presentation materials",
      price: "$100-300",
      category: "extras" as const,
      features: [
        "Custom slide design",
        "Visual data representation",
        "Interactive elements",
        "Multiple format delivery",
        "Revision rounds included"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Research Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of academic support services tailored to your needs
          </p>
        </div>

        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="submission">Submission</TabsTrigger>
            <TabsTrigger value="extras">Extras</TabsTrigger>
          </TabsList>

          <TabsContent value="research">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="implementation">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="submission">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {submissionPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="extras">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extraServices.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-2xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find exactly what you need? We offer customized solutions tailored to your specific requirements.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;