import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, Award, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredPackages = [
    {
      title: "AI/ML Solutions Development",
      description: "Transform your operations with predictive analytics, NLP, and computer vision solutions.",
      price: "$3,000–$20,000",
      category: "ai-solutions" as const,
      popular: true,
      features: [
        "Predictive Analytics (Finance, Education, Healthcare)",
        "NLP Applications (Chatbots, Essay Grading, Automation)",
        "Computer Vision (Disease Detection, Surveillance, Quality Control)",
      ],
    },
    {
      title: "Data Strategy & Advisory",
      description: "Build robust data frameworks and AI adoption roadmaps for sustainable growth.",
      price: "$1,000–$5,000/month",
      category: "data-strategy" as const,
      features: [
        "Data Collection & Annotation",
        "Quality Frameworks",
        "AI Adoption Roadmaps for SMEs & Institutions",
      ],
    },
    {
      title: "Research Hub",
      description: "Drive innovation with cutting-edge prototype development and academic collaboration.",
      price: "Custom Quote",
      category: "research" as const,
      features: [
        "Prototype Development",
        "Grant Writing Support",
        "Academic Collaboration",
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Featured Services Section */}
        <section id="packages" className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Premier AI/ML Services
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover DoubleDock Global’s expertly curated AI/ML solutions to empower your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
                <Link to="/packages">
                  Explore All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DoubleDock Global?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with us to unlock the full potential of AI/ML for your organization.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-muted-foreground">Decades of combined research and industry knowledge.</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Impact-Driven</h3>
                <p className="text-muted-foreground">Focused on measurable outcomes for your success.</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Flexible Engagement</h3>
                <p className="text-muted-foreground">Consulting, projects, training, or retainers.</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Local & Global Reach</h3>
                <p className="text-muted-foreground">Solutions tailored for Africa with global standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Clients Section */}
        <section id="target-clients" className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Target Clients</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We serve a diverse range of industries with tailored AI/ML solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <p className="text-lg font-semibold">Universities & E-Learning</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Hospitals & Healthcare</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Banks & FinTechs</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Agritech Startups & NGOs</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Government Agencies</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Organization with AI
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Partner with DoubleDock Global to drive innovation and achieve measurable results.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/auth">
                Begin Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer - Only LinkedIn & Facebook */}
        <footer className="bg-sidebar py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/logo.jpg" alt="DoubleDock Global Logo" className="h-8 w-auto" />
                  <span className="text-lg font-bold text-sidebar-foreground">DoubleDock Global</span>
                </div>
                <p className="text-sidebar-foreground/70 text-sm">
                  Turning Data into Intelligent Decisions with tailored AI/ML solutions.
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold text-sidebar-foreground mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                  <li><Link to="/packages">AI/ML Solutions</Link></li>
                  <li><Link to="/packages">Data Strategy</Link></li>
                  <li><Link to="/packages">Training & Workshops</Link></li>
                  <li><Link to="/research-hub">Research Hub</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-sidebar-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                  <li><a href="mailto:doubledockglobal@gmail.com">Contact Us</a></li>
                  <li><Link to="/dashboard">Project Tracking</Link></li>
                </ul>
              </div>

              {/* Contact + Social (Only LinkedIn & Facebook) */}
              <div>
                <h4 className="font-semibold text-sidebar-foreground mb-4">Connect With Us</h4>
                <ul className="space-y-3 text-sm text-sidebar-foreground/70">
                  <li>
                    <a href="mailto:doubledockglobal@gmail.com" className="hover:text-sidebar-foreground">
                      doubledockglobal@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+2348060472489" className="hover:text-sidebar-foreground">
                      +234 806 047 2489
                    </a>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://linkedin.com/company/doubledockglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com/doubledockglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
              <p className="text-sidebar-foreground/50 text-sm">
                © 2025 DoubleDock Global. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;