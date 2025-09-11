import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const tiers = [
    {
      name: "Starter",
      price: "coming soon",
      description: "Perfect for early-stage founders testing the waters",
      features: [
        "AI country analysis (up to 3 countries)",
        "Basic incorporation guidance",
        "Standard compliance checklist",
        "Email support",
        // "30-day launch timeline"
      ],
      isPopular: false,
      cta: "Start with Starter"
    },
    {
      name: "Growth",
      price: "coming soon",
      description: "Ideal for funded startups ready to scale globally",
      features: [
        "AI country analysis (up to 10 countries)",
        "Full incorporation automation",
        "Advanced compliance management",
        "Banking & payment setup",
        "Priority support",
        // "20-day launch timeline",
        "Partner integrations included"
      ],
      isPopular: true,
      cta: "Choose Growth"
    },
    {
      name: "Elite",
      price: "coming soon",
      description: "For established companies expanding to multiple markets",
      features: [
        "Unlimited country analysis",
        "Multi-country incorporation",
        "Enterprise compliance suite",
        "Dedicated account manager",
        "Custom integrations",
        "White-glove service",
        // "10-day launch timeline",
        "Ongoing support & optimization"
      ],
      isPopular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="section-premium bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Pick the Launch Package That{" "}
            <span className="text-primary">Fits Your Startup</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing designed to scale with your ambitions. 
            No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative feature-card ${tier.isPopular ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-secondary px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {tier.price}
                  </div>
                  <p className="text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${tier.isPopular ? 'btn-hero' : 'btn-outline-premium'}`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-muted/50 rounded-xl">
          <p className="text-muted-foreground">
            <strong>Money-back guarantee:</strong> If we don't get you operational 
            in your chosen market within the promised timeline, we'll refund 100% of your investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
