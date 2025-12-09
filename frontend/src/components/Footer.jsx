import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { projectData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">{projectData.company}</h3>
            <p className="text-gray-400 mb-4">
              Building dreams, creating landmarks. {projectData.name} is our commitment to modern, luxurious living in Bhubaneswar.
            </p>
            <a 
              href={`https://${projectData.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center"
            >
              www.{projectData.website}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('apartments')} className="text-gray-400 hover:text-white transition-colors">
                  Apartments
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('amenities')} className="text-gray-400 hover:text-white transition-colors">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <a href={`tel:${projectData.contact}`} className="text-gray-400 hover:text-white transition-colors">
                  {projectData.contact}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href={`mailto:${projectData.email}`} className="text-gray-400 hover:text-white transition-colors">
                    {projectData.email}
                  </a>
                  <a 
                    href={`https://${projectData.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    www.{projectData.website}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Office: {projectData.officeAddress}</p>
                  <p className="text-gray-400 text-sm">Project: {projectData.location}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {projectData.company}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="text-amber-400 font-semibold">{projectData.name}</span> - Modern & Luxurious Living
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
