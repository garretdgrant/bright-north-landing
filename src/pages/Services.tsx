
import { Home, Hammer, Bath, LayoutList, Construction, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const servicesData = [
  {
    icon: LayoutList,
    title: "Kitchen Remodels",
    description: "Transform your kitchen into a functional and beautiful space with our custom kitchen remodeling services. We handle everything from cabinet installation to countertops and lighting.",
    priceRange: "$15,000 - $50,000+",
    faqs: [
      {
        question: "How long does a typical kitchen remodel take?",
        answer: "Most kitchen remodels take 6-12 weeks depending on the scope of work, material availability, and complexity of the design."
      },
      {
        question: "Do you handle permits for kitchen remodels?",
        answer: "Yes, we handle all necessary permits and inspections required for your kitchen remodel project."
      }
    ]
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description: "Update your bathrooms with modern fixtures, elegant finishes, and space-efficient designs. From simple updates to complete renovations, we'll create a bathroom you'll love.",
    priceRange: "$10,000 - $35,000+",
    faqs: [
      {
        question: "Can you make my small bathroom feel larger?",
        answer: "Absolutely! We use various design techniques like proper lighting, glass shower doors, and strategic layouts to maximize the feel of space in small bathrooms."
      },
      {
        question: "Do you install walk-in showers?",
        answer: "Yes, we specialize in creating accessible bathrooms including walk-in showers, grab bars, and other accessibility features."
      }
    ]
  },
  {
    icon: Home,
    title: "Home Additions",
    description: "Expand your living space with a custom home addition. Whether you need an extra bedroom, expanded kitchen, or a new family room, we'll design and build a seamless addition.",
    priceRange: "$50,000 - $200,000+",
    faqs: [
      {
        question: "Will a home addition match my existing home?",
        answer: "Yes, we carefully design additions to blend seamlessly with your existing home, matching architectural styles, finishes, and details."
      },
      {
        question: "Do I need special permits for an addition?",
        answer: "Yes, home additions require various permits. We handle the entire permitting process as part of our comprehensive service."
      }
    ]
  },
  {
    icon: Construction,
    title: "New Construction",
    description: "Building a new home from the ground up? Our experienced team will guide you through every step of the process, from initial design to final walkthrough.",
    priceRange: "$350,000 - $1,000,000+",
    faqs: [
      {
        question: "How long does it take to build a new home?",
        answer: "Typically, new home construction takes 6-12 months depending on the size, complexity, weather conditions, and material availability."
      },
      {
        question: "Can you build on my lot?",
        answer: "Yes, we can build on your existing lot. We'll evaluate the site for any challenges and develop the perfect home design for your property."
      }
    ]
  },
  {
    icon: ImageIcon,
    title: "Decks / Outdoor Living",
    description: "Enhance your outdoor living space with custom decks, patios, and outdoor kitchens. We use quality materials designed to withstand local weather conditions.",
    priceRange: "$8,000 - $50,000+",
    faqs: [
      {
        question: "What decking materials do you recommend?",
        answer: "We offer a variety of options including pressure-treated lumber, cedar, composite decking, and PVC. Each has different benefits in terms of maintenance, longevity, and appearance."
      },
      {
        question: "Can you add features like outdoor kitchens or fire pits?",
        answer: "Yes, we design and build complete outdoor living spaces including kitchens, fire pits, pergolas, and more."
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            From kitchens to complete homes, we provide quality construction services 
            throughout El Dorado County. Each project is handled with care and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm font-semibold text-primary">
                  Price Range: <span className="text-accent">{service.priceRange}</span>
                </p>
                
                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value={`faq-${index}`}>
                    <AccordionTrigger className="text-sm font-medium">
                      Common Questions
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {service.faqs.map((faq, faqIndex) => (
                          <div key={faqIndex}>
                            <h4 className="font-medium text-sm">{faq.question}</h4>
                            <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-stone-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Our Service Process
          </h2>
          <ol className="space-y-6">
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
              <div>
                <h3 className="font-semibold text-lg">Initial Consultation</h3>
                <p className="text-gray-600">We'll discuss your project goals, budget, and timeline to understand your vision.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
              <div>
                <h3 className="font-semibold text-lg">Design & Planning</h3>
                <p className="text-gray-600">Our team will create detailed plans and provide a comprehensive proposal.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
              <div>
                <h3 className="font-semibold text-lg">Project Execution</h3>
                <p className="text-gray-600">Our skilled craftsmen will bring your project to life with quality workmanship.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</span>
              <div>
                <h3 className="font-semibold text-lg">Final Walkthrough</h3>
                <p className="text-gray-600">We'll ensure everything meets our high standards and your complete satisfaction.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Services;
