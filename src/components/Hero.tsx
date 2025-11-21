import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import logoPlaceholder from "../../public/logo.png"; // Placeholder for image1.png or image2.jpeg

const Hero = () => {
  const { isSignedIn } = useUser();

  return (
    <section className="relative h-auto flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="container px-4 mx-auto text-center relative z-10 py-16">
        <div className="max-w-4xl mx-auto">
          <img src={logoPlaceholder} alt="DoubleDock Global Logo" className="h-12 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              DoubleDock Global
            </span>
            <br />
            <span className="text-foreground">Turning Data into Intelligent Decisions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Harness the power of AI/ML with tailored solutions for businesses, institutions, and governments. From predictive analytics to academic collaboration, we drive innovation and measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
              <Link to={isSignedIn ? "/dashboard" : "/auth"}>
                {isSignedIn ? "Access Your Dashboard" : "Start Your AI Journey"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/packages">Explore Our Services</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">AI Projects Delivered</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">100+</div>
                <div className="text-xs text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-foreground">95%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-success" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">24/7</div>
                <div className="text-xs text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;