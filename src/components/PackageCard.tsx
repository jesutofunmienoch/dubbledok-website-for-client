import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  category: "ai-solutions" | "data-strategy" | "training" | "research" | "implementation" | "submission" | "extras";
}

const PackageCard = ({ title, description, price, features, popular = false, category }: PackageCardProps) => {
  const getCategoryColor = () => {
    switch (category) {
      case "ai-solutions":
        return "bg-primary/10 text-primary border-primary/20";
      case "data-strategy":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "training":
        return "bg-accent/10 text-accent-foreground border-accent/20";
      case "research":
        return "bg-success/10 text-success border-success/20";
      case "implementation":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "submission":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "extras":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <Card className={`relative transition-all duration-300 hover:shadow-hover ${popular ? 'border-primary shadow-card' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-hero text-white px-3 py-1">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              {description}
            </CardDescription>
          </div>
          <Badge variant="outline" className={getCategoryColor()}>
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </Badge>
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-sm text-muted-foreground ml-1">starting from</span>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button 
          className={`w-full ${popular ? 'bg-gradient-hero hover:opacity-90' : ''}`}
          variant={popular ? "default" : "outline"}
        >
          Request a Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;