import { ArrowRight, Search, FileCheck, CreditCard, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Analyze",
      description: "AI ranks countries for demand, ease of compliance, and revenue potential"
    },
    {
      icon: FileCheck,
      title: "Incorporate",
      description: "Automated paperwork and step-by-step guidance through legal requirements"
    },
    {
      icon: CreditCard,
      title: "Comply",
      description: "Tax registration, banking setup, and payment processing integration"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Go live with confidence in your chosen market within 30 days"
    }
  ];

  return (
    <section className="section-premium bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            One Platform, <span className="text-primary">Every Step Covered</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NexNation uses AI to rank countries for demand, ease of compliance, 
            and revenue potential. Then it automates incorporation, tax registration, 
            and banking setup so you can launch with confidence.
          </p>
        </div>

        <div className="relative">
          {/* Flow Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="feature-card text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Background line connecting steps */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-border -z-10"></div>
        </div>

        <div className="text-center mt-16">
          <Button className="btn-hero text-lg">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;