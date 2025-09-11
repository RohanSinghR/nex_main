import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Zap } from "lucide-react";

const CTASection = () => {
  const stats = [
    // { icon: Users, value: "500+", label: "Founders in waitlist" },
    // { icon: Globe, value: "45+", label: "Countries analyzed" },
    // { icon: Zap, value: "30", label: "Day average launch" }
  ];

  return (
    <section className="section-premium bg-gradient-hero text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Launch Where You'll{" "}
              <span className="text-primary">Win?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join the waitlist and get actionable insights in days. 
              Take the guesswork out of global expansion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg group">
              Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-outline-premium border-white text-black hover:bg-white hover:text-secondary">
              Schedule a Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;