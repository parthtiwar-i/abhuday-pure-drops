import { CheckCircle2 } from "lucide-react";

const features = [
  "Advanced RO purification technology",
  "7-stage water filtration process",
  "Regular quality testing and monitoring",
  "Eco-friendly packaging solutions",
  "Timely delivery services",
  "Affordable pricing plans",
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              Excellence in every drop we deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
