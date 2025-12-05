import React from 'react';
import { Card, CardContent } from './ui/card';
import * as LucideIcons from 'lucide-react';
import { projectData } from '../data/mock';

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <p className="text-sm font-semibold">WORLD-CLASS FACILITIES</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience modern living with exceptional amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectData.amenities.map((amenity, index) => {
            const IconComponent = LucideIcons[amenity.icon];
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-amber-400"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-amber-100 group-hover:bg-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{amenity.name}</h3>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-amber-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Living Redefined with Premium Facilities
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At JD NEXUS, every amenity is thoughtfully designed to enhance your lifestyle. 
              From security to recreation, we ensure that every aspect of modern living is covered, 
              making your home a perfect sanctuary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
