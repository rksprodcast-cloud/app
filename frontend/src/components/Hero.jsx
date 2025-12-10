import React from 'react';
import { Button } from './ui/button';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { projectData } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 118, 110, 0.5), rgba(15, 118, 110, 0.7)), url(${projectData.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="inline-block bg-coral-500/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <p className="text-sm font-semibold tracking-wide">BY {projectData.company.toUpperCase()}</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {projectData.name}
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 text-teal-100 font-light">
            {projectData.tagline}
          </p>
          
          <div className="flex items-center space-x-2 mb-8 text-lg">
            <MapPin className="h-5 w-5 text-coral-400" />
            <span>{projectData.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-coral-500 hover:bg-coral-600 text-white text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a href={`tel:${projectData.contact}`}>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-teal-700 text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                {projectData.contact}
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/30">
            <div>
              <p className="text-3xl font-bold text-coral-400">2 & 3 BHK</p>
              <p className="text-sm text-gray-200 mt-1">Apartment Options</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-coral-400">1625-1929</p>
              <p className="text-sm text-gray-200 mt-1">Sq. Ft. Area</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-coral-400">12+</p>
              <p className="text-sm text-gray-200 mt-1">Premium Amenities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
