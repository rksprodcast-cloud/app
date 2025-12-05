import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { projectData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={projectData.images[1]} 
                alt="JD NEXUS Building"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">Premium</p>
              <p className="text-sm">Residential Project</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-semibold">ABOUT THE PROJECT</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to {projectData.name}
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {projectData.about}
            </p>

            <div className="space-y-4 mb-8">
              {projectData.whyChoose.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Developed by</p>
                  <p className="text-2xl font-bold text-amber-700">{projectData.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Located at</p>
                  <p className="text-lg font-semibold text-gray-900">{projectData.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
