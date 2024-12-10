import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Email Address" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};