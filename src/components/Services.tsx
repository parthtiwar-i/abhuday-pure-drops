import { Card } from "@/components/ui/card";
import { Droplet, Truck, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "RO Water Bottles",
    description: "Premium quality RO purified water bottles for daily hydration needs. Pure, safe, and refreshing.",
  },
  {
    icon: Truck,
    title: "Water Campers",
    description: "Convenient water camper services delivering fresh RO water directly to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Advanced purification technology ensuring the highest standards of water purity and safety.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive water solutions tailored to meet your hydration needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-hover transition-all duration-300 border-border bg-card"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-water rounded-full">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
