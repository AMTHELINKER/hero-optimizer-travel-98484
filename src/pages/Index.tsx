
import { useEffect, useState } from "react";
import DestinationSearch from "@/components/search/DestinationSearch";
import TrustBadges from "@/components/hero/TrustBadges";
import ChromaticSmoke from "@/components/hero/ChromaticSmoke";
import LocationScroll from "@/components/sections/LocationScroll";
import Countdown30Min from "@/components/Timer/time";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-transparent to-gray-900 overflow-hidden">
        <ChromaticSmoke />
        
        {/* Content Container */}
        <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Badge */}
            <div className={`transform transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                L'histoire et la culture à portée de main
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white transform transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
            >
              Bienvenue au Musée des Civilisations Noires
            </h1>
            
            {/* Description */}
            <p 
              className={`text-lg sm:text-xl text-white/90 transform transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              Votre visite commence ici. Explorez, découvrez et connectez-vous avec l'histoire riche et vibrante des civilisations noires à travers nos expositions interactives et immersives.
            </p>
            {/* Countdown Timer */}
            <div
              className={`fixed top-4 left-4 bg-black/40 backdrop-blur-sm rounded-xl px-4 py-2 text-white font-semibold z-50 transform transition-all duration-700 delay-250 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Countdown30Min />
            </div>

            {/* Search Component */}
            <div className={`transform transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <DestinationSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Location Scroll Section */}
      <LocationScroll />
    </div>
  );
};

export default Index;
