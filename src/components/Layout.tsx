
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Hammer, Image, Users, Phone, Menu, X, MapPin } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose 
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-accent font-semibold" : "";
  };

  const locations = [
    "Placerville",
    "El Dorado Hills", 
    "Cameron Park", 
    "Folsom", 
    "Tahoe"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between mb-4 md:mb-0">
              <div className="flex items-center">
                <Hammer className="h-7 w-7 text-accent mr-2" />
                <Link to="/" className="text-xl font-bold text-primary">Ogden Construction Inc</Link>
              </div>
              
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2 focus:outline-none">
                      <Menu className="h-6 w-6 text-primary" />
                      <span className="sr-only">Open menu</span>
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-white w-[250px] pt-12">
                    <nav className="flex flex-col space-y-6">
                      <SheetClose asChild>
                        <Link to="/" className={`flex items-center space-x-3 hover:text-accent ${isActive("/")}`}>
                          <Home className="h-5 w-5" />
                          <span className="text-lg">Home</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/services" className={`flex items-center space-x-3 hover:text-accent ${isActive("/services")}`}>
                          <Hammer className="h-5 w-5" />
                          <span className="text-lg">Services</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/portfolio" className={`flex items-center space-x-3 hover:text-accent ${isActive("/portfolio")}`}>
                          <Image className="h-5 w-5" />
                          <span className="text-lg">Portfolio</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/about" className={`flex items-center space-x-3 hover:text-accent ${isActive("/about")}`}>
                          <Users className="h-5 w-5" />
                          <span className="text-lg">About</span>
                        </Link>
                      </SheetClose>
                      {/* Mobile Locations Dropdown */}
                      <div className="relative">
                        <div className="flex items-center space-x-3 cursor-pointer">
                          <MapPin className="h-5 w-5" />
                          <span className="text-lg">Locations</span>
                        </div>
                        <div className="pl-8 mt-2 flex flex-col space-y-2">
                          {locations.map((location) => (
                            <Link 
                              key={location} 
                              to="#" 
                              className="text-primary/80 hover:text-accent transition-colors text-base py-1"
                            >
                              {location}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <SheetClose asChild>
                        <Link to="/contact" className={`flex items-center space-x-3 hover:text-accent ${isActive("/contact")}`}>
                          <Phone className="h-5 w-5" />
                          <span className="text-lg">Contact</span>
                        </Link>
                      </SheetClose>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`flex items-center space-x-1 hover:text-accent ${isActive("/")}`}>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/services" className={`flex items-center space-x-1 hover:text-accent ${isActive("/services")}`}>
                <Hammer className="h-4 w-4" />
                <span>Services</span>
              </Link>
              <Link to="/portfolio" className={`flex items-center space-x-1 hover:text-accent ${isActive("/portfolio")}`}>
                <Image className="h-4 w-4" />
                <span>Portfolio</span>
              </Link>
              <Link to="/about" className={`flex items-center space-x-1 hover:text-accent ${isActive("/about")}`}>
                <Users className="h-4 w-4" />
                <span>About</span>
              </Link>
              {/* Desktop Locations Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-accent focus:outline-none">
                  <MapPin className="h-4 w-4" />
                  <span>Locations</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#fafaf9] border border-gray-100 shadow-md rounded-md py-2 mt-1 min-w-[160px]">
                  {locations.map((location) => (
                    <DropdownMenuItem key={location} asChild>
                      <Link 
                        to="#" 
                        className="px-4 py-2 text-sm text-primary hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {location}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/contact" className={`flex items-center space-x-1 hover:text-accent ${isActive("/contact")}`}>
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-primary text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ogden Construction Inc</h3>
              <p className="mb-2">Serving Placerville, CA and surrounding communities</p>
              <p className="mb-2">License #: CA-12345678</p>
              <p>Fully insured and bonded</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">555-123-4567</p>
              <p className="mb-2">info@ogdenconstruction.com</p>
              <p>123 Main Street, Placerville, CA 95667</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="mb-2">Monday - Friday: 8AM - 5PM</p>
              <p className="mb-2">Saturday: By appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center flex flex-col items-center">
            <p className="mb-4">&copy; {new Date().getFullYear()} Ogden Construction Inc. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <img 
                src="/placeholder.svg" 
                alt="EDC Web Design Logo" 
                className="h-8 w-auto opacity-70 grayscale" 
              />
              <p>
                Designed by{' '}
                <a 
                  href="https://edcwebdesigns.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-accent transition-colors"
                >
                  EDC Web Design
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
