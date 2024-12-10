import { Building2, HardHat, Construction } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "State-of-the-art commercial buildings and office spaces built to last.",
  },
  {
    icon: Construction,
    title: "Residential Projects",
    description: "Custom homes and residential developments with attention to detail.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Expert oversight ensuring projects are delivered on time and within budget.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
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