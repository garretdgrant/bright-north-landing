
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Phone, Mail, Facebook, Instagram, Hammer } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact-section" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Let's Build Something Amazing</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="w-full" required />
              </div>
              <div>
                <Input type="email" placeholder="Email Address" className="w-full" required />
              </div>
              <div>
                <Input type="tel" placeholder="Phone Number" className="w-full" required />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="w-full min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Let's Build Something Amazing – Contact Us Today!
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:916-990-3689" className="hover:text-accent">916-990-3689</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:dustin@northworks.org" className="hover:text-accent">dustin@northworks.org</a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-accent" />
                <a href="https://facebook.com/northworksconstruction" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  North Works Construction
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-accent" />
                <a href="https://instagram.com/northworksconstruction" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  @northworksconstruction
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Hammer className="h-5 w-5 text-accent" />
                <span>Contractor License #: 1124581</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
