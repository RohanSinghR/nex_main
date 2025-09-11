import { Brain, Zap, Link, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Market Fit Analyzer",
      description: "Find the best countries in days, not months. Our AI analyzes market demand, competition, and regulatory complexity to rank opportunities.",
      benefits: ["Market demand scoring", "Regulatory complexity analysis", "Competition insights", "Revenue projections"]
    },
    {
      icon: Zap,
      title: "Incorporation & Compliance Wizard",
      description: "Step-by-step guidance with minimal effort. Automated document generation and filing with real-time progress tracking.",
      benefits: ["Automated paperwork", "Real-time status updates", "Expert review process", "Compliance monitoring"]
    },
    // {
    //   icon: Link,
    //   title: "Partner Integrations",
    //   description: "Stripe, PayPal, Avalara, and more, ready to connect. Pre-built integrations with essential business tools and services.",
    //   benefits: ["Payment processing setup", "Tax calculation tools", "Banking partnerships", "Accounting integrations"]
    // },
    {
      icon: Link,
      title: "coming soon",
      description: "",
      benefits: ["Payment processing setup", "Tax calculation tools", "Banking partnerships", "Accounting integrations"]
    },
    {
      icon: TrendingUp,
      title: "Progress Tracker",
      description: "Visualize launch milestones and scale confidently. Track every step from analysis to launch with detailed reporting.",
      benefits: ["Milestone tracking", "Team collaboration", "Document management", "Launch readiness score"]
    }
  ];

  return (
    <section className="section-premium bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Features That Get You to{" "}
            <span className="text-primary">Market Fast</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to launch internationally, built into one seamless platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
