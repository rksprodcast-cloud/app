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
            <h3 className="text-2xl font-bold text-coral-400 mb-4">{projectData.company}</h3>
            <p className="text-gray-400 mb-4">
              Building dreams, creating landmarks. {projectData.name} is our commitment to modern, luxurious living in Bhubaneswar.
            </p>
            <a 
              href={`https://${projectData.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-coral-400 hover:text-coral-300 transition-colors inline-flex items-center mb-4"
            >
              www.{projectData.website}
            </a>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href={projectData.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-coral-500 hover:bg-coral-400 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={projectData.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-coral-500 hover:bg-coral-400 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-coral-400">Quick Links</h4>
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
            <h4 className="text-lg font-semibold mb-4 text-coral-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-coral-400 mt-1 flex-shrink-0" />
                <a href={`tel:${projectData.contact}`} className="text-gray-400 hover:text-white transition-colors">
                  {projectData.contact}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-coral-400 mt-1 flex-shrink-0" />
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
                <MapPin className="h-5 w-5 text-coral-400 mt-1 flex-shrink-0" />
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
              <span className="text-coral-400 font-semibold">{projectData.name}</span> - Modern & Luxurious Living
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
