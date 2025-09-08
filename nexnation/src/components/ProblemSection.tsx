import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Too many countries, too little clarity on demand",
      description: "Founders waste months researching markets without clear data on customer demand or regulatory complexity."
    },
    {
      icon: Clock,
      title: "Incorporation, tax, and compliance are slow and complex",
      description: "Legal paperwork takes 3-6 months, delaying product launch and burning through precious runway."
    },
    {
      icon: DollarSign,
      title: "Hiring consultants or lawyers is expensive and confusing",
      description: "Professional services cost $10K-50K+ with unclear timelines and inconsistent quality."
    }
  ];

  return (
    <section className="section-premium bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Launching Internationally is Hard.{" "}
            <span className="text-primary">We Make It Easy.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most founders struggle with the complexity and uncertainty of international expansion. 
            These pain points kill momentum and waste valuable time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="feature-card text-left group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {problem.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
