
import { Link, useLocation } from "react-router-dom";
import { Home, Hammer, Image, Users, Phone } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-accent font-semibold" : "";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Hammer className="h-7 w-7 text-accent mr-2" />
              <Link to="/" className="text-xl font-bold text-primary">Ogden Construction Inc</Link>
            </div>
            <nav className="flex items-center space-x-8">
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
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Ogden Construction Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
