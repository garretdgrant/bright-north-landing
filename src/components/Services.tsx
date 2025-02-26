
import { Building2, Home, Construction, Hammer, PaintBucket, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Building2,
    title: "Custom Homes & ADUs",
    description: "Expert craftsmanship in building your dream home or accessory dwelling unit, tailored to your unique vision.",
  },
  {
    icon: Construction,
    title: "Home Additions & Renovations",
    description: "Transform your space with professional home additions and comprehensive renovation services.",
  },
  {
    icon: Home,
    title: "Decks, Sheds & Outdoor Structures",
    description: "Create the perfect outdoor living space with custom-built decks, sheds, and structures.",
  },
  {
    icon: Hammer,
    title: "Concrete Work & Foundations",
    description: "Strong foundations and expert concrete work for lasting durability and quality.",
  },
  {
    icon: PaintBucket,
    title: "Siding Installation & Repair",
    description: "Protect and beautify your home with professional siding services and repairs.",
  },
  {
    icon: Wrench,
    title: "Interior Remodeling & Plumbing",
    description: "Complete interior renovations and plumbing solutions for your home improvement needs.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
