import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Home, Maximize2, CheckCircle2 } from 'lucide-react';
import { projectData } from '../data/mock';

const Apartments = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="apartments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <p className="text-sm font-semibold">CHOOSE YOUR SPACE</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apartment Configurations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Spacious and thoughtfully designed apartments to suit your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectData.apartments.map((apartment) => (
            <Card key={apartment.id} className="overflow-hidden border-2 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Home className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{apartment.type}</h3>
                      <p className="text-amber-100 text-sm">Apartment</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Maximize2 className="h-5 w-5" />
                  <p className="text-xl font-semibold">
                    {apartment.minSize} - {apartment.maxSize} sq.ft
                  </p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">{apartment.description}</p>
                
                <div className="space-y-3 mb-6">
                  <p className="font-semibold text-gray-900 mb-3">Features:</p>
                  {apartment.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-amber-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={scrollToContact}
                >
                  Get More Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;
