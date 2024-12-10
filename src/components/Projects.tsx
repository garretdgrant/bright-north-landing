import { Card, CardContent } from "./ui/card";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    title: "Modern Office Complex",
    location: "Downtown District",
  },
  {
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    title: "Luxury Apartments",
    location: "Riverside Heights",
  },
  {
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    title: "Commercial Center",
    location: "Business Park",
  },
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <CardContent className="p-0 relative">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};