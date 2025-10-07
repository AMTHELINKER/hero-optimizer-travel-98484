import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { url } from "inspector";

const expositions = [
  {
    title: "L’AFRIQUE : BERCEAU DE L’HUMANITE",
    description: "Il est maintenant admis que l’Afrique est le berceau de l’humanité. Pour en arriver à cette évidence, il a fallu des décennies d’efforts de scientifiques d’Afrique et d’ailleurs pour exhumer du paysage lunaire de la Rift valley et des profondeurs du désert tchadien les restes fossilisés de nos lointains ancêtres. « Toumaï » et « Dinknesh », qui sont aujourd’hui reconnus comme les précurseurs du genre humain. Ils sont les témoins de la marche inexorable du genre humain vers plus d’humanité, plus de technicité et surtout plus d’inventivité.",
    image: "",

  },
  {
    title: "CONTRIBUTIONS DE L’AFRIQUE A LA SCIENCE ET A LA TECHNOLOGIE",
    description: "Les Contributions de l'Afrique à la Science et à la Technologie s'inscrivent dans une longue perspective. L'expérience historique de l'Afrique a commencé avec l'histoire initiale – également appelée préhistoire – qui dure jusqu'à l'émergence de l'Égypte pharaonique. Elle est suivie par l'histoire ancienne, de l'Égypte pharaonique aux rencontres soutenues avec l'Europe et l'Asie. L'histoire moderne vient après la décolonisation, ouvrant la voie à l'histoire contemporaine. Une systématique aussi simple n'a pas besoin de la division Préhistoire/Histoire. Cette exposition se concentre sur les grandes inventions, allant de la technologie lithique à la métallurgie.",
    image: ""
  }
];

    const locations = [
  {
    title: "Paris, France",
    description: "The City of Light beckons with its iconic architecture and timeless romance.",
    image: "/lovable-uploads/e6764045-1a5d-4f3d-80b8-d6ba711e528d.png",
    flag: "🇫🇷",
    extendedInfo: "Experience the magic of Paris with its world-renowned cuisine, historic landmarks like the Eiffel Tower and Notre-Dame, and charming neighborhoods filled with cafés and boutiques. Perfect for romantic getaways, art enthusiasts, and food lovers.",
    url: "https://www.example.com/paris"
  },
  {
    title: "Santorini, Greece",
    description: "White-washed buildings cascade down volcanic cliffs into the crystal-clear Aegean Sea.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2073&auto=format&fit=crop",
    flag: "🇬🇷",
    extendedInfo: "Discover the stunning beauty of Santorini's caldera views, famous sunsets, and traditional Greek hospitality. Explore ancient ruins, visit local wineries, and relax on unique volcanic beaches.",
    url: "https://www.example.com/santorini"
  },
  {
    title: "Kyoto, Japan",
    description: "Ancient temples and traditional gardens preserve Japan's cultural heart.",
    image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2073&auto=format&fit=crop",
    flag: "🇯🇵",
    extendedInfo: "Immerse yourself in Japanese culture with visits to historic temples, traditional tea ceremonies, and peaceful Zen gardens. Experience the beauty of cherry blossoms in spring and vibrant autumn colors.",
    url: "https://www.example.com/kyoto"
  },
  {
    title: "Machu Picchu, Peru",
    description: "This ancient Incan citadel sits among the clouds in the Andes Mountains.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2073&auto=format&fit=crop",
    flag: "🇵🇪",
    extendedInfo: "Journey through time to explore this UNESCO World Heritage site. Trek the famous Inca Trail, discover ancient ruins, and experience the rich cultural heritage of the Andean people.",
    url: "https://www.example.com/machu-picchu"
  }
];

const LocationScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.children[1].children;
      const scrollPosition = window.scrollY - containerRef.current.offsetTop;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight / 2
        ) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/*Expositions Section*/}
      <div>
        <h2 className="text-4xl text-center font-bold text-white mb-8"> Voir nos expositions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expositions.map((exposition) => (
          <div key={exposition.title} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={exposition.image} alt={exposition.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{exposition.title}</h3>
              <p className="text-gray-600">{exposition.description}</p>
            </div>
            <div>
              <Button className="m-4 w-full" size="lg">Voir plus</Button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative min-h-screen bg-black" ref={containerRef}>
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20">
        <div className="sticky top-1/2 -translate-y-1/2">
          <div className="w-8 h-8 -ml-4 flex items-center justify-center text-2xl transition-all duration-300 transform">
            {locations[activeIndex].flag}
          </div>
        </div>
      </div>

      {/* Location Panels */}
      <div className="relative max-w-7xl mx-auto">
        {locations.map((location, index) => (
          <div
            key={location.title}
            className={`flex items-center min-h-screen ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full max-w-xl p-8">
              <div 
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "scale-110" : ""
                }`}
                style={{
                  transformOrigin: index % 2 === 0 ? "left center" : "right center",
                  transform: `${
                    activeIndex === index 
                      ? `scale(1.1) ${index % 2 === 0 ? "rotateY(0deg)" : "rotateY(0deg)"}` 
                      : `scale(1) ${index % 2 === 0 ? "rotateY(0deg)" : "rotateY(0deg)"}` 
                  }`,
                  perspective: "1000px"
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40" />
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {location.title}
                    </h3>
                    <p className="text-white/90">
                      {location.description}
                    </p>
                  </div>
                </div>

                {/* Expanded Content */}
                {activeIndex === index && (
                  <div 
                    className="absolute inset-0 bg-black/90 backdrop-blur-md p-8 animate-fade-in"
                    style={{
                      transformOrigin: index % 2 === 0 ? "left center" : "right center"
                    }}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {location.title} {location.flag}
                        </h3>
                        <p className="text-white/90 mb-6">
                          {location.extendedInfo}
                        </p>
                      </div>
                      <div className="space-y-4">
                        
                        <Button 
                          className="w-full"
                          size="lg"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LocationScroll;
