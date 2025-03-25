
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, Building, CalendarDays, Users, Star } from "lucide-react";

const aboutStats = [
  { icon: Building, count: "250+", label: "Projects Completed" },
  { icon: CalendarDays, count: "15+", label: "Years Experience" },
  { icon: Users, count: "175+", label: "Happy Clients" },
  { icon: Star, count: "4.9", label: "Average Rating" },
];

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">About Ogden Construction</h1>
          <p className="text-lg text-gray-600">
            Building quality homes and relationships in El Dorado County since 2008.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Ogden Construction was founded in 2008 by Mike Ogden with a simple mission: to provide 
              high-quality construction services with integrity and exceptional customer service to the 
              Placerville community.
            </p>
            <p className="text-gray-600 mb-4">
              What began as a small, local operation has grown into one of El Dorado County's most trusted 
              construction companies. Through economic ups and downs, we've maintained our commitment to 
              quality workmanship and building strong relationships with our clients.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have completed hundreds of projects throughout the county, from kitchen 
              remodels to custom homes. Our team has grown, but our dedication to personalized service has 
              remained the same.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112c4792ab" 
              alt="Ogden Construction team" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {aboutStats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg bg-stone-50">
              <CardContent className="pt-6">
                <stat.icon className="h-10 w-10 mx-auto text-accent mb-3" />
                <h3 className="text-3xl font-bold text-primary">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Meet Our Founder</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4" 
                  alt="Mike Ogden" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-primary">Mike Ogden</h3>
              <p className="text-accent font-medium">Owner & General Contractor</p>
              <p className="mt-4 text-gray-600">
                With over 20 years of experience in construction, Mike founded Ogden Construction with 
                a vision to bring quality craftsmanship to every project in El Dorado County. His hands-on 
                approach and attention to detail have set the standard for our company.
              </p>
              <p className="mt-4 text-gray-600">
                Mike holds a B.S. in Construction Management from Sacramento State University and maintains 
                active involvement in every project, ensuring each client receives the personal attention 
                and high-quality results they deserve.
              </p>
              <p className="mt-4 text-gray-600">
                A Placerville resident for over 30 years, Mike is passionate about contributing to the 
                community through both his business and personal involvement with local nonprofits.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-stone-50 rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed contractor (CA-12345678) with comprehensive insurance and bonding.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">Local Expertise</h3>
                <p className="text-gray-600">Deep knowledge of local building codes, conditions, and requirements in El Dorado County.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">Quality Craftsmanship</h3>
                <p className="text-gray-600">Meticulous attention to detail and commitment to quality in every project we undertake.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">Community Involvement</h3>
                <p className="text-gray-600">Proud partners with Habitat for Humanity and supporters of local youth sports programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
