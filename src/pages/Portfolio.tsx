
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const projects = [
  {
    title: "Modern Kitchen Remodel",
    location: "Placerville, CA",
    description: "Complete transformation of a 1980s kitchen into a modern, open-concept space with custom cabinetry, quartz countertops, and high-end appliances.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    highlights: ["Custom cabinetry", "Quartz countertops", "Island with seating", "New lighting throughout"],
    testimonial: "Ogden Construction transformed our outdated kitchen into a beautiful, functional space that has become the heart of our home. Their attention to detail was exceptional.",
    clientName: "The Johnson Family"
  },
  {
    title: "Complete Home Renovation",
    location: "El Dorado County",
    description: "Comprehensive renovation of a 2,400 sq ft home including kitchen, three bathrooms, flooring throughout, and a new open floor plan design.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    highlights: ["Open concept layout", "Hardwood flooring", "Custom lighting", "Energy efficient upgrades"],
    testimonial: "The team at Ogden worked with us every step of the way. They transformed our dated house into the dream home we always wanted.",
    clientName: "Mark & Sarah Davis"
  },
  {
    title: "Bathroom Transformation",
    location: "Placerville, CA",
    description: "Luxury master bathroom remodel featuring a walk-in shower with custom tile work, freestanding soaker tub, and dual vanity with quartz countertops.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    highlights: ["Walk-in shower", "Soaker tub", "Heated floors", "Custom tile work"],
    testimonial: "Our new bathroom feels like a spa retreat! The quality of workmanship is outstanding and the project was completed right on schedule.",
    clientName: "The Williams Family"
  },
  {
    title: "Outdoor Living Space",
    location: "Cameron Park, CA",
    description: "Creation of a complete outdoor entertainment area with a custom deck, outdoor kitchen, fire pit, and landscaping to maximize the beautiful foothill views.",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e",
    highlights: ["Composite decking", "Built-in BBQ", "Fire pit area", "Landscape lighting"],
    testimonial: "Ogden Construction helped us create an outdoor space that's perfect for entertaining. We practically live outside now during the summer months!",
    clientName: "Robert & Lisa Thompson"
  },
  {
    title: "Home Addition",
    location: "Shingle Springs, CA",
    description: "400 sq ft master suite addition with vaulted ceilings, large windows to capture the views, and a luxurious ensuite bathroom.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    highlights: ["Seamless integration", "Vaulted ceilings", "Large windows", "Walk-in closet"],
    testimonial: "The addition looks like it was always part of our home. The craftsmanship is exceptional and the project was completed on time and on budget.",
    clientName: "James & Carol Martinez"
  },
  {
    title: "Historic Home Restoration",
    location: "Placerville, CA",
    description: "Careful restoration of a 1920s craftsman home, preserving original details while updating systems and adding modern conveniences.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    highlights: ["Original woodwork restored", "Updated electrical", "Modern kitchen", "Period-appropriate details"],
    testimonial: "Ogden Construction respected the history of our home while making it comfortable for modern living. Their attention to historic details was impressive.",
    clientName: "The Anderson Family"
  }
];

const Portfolio = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600">
            Browse through our completed projects across El Dorado County. 
            Each project represents our commitment to quality craftsmanship and client satisfaction.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                <p className="text-accent font-medium mt-1">{project.location}</p>
                <p className="mt-4 text-gray-600">{project.description}</p>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-primary">Project Highlights:</h3>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Card className="mt-8 bg-stone-50 border-none">
                  <CardContent className="pt-6">
                    <div className="flex space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="italic text-gray-600">"{project.testimonial}"</p>
                    <p className="mt-3 font-medium text-primary">{project.clientName}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Contact us today to discuss your project ideas and schedule a free consultation.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
