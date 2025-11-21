import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Brain, BookOpen } from "lucide-react";

const ResearchHub = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Research Hub
            </span>
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            DoubleDock Global’s Research Hub drives innovation through cutting-edge prototype development, grant writing support, and academic collaboration.
          </p>
          <section className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Prototype Development</h3>
              <p className="text-muted-foreground">
                Build and test innovative AI/ML prototypes from the latest research.
              </p>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Grant Writing Support</h3>
              <p className="text-muted-foreground">
                Secure funding with expertly crafted grant proposals.
              </p>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Academic Collaboration</h3>
              <p className="text-muted-foreground">
                Partner with leading researchers to advance your projects.
              </p>
            </div>
          </section>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Innovate?</h2>
            <p className="text-muted-foreground mb-6">
              Contact DoubleDock Global to explore how our Research Hub can support your AI/ML initiatives.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
              <a href="mailto:doubledockglobal@gmail.com">Get in Touch</a>
            </Button>
          </div>
        </div>
      </main>
      <footer className="bg-sidebar py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.jpg" alt="DoubleDock Global Logo" className="h-8 w-auto" />
                <span className="text-lg font-bold text-sidebar-foreground">DoubleDock Global</span>
              </div>
              <p className="text-sidebar-foreground/70 text-sm">
                Turning Data into Intelligent Decisions with tailored AI/ML solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sidebar-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li><Link to="/packages">AI/ML Solutions</Link></li>
                <li><Link to="/packages">Data Strategy</Link></li>
                <li><Link to="/packages">Training & Workshops</Link></li>
                <li><Link to="/research">Research Hub</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sidebar-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li><a href="mailto:doubledockglobal@gmail.com">Contact Us</a></li>
                <li><Link to="/dashboard">Project Tracking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sidebar-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                <li><a href="mailto:doubledockglobal@gmail.com">doubledockglobal@gmail.com</a></li>
                <li><a href="https://wa.me/+2348060472489">+2348060472489</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
            <p className="text-sidebar-foreground/50 text-sm">
              © 2025 DoubleDock Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResearchHub;