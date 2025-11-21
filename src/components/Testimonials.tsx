import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homemaker",
    content: "Abhuday Pure Drops has been our family's trusted water supplier for over a year. The quality is exceptional and delivery is always on time.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "We use their water campers for our office, and the service has been outstanding. Pure, clean water that our entire team trusts.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Fitness Enthusiast",
    content: "As someone who cares about health, I appreciate the quality and purity of Abhuday's RO water. It's the only water I drink now.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily water needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-hover transition-all duration-300 border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
