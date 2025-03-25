
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Facebook, Instagram, Hammer, CalendarDays, CircleDollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request sent!",
      description: "We'll get back to you as soon as possible to discuss your project.",
    });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Request a Quote</h1>
          <p className="text-lg text-gray-600">
            Contact us to discuss your project and receive a free consultation. We'll help bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Your Name" className="w-full" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" className="w-full" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" className="w-full" required />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <Select>
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen Remodel</SelectItem>
                        <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                        <SelectItem value="addition">Home Addition</SelectItem>
                        <SelectItem value="new">New Construction</SelectItem>
                        <SelectItem value="outdoor">Deck / Outdoor Living</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Approximate Budget
                    </label>
                    <Select>
                      <SelectTrigger id="budget" className="w-full">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over100k">Over $100,000</SelectItem>
                        <SelectItem value="unsure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please tell us about your project, timeline, and any specific requirements." 
                      className="w-full min-h-[150px]" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-10 p-4 bg-stone-50 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3 text-accent">
                <CalendarDays className="h-5 w-5" />
                <span className="font-medium">Looking to schedule a consultation?</span>
              </div>
              <p className="mt-2 text-gray-600">
                Use the form above or call us directly to schedule a free on-site consultation. We'll discuss your project 
                needs, provide expert advice, and develop a detailed proposal.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-primary mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:555-123-4567" className="text-gray-600 hover:text-accent">555-123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@ogdenconstruction.com" className="text-gray-600 hover:text-accent">info@ogdenconstruction.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-gray-600">123 Main Street</p>
                      <p className="text-gray-600">Placerville, CA 95667</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Hammer className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">License</p>
                      <p className="text-gray-600">CA #12345678</p>
                      <p className="text-gray-600">Fully Bonded & Insured</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDollarSign className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Financing</p>
                      <p className="text-gray-600">Financing options available for qualified projects</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" className="text-accent hover:text-accent/80" aria-label="Facebook">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="https://instagram.com" className="text-accent hover:text-accent/80" aria-label="Instagram">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-primary mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>By appointment only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 bg-stone-50 p-6 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold text-primary mb-2">Service Area</h3>
              <p className="text-gray-600 mb-2">
                We proudly serve Placerville and surrounding communities in El Dorado County including:
              </p>
              <ul className="grid grid-cols-2 gap-1 text-gray-600">
                <li>Cameron Park</li>
                <li>El Dorado Hills</li>
                <li>Shingle Springs</li>
                <li>Diamond Springs</li>
                <li>Folsom</li>
                <li>Pollock Pines</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            {/* Google Maps iframe would go here */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              <p>Google Map Embed Would Appear Here</p>
              {/* In production, replace with actual Google Maps embed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
