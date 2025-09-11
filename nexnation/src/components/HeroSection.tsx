import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="section-premium bg-gradient-hero text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Launch Your Startup Where It Will{" "}
                <span className="text-primary">Win—Globally</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                NexNation combines AI market-fit insights with automated 
                incorporation and compliance to get you operational in 30 days.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg">
                Join the Waitlist
              </Button>
              <Button variant="outline" className="btn-outline-premium border-white text-black hover:bg-white hover:text-secondary">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                {/* <div className="w-2 h-2 bg-primary rounded-full"></div> */}
                {/* <span>30-day launch guarantee</span> */}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>AI-powered country selection</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Global startup launch visualization with AI analytics and world map" 
              className="w-full h-auto animate-float"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;